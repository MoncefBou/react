import React from 'react';
import Card from '../Card';
// import Moment from 'moment';
import { getLatestMovies } from '../../utils/Api';


class WeeklyBattle extends React.Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            currentBattle: 0
        }
    }

    componentDidMount() {
        // let TODAY = Moment().format("YYYY-MM-DD");
        // let LAST_WEEK = Moment().subtract(7, 'days').format("YYYY-MM-DD");

        // fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=bf01af8f5d704591a09edcc0c2f5e084`)
        //     .then(res => res.json())
        //     .then(response => {
        //         this.setState({
        //             movies: response.results
        //         })
        //     })

        getLatestMovies()
        .then(res => {
            this.setState({
                movies: res
            })
        })

    }


    choose(indexOfMovie) {
        
        const newFavorite = JSON.parse(localStorage.getItem("favorites")) || [];

        if (newFavorite.indexOf(this.state.movies[indexOfMovie].id) === -1  ) {

            newFavorite.push(this.state.movies[indexOfMovie].id);
            
            localStorage.setItem("favorites", JSON.stringify(newFavorite));
        }
            
            this.setState({
                currentBattle: this.state.currentBattle + 2
            })
            
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


export default WeeklyBattle;