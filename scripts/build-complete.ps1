[CmdletBinding()]
param([string]$NativeValidator)

$ErrorActionPreference = 'Stop'
$repositoryRoot = Split-Path -Parent $PSScriptRoot
$manifest = Get-Content -LiteralPath (Join-Path $repositoryRoot 'dreamskin-package\manifest.json') -Raw | ConvertFrom-Json
$version = $manifest.version
$dist = Join-Path $repositoryRoot 'dist'
[System.IO.Directory]::CreateDirectory($dist) | Out-Null
$themeName = "snow-day-glass-theme-v$version.zip"
$themeZip = Join-Path $dist $themeName
& (Join-Path $PSScriptRoot 'build-dreamskin.ps1') -OutputPath $themeZip -NativeValidator $NativeValidator
& node (Join-Path $PSScriptRoot 'build-liquid-extension.mjs')
if ($LASTEXITCODE -ne 0) { throw 'Extension build failed.' }

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$entries = [ordered]@{
    $themeName = $themeZip
    'extensions/snow-day-liquid-glass.js' = (Join-Path $repositoryRoot 'extensions\snow-day-liquid-glass.js')
    'extensions/Install-Glass.ps1' = (Join-Path $repositoryRoot 'extensions\Install-Glass.ps1')
    'extensions/README.md' = (Join-Path $repositoryRoot 'extensions\README.md')
    'README.md' = (Join-Path $repositoryRoot 'docs\INSTALL-v0.6.0.md')
    'LICENSE' = (Join-Path $repositoryRoot 'LICENSE')
}
$output = Join-Path $dist "snow-day-glass-complete-v$version.zip"
$stream = [System.IO.File]::Open($output, [System.IO.FileMode]::Create)
$archive = [System.IO.Compression.ZipArchive]::new($stream, [System.IO.Compression.ZipArchiveMode]::Create)
try {
    foreach ($entry in $entries.GetEnumerator()) {
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
            $archive, $entry.Value, $entry.Key,
            [System.IO.Compression.CompressionLevel]::Optimal
        ) | Out-Null
    }
}
finally {
    $archive.Dispose()
    $stream.Dispose()
}
Get-Item -LiteralPath $output | Select-Object FullName,Length
