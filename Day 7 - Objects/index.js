//Activity 1 - Object Creations and Access

const books = {
    title:"Life Memories",
    author:"Suyog Muley",
    year:1993,
    book : function() {
        return this.title +" "+this.author+" "+ this.year
    },
    book1: function(year){
 return this.year = 1995
    },

}

//console.log(books)

//console.log(books.title +" " +books.author)


//Activity 2 - Object Methods

books.book1()

console.log(books)

//Activity 3 -  Nested Objects

const library = [
    {
        name:"Chaitali Life",
        book:"Chaitali Book"
    },
    {
        name:"Suyog Life",
        book:"Suyog Book"
    },
    {
        name:"Vijay Life",
        book:"Vijay Book"
    }
]

console.log(library)

library.forEach(element => {
    console.log(element.name)
});

//Activity 4 - The "this" Keywords

console.log(books.book())

//Activity 5 - Object Iteration 

for (const element in books) {
  console.log(element + " "+ books[element])
}

//Object.keys/Object.values

console.log(Object.keys(books))
console.log(Object.values(books))

