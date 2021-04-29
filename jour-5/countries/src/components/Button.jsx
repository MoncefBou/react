import React from "react";

class Button extends React.Component {

    render() {
        return (
                <button type="button" className="btn btn-primary" onClick={()=>this.props.onClick(this.props.children)} >{this.props.children}</button>
        )
    }
}

export default Button;