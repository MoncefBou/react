import React from "react";

class Button extends React.Component {

    render() {
        return (
            <div>

                <button type="button" className={this.props.className} onClick={this.props.onClick}>{this.props.children}</button>
                
            </div>
        )
    }
}

export default Button;