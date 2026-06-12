param(
  [string]$Model = "llama3.2:1b"
)

$ErrorActionPreference = "Stop"
$ollama = "C:\Users\Windows 11\AppData\Local\Programs\Ollama\ollama.exe"
if (-not (Test-Path $ollama)) {
  throw "Ollama is not installed at $ollama"
}

Write-Host "Pulling $Model"
& $ollama pull $Model
