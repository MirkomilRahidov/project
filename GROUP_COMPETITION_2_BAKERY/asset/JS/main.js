const Navtoggle = document.getElementById('toggle');
const MobileMenu = document.querySelector('.header__mobile-menu');
const CloseToggle = document.querySelector('.close-toggle');
const instagramScanCode = document.querySelector('.instagram-scan-code');

const slideButtons = document.querySelectorAll('.hero__slide-btn');
const imageList = document.querySelector('.hero__slider-image-list');



Navtoggle.onclick = function () {
    Navtoggle.classList.toggle('open');
    MobileMenu.classList.add('open');
}

CloseToggle.onclick = function (){
    MobileMenu.classList.remove('open');
}

instagramScanCode.onclick = function (){
    instagramScanCode.classList.toggle('click-insta-code');
}

// HERO SLIDER



slideButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const direction = button.id === 'prev-slide' ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;

        imageList.scrollBy({left: scrollAmount, behavior: 'smooth'});
    });
});

