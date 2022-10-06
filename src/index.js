"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
let list = [];
var rnumber;
for (let index = 0; index < 30; index++) {
    rnumber = Math.floor(Math.random() * 10 + 1);
    list.push(new book_1.Book("Book#" + index, rnumber));
}
for (let index = 0; index < list.length; index++) {
    console.log(list[index]);
}
