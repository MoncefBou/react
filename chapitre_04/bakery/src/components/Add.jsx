import React from 'react';



class Add extends React.Component {

    constructor() {
        super()

        this.state = {
            productName: "",
            price: 1
        }

        this.updateProductName = this.updateProductName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
    }

    updateProductName(e) {
        this.setState({ productName: e.target.value });
    }

    updatePrice(e) {
        this.setState({ price: e.target.value });
    }

    render() {
        return (
            <div className="d-flex flex-column">

                <div className="mb-3" >
                    <div class="input-group mt-3 d-flex align-self-center" style={{ width: '95%' }}>
                        <input type="text" placeholder="Item" onChange={this.updateProductName} class="form-control" aria-label="Item" aria-describedby="button-addon2" />
                        <button class="btn btn-primary" type="button" onClick={() => this.props.addFunc(this.state.productName, this.state.price)} id="button-addon2">Add</button>
                    </div>
                    <span>{this.state.price} €</span>
                </div >

                <input type="range" min={1} max={10} value={this.state.price} onChange={this.updatePrice} />
            </div >
        )
    }
}

export default Add;
