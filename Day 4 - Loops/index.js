//Day 4-loops

//Activity 1: For Loop

//Write a program to print numbers from 1 to 10 using for loop

function printNumbers(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
}

printNumbers(10)


//Write a program to print the multplication table of 5 using a for loop.

function multplicationTable(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(i * num)
    }
}

multplicationTable(2)


//Activity 2: While Loop

//Write a program to calculate the sum of numbers from 1 to 10 using a while loop

let num = 10
let sum = 0
let i = 1
while (i <= num) {
    sum += i
    i++
}

console.log(sum)

//Write a program to print numbers from 10 to 1 using while loop
let j = 10
while (j > 0) {
    console.log(j)
    j--
}


//Activity 3: Do.. While Loop

//Write a program to prit numbers from 1 to 5 using do...while loop

let a = 0
do {
    console.log(a)
    a++
} while (a <= 5)

//Write a program to calculate the factorial of a number using a do while loop

function factorial(x) {
    if (x == 0 || x == 1) {
        return 1;
    }
    let result = x;

    do {
        result = result * (x - 1);
        x = x - 1;
    }

    while (x > 1);
    return result;
}

console.log(factorial(5));


//Activity 4 : Nested Loops
let string = ""
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        string += "* "
    }
    string += "\n"

}
console.log(string)


//Activity 5 - Loop control Statement
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    } else {
        console.log(i)
    }
}

for (let i = 0; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i)
}