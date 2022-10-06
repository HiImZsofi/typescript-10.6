"use strict";
class Book {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
    set setRating(rating) {
        if (rating > 10 || rating < 1) {
            throw new Error("Rating is invalid");
        }
        else {
            this.rating = rating;
        }
    }
    toString() {
        return "A könyv neve: " + this.name + " értékelése: " + this.rating;
    }
}
