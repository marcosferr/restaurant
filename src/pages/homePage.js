import cheffImg from "../img/chef.png";
const homePage = document.createElement("div");
const container = document.createElement("div");
container.classList.add("container");
const message1 = document.createElement("div");
message1.innerHTML = "Best Pizza in your country";
const message2 = document.createElement("div");
message2.innerHTML = "Made with passion since 1923";
const cheffImage = document.createElement("img");
cheffImage.src = cheffImg;
cheffImage.setAttribute("id", "chefImg");
const message3 = document.createElement("div");
message3.innerHTML = "Order online or visit us!";

//Get all together
homePage.appendChild(container);
container.appendChild(message1);
container.appendChild(message2);
container.appendChild(cheffImage);
container.appendChild(message3);

export default homePage;
