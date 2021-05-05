import React from 'react';


class Card extends React.Component {

    constructor() {
        super()

        this.state = {
            img: "http://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png"
        }
    }

    render() {

        return (
            <div>
                <img src={this.props.image || this.state.img } alt="Affiche" />
                <h3>{this.props.title}</h3>
                <span>{this.props.year}</span>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Card;