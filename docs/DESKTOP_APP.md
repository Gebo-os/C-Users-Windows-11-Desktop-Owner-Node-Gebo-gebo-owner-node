# Desktop App

The fastest Windows desktop path is Electron wrapping the local Next.js app.

## Install Desktop Dependencies

```bash
npm install --save-dev electron electron-builder concurrently wait-on
```

## Package Scripts To Add

Add these scripts to `package.json`:

```json
{
  "desktop": "electron desktop/main.js",
  "desktop:dev": "concurrently \"npm run dev\" \"wait-on http://localhost:3000 && electron desktop/main.js\"",
  "desktop:build": "next build && electron-builder"
}
```

## Run Desktop Dev

```bash
npm run desktop
```

This launches a desktop window pointed at `http://localhost:3000`.

## Notes

Ollama must be running separately:

```bash
ollama serve
ollama pull llama3.2:3b
```

The app uses:

```text
http://localhost:11434/api/chat
```

## Future Upgrade

Later, replace the dev server wrapper with a production Next standalone server or Tauri for a smaller app footprint.
