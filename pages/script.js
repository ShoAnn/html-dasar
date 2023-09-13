function clickButton() {
    // Variables and Data Types (Primitive and Object)
    let str = "Hello, World"; // String
    let num = 42; // Number
    let bool = true; // Boolean
    let obj = { key: "value" }; // Object

    // Naming Rules, var, let, and const
    let variableName = "ThisIsAValidVariableName"; // Camel Case
    const PI = 3.14159; // Constant variable

    // Statement, Semicolon, and Comment
    let a = 5; // Statement
    let b = 10; // Semicolon is optional, but good practice
    // Single-line comment
    // This is a comment
    /*
    Multi-line
    comment
    */

    // Type Conversion, Arithmetic, Assignment, Comparison, Logical, Bitwise, and Ternary Operators
    let numStr = "42";
    let numConverted = parseInt(numStr); // Convert to integer
    let sum = 5 + 3; // Addition
    let product = 5 * 3; // Multiplication
    let x = 10;
    x += 5; // Assignment
    let isEqual = 5 === 5; // Comparison
    let andOperator = true && false; // Logical
    let bitwiseAnd = 5 & 3; // Bitwise
    let age = 20;
    let canVote = age >= 18 ? "Yes" : "No"; // Ternary Operator

    // Alert, Confirm, and Prompt
    alert("This is an alert!"); // Alert
    let isConfirmed = confirm("Are you sure?"); // Confirm
    console.log(isConfirmed);
    let userInput = prompt("Enter something:"); // Prompt
    console.log(userInput);

    // Operators and Popup Modals
    let c = 5; // Variable 'c' is declared here
    let d = 3; // Variable 'd' is declared here
    let result = c + d; // Result of addition
    alert("Hello!"); // Alert
    let userResponse = confirm("Are you ready?"); // Confirm
    console.log(userResponse);
    let userInput2 = prompt("Enter your name:"); // Prompt
    console.log(userInput2);

    // Basic, Expression, and Arrow Function
    function sayHello(name) {
        console.log("Hello, " + name);
    }
    sayHello("John");
    let multiply = function (a, b) {
        return a * b;
    };
    console.log(multiply(3, 4));
    let add = (x, y) => x + y;
    console.log(add(2, 3));

    // Conditionals, Loops, and Functions (For, Do While, While, If, If-Else, Else If, Switch)
    let age2 = 20; // Variable 'age2' is declared here
    if (age2 >= 18) {
        console.log("You can vote!");
    } else {
        console.log("You cannot vote.");
    }
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    let count2 = 0; // Variable 'count2' is declared here
    while (count2 < 3) {
        console.log("Count: " + count2);
        count2++;
    }
    let num2 = 1; // Variable 'num2' is declared here
    do {
        console.log(num2);
        num2++;
    } while (num2 <= 5);
    let day2 = "Monday"; // Variable 'day2' is declared here
    switch (day2) {
        case "Monday":
            console.log("It's Monday.");
            break;
        case "Tuesday":
            console.log("It's Tuesday.");
            break;
        default:
            console.log("It's another day.");
    }

}

document.querySelector(".cat").addEventListener("click", clickButton);


const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-25%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains('third')) {
            slides.style.transform = 'translatex(-50%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('fourth')) {
            slides.style.transform = 'translatex(-75%)';
            e.target.classList.add('active');
            e.target.classList.add('active');
        }
    }
});
