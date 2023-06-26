import homePage from "./pages/homePage.js";
import menuPage from "./pages/menuPage.js";
import contactPage from "./pages/contactPage.js";
import "./styles/styles.css";
import bgImage from "./img/background.jpg";
const pages = {
  Home: homePage,
  Menu: menuPage,
  Contact: contactPage,
};

//Create the page header and title
const header = document.createElement("header");
const headerTitle = document.createElement("h1");
const restaurantName = document.createTextNode("Lala's Pizzeria");
headerTitle.appendChild(restaurantName);
header.appendChild(headerTitle);

//Create the Navbar
const navbar = document.createElement("nav");
const homeLink = document.createElement("button");
homeLink.classList.add("button-nav");
homeLink.innerHTML = "Home";

const menuLink = document.createElement("button");
menuLink.innerHTML = "Menu";
menuLink.classList.add("button-nav");

const contactLink = document.createElement("button");
contactLink.innerHTML = "Contact";
contactLink.classList.add("button-nav");
//Apend actions to links
homeLink.addEventListener("click", () => {
  tabSwitch("Home");
});
menuLink.addEventListener("click", () => {
  tabSwitch("Menu");
});
contactLink.addEventListener("click", () => {
  tabSwitch("Contact");
});
//Append links to navbar
navbar.appendChild(homeLink);
navbar.appendChild(menuLink);
navbar.appendChild(contactLink);
header.appendChild(navbar);

//Create an element div where the subpages will go
const subpage = document.createElement("div");
subpage.classList.add("subpage-container");
//Create the footer
const footer = document.createElement("footer");
footer.innerHTML = "Copyright 2023 Marcos Ferreira";

function renderPage(page) {
  console.log(pages[page]);
  subpage.appendChild(pages[page]);
}
function tabSwitch(tab) {
  subpage.removeChild(subpage.children[0]);
  renderPage(tab);
}

const root = document.getElementById("content");

root.appendChild(header);
root.append(subpage);
subpage.appendChild(homePage);
root.append(footer);
