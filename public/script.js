
const nav = document.querySelector("header nav"),
navburger = document.querySelector("header nav .burger"),
navSpanMiddle = document.querySelector("header nav .burger .middle"),
navNavigationBar = document.querySelector("header nav .navigation-bar"),
navNavigationBarLi = document.querySelectorAll("header nav .navigation-bar li"),
headerText = document.querySelector("header .text"),
headerSection = document.querySelector("header"),
Text = document.querySelector(".text");

navburger.addEventListener("click", () => {
    navburger.classList.toggle("active");
    navSpanMiddle.classList.toggle("hide");
    navNavigationBar.classList.toggle("show");
});

navNavigationBarLi.forEach(li =>
    li.addEventListener("click", () => {
        const arr = Array.from(li.parentElement.children);
        arr.forEach(li => li.classList.remove("active"));
        li.classList.add("active");
        navburger.classList.remove("active");
        navSpanMiddle.classList.remove("hide");
        navNavigationBar.classList.remove("show");
    })
);

window.onscroll = function() {

if (window.pageYOffset > headerSection.offsetHeight - 75) {
    nav.classList.add("active");
} else {
    nav.classList.remove("active");  
}

if (window.pageYOffset > 0) {
    Text.style.opacity = -window.pageYOffset / 300 + 1;
}

};

let btnOpenForm = document.getElementById('reserver');
let btnCloseForm = document.getElementById('btnreserve');
let cb = document.querySelector('.reservation .text');
btnOpenForm.addEventListener('click', openForm);
btnCloseForm.addEventListener('click', closeForm);
function openForm() {
    document.getElementById('popup-form').style.display = "block";
    btnOpenForm.style.display = "none";
    cb.style.display = "none";
}
function closeForm() {
    document.getElementById('popup-form').style.display = "none";
    btnOpenForm.style.display = "inline-block";
    cb.style.removeProperty("display");
}