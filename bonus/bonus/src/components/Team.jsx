import React from "react";


class Team extends React.Component {

    constructor(props) {
        super(props)

        
    }

    render() {

        return (
            <div>
                <h2 style ={{
                    color: this.props.color,
                    backgroundColor: 'black',
                    paddingLeft: '5px'
                }}>{this.props.name}</h2>

                <p><strong>Amount of points : {this.props.points}</strong></p>
                <p><strong>Number of matches : {this.props.points}</strong></p>


                <button>Add 1 point</button>
            </div>
        )
    }
}

export default Team;