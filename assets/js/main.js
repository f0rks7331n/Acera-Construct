/*=============== SHOW MENU ===============*/
const   nav_menu = document.getElementById("nav-menu"),
        nav_toggle = document.getElementById("nav-toggle"),
        nav_close = document.getElementById("nav-close")

// Show menu
if (nav_toggle) {
    nav_toggle.addEventListener("click", () => {
        nav_menu.classList.add("show-menu");
    })
}
// Hide menu
if (nav_close) {
    nav_close.addEventListener("click", () => {
        nav_menu.classList.remove("show-menu");
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
// Remove mobile menu when a link it's clicked
const nav_link = document.querySelectorAll(".nav__link");
const link_actions = () => {
    const nav_menu = document.getElementById("nav-menu");
    nav_menu.classList.remove("show-menu");
}
nav_link.forEach(n => n.addEventListener("click", link_actions));
/*=============== CHANGE BACKGROUND HEADER ===============*/
const backgroundHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50  ? header.classList.add("bg-header")
                        : header.classList.remove("bg-header")
}
window.addEventListener("scroll", backgroundHeader);
backgroundHeader();
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scroll_up = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scroll_up.classList.add("show-scroll")
                        : scroll_up.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link")
        } else {
            sectionClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const SR = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    delay: 400,
    reset: true
})
SR.reveal(`.home__content, .services__data, .services__list, .footer__container`)
SR.reveal(`.home__images`, {origin: "bottom", delay: 1000})
SR.reveal(`.about__images`, {origin: "left"})
SR.reveal(`.about__data, .contact__data`, {origin: "right"})
SR.reveal(`.projects__card`, {interval: 100})