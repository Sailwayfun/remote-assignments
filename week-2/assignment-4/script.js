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
        if (sideMenu.style.display === "block") {
            sideMenu.style.display = "none";
            hamburgerMenu.style.opacity = "1";
        }
    }
);

hamburgerMenu.addEventListener("click", (event) => {
    if (hamburgerMenu.style.opacity === "1") {
        hamburgerMenu.style.opacity = "0";
        sideMenu.style.display = "block";
    }
    else {
        hamburgerMenu.style.opacity = "1";
        sideMenu.style.display = "none";
    }


})