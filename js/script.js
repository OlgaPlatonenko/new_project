"use strict"; 
let numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?",'');
console.log(numberOfFilms);

const personMoveBD = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Последний фильм?");
const b = prompt("на сколько его оцените?");
const c = prompt("Последний фильм?");
const d = prompt("на сколько его оцените?");

personMoveBD.movies[a] = b;
personMoveBD.movies[c]=d;

console.log(personMoveBD);