//
// Решение пункта 1)

console.log("--  ЕСТЬ ВЫВОД В HTML --");

const parent = document.querySelector("#categories");

console.log(
  `1) В ul#categories - ${parent.children.length} категории, то есть элементов li.item`
);
// Решение пункта 2)
const child = parent.children;

console.log("--------------------------------------");

// - первый вариант

console.log("Код первого варианта решения");

console.log("2) Колличество элементов в категориях : ");
[...child].forEach((element, counter) => {
  console.log(
    `2.${counter + 1}. В категории ${element.children[0].innerHTML} ${
      element.children[1].children.length
    } элементов.`
  );
});

console.log("--------------------------------------");

// - второй вариант

console.log("Код второго варианта решения");

console.log("2) Колличество элементов в категориях : ");
[...child].forEach((element, counter) => {
  console.log(
    `2.${counter + 1}. В категории ${element.querySelector("h2").innerHTML} ${
      element.querySelectorAll("li").length
    } элементов.`
  );
});
// Можно еще рассмотреть разные варианты вывода и подсчета

// Далее вывод того же в HTML

document
  .querySelector("#categories")
  .before(
    (document.createElement(
      "p"
    ).textContent = `В ul#categories - ${parent.children.length} категории`)
  );

document.querySelector("#categories").before(document.createElement("p"));

[...child].forEach((element, counter) => {
  document
    .querySelector("#categories")
    .before(
      (document.createElement("li").textContent = `В категории "${
        element.querySelector("h2").innerHTML
      }" - ${element.querySelectorAll("li").length} элементов. `)
    );
  document.querySelector("#categories").before(document.createElement("br"));
});


