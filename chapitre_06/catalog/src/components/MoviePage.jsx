import React from 'react';


class MoviePage extends React.Component {

    render() {

        return (
            <div>
                <img src={this.props.image}></img>
                <h2>{this.props.title}</h2>
                <span>Director : {this.props.director}</span>
                <span>Stars : {this.props.stars}</span>
                <p>Description : {this.props.description}</p>
            </div>
        )
    }
}

export default MoviePage;