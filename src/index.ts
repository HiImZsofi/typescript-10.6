import { Book } from "./book";

let list: Array<Book> = [];

var rnumber;
for (let index = 0; index < 30; index++) {
    rnumber = Math.floor(Math.random()*10 + 1);
    list.push(new Book("Book#" + index, rnumber))
}

for (let index = 0; index < list.length; index++) {
    console.log(list[index]);
}