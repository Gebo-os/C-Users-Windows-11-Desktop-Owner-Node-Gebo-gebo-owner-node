$ErrorActionPreference = "Stop"

$ollama = Get-Command ollama -ErrorAction SilentlyContinue
$cloudflared = Get-Command cloudflared -ErrorAction SilentlyContinue

Write-Host "Ollama: " -NoNewline
if ($ollama) {
  Write-Host $ollama.Source
} else {
  Write-Host "missing"
}

Write-Host "cloudflared: " -NoNewline
if ($cloudflared) {
  Write-Host $cloudflared.Source
} else {
  Write-Host "missing"
}

Write-Host ""
Write-Host "Local targets:"
Write-Host "  Open WebUI / Owner Node -> http://localhost:3000"
Write-Host "  Ollama -> http://localhost:11434"
