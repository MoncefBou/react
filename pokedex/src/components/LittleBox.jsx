import React from 'react';
import { Link } from "react-router-dom";


class LittleBox extends React.Component {

    render() {

        return (
            <div>
                <Link><img src={this.props.sprite} alt="" /></Link>
                <span>{this.props.name}</span>
            </div>
        )
    }
}


export default LittleBox;