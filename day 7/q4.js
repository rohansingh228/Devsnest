// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

function displayReadingStatus(inputObject) {
    for (let item of library) {
        console.log("Title of the book is: ", item.title);
        console.log("Author of the book is: ", item.author);
        console.log("Reading Status of the book is: ", item.readingStatus);
    }

}

var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}, {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
}, {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];

displayReadingStatus(library);