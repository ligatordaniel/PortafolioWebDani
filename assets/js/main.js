const io = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
  { threshold: 0.07 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── day/night ─────────────────────────────────────── */
function updateSlider(dark) {
  const slider = document.getElementById('modeSlider');
  const optDay  = document.getElementById('optDay');
  const optNight = document.getElementById('optNight');
  const sw = document.getElementById('modeSwitch');
  if (dark) {
    sw.style.setProperty('--slider-offset', optDay.offsetWidth + 'px');
    slider.style.width = optNight.offsetWidth + 'px';
  } else {
    sw.style.setProperty('--slider-offset', '0px');
    slider.style.width = optDay.offsetWidth + 'px';
  }
}
function toggleDark() {
  const dark = document.body.classList.toggle('dark');
  updateSlider(dark);
}

/* ── language ──────────────────────────────────────── */
const T = {
  es: {
    'nav-home': 'Inicio', 'nav-about': 'Sobre mí', 'nav-exp': 'Experiencia',
    'nav-projects': 'Proyectos', 'nav-contact': 'Contacto',
    'mode-day': '☀️ Día', 'mode-night': '🌙 Noche',
    'hero-available': 'Disponible para nuevas oportunidades',
    'hero-title': 'Desarrollador Full Stack',
    'btn-whatsapp': 'Escribir por WhatsApp', 'btn-cv': 'Descargar CV',
    'stat-years-val': '5+ años', 'stat-years-sub': 'de experiencia profesional',
    'about-eyebrow': 'Sobre mí',
    'about-title': 'Full Stack especializado<br>en mobile y banca digital',
    'about-p1': 'Llevo más de cinco años construyendo aplicaciones web y mobile de alto tráfico para el sector financiero y de telecomunicaciones en Chile. Mi trabajo en BMSoluciones incluye la app Tarjeta Presto LIDER de Banco BCI — un producto masivo con usuarios activos a escala nacional. En Haibu Solutions desarrollé módulos críticos para VTR Telecomunicaciones y AFP Habitat.',
    'about-p2': 'Me desenvuelvo en todo el ciclo: desde el diseño de arquitectura hasta el despliegue en producción. Administro mi propia infraestructura con Docker, Nginx y CI/CD automatizado. Me integro rápido a equipos Scrum y entrego con autonomía.',
    'chip-scrum': 'Scrum certificado (SFPC)', 'chip-english': 'Inglés intermedio',
    'chip-available': 'Disponible de inmediato', 'chip-hybrid': 'Híbrido o remoto',
    'exp-eyebrow': 'Trayectoria', 'exp-title': 'Experiencia profesional',
    'current-pill': 'Actual',
    'tl-period-bm': 'Mar. 2022 — Hoy', 'tl-period-ind': 'Mar. 2019 — Hoy',
    'tl-period-enlace': 'Dic. 2017 — Feb. 2019',
    'tl-company-ind': 'Independiente',
    'exp-bm-role': 'Desarrollador de Software Front-End',
    'exp-bm-desc': 'Desarrollo y mantenimiento de la app mobile-first <strong>Tarjeta Presto LIDER</strong>, producto bancario de Banco BCI con base masiva de usuarios. Integré las pasarelas de pago Khipu y Servipag, el flujo de recarga de tarjeta Bip! y notificaciones push. Implementé Strapi como CMS headless para gestión de contenido.',
    'exp-haibu-role': 'Ingeniero de Desarrollo de Software',
    'exp-haibu-desc': 'Full Stack para <strong>VTR Telecomunicaciones</strong> y <strong>AFP Habitat</strong> con Ionic/Angular y Node.js. Entregué además la app mobile interna <strong>FrogApp</strong> con React Native, desde diseño hasta producción.',
    'exp-ind-role': 'Desarrollador Independiente',
    'exp-ind-desc': 'Apps web con Ionic, servidores de streaming de video y audio en tiempo real, infraestructura VPS con Nginx y Docker, pipelines CI/CD con GitHub Actions. Ciclo completo de cada proyecto.',
    'exp-enlace-role': 'Desarrollador &amp; Soporte de Integración Digital',
    'exp-enlace-desc': 'Soluciones digitales para pantallas táctiles y señalética corporativa. Gestión remota de redes de pantallas publicitarias y canales corporativos.',
    'skills-eyebrow': 'Tecnologías', 'skills-title': 'Stack tecnológico',
    'skill-ai': 'IA &amp; Método',
    'proj-eyebrow': 'Trabajo propio', 'proj-title': 'Proyectos personales',
    'proj1-num': '01 — En producción', 'proj2-num': '02 — Proyecto personal',
    'proj3-num': '03 — Proyecto personal', 'proj4-num': '04 — En producción',
    'proj1-desc': 'Pokédex interactiva conectada a la PokéAPI. Busca cualquier Pokémon por nombre o número de ID y obtén sus estadísticas, tipos, habilidades y sprite oficial.',
    'proj2-desc': 'Clon funcional de Google Drive con subida y descarga de archivos hasta 15 GB, organización en carpetas, autenticación de usuarios y almacenamiento en volumen Docker local. Interfaz fiel al diseño original.',
    'proj3-desc': 'Herramienta web para convertir videos de YouTube a MP3 o MP4. Backend en Python FastAPI con cola de procesamiento asíncrono, yt-dlp y ffmpeg en el worker.',
    'proj4-name': 'Dungun — Servidor de streaming',
    'proj4-desc': 'Plataforma de streaming de audio en tiempo real con salas privadas y traductor asignado por código. Demo: <em>demostracion</em>.',
    'proj5-num': '05 — Proyecto personal', 'proj6-num': '06 — Proyecto personal',
    'proj7-num': '07 — Proyecto personal',
    'proj5-desc': 'Asistente personal inteligente para la gestión integral de búsqueda laboral. Centraliza postulaciones, da seguimiento a procesos de selección y organiza contactos reclutadores desde un panel privado. Backend en Go con despliegue containerizado y runtime de alta concurrencia.',
    'proj6-desc': 'Frontend React que centraliza múltiples backends en una sola interfaz. Conexión a Ocarina (descarga de YouTube vía FastAPI), Kafra (gestor de archivos) y autenticación unificada con Shaula.',
    'proj7-desc': 'Gateway de autenticación y proxy interno para la suite Jarvis. Valida sesiones con login/logout seguro y enruta tráfico hacia Kafra y Ocarina (Python) sin exponer servicios internos.',
    'proj8-num': '08 — Proyecto personal',
    'proj8-desc': 'Plataforma de streaming de audio y video con arquitectura multi-tenant por empresa. Backend Bun + Elysia, frontend React + Tailwind, streaming RTMP con MediaMTX y Nginx. Super admin gestiona compañías, usuarios y streamings.',
    'proj-cta-link': 'Ver proyecto →', 'proj-cta-repo': 'Ver repo en GitHub →', 'proj-cta-soon': 'GitHub próximamente',
    'contact-heading': '¿Buscas un desarrollador Full Stack?',
    'contact-sub': 'Si buscas un desarrollador con experiencia y compromiso, hablemos.',
    'btn-dl': 'Descargar CV completo',
    'cv-modal-title': 'Descargar CV', 'cv-modal-sub': 'Elige el idioma de tu preferencia',
    'wa-modal-title': 'Escribir por WhatsApp', 'wa-modal-sub': 'Elige cómo prefieres contactarme',
    'wa-modal-copy': 'Copiar número', 'wa-modal-open': 'Abrir conversación',
    'wa-modal-open-sub': 'Con un mensaje listo',
    'wa-message': '¡Hola Daniel! Vi tu portafolio y me gustaría conversar sobre una oportunidad.',
    'email-modal-title': 'Escribir un correo', 'email-modal-sub': 'Elige cómo prefieres contactarme',
    'email-modal-copy': 'Copiar correo', 'email-modal-open': 'Abrir correo',
    'email-modal-open-sub': 'Con asunto y mensaje listos',
    'email-subject': 'Contacto desde tu portafolio',
    'email-body': 'Hola Daniel, vi tu portafolio y me gustaría conversar sobre una oportunidad.',
    'modal-copied': '¡Copiado!',
  },
  en: {
    'nav-home': 'Home', 'nav-about': 'About me', 'nav-exp': 'Experience',
    'nav-projects': 'Projects', 'nav-contact': 'Contact',
    'mode-day': '☀️ Day', 'mode-night': '🌙 Night',
    'hero-available': 'Available for new opportunities',
    'hero-title': 'Full Stack Developer',
    'btn-whatsapp': 'Message on WhatsApp', 'btn-cv': 'Download Resume',
    'stat-years-val': '5+ years', 'stat-years-sub': 'of professional experience',
    'about-eyebrow': 'About me',
    'about-title': 'Full Stack specialist<br>in mobile and digital banking',
    'about-p1': "I've spent over five years building high-traffic web and mobile applications for the financial and telecommunications sector in Chile. My work at BMSoluciones includes the Tarjeta Presto LIDER app for Banco BCI — a large-scale product with an active user base nationwide. At Haibu Solutions I developed critical modules for VTR Telecomunicaciones and AFP Habitat.",
    'about-p2': "I handle the full cycle: from architecture design to production deployment. I manage my own infrastructure with Docker, Nginx and automated CI/CD. I integrate quickly into Scrum teams and deliver autonomously.",
    'chip-scrum': 'Scrum certified (SFPC)', 'chip-english': 'Intermediate English',
    'chip-available': 'Immediately available', 'chip-hybrid': 'Hybrid or remote',
    'exp-eyebrow': 'Career', 'exp-title': 'Professional experience',
    'current-pill': 'Current',
    'tl-period-bm': 'Mar. 2022 — Present', 'tl-period-ind': 'Mar. 2019 — Present',
    'tl-period-enlace': 'Dec. 2017 — Feb. 2019',
    'tl-company-ind': 'Independent',
    'exp-bm-role': 'Front-End Software Developer',
    'exp-bm-desc': 'Development and maintenance of the mobile-first <strong>Tarjeta Presto LIDER</strong> app, a banking product from Banco BCI with a massive user base. I integrated Khipu and Servipag payment gateways, the Bip! card top-up flow and push notifications. Implemented Strapi as a headless CMS for content management.',
    'exp-haibu-role': 'Software Development Engineer',
    'exp-haibu-desc': 'Full Stack for <strong>VTR Telecomunicaciones</strong> and <strong>AFP Habitat</strong> with Ionic/Angular and Node.js. Also delivered the internal mobile app <strong>FrogApp</strong> with React Native, from design to production.',
    'exp-ind-role': 'Independent Developer',
    'exp-ind-desc': 'Web apps with Ionic, real-time video and audio streaming servers, VPS infrastructure with Nginx and Docker, CI/CD pipelines with GitHub Actions. Full cycle for every project.',
    'exp-enlace-role': 'Developer &amp; Digital Integration Support',
    'exp-enlace-desc': 'Digital solutions for touch screens and corporate signage. Remote management of advertising display networks and corporate channels.',
    'skills-eyebrow': 'Technologies', 'skills-title': 'Tech stack',
    'skill-ai': 'AI &amp; Methods',
    'proj-eyebrow': 'Personal work', 'proj-title': 'Personal projects',
    'proj1-num': '01 — In production', 'proj2-num': '02 — Personal project',
    'proj3-num': '03 — Personal project', 'proj4-num': '04 — In production',
    'proj1-desc': 'Interactive Pokédex connected to the PokéAPI. Search any Pokémon by name or ID number and get its stats, types, abilities and official sprite.',
    'proj2-desc': 'Functional Google Drive clone with file upload and download up to 15 GB, folder organization, user authentication and local Docker volume storage. Interface faithful to the original design.',
    'proj3-desc': 'Web tool to convert YouTube videos to MP3 or MP4. Python FastAPI backend with an async processing queue, yt-dlp and ffmpeg on the worker.',
    'proj4-name': 'Dungun — Streaming server',
    'proj4-desc': 'Real-time audio streaming platform with private rooms and code-assigned translator. Demo: <em>demostracion</em>.',
    'proj5-num': '05 — Personal project', 'proj6-num': '06 — Personal project',
    'proj7-num': '07 — Personal project',
    'proj5-desc': 'Intelligent personal assistant for comprehensive job search management. Centralizes applications, tracks selection pipelines and organizes recruiter contacts from a private dashboard. Go backend with containerized deployment and high-concurrency runtime.',
    'proj6-desc': 'React frontend that centralizes multiple backends in a single interface. Connects to Ocarina (YouTube download via FastAPI), Kafra (file manager) and unified authentication with Shaula.',
    'proj7-desc': 'Authentication gateway and internal proxy for the Jarvis suite. Validates sessions with secure login/logout and routes traffic to Kafra and Ocarina (Python) without exposing internal services.',
    'proj8-num': '08 — Personal project',
    'proj8-desc': 'Audio and video streaming platform with multi-tenant architecture per company. Bun + Elysia backend, React + Tailwind frontend, RTMP streaming with MediaMTX and Nginx. Super admin manages companies, users and streamings.',
    'proj-cta-link': 'View project →', 'proj-cta-repo': 'View repo on GitHub →', 'proj-cta-soon': 'GitHub coming soon',
    'contact-heading': 'Looking for a Full Stack developer?',
    'contact-sub': 'If you\'re looking for a committed developer with real-world experience, I\'m your person. Let\'s talk.',
    'btn-dl': 'Download full Resume',
    'cv-modal-title': 'Download Resume', 'cv-modal-sub': 'Choose your preferred language',
    'wa-modal-title': 'Message on WhatsApp', 'wa-modal-sub': "Choose how you'd like to reach me",
    'wa-modal-copy': 'Copy number', 'wa-modal-open': 'Open chat',
    'wa-modal-open-sub': 'With a message ready',
    'wa-message': 'Hi Daniel! I saw your portfolio and would like to talk about an opportunity.',
    'email-modal-title': 'Send an email', 'email-modal-sub': "Choose how you'd like to reach me",
    'email-modal-copy': 'Copy email', 'email-modal-open': 'Open email',
    'email-modal-open-sub': 'With subject and message ready',
    'email-subject': 'Contact from your portfolio',
    'email-body': 'Hi Daniel, I saw your portfolio and would like to talk about an opportunity.',
    'modal-copied': 'Copied!',
  }
};

let currentLang = 'es';

function applyLang(lang) {
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.title = lang === 'en'
    ? 'Daniel Ulloa — Full Stack Developer'
    : 'Daniel Ulloa — Desarrollador Full Stack';
  requestAnimationFrame(() => {
    updateSlider(document.body.classList.contains('dark'));
    updateLangSlider(lang === 'en');
  });
}

function updateLangSlider(en) {
  const slider = document.getElementById('langSlider');
  const optEs = document.getElementById('optEs');
  const optEn = document.getElementById('optEn');
  const sw = document.getElementById('langSwitch');
  if (en) {
    sw.style.setProperty('--lang-slider-offset', optEs.offsetWidth + 'px');
    slider.style.width = optEn.offsetWidth + 'px';
  } else {
    sw.style.setProperty('--lang-slider-offset', '0px');
    slider.style.width = optEs.offsetWidth + 'px';
  }
}

function toggleLang() {
  const flash = document.getElementById('langFlash');
  flash.classList.add('show');
  setTimeout(() => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.body.classList.toggle('lang-en', currentLang === 'en');
    applyLang(currentLang);
    flash.classList.remove('show');
  }, 180);
}

/* ── cv modal ──────────────────────────────────────── */
function openCVModal() {
  document.getElementById('cvModalOverlay').classList.add('open');
}
function closeCVModal(e) {
  if (!e || e.target === document.getElementById('cvModalOverlay')) {
    document.getElementById('cvModalOverlay').classList.remove('open');
  }
}
function downloadCV(lang) {
  const files = {
    es: { url: 'assets/docs/cv_daniel_ulloa.pdf',    name: 'CV_Daniel_Ulloa_ES.pdf' },
    en: { url: 'assets/docs/cv_daniel_ulloa_en.pdf', name: 'CV_Daniel_Ulloa_EN.pdf' }
  };
  const { url, name } = files[lang];
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  document.getElementById('cvModalOverlay').classList.remove('open');
}
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  ['cvModalOverlay', 'waModalOverlay', 'emailModalOverlay'].forEach(id => {
    document.getElementById(id).classList.remove('open');
  });
});

/* ── copy-to-clipboard helper with feedback ──────────── */
async function copyWithFeedback(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement('textarea');
    helper.value = text;
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
  }

  const nameEl = btn.querySelector('.cv-lang-name');
  const flagEl = btn.querySelector('.cv-flag');
  const defaultName = nameEl.textContent;
  const defaultFlag = flagEl.textContent;

  clearTimeout(btn._resetTimer);
  btn.classList.add('is-copied');
  nameEl.textContent = T[currentLang]['modal-copied'];
  flagEl.textContent = '✅';

  btn._resetTimer = setTimeout(() => {
    btn.classList.remove('is-copied');
    nameEl.textContent = defaultName;
    flagEl.textContent = defaultFlag;
  }, 1600);
}

/* ── whatsapp ──────────────────────────────────────── */
const waNumber = ['569', '772', '160', '59'].join('');
const waUrl = 'https://wa' + '.me/' + waNumber;
const waDisplay = '+56 9 7721 6059';

(function () {
  const num = document.getElementById('wa-number');
  if (num) num.textContent = waDisplay;
  const sub = document.getElementById('waCopySub');
  if (sub) sub.textContent = waDisplay;
})();

function openWaModal() {
  document.getElementById('waModalOverlay').classList.add('open');
}
function closeWaModal(e) {
  if (!e || e.target === document.getElementById('waModalOverlay')) {
    document.getElementById('waModalOverlay').classList.remove('open');
  }
}
function waAction(type) {
  if (type === 'copy') {
    copyWithFeedback(waDisplay, document.getElementById('waBtnCopy'));
    return;
  }
  const text = encodeURIComponent(T[currentLang]['wa-message']);
  window.open(waUrl + '?text=' + text, '_blank', 'noopener');
  closeWaModal();
}

/* ── email ─────────────────────────────────────────── */
const emailAddress = ['daniel', 'ulloa', '256'].join('') + '@' + ['gmail', 'com'].join('.');

(function () {
  const value = document.getElementById('email-value');
  if (value) value.textContent = emailAddress;
  const sub = document.getElementById('emailCopySub');
  if (sub) sub.textContent = emailAddress;
})();

function openEmailModal() {
  document.getElementById('emailModalOverlay').classList.add('open');
}
function closeEmailModal(e) {
  if (!e || e.target === document.getElementById('emailModalOverlay')) {
    document.getElementById('emailModalOverlay').classList.remove('open');
  }
}
function emailAction(type) {
  if (type === 'copy') {
    copyWithFeedback(emailAddress, document.getElementById('emailBtnCopy'));
    return;
  }
  const subject = encodeURIComponent(T[currentLang]['email-subject']);
  const body = encodeURIComponent(T[currentLang]['email-body']);
  window.location.href = 'mailto:' + emailAddress + '?subject=' + subject + '&body=' + body;
  closeEmailModal();
}

/* ── footer year ────────────────────────────────────── */
(() => {
  const year = document.getElementById('footerYear');
  if (year) year.textContent = new Date().getFullYear();
})();

/* ── smooth scroll ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const startY = window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + startY - parseFloat(getComputedStyle(target).scrollMarginTop || 0);
    const duration = 1100;
    const startTime = performance.now();
    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3.5);
      window.scrollTo(0, startY + (targetY - startY) * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
});

/* ── init ──────────────────────────────────────────── */
window.addEventListener('load', () => {
  updateSlider(false);
  updateLangSlider(false);
});
window.addEventListener('resize', () => {
  updateSlider(document.body.classList.contains('dark'));
  updateLangSlider(currentLang === 'en');
});
