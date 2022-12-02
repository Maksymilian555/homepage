console.log("Ten kod jest w repozytorium git");

let euroElement = document.querySelector(".js-sum");
let courseElement = document.querySelector(".js-course");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-zl");
let euroResultElement = document.querySelector(".js-eur");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let euro = euroElement.value;
    let course = courseElement.value;

    let zl = euro * course;

    resultElement.innerText = zl;
    euroResultElement.innerText = euro;
});

