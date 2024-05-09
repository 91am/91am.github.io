const hamburgerMenu = document.getElementById("hamburger-menu")
const modalMenu = document.getElementById("modal-menu")
const modalMenuLinks = document.querySelectorAll("#modal-menu a")

function toggleModal(){
    hamburgerMenu.classList.toggle('opened');
    modalMenu.classList.toggle('opened');
    hamburgerMenu.setAttribute('aria-expanded', hamburgerMenu.classList.contains('opened'))
}

hamburgerMenu.addEventListener("click", toggleModal)

modalMenuLinks.forEach((modalLinks)=>{
    modalLinks.addEventListener("click", toggleModal)
})
