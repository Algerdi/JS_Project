"use strict";

// function showFirstMessage() {
//     console.log("Hello!");
// }
// showFirstMessage();

// const logger = function() {
//     console.log('function expression');
// };

// logger();

// const calculator = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// console.log(calculator(1, 2));



// _______________________Task 3_________________________________________

let numberOfFilms;

function start() {
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How much films do you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        const movie = prompt('Wich movie do you watched last?', ''),
          rate = prompt('How do you rate it??', '');
    
        if (movie != null && rate != null && movie != '' && rate != '' && movie.length < 50) {
            personalMovieDB.movies[movie] = +rate;
            console.log(`${movie} added with rating ${rate}`);
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('A few films watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Classic vieer');
    } else if (personalMovieDB.count >= 30) {
        console.log('Da ti kinoshnik');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your ${i} favorite gengre?`);
    }
}

writeYourGenres();

// ______________________________________________________________________