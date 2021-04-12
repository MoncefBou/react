import React from "react";

class Count2 extends React.Component {

    render() {

        return(
            <div style={{
                display: 'flex',
                width: '200px',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <button style={{
                    backgroundColor: "white",
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '30px',
                    boxShadow: '-4px 0px 8px -5px rgba(0,0,0,0.44)',
                    border: '2px solid black'
                }}
                    onClick={this.props.removeFunction}>-</button>

                <h2 style={{ fontFamily: 'arial', fontSize: '30px' }}>{this.props.count2}</h2>

                <button style={{
                    backgroundColor: "white",
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '30px',
                    boxShadow: '-4px 0px 8px -5px rgba(0,0,0,0.44)',
                    border: '2px solid black'
                }}
                    onClick={this.props.addFunction}>+</button>
            </div>
        )
    }
}

export default Count2;