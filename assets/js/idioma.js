const translations = {
  es: {
    nightMode: 'ModoNoche',
    navHome: 'Inicio',
    navAbout: 'Sobre mí',
    navExp: 'Experiencia',
    navSkills: 'Stack',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    welcome: 'Bienvenido',
    langBtn: 'See me in English',
    aboutTitle: 'Hola, soy Daniel',
    aboutP1: 'Desarrollador Full Stack con más de 5 años de experiencia construyendo aplicaciones web y mobile de alto tráfico para el sector financiero y telecomunicaciones en Chile. Especializado en Angular, React e Ionic en frontend, con backend en Node.js y Python. Integro herramientas de IA en el flujo de trabajo y construyo proyectos propios con arquitecturas de streaming y despliegue automatizado.',
    aboutP2: 'Fanático de la tecnología, el gaming y los proyectos que combinan creatividad con ingeniería. Siempre aprendiendo.',
    expTitle: 'Experiencia',
    exp1Role: 'Desarrollador de Software Front-End',
    exp1Desc: 'App mobile-first Tarjeta Presto LIDER (Banco BCI) con Ionic / Angular. Integración de pasarelas de pago Khipu y Servipag, flujo de recarga Bip!, notificaciones push y CMS headless con Strapi.',
    exp2Role: 'Ingeniero de Desarrollo de Software',
    exp2Desc: 'Full Stack para VTR Telecomunicaciones y AFP Habitat con Ionic/Angular + Node.js. App mobile cross-platform con React Native para FrogApp, desde diseño hasta producción.',
    exp3Role: 'Desarrollador & Soporte de Integración Digital',
    exp3Desc: 'Soluciones digitales interactivas para pantallas táctiles y señalética corporativa. Gestión remota de redes de pantallas publicitarias y canales corporativos.',
    skillsTitle: 'Stack Tecnológico',
    skillCatFront: 'Frontend',
    skillCatBack: 'Backend',
    skillCatDevops: 'DevOps / Infra',
    skillCatAi: 'IA & Tools',
    projectsTitle: 'Proyectos',
    proj1Title: 'Galeria IOS',
    proj1Desc: 'Web responsive que utilizando la temática de Mac. Las imágenes de la galeria se mueven y siguen el cursor del mouse',
    proj2Title: 'Reloj JS',
    proj2Desc: 'Reloj construido con JavaScript hecho para funcionar extrayendo la hora de tu dispositivo. Siempre carga una imagen aleatoria como fondo',
    proj3Title: 'Pokédex',
    proj3Desc: 'Creada con PokéAPI, una herramienta educativa vinculada a una extensa base de datos en la que puedes traer información de un pokemon con su nombre ó numero id',
    proj4Title: 'USD a CLP Calendario',
    proj4Desc: 'Realizada con Vue y Vuetify. Consulta una API publica, extrayendo el precio del dólar convertido a pesos chilenos en cualquier fecha',
    proj5Title: 'MyTrello',
    proj5Desc: 'Inspirada en Trello, sirve para crear y editar notas que puedes almacenar en una base de datos en tiempo real. Creada con Angular y Firebase',
    proj6Title: 'Dungun PWA',
    proj6Desc: "Realizada con el stack MEAN, la aplicación busca por medio de código una sala de streaming con un traductor asignado. Para una demostración usar código 'demostracion'",
    contactTitle: 'Contacto',
    contactLinkedin: 'Linkedin Perfil',
    contactCv: 'Descargar Curriculum',
    contactGithub: 'Github Perfil',
  },
  en: {
    nightMode: 'NightMode',
    navHome: 'Home',
    navAbout: 'About Me',
    navExp: 'Experience',
    navSkills: 'Stack',
    navProjects: 'Projects',
    navContact: 'Contact',
    welcome: 'Welcome',
    langBtn: 'Ver en español',
    aboutTitle: "Hi, I'm Daniel",
    aboutP1: 'Full Stack developer with 5+ years of experience building high-traffic web and mobile applications in the financial and telecom sectors in Chile. Specialized in Angular, React and Ionic on the frontend, with Node.js and Python on the backend. I integrate AI tools into my workflow and build personal projects featuring streaming architectures and automated deployments.',
    aboutP2: 'Tech enthusiast, gamer, and lover of projects that blend creativity with engineering. Always learning.',
    expTitle: 'Experience',
    exp1Role: 'Front-End Software Developer',
    exp1Desc: 'Mobile-first app Tarjeta Presto LIDER (Banco BCI) built with Ionic / Angular. Payment gateway integrations (Khipu, Servipag), Bip! card reload flow, push notifications, and headless CMS with Strapi.',
    exp2Role: 'Software Development Engineer',
    exp2Desc: 'Full Stack for VTR Telecomunicaciones and AFP Habitat using Ionic/Angular + Node.js. Cross-platform mobile app with React Native for FrogApp, from design to production.',
    exp3Role: 'Developer & Digital Integration Support',
    exp3Desc: 'Interactive digital solutions for touchscreens and corporate signage. Remote management of advertising screen networks and corporate channels.',
    skillsTitle: 'Tech Stack',
    skillCatFront: 'Frontend',
    skillCatBack: 'Backend',
    skillCatDevops: 'DevOps / Infra',
    skillCatAi: 'AI & Tools',
    projectsTitle: 'Projects',
    proj1Title: 'IOS Gallery',
    proj1Desc: 'Responsive web page that uses the Mac theme. The images in the gallery move and follow the mouse cursor',
    proj2Title: 'JS Clock',
    proj2Desc: 'Clock built with JavaScript, made to work extracting the time from your device. It always loads a random image as a background',
    proj3Title: 'Pokedex',
    proj3Desc: 'Created with PokéAPI, an educational tool linked to an extensive database where you can get information about a pokemon with its name or id number',
    proj4Title: 'USD to CLP Calendar',
    proj4Desc: 'Made with Vue and Vuetify. It consults a public API, extracting the price of the dollar converted to Chilean pesos on any date',
    proj5Title: 'MyTrello',
    proj5Desc: 'Inspired by Trello. Used to create and edit notes that you can store in a real-time database. Created with Angular and Firebase',
    proj6Title: 'Dungun PWA',
    proj6Desc: "Made with the MEAN stack, the application uses a code to redirect to a streaming room with an assigned translator. For a demo use code 'demostracion'",
    contactTitle: 'Contact',
    contactLinkedin: 'Linkedin Profile',
    contactCv: 'Download Resume',
    contactGithub: 'Github Profile',
  }
};

function applyLang(lang) {
  var t = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  localStorage.setItem('lang', lang);
}

document.getElementById('lang-btn').addEventListener('click', function() {
  var current = localStorage.getItem('lang') || 'es';
  applyLang(current === 'es' ? 'en' : 'es');
});

applyLang(localStorage.getItem('lang') || 'es');
