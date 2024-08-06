const navToggle =  document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__l")
navToggle.addEventListener("click",()=>{
    document.body.classList.toggle("nav-open")
})
