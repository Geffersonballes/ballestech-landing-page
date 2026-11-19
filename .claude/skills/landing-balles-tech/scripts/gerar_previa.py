"""Gera uma prévia em HTML único (imagens embutidas) para o dono abrir no celular/app.

Uso: python3 gerar_previa.py <pasta-do-site OU arquivo.html> <saida.html>
  - Pasta: usa <pasta>/index.html.
  - Arquivo: usa o arquivo; as imagens `img/...` são buscadas na pasta dele.
"""
import base64, pathlib, re, sys

entrada, saida = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
html_path = entrada / "index.html" if entrada.is_dir() else entrada
root = html_path.parent
html = html_path.read_text(encoding="utf-8")
MIME = {"webp": "image/webp", "png": "image/png", "jpg": "image/jpeg", "jpeg": "image/jpeg", "svg": "image/svg+xml"}

def inline(m):
    p = root / m.group(2)
    if not p.exists():
        print("aviso: imagem não encontrada:", p, file=sys.stderr)
        return m.group(0)
    return m.group(1) + "data:%s;base64,%s" % (MIME[p.suffix[1:].lower()], base64.b64encode(p.read_bytes()).decode())

html = re.sub(r'((?:src|href)=")(img/[^"]+)', inline, html)
saida.write_text(html, encoding="utf-8")
print(saida, round(saida.stat().st_size / 1024), "KB")
