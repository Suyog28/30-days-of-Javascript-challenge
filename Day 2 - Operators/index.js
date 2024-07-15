// Activity 1: Arithmetic Operator

//Addition of two Numbers 
function addition(a, b) {
    return a + b
}
console.log("Sum of Two Numbers:" + addition(10, 30))


//Subtration of two Numbers
function subtraction(a, b) {
    return a - b
}
console.log("Subtraction of two numbers:" + subtraction(40, 10))


//Multifly of two numbers
function multifly(a, b) {
    return a * b
}
console.log("Multifly of two numbers:" + multifly(20, 30))

//Division of two numbers
function division(a, b) {
    return a / b
}
console.log("Division of two numbers:" + division(30, 4))

//Find the remainder when one number is divided(Modulo Operation %)
function remainder(a, b) {

    return a % b
}
console.log("remainder of two numbers:" + remainder(15, 2))

//Activity 2: Assisgnment Operator

let num = 1
num += 1
console.log(num)

let num2 = 10
num2 -= 5
console.log(num2)

//Activity 3: Comparison Operator

if (num > num2) {
    console.log("Num is greater")
} else {
    console.log("Num2 is greater")
}

if (num >= num2) {
    console.log(num)
} else {
    console.log(num2)
}

if (num == num2) {
    console.log("Its correct")
} else {
    console.log("wrong")
}

//Activity 4: Logical Operator

let isCheck = true
let number = 1
let number2 = 0

if (isCheck && number) {
    console.log(num)
} else {
    console.log("Not a Number")
}

if (number || number2) {
    console.log("Is same")
} else {
    console.log("Not Same")
}

if (!isCheck) {
    console.log(typeof isCheck)
}


//Activity 5: Ternary Operator

let result = number > number2 ? "Number 1 greater" : "Number 2 is greater"
console.log(result)