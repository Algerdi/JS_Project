"use strict";

const numberOfFilms = prompt('How much films do you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Wich movie do you watched last?', ''),
      b = prompt('How do you rate it??', ''),
      c = prompt('Wich movie do you watched last?', ''),
      d = prompt('How do you rate it??', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
