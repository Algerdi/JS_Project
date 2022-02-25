// _______________________Task 2_________________________________________

let numberOfFilms;

while (numberOfFilms == null || numberOfFilms == '') {
    numberOfFilms = prompt('How much films do you watched?', '');
}

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if (personalMovieDB.count < 10) {
    console.log('A few films watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classic vieer');
} else if (personalMovieDB.count >= 30) {
    console.log('Da ti kinoshnik');
} else {
    console.log('error');
}


// ______________________________________________________________________