import React from 'react';
import Card from '../Card';
import { getMovie } from '../../utils/Api';


class Favorites extends React.Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            favIDs: this.getStorage(),
            finish: false
        }

        this.getStorage = this.getStorage.bind(this)
    }


    componentDidMount() {

        if (this.state.favIDs !== null) {

            const arrayMovies = [];
            let count = 0;
            this.state.favIDs.forEach(id => {
                count++
                getMovie(id)
                    .then(res => {
                     arrayMovies.push(res)
                    })
            })

        if(this.state.favIDs.length === count) {
           console.log("salut", arrayMovies)
            this.setState({
                movies: arrayMovies,
                finish : true
            })
        }
        }
    }


    getStorage() {
        return JSON.parse(localStorage.getItem("favorites"));
    }


    render() {
        if (this.state.finish) {
console.log('state movies', this.state.movies)
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
            console.log("ya un probleme mec")
            return (
                <h1>Favorites</h1>
            )
        }

    }
}

export default Favorites;

// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084"