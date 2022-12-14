{


    
    


    const giveResult = (result, euroElement) => {
        let resultElement = document.querySelector(".js-zl");
        let euroResultElement = document.querySelector(".js-eur");

        resultElement.innerText = result;
        euroResultElement.innerText = +euroElement.value;
    }

    const calculate = (euroElement) => {
        const courseElement = document.querySelector(".js-course");
        const result = +courseElement.value * +euroElement.value
        giveResult(result, euroElement);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const euroElement = document.querySelector(".js-sum");

        calculate(euroElement);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        onFormSubmit();
    }

    init();

}
