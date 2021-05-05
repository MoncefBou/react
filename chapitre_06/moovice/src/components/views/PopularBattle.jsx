import React from 'react';
import Card from '../Card';


class PopularBattle extends React.Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            currentBattle: 0
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: response.results
                })
                console.log('wewe')
            })
    }


    choose(indexOfMovie) {

        const newFavorite = JSON.parse(localStorage.getItem("favorites")) || [];
        newFavorite.push(this.state.movies[indexOfMovie].id);

        localStorage.setItem("favorites", JSON.stringify(newFavorite));

        this.setState({
            currentBattle: this.state.currentBattle + 2
        })

        console.log(localStorage.getItem("favorites"))
    }

    render() {
        if (this.state.movies.length === 0) {
            return (
                <div>

                </div>
            )
        } else if (this.state.currentBattle >= this.state.movies.length) {
            return (
                <div>
                    <h1>Vous avez parcouru tous les films !</h1>
                </div>
            )
        } else {

            return (
                <div>

                    <button onClick={() => this.choose(this.state.currentBattle)}>
                        <Card image={"https://image.tmdb.org/t/p/w500" + this.state.movies[this.state.currentBattle].poster_path}
                            title={this.state.movies[this.state.currentBattle].title}
                            year={this.state.movies[this.state.currentBattle].release_date}
                            description={this.state.movies[this.state.currentBattle].overview} />
                    </button>

                    <button onClick={() => this.choose(this.state.currentBattle + 1)}>
                        <Card image={"https://image.tmdb.org/t/p/w500" + this.state.movies[this.state.currentBattle + 1].poster_path}
                            title={this.state.movies[this.state.currentBattle + 1].title}
                            year={this.state.movies[this.state.currentBattle + 1].release_date}
                            description={this.state.movies[this.state.currentBattle + 1].overview} />
                    </button>
                </div>
            )
        }
    }
}

export default PopularBattle;