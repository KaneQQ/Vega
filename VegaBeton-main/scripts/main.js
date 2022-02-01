window.addEventListener('load', () => {
    let burgerBtn = document.querySelector('.burger')
    let menu = document.querySelector('.menu');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
    });
});