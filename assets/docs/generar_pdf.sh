#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
google-chrome --headless=new --disable-gpu \
  --print-to-pdf="$DIR/cv_daniel_ulloa.pdf" \
  --print-to-pdf-no-header \
  "file://$DIR/cv_daniel_ulloa.html"
echo "PDF generado: $DIR/cv_daniel_ulloa.pdf"
