const navSlide = () => {
    const burger1 = document.querySelector('.burger1');
    const div = document.querySelector('.info_style');

    burger1.addEventListener('click', () => {
        div.classList.toggle('info-active');
    });
}

navSlide();
