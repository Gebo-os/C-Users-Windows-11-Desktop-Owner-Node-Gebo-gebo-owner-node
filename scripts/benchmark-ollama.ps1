param(
  [string[]]$Models = @("llama3.2:1b", "llama3.2:3b"),
  [string[]]$Prompts = @(
    "Summarize the Gebo Owner Node in one sentence.",
    "Give the next best action to improve a local AI control system.",
    "Turn a messy owner note into a concise execution plan."
  )
)

$ErrorActionPreference = "Stop"
$ollama = "C:\Users\Windows 11\AppData\Local\Programs\Ollama\ollama.exe"
if (-not (Test-Path $ollama)) {
  throw "Ollama is not installed at $ollama"
}

$results = @()
foreach ($model in $Models) {
  try {
    $tags = Invoke-RestMethod -Uri "http://127.0.0.1:11434/api/tags" -Method Get
    $installed = $tags.models.name -contains $model
    if (-not $installed) {
      $results += [pscustomobject]@{
        model = $model
        status = "missing"
        average_ms = $null
        notes = "model not installed"
      }
      continue
    }

    $times = @()
    foreach ($prompt in $Prompts) {
      $body = @{
        model = $model
        prompt = $prompt
        stream = $false
      } | ConvertTo-Json -Depth 4

      $sw = [System.Diagnostics.Stopwatch]::StartNew()
      $response = Invoke-RestMethod -Uri "http://127.0.0.1:11434/api/generate" -Method Post -ContentType "application/json" -Body $body
      $sw.Stop()
      $times += $sw.ElapsedMilliseconds
      $null = $response.response
    }

    $results += [pscustomobject]@{
      model = $model
      status = "ok"
      average_ms = [math]::Round(($times | Measure-Object -Average).Average, 2)
      notes = "completed $($Prompts.Count) prompts"
    }
  } catch {
    $results += [pscustomobject]@{
      model = $model
      status = "error"
      average_ms = $null
      notes = $_.Exception.Message
    }
  }
}

$outDir = Join-Path $PSScriptRoot "..\logs"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$outFile = Join-Path $outDir "ollama-benchmark-$stamp.json"
$results | ConvertTo-Json -Depth 6 | Set-Content -Path $outFile -Encoding UTF8
Write-Host $outFile
