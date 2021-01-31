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


for (let i=0;i<2;i++){  
    const a = prompt("последний фильм?"),
          b = prompt("на сколько его оцените?");    
    if (a != null && b != null && a != '' && b != '' && a.length <50 ){
        personMoveBD.movies[a] = b;
        console.log('done');
    } else 
    {
        console.log('err');
        i--;
    }

  
}



console.log(personMoveBD);