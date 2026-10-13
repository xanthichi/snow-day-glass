[CmdletBinding()]
param(
    [string]$OutputPath,
    [string]$NativeValidator
)

$ErrorActionPreference = 'Stop'
$repositoryRoot = Split-Path -Parent $PSScriptRoot
$packageRoot = Join-Path $repositoryRoot 'dreamskin-package'
$manifestPath = Join-Path $packageRoot 'manifest.json'
$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
if (-not $OutputPath) {
    $OutputPath = Join-Path (Split-Path -Parent $repositoryRoot) "snow-day-glass-theme-v$($manifest.version).zip"
}
$OutputPath = [System.IO.Path]::GetFullPath($OutputPath)
$utf8 = [System.Text.UTF8Encoding]::new($false)
$fileTypes = [ordered]@{
    'theme.json' = 'application/json'
    'theme.css' = 'text/css'
    'background.png' = 'image/png'
    'LICENSE.txt' = 'text/plain'
}

# Hash the bytes that enter the ZIP; Git line-ending conversion cannot stale the manifest.
$manifest.files = @(
    foreach ($entry in $fileTypes.GetEnumerator()) {
        $filePath = Join-Path $packageRoot $entry.Key
        $fileInfo = Get-Item -LiteralPath $filePath
        [ordered]@{
            path = $entry.Key
            mediaType = $entry.Value
            bytes = $fileInfo.Length
            sha256 = (Get-FileHash -LiteralPath $filePath -Algorithm SHA256).Hash.ToLowerInvariant()
        }
    }
)
$json = ($manifest | ConvertTo-Json -Depth 8) + "`n"
[System.IO.File]::WriteAllText($manifestPath, $json, $utf8)

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$outputDirectory = Split-Path -Parent $OutputPath
[System.IO.Directory]::CreateDirectory($outputDirectory) | Out-Null
$stream = [System.IO.File]::Open($OutputPath, [System.IO.FileMode]::Create)
$archive = [System.IO.Compression.ZipArchive]::new(
    $stream, [System.IO.Compression.ZipArchiveMode]::Create
)
try {
    foreach ($fileName in (@('manifest.json') + @($fileTypes.Keys))) {
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
            $archive,
            (Join-Path $packageRoot $fileName),
            $fileName,
            [System.IO.Compression.CompressionLevel]::Optimal
        ) | Out-Null
    }
}
finally {
    $archive.Dispose()
    $stream.Dispose()
}

if ($NativeValidator) {
    & $NativeValidator package $OutputPath windows
    if ($LASTEXITCODE -ne 0) { throw 'Native DreamSkin package validation failed.' }
}
$file = Get-Item -LiteralPath $OutputPath
[pscustomobject]@{
    path = $file.FullName
    version = $manifest.version
    bytes = $file.Length
    sha256 = (Get-FileHash -LiteralPath $OutputPath -Algorithm SHA256).Hash.ToLowerInvariant()
}
