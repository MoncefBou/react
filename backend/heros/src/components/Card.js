import React from 'react';
import './style/Card.css';

function Card(props) {

    return (
        <div className="card">
            <img src={props.image} alt='Heros' />
            <h2>{props.name}</h2>
            <span>Âge: {props.age}</span>
            <span >{props.isAlive ? "Live" : "Dead"}</span>
            <ul>
                Power : {props.power.map(elem => <li>{elem}</li>)}
            </ul>
        </div>
    )
}

export default Card;