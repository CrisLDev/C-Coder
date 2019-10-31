const navSlide = () => {
    const burger = document.querySelector('.burger');
    const div = document.querySelector('.info');
    const i = document.querySelector('.fa-arrow-right')

    burger.addEventListener('click', () => {
        div.classList.toggle('info-active');
        i.classList.toggle('rotada');
    });
}

navSlide();
