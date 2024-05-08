const hamburgerMenu = document.getElementById("hamburger-menu")
const modalMenu = document.getElementById("modal-menu")

hamburgerMenu.addEventListener("click",()=>{
    hamburgerMenu.classList.toggle('opened');
    modalMenu.classList.toggle('opened');
    hamburgerMenu.setAttribute('aria-expanded', hamburgerMenu.classList.contains('opened'))
})


