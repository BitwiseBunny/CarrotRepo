
let versailles = document.getElementById('versailles');
let doll = document.getElementById('doll');
let imageGridOne = document.getElementById('imageGridOne');
let btn = document.getElementById('cta-btn');
let overlay = document.getElementById('overlay');
let rightCol = document.getElementById('right-Col');

btn.addEventListener('click', () => {
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
    setTimeout(function () {overlay.style.display='none'}, 3000);
});

const mobileBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById('mobile-menu-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
});


window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("p1");
    
    const currentScroll = window.pageYOffset;

    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {

        doll.style.opacity = '1';
}
    if (window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)) {

        doll.style.opacity = '0';
    }
});


