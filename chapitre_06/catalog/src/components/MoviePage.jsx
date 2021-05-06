import React from 'react';
import './style/MoviePage.css';

class MoviePage extends React.Component {

    render() {

        return (
            <div>
                <img src={this.props.image}></img>
                <h2>{this.props.title}</h2>
                <span>Director : {this.props.director}</span>
                <span>Stars : {this.props.stars.map(actor=><li>{actor}</li>)}</span>
                <p>Description : {this.props.description}</p>
            </div>
        )
    }
}

export default MoviePage;