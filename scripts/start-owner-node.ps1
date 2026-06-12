$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$server = Join-Path $root "06-Code\owner_node_server.py"
$python = Get-Command python -ErrorAction SilentlyContinue

if (-not $python) {
  throw "Python is required to run the Owner Node chat server."
}

if (-not (Test-Path $server)) {
  throw "Owner Node server missing: $server"
}

Start-Process -FilePath $python.Source -ArgumentList @($server) -WindowStyle Hidden
Write-Host "Gebo Owner Node chat starting on http://localhost:3000"
