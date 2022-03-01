"use strict";

// _______________________Task 1_________________________________________

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

// _____________________________________________________________________




// let g;
// if (g) {
//     console.log('da');
// } else {
//     console.log('net')
// }



// const num = 40;

// (num == 50) ? console.log('OK!') : console.log('NO!')


// switch (num) {
//     case 49:
//         console.log('not equal');
//         break;
//     case 100:
//         console.log('not equal too');
//         break;
//     case 50:
//         console.log('OK!');
//         break;
//     default:
//         console.log('Not now');
//         break;
// }



let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    ++num;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}