import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MoviePage from './components/MoviePage.jsx';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      arrayMovie: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/movies/")
      .then(res => res.json())
      .then(movies => {

        this.setState({
          arrayMovie: movies
        })

      })
  }

  render() {

    return (
      <BrowserRouter>
        <div className="firstPage">
      <nav>

          {this.state.arrayMovie.map(movie => {
            return (
              <div className="box">
                <img src={movie.image}></img>
                <span><Link to={`/${movie.id}`}>{movie.title}</Link></span>
              </div>
            )
          })}
          </nav>

          <Switch>
            {this.state.arrayMovie.map(movie => {
              return <Route exact path={`/${movie.id}`}
                render={() => <MoviePage
                  image={movie.image}
                  id={movie.id}
                  title={movie.title}
                  director={movie.director}
                  description={movie.description}
                  stars={movie.stars} />} />
            })}
          </Switch>
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
