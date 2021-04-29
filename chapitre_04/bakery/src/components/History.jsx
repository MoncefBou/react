import React from 'react';
import './style/History.css';

class History extends React.Component {

    render() {

        return (
            <div className="historyBody">

                <p className="h3 mt-3 payTitle">History</p>
                {this.props.keySave.map(elem => {
                    return (
                        <div className="historyBox mt-3">
                            {elem.map(element => {
                                return (
                                    <div>
                                        <p className="historyList">{element.name} x {element.count}</p>
                                    </div>
                                )
                            })}

                            <p className='historyTotal'>
                                Total: {this.props.arrayTotalTTC[this.props.keySave.indexOf(elem)]} €
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default History;