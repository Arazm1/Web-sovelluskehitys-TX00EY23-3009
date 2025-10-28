'use strict';

function Main(){

    const movies = [];

    const numOfMovies = Number(prompt("Enter the number of movies you'd like to add:"));
    for(let i = 1; i<=numOfMovies; i++){

        let movie = {
            movieName: askMovieTitle(),
            movieRating: askMovieRate(),
        };
        //movie.movieName = askMovieTitle();
        //movie.movieRating = askMovieRate();
        movies.push(movie)
    }

    console.log(movies)
    const moviesOrderedByRating = orderByRating(movies);
    console.log(moviesOrderedByRating);

    displayMovies(moviesOrderedByRating);
    
}


function askMovieTitle(){
    let movieTitle;
    do{
        movieTitle = prompt("Enter a movie title: ");
        
    }while(movieTitle == '');

    return movieTitle;
}


function askMovieRate(){
    let movieRating;
    do{
        movieRating = Number(prompt("Rate this movie (1-5): "));

    }while(movieRating <=0 || movieRating >= 6 || isNaN(movieRating));

    return movieRating;
}


function orderByRating(movies){
    return movies.sort((a, b) => b.movieRating - a.movieRating);
}

function displayMovies(moviesOrderedByRating){
    let result = '';

    for(const movie of moviesOrderedByRating){
        result += `<li>${movie.movieName} — Rating: ${movie.movieRating}</li>`;
    }
    
    document.getElementById('moviesList').innerHTML = result;

    highestRatedMovie(moviesOrderedByRating);
}

function highestRatedMovie(moviesOrderedByRating){
    const topRatedMovie = moviesOrderedByRating[0];

    document.getElementById('topMovie').innerHTML = `<li>Title: ${topRatedMovie.movieName} and Rating: ${topRatedMovie.movieRating}</li>` 
}


Main();