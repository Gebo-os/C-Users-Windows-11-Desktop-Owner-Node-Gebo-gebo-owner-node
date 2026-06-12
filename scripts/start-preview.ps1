$ErrorActionPreference = "Stop"

$ownerNode = Join-Path $PSScriptRoot "start-owner-node.ps1"

powershell -ExecutionPolicy Bypass -File $ownerNode
