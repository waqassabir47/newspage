const navBar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");
 
openMenu.addEventListener("click" , () =>{
    navBar.classList.add("open");

}
);

closeMenu.addEventListener("click" , () =>{
    navBar.classList.remove("open");

}
);