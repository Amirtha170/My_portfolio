
// Typing Animation

const typingText = [
    "B.E. ECE Student",
    "Web Developer",
    "Frontend Developer",
    "Tech Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentText = typingText[textIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentText.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentText.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % typingText.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Scroll Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
