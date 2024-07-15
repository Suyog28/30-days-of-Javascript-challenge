// Activity 1 : If-Else Statements

//Task 1 - Number is positive, Negative or Zero
function numberCheck(num) {
    if (num > 1) {
        console.log("Number is positive")
    } else if (num < 0) {
        console.log("Number is Negative")
    } else {
        console.log("Number is Zero")
    }
}

numberCheck(-1000)

//Task 2 - Person eligible for an Vote or not

function voteEligibilityCheck(age) {
    if (age >= 18) {
        console.log("Person is eligible for voting!!")
    } else {
        console.log("Person is not eligible for voting !! try once you turn 18+++")
    }
}


voteEligibilityCheck(1)


//Activity 2 - Nested if-else Statements

function largestCheck(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("Num 1 is largest")
    } else if (num2 > num3) {
        console.log("Num 2 is largest")
    } else {
        console.log("Num 3 is largest")
    }
}

largestCheck(10, 123, 1)


//Activity 3 - Swtich Case

function dayOfWeek(day) {
    switch (day) {
        case 1: console.log("Monday")
            break;
        case 2: console.log("Tuesday")
            break;
        case 3: console.log("Wendusday")
            break;
        case 4: console.log("Thrusday")
            break;
        case 5: console.log("Friday")
            break;
        case 6: console.log("Saturday")
            break;
        case 7: console.log("Sunday")
            break;
        default:
            console.log("Not valid Day")
            break;
    }
}


function gradeCheck(score) {
    switch (true) {
        case (score > 80 && score <= 100): console.log("Grade A")
            break;
        case (score > 60 && score <= 80): console.log("Grade B")
            break;
        case (score > 40 && score <= 60): console.log("Grade C")
            break;
        case (score > 35 && score <= 40): console.log("Grade D")
            break;
        case (score < 35): console.log("Grade F")
            break;

        default:
            console.log("Not a valid score")
            break;
    }
}
gradeCheck(8)


//Activity 4 - Conditional(Ternary) Operator

function checkEven(num) {
    return num % 2 === 0 ? "Number is Even" : "Number is Odd"
}

console.log(checkEven(3))


//Activity 5 -  Combining Conditions

function leapYearCheck(year) {

    if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) {
        console.log("It is leap year")
    } else {
        console.log("It is not an Leap Year")
    }
}

leapYearCheck(2000)