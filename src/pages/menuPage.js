const menuPage = document.createElement("div");
const homePage = document.createElement("div");
const container = document.createElement("div");
const message1 = document.createElement("div");
const message2 = document.createElement("div");
const cheffImage = document.createElement("img");

const message3 = document.createElement("div");

//Get all together
homePage.appendChild(container);
container.appendChild(message1);
container.appendChild(message2);
container.appendChild(cheffImage);
container.appendChild(message3);

export default homePage;
