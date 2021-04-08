import React from "react";
import "./Team.css";


class Team extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            points: this.props.points,
            matchs: 5
        };

    }

    render() {

        return (
            <div className ='box'>
                <h2 style={{
                    color: this.props.color,
                    paddingLeft: '5px'
                }}>{this.props.name}</h2>

                <p><strong>Amount of points : {this.state.points}</strong></p>
                <p><strong>Number of matches : {this.state.matchs}</strong></p>

                <button onClick={() => this.setState({ points: this.state.points + 1 })}>Add 1 point</button>
            </div>
        )
    }
}

export default Team;