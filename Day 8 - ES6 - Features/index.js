//Activity 1 - Template Literals

let name = "Suyog", age = 30

console.log(`My name: ${name} ${age}`)

//Multi line 

console.log(`My name: ${name} 
    ${age}`)

//Activity 2 - Destructuring 

const numbers = [1,233,4,5,10]

const [a,b] = numbers

console.log(a)
console.log(b)


const books = {
    name1:"Suyog",
    auther:"SuyogLife"
}

const {name1, auther} = books

console.log(name1)
console.log(auther)


//Activity 3 - Spread and Rest Operators

const cities = ["Nagpur", "Pune", "Mumbai"]

const newArray = [...cities,...numbers]
console.log(newArray)

//Rest Operator - Expand the Array

function sumofnumbers(...nums){

    return nums.reduce((total, el) => total+el,0)

}

console.log(sumofnumbers(2,3,4,5))


//Activity 4 - Default Parameter

function multiplicationOFNumbers(num1, num2=1){
 return num1 * num2
}

console.log(multiplicationOFNumbers(20,2))

//Activity 5 - Enhanced Object Literal 

const detailsOfPerson = {
    Name:"Suyog",
    City:"Shindi Bk",
    Age:30,
    state:function(){
        console.log("Maharashtra") 
    }
}

console.log(detailsOfPerson)


let nameOfPerson = "Suyog"

const details = {nameOfPerson}

console.log(details)
