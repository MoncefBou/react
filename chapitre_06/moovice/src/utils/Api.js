import Moment from 'moment';

const getLatestMovies = () => {

    return fetch(`http://localhost:8000/latestmovies`)
        .then(res => res.json())
        .then(response => {
            return response.results
        })

}

const getPopularMovies = () => {
    return fetch("http://localhost:8000/popularmovies")
        .then(res => res.json())
        .then(response => {
            return response.results
        })
}

const getMovie = (id) => {

   return fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=bf01af8f5d704591a09edcc0c2f5e084`)
        .then(res => res.json())
        .then(movie => {
            return {
                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                title: movie.title,
                year: movie.release_date,
                description: movie.overview
            }
        })

}
export { getPopularMovies, getLatestMovies, getMovie };