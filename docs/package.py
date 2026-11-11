"""Rebuild the local submission ZIP: python3 docs/package.py"""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent.parent
output = root / 'submission' / 'TaltosGains-local.zip'
output.parent.mkdir(exist_ok=True)
excluded = {'.git', '.idea', 'submission', '__pycache__'}
with ZipFile(output, 'w', ZIP_DEFLATED) as archive:
    for file in sorted(root.rglob('*')):
        relative = file.relative_to(root)
        if file.is_file() and not excluded.intersection(relative.parts) and file.name != '.DS_Store':
            archive.write(file, relative)
with ZipFile(output) as archive:
    assert archive.testzip() is None, 'Archive integrity check failed'
    required = {'index.html', 'reset.html', 'movement.html', 'PROJECT_URL.txt', 'docs/mobile-wireframe.svg'}
    assert required.issubset(archive.namelist()), 'Required submission files missing'
    print(f'{len(archive.namelist())} files; {output.stat().st_size:,} bytes; ZIP integrity OK')
print(output)
