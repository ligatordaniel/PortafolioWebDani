# Portafolio de Daniel Ulloa

Portafolio profesional bilingüe y currículum digital de Daniel Ulloa, Desarrollador Full Stack Senior con experiencia en aplicaciones web y móviles, banca digital, telecomunicaciones e integración de IA.

## Sitio publicado

- Principal: [ligatordaniel.github.io](https://ligatordaniel.github.io/)
- URL anterior (se mantiene activa): [ligatordaniel.github.io/PortafolioWebDani](https://ligatordaniel.github.io/PortafolioWebDani/)

## Incluye

- Versión en español e inglés, con contenido rastreable para buscadores.
- CV descargable en PDF y versiones Markdown compatibles con sistemas ATS.
- Perfil para sistemas de IA mediante `llms.txt`.
- Secciones de experiencia, proyectos, tecnologías y contacto.
- Diseño responsivo con modos claro y oscuro.

## Desarrollo local

No requiere instalar dependencias. Desde la raíz del repositorio:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Mantenimiento

Validar la sintaxis de JavaScript:

```bash
node --check assets/js/main.js
```

Regenerar la versión en inglés después de cambiar contenido o traducciones:

```bash
node assets/docs/generar_pagina_en.mjs
```

Regenerar los CV en PDF después de editar sus fuentes HTML:

```bash
bash assets/docs/generar_pdf.sh
```

## Estructura

```text
index.html           Página principal en español
en/index.html        Página en inglés generada
assets/css/          Estilos
assets/js/           Interacciones y traducciones
assets/docs/         CV, PDF y archivos de descubrimiento
llms.txt             Resumen para sistemas de IA
```
