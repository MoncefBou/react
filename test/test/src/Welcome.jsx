import React from "react";
class Welcome extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        return(
           <div>
            <h1>Hi my name is {this.props.name} ! And I am {this.props.age} years old.</h1>
           </div>
        )
    }
}

export default Welcome;