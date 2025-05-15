document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.querySelector(".language-selector");
    const languageButton = languageSelector.querySelector(".language-button");
    const languageDropdown = languageSelector.querySelector(".language-dropdown");
    const languageCode = languageSelector.querySelector(".language-code");
    const texts = {
        es: {
            home: "Hola, soy",
            position: "Desarrollador Full-Stack.",
            description: "Siempre buscando nuevas formas de crear experiencias de usuario fluidas y significativas.",
            aboutMeTitle: "Sobre Mí",
            aboutMeText: "Aquí puedes escribir información sobre ti, tu experiencia y habilidades.",
            projectTitle: "Proyectos",
            projectTexts: "Aquí mostrarás tus proyectos con enlaces y descriptiones.",
            contactTitle: "Contacto",
            contactText: "Deja tu información de contacto o formulario.",
            navHome: "Inicio",
            navAboutMe: "Sobre Mí",
            navProjects: "Proyectos",
            navContact: "Contacto"
        },
        en: {
            home: "Hello, I'm",
            position: "Full-Stack Developer.",
            description: "Always looking for new ways to build smooth and meaningful user experiences.",
            aboutMeTitle: "About Me",
            aboutMeText: "Here you can write information about yourself, your experience, and skills.",
            projectTitle: "Projects",
            projectTexts: "Here you will showcase your projects with links and descriptions.",
            contactTitle: "Contact",
            contactText: "Leave your contact information or form.",
            navHome: "Home",
            navAboutMe: "About Me",
            navProjects: "Projects",
            navContact: "Contact"
        }
    };

    // Set initial language based on HTML lang attribute or default to English
    let currentLang = document.documentElement.lang || 'en';
    updateLanguage(currentLang);

    // Toggle dropdown visibility
    languageButton.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('show');
    });

    // Handle language selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });

    function updateLanguage(lang) {
        const selectedTexts = texts[lang] || texts['en'];
        currentLang = lang;
        
        // Update button
        const selectedOption = document.querySelector(`.language-option[data-lang="${lang}"]`);
        if (selectedOption) {
            const flagImg = selectedOption.querySelector('img').cloneNode(true);
            const languageName = selectedOption.querySelector('span').textContent;
            
            // Update button content
            languageButton.innerHTML = '';
            const flagSpan = document.createElement('span');
            flagSpan.className = 'flag-icon';
            flagSpan.appendChild(flagImg);
            languageButton.appendChild(flagSpan);
            
            const codeSpan = document.createElement('span');
            codeSpan.className = 'language-code';
            codeSpan.textContent = lang.toUpperCase();
            languageButton.appendChild(codeSpan);
            
            const caretIcon = document.createElement('i');
            caretIcon.className = 'fas fa-caret-down';
            languageButton.appendChild(caretIcon);
        }
        
        // Update page content
        document.querySelectorAll("[data-lang]").forEach(element => {
            const key = element.getAttribute("data-lang");
            if (selectedTexts[key]) {
                element.textContent = selectedTexts[key];
            }
        });
        
        // Update navigation
        const navLinks = document.querySelectorAll("nav ul li a");
        if (navLinks.length >= 4) {
            navLinks[0].textContent = selectedTexts.navHome;
            navLinks[1].textContent = selectedTexts.navAboutMe;
            navLinks[2].textContent = selectedTexts.navProjects;
            navLinks[3].textContent = selectedTexts.navContact;
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    const menuToggle = document.querySelector(".menu_toggle");
    const navMenu = document.querySelector("nav ul");
    const menuLinks = document.querySelectorAll("nav ul li a");

   
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });


    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });
});
