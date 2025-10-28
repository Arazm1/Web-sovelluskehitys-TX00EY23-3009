function Main(){

    const movies = [];

    const numOfMovies = Number(prompt("Enter the number of movies you'd like to add:"));
    for(let i = 1; i<=numOfMovies; i++){

        let movie = {
            movieName: '',
            movieRating: '',
        };

        movie.movieName = askMovieTitle();
        movie.movieRating = askMovieRate();

        movies.push(movie)

    }

    console.log(movies)
    const moviesOrderedByRating = orderByRating(movies);
    console.log(moviesOrderedByRating);


}


function askMovieTitle(){
    let movieTitle;
    do{
        movieTitle = prompt("Enter a movie title: ")
        return movieTitle;

    }while(movieTitle != '')

}

function askMovieRate(){
    let movieRating;
    do{
        movieRating = prompt("Rate this movie (1-5): ")
        return movieRating;

    }while(movieRating != Number)

}



function orderByRating(movies){
    return movies.sort((a, b) => b.movieRating - a.movieRating);
}


Main();