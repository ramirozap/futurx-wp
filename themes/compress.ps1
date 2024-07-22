$sourceFolder = "D:\projects\futurx-wp\themes\futurx\"
$zipFile = "D:\projects\futurx-wp\themes\futurx.zip"

# Obtener todos los archivos excluyendo los node_modules
$files = Get-ChildItem -Path $sourceFolder -Recurse -File | Where-Object { $_.FullName -notmatch '\\node_modules\\' }

# Eliminar el archivo zip si existe
if (Test-Path $zipFile) { Remove-Item $zipFile }

# Crear el archivo zip manteniendo la estructura de carpetas
$files | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceFolder.Length + 1)
    Compress-Archive -Path $_.FullName -Update -DestinationPath $zipFile -DestinationPath (Join-Path -Path $sourceFolder -ChildPath $relativePath)
}