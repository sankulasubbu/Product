// ================================
// AMSPRO Products Page
// products.js
// ================================

// Sticky Navbar Shadow
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});


// Card Hover Animation
const cards = document.querySelectorAll(
".benefit-card,.strain-card,.dosage-card,.portfolio-card,.product-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";
        card.style.transition = ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// Button Ripple Effect

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", function(e){

        const circle = document.createElement("span");

        circle.classList.add("ripple");

        this.appendChild(circle);

        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;

        circle.style.left = x + "px";
        circle.style.top = y + "px";

        setTimeout(()=>{
            circle.remove();
        },600);

    });

});