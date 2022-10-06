"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
let list = [];
var rnumber;
for (let index = 0; index < 30; index++) {
    rnumber = Math.floor(Math.random() * 10 + 1);
    list.push(new book_1.Book("Book#" + index, rnumber));
}
/*for (let index = 0; index < list.length; index++) {
    console.log(list[index]);
}

for (let index = 0; index < list.length; index++) {
    if(list[index].rating > 7){
        console.log(list[index]);
    }
}*/
function bestof(lista) {
    var bestRating = 0;
    var bestIndex = 0;
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].rating > bestRating) {
            bestRating = lista[index].rating;
            bestIndex = index;
        }
    }
    console.log(lista[bestIndex]);
}
bestof(list);
