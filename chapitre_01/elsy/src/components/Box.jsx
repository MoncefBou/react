import React from "react";

class Box extends React.Component {

    render() {

        if (this.props.icon === "local_drink") {

            return (
                <div className="col-sm-3 col-6 box">
                    <span className="material-icons" style={{fontSize: '100px', color: this.props.color}}>
                        {this.props.icon}
                    </span>
    
                    <p>{this.props.value} {this.props.unit}</p>
                </div>
            );
        } else {
            
            return (
                <div className="col-sm-3 col-6 box">
                    <span className="material-icons" style={{fontSize: '100px', color: this.props.color}}>
                        {this.props.icon}
                    </span>
    
                    <p>{this.props.value} {this.props.unit}</p>

                    <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={(e)=> {this.props.onChange(e.target.value)}} />
                </div>
            );
        }
    }
}

export default Box;