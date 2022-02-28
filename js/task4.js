"use strict";

// _______________________Task 4_________________________________________


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilms;
        while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) || +numberOfFilms < 0) {
            numberOfFilms = +prompt('How much films do you watched?', '');
        personalMovieDB.count = +numberOfFilms;
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('A few films watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Classic vieer');
        } else if (personalMovieDB.count >= 30) {
            console.log('Da ti kinoshnik');
        } else {
            console.log('error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    togleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your ${i} favorite gengre?`);
            // while (genre === null || genre === '') {
            //     console.log('Invalid input!');
            //     genre = prompt(`Your ${i} favorite gengre?`);
            // }
            if (genre === null || genre === '') {
                console.log('Invalid input!');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
            // personalMovieDB.genres[i-1] = genre;
        }
    }
};


// ______________________________________________________________________