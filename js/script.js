"use strict"; 

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?",'');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?",'');
    }
}

start();
const personMoveBD = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}

rememberMyFilms();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personMoveBD);
    }
}



function writeYourGenres(){
    for (let i=1;i<=3;i++){
        personMoveBD.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    
    }
}

writeYourGenres();
showMyDB(personMoveBD.privat);