// var title = document.querySelector('.title');
// title.addEventListener('mouseenter', function() {
//     this.parentElement.classList.add('hover');
// });
//
// title.addEventListener('mouseleave', function() {
//     this.parentElement.classList.remove('hover');
// });


const hamburger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",  ()  => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})