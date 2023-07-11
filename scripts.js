let hamburguer = document.querySelector('.hamburguer');
let navLinks = document.querySelector('#nav-links');

hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    hamburguer.classList.toggle('linhas-rotate');
});

let links = document.querySelectorAll('.links');

links.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('.hide');
    })
})