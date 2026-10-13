[CmdletBinding()]
param(
    [switch]$Disable,
    [string]$UserScriptsDirectory = (Join-Path $env:APPDATA 'Codex++\user_scripts')
)

$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot 'snow-day-liquid-glass.js'
$scriptName = 'snow-day-liquid-glass.js'
$targetDirectory = [System.IO.Path]::GetFullPath($UserScriptsDirectory)
$target = Join-Path $targetDirectory $scriptName
$disabledPath = Join-Path $targetDirectory ($scriptName + '.disabled')

if ($Disable) {
    if (Test-Path -LiteralPath $target) {
        $content = Get-Content -LiteralPath $target -Raw
        if (-not $content.StartsWith('// Snow Day Glass ')) {
            throw 'The destination is not a Snow Day Glass extension. No changes were made.'
        }
        if (Test-Path -LiteralPath $disabledPath) {
            $disabledPath += '.' + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
        }
        Move-Item -LiteralPath $target -Destination $disabledPath
    }
    Write-Output 'Glass extension disabled. Use Hot Reload Extensions in Codex++.'
    return
}

if (-not (Test-Path -LiteralPath $source -PathType Leaf)) {
    throw 'The generated snow-day-liquid-glass.js is missing.'
}
[System.IO.Directory]::CreateDirectory($targetDirectory) | Out-Null
if (Test-Path -LiteralPath $target) {
    $content = Get-Content -LiteralPath $target -Raw
    if (-not $content.StartsWith('// Snow Day Glass ')) {
        throw 'A different script uses this filename. No files were overwritten.'
    }
    $backup = $target + '.backup-' + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
    Copy-Item -LiteralPath $target -Destination $backup
}
Copy-Item -LiteralPath $source -Destination $target -Force
Write-Output "Installed $target"
Write-Output 'Import the v0.6.0 DreamSkin ZIP, then use Hot Reload Extensions in Codex++.'
