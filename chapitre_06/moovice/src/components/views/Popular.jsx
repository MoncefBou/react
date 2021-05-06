import React from 'react';
import Card from '../Card';


class Popular extends React.Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            page: 1
        }

        this.loadScroll = this.loadScroll.bind(this);
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: response.results
                })
            })

        window.addEventListener('scroll', (e) => this.loadScroll(e))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',(e) => this.loadScroll(e));
    }

    loadScroll(e) {
        if ((e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop) === e.target.scrollingElement.clientHeight) {

            let currentPage = this.state.page
            let newPage = currentPage + 1
            fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084" + "&page=" + newPage)
                .then(res => res.json())
                .then(response => {

                    const allMovies = this.state.movies.concat(response.results)

                    console.log(allMovies);
                    this.setState({
                        movies: allMovies,
                        page: this.state.page + 1
                    })
                })
        }
    }



    render() {

        return (
            <div onScroll={(e) => console.log("we")}>
                <h1>Popular</h1>

                <div>
                    {this.state.movies.map(elem => {
                        return <Card image={"https://image.tmdb.org/t/p/w500" + elem.poster_path}
                            title={elem.title}
                            year={elem.release_date}
                            description={elem.overview} />
                    })}
                </div>
            </div>
        )
    }
}

export default Popular;

// https://image.tmdb.org/t/p/w500