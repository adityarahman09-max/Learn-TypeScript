/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type book = {
    isbnNumber: number,
    title:  String,
    authorName: String,
    totalPages: number,
    category: String,
    available: boolean
}

const libraryBooks: book[]=[
    {
        isbnNumber: 456321,
        title: "How to Make a Pizza",
        authorName: "James Rodrigo",
        totalPages: 90,
        category: "Culinary",
        available: true
    },{
        isbnNumber: 142536,
        title: "Mind your Brain",
        authorName: "Sujarwo Smithe",
        totalPages: 20,
        category: "Motivation",
        available:false
    },{
       isbnNumber: 9633258,
        title: "Give Up Bro",
        authorName: "Chris Messi",
        totalPages: 11,
        category: "Motivation",
        available:true 
    }
]

console.log(libraryBooks)