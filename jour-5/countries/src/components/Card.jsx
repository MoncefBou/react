import React from "react";

class Card extends React.Component {


    render() {
        return (
            <div style={{
                padding: '20px',
                background: '#ffe307ab',
                borderRadius: '8px',
                boxShadow: '0 0 8px 1px #0000001c',
                width: '200px'
            }} className="d-flex flex-column align-items-center" >

                <img className="mb-3" style={{ width: 120, height: 85, borderRadius: 8, boxShadow: '0px 0px 8px 0.5px #0000003d' }} src={`${this.props.flag}`} alt="flag" />

                <div>

                    <h3>Country:<br /> {this.props.name}</h3>

                    <span style={{ fontWeight: 600, fontSize: 19 }}>Capital: {this.props.capital}</span>

                    <div className="mt-3 mb-3">
                        <span style={{ fontSize: '18px' }} className="material-icons">
                            public
                </span>
                        <span style={{ fontSize: '18px' }} > Region:<br /> {this.props.region}</span>
                    </div>

                    <div>
                        <span style={{ fontSize: '20px' }} className="material-icons">
                            people
                    </span>
                        <span style={{ fontSize: '18px' }} > Population:<br /> {this.props.population}</span>
                    </div>
                </div>

            </div >
        )
    }
}

export default Card;