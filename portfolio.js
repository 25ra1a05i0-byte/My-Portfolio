/* =========================================
   SWASTIK MISHRA PORTFOLIO
   JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");
        menuToggle.textContent = "☰";

    });

});


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   DARK / LIGHT THEME
   ========================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");
    themeToggle.textContent = "🌙";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    if (isLight) {

        themeToggle.textContent = "🌙";
        localStorage.setItem("portfolioTheme", "light");

    } else {

        themeToggle.textContent = "☀️";
        localStorage.setItem("portfolioTheme", "dark");

    }

});


/* =========================================
   TYPING EFFECT
   ========================================= */

const typingText = document.getElementById("typingText");

const words = [
    "web experiences.",
    "creative ideas.",
    "digital solutions.",
    "with code.",
    "with technology."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================================
   SCROLL REVEAL
   ========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   CURRENT YEAR
   ========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   EMAIL LINK
   ========================================= */

const emailLinks =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );

emailLinks.forEach(link => {

    link.setAttribute(
        "title",
        "Email Swastik Mishra"
    );

});