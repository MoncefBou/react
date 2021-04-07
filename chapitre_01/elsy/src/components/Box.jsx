import React from "react";

class Box extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="col-sm-3 col-6 box">
                <span className="material-icons" style={{fontSize: '100px', color: this.props.color}}>
                    {this.props.icon}
                </span>

                <p>{this.props.value} {this.props.unit}</p>
            </div>
        );
    }
}

export default Box;