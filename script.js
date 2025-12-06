// SCROLL ANIMATION
const scrollElements = document.querySelectorAll(".scroll");
function checkScroll(){
    scrollElements.forEach(el => {
        let pos = el.getBoundingClientRect();
        if(pos.top < window.innerHeight - 100){ 
            el.classList.add("show"); 
        }
    });
}
window.addEventListener("scroll", checkScroll);
checkScroll();

// Active nav on scroll
const sections = document.querySelectorAll('section[id], h2[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.navbar a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });
});