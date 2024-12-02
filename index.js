// Navbar Menu Hamburger

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Funcionalidad de tradución

i18next.init({
    lng: 'es',
    debug: true,
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                "about": "About",
                // picantes
                // ternas
                "sponsors": "Sponsors",
                "awards-name": "Golden spice",
                // title
                "subtitle": "Awards to the {{country}} streamer community",
                "more-info": "More info",
            },
        },
        es: {
            translation: {
                "about": "Acerca de",
                // picantes
                // ternas
                "sponsors": "Patrocinadores",
                "awards-name": "Picantito de oro",
                // title
                "subtitle": "Premios a la comunidad de streamers de {{country}}",
                "more-info": "Saber más"
            }
        }
    }
});

document.querySelectorAll('[data-id="about"]').forEach(element => {
    element.innerHTML = i18next.t(element.dataset.id);
});

document.querySelectorAll('[data-id="sponsors"]').forEach(element => {
    element.innerHTML = i18next.t(element.dataset.id);
});

document.querySelectorAll('[data-id="subtitle"]').forEach(element => {
    const translated = i18next.t(element.dataset.id, {
        country: "<span class='argentina'>Argentina</span>"
    });
    element.innerHTML = translated;
});

document.querySelectorAll('[data-id="more-info"]').forEach(element => {
    element.innerHTML = i18next.t(element.dataset.id);
});

document.querySelectorAll('[data-id="sponsors-link"]').forEach(element => {
    element.innerHTML = i18next.t('sponsors') + ' 2023';
});

document.addEventListener('languageChange', (e) => {
    const { language, flagSrc } = e.detail;

    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('Error changing language', err);

        document.querySelectorAll('[data-id]').forEach(element => {
            const id = element.dataset.id;
            if (id === 'subtitle') {
                const translated = t(id, {
                    country: "<span class='argentina'>Argentina</span>"
                });
                element.innerHTML = translated;
            } else if (id === 'sponsors-link') {
                element.innerHTML = t('sponsors') + ' 2023';
            } else {
                element.innerHTML = t(id);
            }
        });
    });

    document.querySelectorAll('.flag-svg').forEach(flag => {
        flag.src = flagSrc;
    });
});