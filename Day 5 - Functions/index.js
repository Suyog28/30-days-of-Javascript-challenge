//Activity 1 - Function Declaration

function checkNumberEvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("Number is Even")
    } else {
        console.log("Number is Odd")
    }
}

checkNumberEvenOrOdd(4)


function sqaureOfNumber(num) {
    return console.log(num * num)
}

sqaureOfNumber(5)

//Activity 2 - Function Expresstion

let maximunOfTwoNumber = function (num1, num2) {

    if (num1 > num2) {
        console.log("Num 1 is greater")
    } else {
        console.log("Num2 is greater")
    }

}

maximunOfTwoNumber(23, 46)


let concatinatingTwoStrings = function (str1, str2) {
    return console.log(str1 + str2)
}

concatinatingTwoStrings("suy", "og")


//Activity 3 - Arrow Function

let sumOfTwoNumbers = (number1, number2) => {
    console.log(number1 + number2)
}

sumOfTwoNumbers(10, 10)

let checkStringCharacter = (strg, char) => {

    return strg.includes(char)
}


console.log(checkStringCharacter("suyog23", "s"))



//Activity 4 - Function parameter and default values

function personDetails(name, voterAge = 18) {
    return console.log(name + " VoterAge-" + voterAge)
}

personDetails("Suyog", 23)

function greetingMessage(name, greeting) {
    return console.log(greeting + " " + name)
}

greetingMessage("Suyog", "Good Morning !")


//Activity 5 - Higher Order function


// Higher-order function to call another function a specified number of times
const callFunctionNTimes = (func, n) => {
    for (let i = 0; i < n; i++) {
        func(); // Call the provided function 'func'
    }
};

// Example function to be called
const greet = () => {
    console.log("Hello!");
};

// Example usage:
callFunctionNTimes(greet, 3); // Calls the greet function 3 times



// Higher-order function that applies two functions sequentially to a value
const applyFunctions = (firstFunc, secondFunc, value) => {
    const firstResult = firstFunc(value); // Apply the first function to the value
    const finalResult = secondFunc(firstResult); // Apply the second function to the result of the first function
    return finalResult; // Return the final result
};

// Example functions to be applied
const double = (x) => x * 2;
const square = (x) => x * x;

// Example usage:
const initialValue = 5;
const result = applyFunctions(double, square, initialValue);
console.log(`Result of applying double and then square to ${initialValue} is: ${result}`);
