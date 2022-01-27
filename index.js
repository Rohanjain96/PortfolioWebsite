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

function filter(e)
{
    let projects = document.getElementsByClassName("project");
    if(e.innerText=="All")
    {
        for (const project of projects) {
            project.style.display="flex";
        }
    }
    else if(e.innerText=="C")
    {
        for (const project of projects) {
            project.style.display="none";
        }
        for (const project of projects) {
            if(project.getAttribute("data-filter")== e.innerText)
            project.style.display="flex";
        }
    }
    else if(e.innerText=="C++")
    {
        for (const project of projects) {
            project.style.display="none";
        }
        for (const project of projects) {
            if(project.getAttribute("data-filter")== e.innerText)
            project.style.display="flex";
        }
    }
    else if(e.innerText=="Web Development")
    {
        for (const project of projects) {
            project.style.display="none";
        }
        for (const project of projects) {
            if(project.getAttribute("data-filter")== e.innerText)
            project.style.display="flex";
        }
    }

}

age();

function age() {
    let borndate = 6;
    let bornmonth = 4;
    let bornyear = 2002;
    let date = new Date();
    let todaydate = date.getDate();
    let cmonth = date.getMonth()+1;
    let cyear = date.getFullYear();
    let age = cyear- bornyear;
    if(cmonth<bornmonth)
    {
        age = age-1;
    }

    if(cmonth == bornmonth)
    {
        if(borndate<todaydate)
        {
            age = age-1;
        }
    }
    let agetxt = document.querySelector("#age");
    let agecnt = `<span><strong>Age:</strong></span>${age}`;
    agetxt.innerHTML = agecnt;
}
