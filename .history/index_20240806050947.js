const navToggle =  document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav")
navToggle.addEventListener("click",()=>{
    document.body.classList.toggle("nav-open")
})
