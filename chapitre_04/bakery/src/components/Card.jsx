import React from "react";
import './style/Card.css';


class Card extends React.Component {

    constructor() {
        super()

        this.state = {
            image: '../../public/images/item.png'
        }
    }

    componentDidMount() {

        fetch('https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/' + this.props.itemName + '.png')
            .then(res => res.blob())
            .then(urlBlob => URL.createObjectURL(urlBlob))
            .then(urlImage => {
                console.log(urlImage)
                this.setState({
                    image: urlImage
                })
            })
    }

    render() {

        return (
            <div>
                <button className='buttonImg'
                    style={{ backgroundImage: `url(${this.state.image})` }}
                    onClick={() => this.props.onClick(this.props.itemName, this.props.price)}></button>
            </div>
        )
    }
}

export default Card;