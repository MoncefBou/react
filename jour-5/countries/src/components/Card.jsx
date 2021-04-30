import React from "react";
import "./style/Card.css";

class Card extends React.Component {


    render() {
        return (
            <div className="card d-flex flex-column align-items-center mx-2 mb-4" >

                <img className="mb-3" src={`${this.props.flag}`} alt="flag" />

                <div>

                    <h3>Country:<br /> {this.props.name}</h3>

                    <span className="capital">Capital: {this.props.capital}</span>

                    <div className="mt-3 mb-3">
                        <span className=" text material-icons">
                            public
                </span>
                        <span className="text" > Region:<br /> {this.props.region}</span>
                    </div>

                    <div>
                        <span className=" icon-people material-icons">
                            people
                    </span>
                        <span className="text"> Population:<br /> {this.props.population}</span>
                    </div>
                </div>

            </div >
        )
    }
}

export default Card;