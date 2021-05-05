import React from 'react';
import Card from '../Card';


class Popular extends React.Component {

    constructor() {
        super()

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: response.results
                })
            })
    }

    render() {

        return (
            <div>
                <h1>Popular</h1>

                <div>
                    {this.state.movies.map(elem => {
                        return <Card image={"https://image.tmdb.org/t/p/w500" + elem.poster_path}
                                     title={elem.title}
                                      year={elem.release_date}
                                      description={elem.overview}  />
                    })}
                </div>
            </div>
        )
    }
}

export default Popular;

// https://image.tmdb.org/t/p/w500