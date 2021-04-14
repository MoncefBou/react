import React from 'react';


class List extends React.Component {


    render() {

        if (this.props.items.length === 0) {
            return (
                <div className="mt-2">
                    <span className="h1" style={{ fontSize: 30 }}>No items are available</span>
                </div>
            )
        } else {
            return (
                
                
                <div className="d-flex flex-column mt-3">
                    <ul className="list-group">{this.props.items.map((key) => <li class="list-group-item d-flex justify-content-between align-items-center">
                        {key.name}
                        <span className="badge bg-primary rounded-pill" style={{ color: 'white', fontWeight: 'initial' }} >{key.price} €</span>
                    </li>
                    )}</ul>

                    <button type="button" className=" align-self-end mt-2 btn btn-outline-secondary" style={{position: "right"}} >Delete</button>
                </div>
            )
        }
    }
}


export default List;