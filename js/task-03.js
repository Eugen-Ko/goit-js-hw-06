const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// --------------------------------------------------------------------
// старый вариант
// 
// const arrayTag = images
//   .map(
//     (elem) =>
//       `<li class="item_03"><img class="item__img" src="${elem.url}" alt="${elem.alt}"></li>`
//   )
//   .join("");
// console.log(arrayTag);

// document.querySelector(".gallery").insertAdjacentHTML("beforeend", arrayTag);

// ---------------------------------------------------------------------
// Инициализация узла
const gallary = document.querySelector(".gallery");

// функция создает строку <li>
const createElement = ({url, alt}) => `<li class="item_03"><img class="item__img" src="${url}" alt="${alt}"></li>`;
// функция перебирает массив объектов images
const makeGallary = (imageList) => imageList.map(imageEl => createElement(imageEl)).join("");
// вызываем
const arrayTag = makeGallary(images);

gallary.insertAdjacentHTML("beforeend", arrayTag);



