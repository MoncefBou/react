import React from 'react';
import Card from '../Card';


class Favorites extends React.Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            favIDs: this.getStorage()
        }

        this.getStorage = this.getStorage.bind(this)
        this.getMovie = this.getMovie.bind(this)
    }


    componentDidMount() {
        
if (this.state.favIDs.length !== -1) {

    const arrayMovies = this.state.favIDs.map(id => {
        return this.getMovie(id)
    })   
}
        // this.setState({
        //     movies: arrayMovies
        // })

    }


    getStorage() {
        // const arrayFavorites = JSON.parse(localStorage.getItem("favorites"));

        // this.setState({
        //     favIDs: arrayFavorites
        // })

        return JSON.parse(localStorage.getItem("favorites"));
    }


    getMovie(id) {

        fetch(`http://localhost:8000/movie/${id}`)
            .then(res => res.json())
            .then(movie => {
                const newArray = this.state.movies
                let newMovie = {
                    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    title: movie.title,
                    year: movie.release_date,
                    description: movie.overview
                }
                newArray.push(newMovie)

                this.setState({
                    movies: newArray
                })

                // return {
                //     image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                //     title: movie.title,
                //     year: movie.release_date,
                //     description: movie.overview
                // }
            })

    }


    render() {
        if (this.state.movies[0] !== undefined) {

            return (
                <div>
                    <h1>Favorites</h1>

                    <div>
                        {this.state.movies.map(elem => {
                            return <Card image={elem.image}
                                title={elem.title}
                                year={elem.year}
                                description={elem.description} />
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <h1>Favorites</h1>
            )
        }

    }
}

export default Favorites;

// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084"