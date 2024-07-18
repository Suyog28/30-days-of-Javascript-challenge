//Activity 1 - Array Creation and access

const numbers = [1, 2, 3, 4, 5, 6]
console.table(numbers)

console.log("First Element:" + numbers[0], "Last Element:" + numbers.slice(-1)[0])

//Activity 2 - Array Method

numbers.push(7)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.shift()
console.log(numbers)

numbers.unshift(1)
console.log(numbers)

//Activity 3 -  Array Mehtods

const newArrayOfNumber = numbers.map(num => num + num)
console.log(newArrayOfNumber)

const newFitlerArray = numbers.filter(num => num % 2 == 0)
console.log(newFitlerArray)

const sumOfAllNumber = numbers.reduce((a, b) => a + b)
console.log(sumOfAllNumber)


//Activity 4 - Array Iteration

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

numbers.forEach(num => console.log(num))

//Activity 5 - Multi-dimentional Array

const multiDimentionalArray = [[2, 3], [4, 5]]

console.log(multiDimentionalArray)


console.log(multiDimentionalArray[1][0])