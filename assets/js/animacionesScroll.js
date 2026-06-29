window.addEventListener('scroll', function () {
    animateWelcome();
    animateLatia();
    animateLatio();
    animateProfilePhoto();
    animateCvDownload();
});

const animateWelcome = () => {
    const el = document.getElementById('welcome-floating');
    if (window.pageYOffset > 300) {
        el.classList.remove('float-animation');
    } else {
        el.classList.add('float-animation');
    }
};

const animateLatia = () => {
    const el = document.getElementById('latiaPokemon');
    if (window.pageYOffset > 500) {
        el.classList.remove('latia-animation');
    } else {
        el.classList.add('latia-animation');
    }
};

const animateLatio = () => {
    const el = document.getElementById('latioPokemon');
    if (window.pageYOffset > 500) {
        el.classList.remove('latio-animation');
    } else {
        el.classList.add('latio-animation');
    }
};

const animateProfilePhoto = () => {
    const el = document.getElementById('profile-photo');
    if (window.pageYOffset > 220 && window.pageYOffset < 1200) {
        el.classList.add('show-from-left');
        el.classList.remove('slide-from-left');
    } else {
        el.classList.remove('show-from-left');
    }
};

const animateCvDownload = () => {
    const el = document.getElementById('cv-download');
    if (window.pageYOffset > 2500) {
        el.classList.add('up-down-animation');
    } else {
        el.classList.remove('up-down-animation');
    }
};
