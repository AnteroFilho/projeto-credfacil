let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const linha3 = menuToggle.querySelector(".l3")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    linha3.style.backgroundColor = show ? "white" : "#f0821f";

    menuSection.classList.toggle("on", show)
    show = !show;
})