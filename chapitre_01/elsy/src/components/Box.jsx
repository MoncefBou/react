import React from "react";

class Box extends React.Component {

    render() {

        if (this.props.icon === "local_drink") {

            return (
                <div className="col-sm-3 col-6 box">
                    <span className="material-icons" style={{ fontSize: '100px', color: this.props.color }}>
                        {this.props.icon}
                    </span>

                    <p>{this.props.value} {this.props.unit}</p>
                </div>
            );
        } else if (this.props.icon === "directions_walk") {

            return (
                <div className="col-sm-3 col-6 box">
                    <span className="material-icons" style={{ fontSize: '100px', color: this.props.color }}>
                        {this.props.icon}
                    </span>

                    <p>{this.props.value} {this.props.unit}</p>
                    <button onClick={this.props.onClickMinus} style={{
                        height: 25,
                        width: 25,
                        fontSize: '12px',
                        borderRadius: '50%',
                        border: '1px solid black',
                        backgroundColor: 'grey',
                        fontWeight: 'bold',
                        boxShadow: '4px 4px 8px -5px rgba(0,0,0,0.44)',
                        marginRight: 25}}>-</button>

                    <button onClick={this.props.onClickPlus} style={{
                        height: 25,
                        width: 25,
                        fontSize: '12px',
                        borderRadius: '50%',
                        border: '1px solid black',
                        backgroundColor: 'white',
                        fontWeight: 'bold',
                        boxShadow: '4px 4px 8px -5px rgba(0,0,0,0.44)'}}>+</button>
                </div>
            )
        } else {

            return (
                <div className="col-sm-3 col-6 box">
                    <span className="material-icons" style={{ fontSize: '100px', color: this.props.color }}>
                        {this.props.icon}
                    </span>

                    <p>{this.props.value} {this.props.unit}</p>

                    <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={(e) => { this.props.onChange(e.target.value) }} />
                </div>
            );
        }
    }
}

export default Box;