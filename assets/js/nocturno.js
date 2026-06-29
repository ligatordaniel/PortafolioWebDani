const nightSwitch  = document.getElementById('night-mode-switch');
const mainNavbar   = document.getElementById('main-navbar');
const masthead     = document.getElementById('masthead');
const welcomeText  = document.getElementById('welcome-text');
const langBtn      = document.getElementById('lang-btn');
const about        = document.getElementById('about');
const experience   = document.getElementById('experience');
const skills       = document.getElementById('skills');
const projects     = document.getElementById('projects');
const contact      = document.getElementById('contact');
const mainFooter   = document.getElementById('main-footer');
const projectCard1 = document.getElementById('project-card-1');
const projectCard2 = document.getElementById('project-card-2');
const projectCard3 = document.getElementById('project-card-3');
const projectCard4 = document.getElementById('project-card-4');
const projectCard5 = document.getElementById('project-card-5');
const projectCard6 = document.getElementById('project-card-6');

nightSwitch.addEventListener('click', () => {
    mainNavbar.classList.toggle('night-black');
    toggleWallpaper();
    welcomeText.classList.toggle('night-text-gray');
    langBtn.classList.toggle('btn-outline-dark');
    about.classList.toggle('night-black');
    experience.classList.toggle('night-gray');
    skills.classList.toggle('night-gray');
    projects.classList.toggle('night-gray');
    contact.classList.toggle('night-gray');
    mainFooter.classList.toggle('night-black');
    projectCard1.classList.toggle('night-black');
    projectCard2.classList.toggle('night-black');
    projectCard3.classList.toggle('night-black');
    projectCard4.classList.toggle('night-black');
    projectCard5.classList.toggle('night-black');
    projectCard6.classList.toggle('night-black');
});

const toggleWallpaper = () => {
    if (masthead.classList.contains('wallpaper-day')) {
        masthead.classList.replace('wallpaper-day', 'wallpaper-night');
    } else {
        masthead.classList.replace('wallpaper-night', 'wallpaper-day');
    }
};
