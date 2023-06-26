import mapImg from "../img/restaurant-location.png";
const contactPage = document.createElement("div");
const container = document.createElement("div");

container.classList.add("container");

const message1 = document.createElement("p");
message1.innerHTML = "Call us: 917 893 222";
message1.style.alignSelf = "flex-start";
message1.style.padding = "30px";
const message2 = document.createElement("p");
message2.innerHTML = "Hollywood Boulevard 42, Los Angeles, USA";
message2.style.alignSelf = "flex-start";
message2.style.padding = "30px";
const mapImage = document.createElement("img");
mapImage.src = mapImg;
mapImage.style.maxWidth = "100%";

//Get all together
contactPage.appendChild(container);
container.appendChild(message1);
container.appendChild(message2);
container.appendChild(mapImage);

export default contactPage;
