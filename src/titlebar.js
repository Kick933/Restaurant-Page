import './style.css';
import Icon from './icon.png';
import { showHome } from './home';
import { showMenu } from './menu';
import { showContact } from './contact';

function createTitle(){
    const content = document.getElementById("content");
    const fixedNav = document.createElement("div");
    fixedNav.id="absolute_nav"
    // appends child to navbar and makes flexbox.
    // Adds icon to the navbar
    const myIcon = new Image();
    myIcon.src = Icon;
    fixedNav.appendChild(myIcon);
    const nav = document.createElement("div");
    nav.id="title-flexbox";
    const home = document.createElement("button");
    home.id ="home";
    home.innerHTML="Home";
    home.classList.add("nav-element");
    home.addEventListener('click', showHome);
    nav.appendChild(home);
    const menu = document.createElement("button");
    menu.classList.add("nav-element");
    menu.id = "menu";
    menu.innerHTML = "Menu";
    menu.addEventListener('click', showMenu);
    nav.appendChild(menu);
    const contact = document.createElement("button");
    contact.addEventListener('click', showContact);
    contact.classList.add("nav-element");
    contact.innerHTML = "Contact";
    contact.id = "contact";
    nav.appendChild(contact);
    fixedNav.appendChild(nav);
    content.append(fixedNav);
    const pageWrapper = document.createElement("div")
    pageWrapper.id="pageWrapper";
    content.append(pageWrapper);
}

export {
    createTitle
}