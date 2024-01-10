function setEventListeners(htmlElement) {}
const itemTemplate = document.querySelector(".template").content;
const elements = document.querySelector(".elements");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const imageCard = htmlElement.querySelector(".shop__image");
  const cardPrice = htmlElement.querySelector(".shop__item-price");
  const gameName = htmlElement.querySelector(".shop__item-name");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу
  if (item.link) {
    imageCard.src = item.link;
  }
  if (item.price) {
    cardPrice.textContent = item.price;
  }
  if (item.name) {
    gameName.textContent = item.name;
  }

  setEventListeners(htmlElement);

  return htmlElement;
}

products.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
