param(
  [string]$Url = "http://localhost:3000"
)

$ErrorActionPreference = "Stop"

$cloudflared = Get-Command cloudflared -ErrorAction SilentlyContinue
if (-not $cloudflared) {
  Write-Host "cloudflared is not installed."
  Write-Host "Install it with: winget install --id Cloudflare.cloudflared -e"
  exit 1
}

Write-Host "Starting Cloudflare quick tunnel to $Url"
& $cloudflared.Source tunnel --url $Url
