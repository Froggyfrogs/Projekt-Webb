const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    //öppnar eller stänger navigationen
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });


}

navSlide();