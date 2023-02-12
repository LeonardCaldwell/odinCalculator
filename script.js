let numString = "";

function reply_click(clicked_button) {
    console.log(clicked_button);
    const display = document.querySelector("#display");
    if(clicked_button.classList.contains("num")) {
        console.log("number");
        numString += clicked_button.id;
        display.textContent = numString;
    } else if(clicked_button.classList.contains("ops")) {
        console.log("operator");
        if(clicked_button.id === "clear") {
            display.textContent = "";
        }
    }
}

function addition(num1,num2) {
    return num1 + num2;
}

function subtraction(num1,num2) {
    return num1 - num2;
}

function multiplication(num1,num2) {
    return num1 * num2;
}

function division(num1,num2) {
    return num1 / num2;
}
