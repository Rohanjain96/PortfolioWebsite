let navmenu = document.getElementsByClassName("navigation-menu")[0];
let navbtn = document.getElementsByClassName("nav-bar-btn")[0];
let navclsbtn = document.getElementsByClassName("nav-bar-cls-btn")[0];
function clshamburgermenu() {
    navmenu.style.left = "-200px";
    navbtn.style.visibility = 'visible';
    navclsbtn.style.visibility = 'hidden';
}
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

function hamburgermenu() {

    navmenu.style.left = "0px";
    navbtn.style.visibility = 'hidden';
    navclsbtn.style.visibility = 'visible';
}