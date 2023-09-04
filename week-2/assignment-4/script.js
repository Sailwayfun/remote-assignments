document.querySelector("header").addEventListener("click",
    (event) => {
        document.querySelector("h1").innerText = "Have a Good Time!"
    }
);

const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideNavItem = document.querySelectorAll(".side-nav-item");
const sideMenu = document.querySelector(".side-menu");
const sideMenuToggle = document.querySelector(".side-menu-toggle");
sideMenuToggle.addEventListener("click",
    (event) => {
            sideMenu.style.right = "-100%";
            hamburgerMenu.style.opacity = "1";
    }
);

hamburgerMenu.addEventListener("click", (event) => {
        hamburgerMenu.style.opacity = "0";
        sideMenu.style.right = "0";


})