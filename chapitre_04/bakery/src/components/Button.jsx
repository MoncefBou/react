import React from 'react';


class Button extends React.Component {

    render() {

        return(
            <div children={this.props.children}>
                <button isSelected={this.props.isSelected} onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }
}

export default Button;