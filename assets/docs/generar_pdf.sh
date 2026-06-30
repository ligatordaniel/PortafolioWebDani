#!/bin/bash
# Genera PDFs de CV en español e inglés vía HTTP para asegurar carga correcta de fuentes
DIR="$(cd "$(dirname "$0")" && pwd)"
PORT=8767

python3 -m http.server $PORT --directory "$DIR" &
SERVER_PID=$!
sleep 2

echo "Generando cv_daniel_ulloa.pdf (ES)..."
google-chrome-stable --headless=new --disable-gpu --no-sandbox \
  --disable-dev-shm-usage \
  --print-to-pdf="$DIR/cv_daniel_ulloa.pdf" \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  "http://localhost:$PORT/cv_daniel_ulloa.html"

echo "Generando cv_daniel_ulloa_en.pdf (EN)..."
google-chrome-stable --headless=new --disable-gpu --no-sandbox \
  --disable-dev-shm-usage \
  --print-to-pdf="$DIR/cv_daniel_ulloa_en.pdf" \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  "http://localhost:$PORT/cv_daniel_ulloa_en.html"

kill $SERVER_PID 2>/dev/null
echo "Listo: cv_daniel_ulloa.pdf y cv_daniel_ulloa_en.pdf"
