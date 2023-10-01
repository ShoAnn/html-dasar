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

if (buttonsWrapper !== null) {
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
    })
} else {
    console.log("Element with class 'map' not found.");
}


// product data array
const cardData = [
    {
        name: "Chengdu J-20",
        imgPath: "../assets/images/Chengdu J-20.jpg",
        desc: "The Chengdu J-20, also known as Mighty Dragon, is a twinjet all-weather stealth fighter aircraft developed by China's Chengdu Aerospace Corporation for the People's Liberation Army Air Force. The J-20 is designed as an air superiority fighter with precision strike capability. Wikipedia"
    },
    {
        name: "F-35 Lightning II",
        imgPath: "../assets/images/f35_lightning_II.jpg",
        desc: "The Lockheed Martin F-35 Lightning II is an American family of single-seat, single-engine, all-weather stealth multirole combat aircraft that is intended to perform both air superiority and strike missions. It is also able to provide electronic warfare and intelligence, surveillance, and reconnaissance capabilities."
    },
    {
        name: "F-22 Raptor",
        imgPath: "../assets/images/f22_raptor.jpg",
        desc: "The Lockheed Martin F-22 Raptor is an American single-seat, twin-engine, supersonic all-weather stealth fighter aircraft developed for the United States Air Force. Wikipedia"
    },
    {
        name: "Sukhoi Su-57",
        imgPath: "../assets/images/Sukhoi Su-57.jpg",
        desc: "The Sukhoi Su-57 is a twin-engine stealth multirole fighter aircraft developed by Sukhoi. It is the product of the PAK FA programme, which was initiated in 1999 as a more modern and affordable alternative to the MFI. Sukhoi's internal designation for the aircraft is T-50. Wikipedia"
    },
    {
        name: "Boeing X-53 Active Aeroelastic Wing",
        imgPath: "../assets/images/Boeing X-53 Active Aeroelastic Wing.jpg",
        desc: "The X-53 Active Aeroelastic Wing development program is a completed American research project that was undertaken jointly by the Air Force Research Laboratory, Boeing Phantom Works and NASA's Dryden Flight Research Center, where the technology was flight tested on a modified McDonnell Douglas F/A-18 Hornet. Wikipedia"
    },
    {
        name: "Eurofighter Typhoon",
        imgPath: "../assets/images/Eurofighter Typhoon.jpg",
        desc: "The Eurofighter Typhoon is a European multinational twin-engine, canard delta wing, multirole fighter.[3][4] The Typhoon was designed originally as an air-superiority fighter[5] and is manufactured by a consortium of Airbus, BAE Systems and Leonardo that conducts the majority of the project through a joint holding company, Eurofighter Jagdflugzeug GmbH. The NATO Eurofighter and Tornado Management Agency, representing the UK, Germany, Italy and Spain, manages the project and is the prime customer.[6]"
    },
    {
        name: "General Dynamics F-16 Fighting Falcon",
        imgPath: "../assets/images/General Dynamics F-16 Fighting Falcon.jpg",
        desc: "The General Dynamics F-16 Fighting Falcon is an American single-engine supersonic multirole fighter aircraft originally developed by General Dynamics for the United States Air Force. Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft. Wikipedia"
    },
    {
        name: "Sukhoi Su-34",
        imgPath: "../assets/images/Sukhoi Su-34.jpg",
        desc: "The Sukhoi Su-34 is a Soviet-origin Russian twin-engine, twin-seat, all-weather supersonic medium-range fighter-bomber/strike aircraft. It first flew in 1990, intended for the Soviet Air Forces, and it entered service in 2014 with the Russian Air Force. Wikipedia"
    }
];

// displaying array
function displayDataFromArr(arr, divContainer) {
    arr.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imgElement = document.createElement('div');
        imgElement.classList.add('img');
        const img = document.createElement('img');
        img.classList.add('img-thumbnail');
        img.src = card.imgPath;
        img.alt = card.name;
        imgElement.appendChild(img);

        const titleElement = document.createElement('div');
        titleElement.classList.add('card-title');
        const strong = document.createElement('strong');
        strong.textContent = card.name;
        titleElement.appendChild(strong);

        const descElement = document.createElement('p');
        descElement.classList.add('card-desc');
        descElement.textContent = card.desc;

        cardElement.appendChild(imgElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(descElement);

        divContainer.appendChild(cardElement);
    })
}

const cardsContainer = document.querySelector('.cards');
if (cardsContainer !== null) {
    displayDataFromArr(cardData, cardsContainer);
} else {
    console.log("Element with class 'cards-api' not found.");
}

// --- fetch POST ( sudah dijalankan ) ---

// async function postJSON(url, data) {
//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json;charset=utf-8",
//             },
//             body: JSON.stringify(data)
//         });
//         const result = await response.json();
//         console.log("Success:", result);

//     } catch (error) {
//         console.error("Error:", error);
//     }
// };

// cardData.forEach(obj => {
//     postJSON("https://crudcrud.com/api/c87e1fad9baa49e88e67943a29c034b3/product", obj);
// })

// === end fetch POST ===

// --- fetch GET ---
async function getCrud(url) {
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    return data;
}
const fetchBtn = document.querySelector(".btn-fetch");
if (fetchBtn !== null) {
    fetchBtn.addEventListener("click", () => {
        getCrud('https://crudcrud.com/api/c87e1fad9baa49e88e67943a29c034b3/product')
            .then((res) => {
                console.log(res);
                const cardsApiContainer = document.querySelector('.cards-api');
                if (cardsApiContainer !== null) {
                    displayDataFromArr(res, cardsApiContainer);
                } else {
                    console.log("Element with class 'cards-api' not found.");
                }
            }).catch((error => {
                console.log(error);
            }))
    })
} else {
    console.log("element is null")
}
// === end fetch GET ===