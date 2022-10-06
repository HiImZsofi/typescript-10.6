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

for (let index = 0; index < list.length; index++) {
    if(list[index].rating > 7){
        console.log(list[index]);
    }
}

function bestof(lista: Array<Book>){
    var bestRating = 0;
    var bestIndex = 0;
    for (let index = 0; index < lista.length; index++) {
        if(lista[index].rating > bestRating){
            bestRating = lista[index].rating;
            bestIndex = index;
        }
    }
    console.log(lista[bestIndex]);
}
bestof(list)