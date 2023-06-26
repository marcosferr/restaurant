import pizzaCard from "../img/pizza.png";
const cardData = {
  image: pizzaCard,
  title: "Pizza Mambaloni",
  description: "The most selected pizza by our customers",
};
const cardContainer = document.createElement("div");
cardContainer.classList.add("container");
const cardImage = document.createElement("img");
cardImage.src = cardData.image;
cardImage.style.width = "100%";
cardContainer.appendChild(cardImage);

const cardTitle = document.createElement("h2");
cardTitle.textContent = cardData.title;
cardTitle.style.color = "#FFF";
cardTitle.style.textAlign = "center";
cardContainer.appendChild(cardTitle);

const cardDescription = document.createElement("p");
cardDescription.textContent = cardData.description;
cardDescription.style.color = "#FFF";
cardDescription.style.textAlign = "center";
cardContainer.appendChild(cardDescription);

export default cardContainer;
