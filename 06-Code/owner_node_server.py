from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
import json
import urllib.error
import urllib.request


ROOT = Path(__file__).resolve().parents[1]
WEB_ROOT = ROOT / "tunnel-preview"
CORE_PROMPT = ROOT / "00-Identity" / "GEBO_CORE_SYSTEM_PROMPT.md"
STL_PROMPT = ROOT / "00-Identity" / "GEBO_STL_OUTPUT_LAYER.md"
OLLAMA_URL = "http://127.0.0.1:11434/api/chat"
DEFAULT_MODEL = "llama3.2:1b"


def load_prompt_stack():
    parts = []
    for path in (CORE_PROMPT, STL_PROMPT):
        if path.exists():
            parts.append(path.read_text(encoding="utf-8"))
    return "\n\n---\n\n".join(parts)


def ask_ollama(message, model=DEFAULT_MODEL):
    prompt_stack = load_prompt_stack()
    payload = {
        "model": model,
        "stream": False,
        "messages": [
            {
                "role": "system",
                "content": prompt_stack,
            },
            {
                "role": "user",
                "content": message,
            },
        ],
        "options": {
            "temperature": 0.35,
            "num_ctx": 4096
        }
    }
    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        OLLAMA_URL,
        data=body,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=180) as response:
        data = json.loads(response.read().decode("utf-8"))
    message_data = data.get("message", {})
    return message_data.get("content", "").strip()


class OwnerNodeHandler(BaseHTTPRequestHandler):
    def _send_json(self, status, payload):
        data = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def _send_file(self, path):
        if not path.exists() or not path.is_file():
            self.send_error(404)
            return
        content = path.read_bytes()
        content_type = "text/html; charset=utf-8"
        if path.suffix == ".css":
            content_type = "text/css; charset=utf-8"
        if path.suffix == ".js":
            content_type = "application/javascript; charset=utf-8"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/health":
            self._send_json(200, {"status": "ok", "model": DEFAULT_MODEL})
            return
        target = WEB_ROOT / "index.html" if parsed.path == "/" else WEB_ROOT / parsed.path.lstrip("/")
        self._send_file(target)

    def do_POST(self):
        if urlparse(self.path).path != "/api/chat":
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            message = str(payload.get("message", "")).strip()
            model = str(payload.get("model", DEFAULT_MODEL)).strip() or DEFAULT_MODEL
            if not message:
                self._send_json(400, {"error": "message is required"})
                return
            answer = ask_ollama(message, model)
            self._send_json(200, {"answer": answer, "model": model})
        except urllib.error.URLError as exc:
            self._send_json(503, {"error": f"Ollama unavailable: {exc}"})
        except Exception as exc:
            self._send_json(500, {"error": str(exc)})

    def log_message(self, format, *args):
        return


def main():
    server = ThreadingHTTPServer(("127.0.0.1", 3000), OwnerNodeHandler)
    print("Gebo Owner Node chat running on http://127.0.0.1:3000")
    server.serve_forever()


if __name__ == "__main__":
    main()
