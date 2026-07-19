#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '../..');
const sourcePath = path.join(rootDir, 'index.html');
const translationsPath = path.join(rootDir, 'assets/js/main.js');
const outputPath = path.join(rootDir, 'en/index.html');

const source = fs.readFileSync(sourcePath, 'utf8');
const js = fs.readFileSync(translationsPath, 'utf8');
const translationsMatch = js.match(/const T = (\{[\s\S]*?\n\});\n\nlet currentLang/);

if (!translationsMatch) {
  throw new Error('No se pudo leer el mapa de traducciones de assets/js/main.js');
}

const translations = vm.runInNewContext(`(${translationsMatch[1]})`);
const english = translations.en;

let output = source.replace(
  /(<([a-z0-9]+)[^>]*data-i18n="([^"]+)"[^>]*>)[\s\S]*?(<\/\2>)/gi,
  (match, opening, tag, key, closing) => {
    if (english[key] === undefined) return match;
    return `${opening}${english[key]}${closing}`;
  }
);

output = output
  .replace('<html lang="es" data-lang-switch-url="en/" data-assets-prefix="">',
    '<html lang="en" data-lang-switch-url="../" data-assets-prefix="../">')
  .replace('href="en/" class="lang-switch"', 'href="../" class="lang-switch"')
  .replace('<title>Daniel Ulloa — Desarrollador Full Stack</title>',
    '<title>Daniel Ulloa — Full Stack Developer</title>')
  .replace(
    'content="Full Stack Developer con 5+ años en Angular, React, Ionic y Node.js para proyectos FinTech y Telco en Chile. Disponible para nuevas oportunidades."',
    'content="Full Stack Developer with 5+ years of experience in Angular, React, Ionic and Node.js across FinTech and telecommunications projects in Chile. Open to new opportunities."'
  )
  .replace('rel="canonical" href="https://ligatordaniel.github.io/PortafolioWebDani/"',
    'rel="canonical" href="https://ligatordaniel.github.io/PortafolioWebDani/en/"')
  .replace('type="text/markdown" href="assets/docs/cv_daniel_ulloa.md" title="CV de Daniel Ulloa en Markdown"',
    'type="text/markdown" href="../assets/docs/cv_daniel_ulloa_en.md" title="Daniel Ulloa resume in Markdown"')
  .replace('<meta property="og:locale" content="es_CL">', '<meta property="og:locale" content="en_US">')
  .replace('<meta property="og:locale:alternate" content="en_US">', '<meta property="og:locale:alternate" content="es_CL">')
  .replace('<meta property="og:site_name" content="Portafolio de Daniel Ulloa">',
    '<meta property="og:site_name" content="Daniel Ulloa Portfolio">')
  .replace('<meta property="og:title" content="Daniel Ulloa — Desarrollador Full Stack">',
    '<meta property="og:title" content="Daniel Ulloa — Full Stack Developer">')
  .replace(
    'content="Desarrollador Full Stack especializado en Angular, Ionic, React y Node.js, con experiencia en banca digital, telecomunicaciones y plataformas de streaming."',
    'content="Full Stack Developer specializing in Angular, Ionic, React and Node.js, with experience in digital banking, telecommunications and streaming platforms."'
  )
  .replace('<meta property="og:url" content="https://ligatordaniel.github.io/PortafolioWebDani/">',
    '<meta property="og:url" content="https://ligatordaniel.github.io/PortafolioWebDani/en/">')
  .replace('<meta property="og:image:alt" content="Daniel Ulloa, Desarrollador Full Stack">',
    '<meta property="og:image:alt" content="Daniel Ulloa, Full Stack Developer">')
  .replace('<meta name="twitter:title" content="Daniel Ulloa — Desarrollador Full Stack">',
    '<meta name="twitter:title" content="Daniel Ulloa — Full Stack Developer">')
  .replace(
    'content="Experiencia en Angular, Ionic, React, Node.js, infraestructura y streaming en tiempo real."',
    'content="Experience in Angular, Ionic, React, Node.js, infrastructure and real-time streaming."'
  )
  .replaceAll('href="assets/', 'href="../assets/')
  .replaceAll('src="assets/', 'src="../assets/')
  .replace('href="sitemap.xml"', 'href="../sitemap.xml"')
  .replaceAll('../assets/docs/cv_daniel_ulloa.pdf" download="CV_Daniel_Ulloa_ES.pdf"',
    '../assets/docs/cv_daniel_ulloa_en.pdf" download="CV_Daniel_Ulloa_EN.pdf"')
  .replace('href="../assets/docs/cv_daniel_ulloa.md"', 'href="../assets/docs/cv_daniel_ulloa_en.md"')
  .replace('href="llms.txt"', 'href="../llms.txt"')
  .replace('aria-label="Secciones"', 'aria-label="Sections"')
  .replace('aria-label="View English version"', 'aria-label="View Spanish version"')
  .replace('aria-label="Activar modo noche"', 'aria-label="Enable night mode"')
  .replaceAll('aria-label="Cerrar"', 'aria-label="Close"')
  .replace('aria-label="Contactar por correo"', 'aria-label="Contact by email"')
  .replace('aria-label="Presentación"', 'aria-label="Introduction"')
  .replaceAll(
    'https://wa.me/56977216059?text=%C2%A1Hola%20Daniel!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.',
    'https://wa.me/56977216059?text=Hi%20Daniel!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20an%20opportunity.'
  )
  .replace('<div class="proj-name">Kafra — Gestor de archivos</div>',
    '<div class="proj-name">Kafra — File Manager</div>')
  .replace('Daniel Ulloa · Santiago, Chile · <span id="footerYear">2025</span> ·',
    'Daniel Ulloa · Santiago, Chile · <span id="footerYear">2025</span> ·');

output = output.replace(
  /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
  (match, rawJson) => {
    const data = JSON.parse(rawJson);
    data['@id'] = 'https://ligatordaniel.github.io/PortafolioWebDani/en/#profile-page';
    data.url = 'https://ligatordaniel.github.io/PortafolioWebDani/en/';
    data.name = 'Daniel Ulloa — Full Stack Developer';
    data.description = 'Professional portfolio and digital resume of Daniel Ulloa.';
    data.inLanguage = 'en';
    data.mainEntity.jobTitle = 'Full Stack Developer';
    data.mainEntity.description = 'Full Stack Developer with professional experience in web and mobile applications for digital banking and telecommunications in Chile.';
    data.mainEntity.knowsLanguage = ['Spanish', 'English'];
    data.mainEntity.knowsAbout = data.mainEntity.knowsAbout.map(item =>
      item === 'Streaming de audio y video' ? 'Audio and video streaming' : item
    );
    const descriptions = {
      StreamHub: 'Multi-tenant audio and video streaming platform built with Bun, Elysia, React, MediaMTX and Nginx.',
      Kafra: 'Private file manager built with Bun, Elysia, React, PostgreSQL and Docker.',
      Ocarina: 'FastAPI backend for asynchronous media processing with Kafka, yt-dlp and ffmpeg.',
      Shaula: 'Authentication gateway and internal proxy built with Java and Spring Boot.',
      Bee: 'Go API for centralizing and retrieving job applications.'
    };
    data.hasPart.forEach(project => { project.description = descriptions[project.name]; });
    return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n  </script>`;
  }
);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output);
console.log(`Generated ${path.relative(rootDir, outputPath)}`);
