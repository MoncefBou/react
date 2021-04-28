import React from "react";
import Card from './Card';
import './style/Pay.css';

class Pay extends React.Component {

    constructor() {
        super()

        this.state = {
            basket: [],

            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear() {
        this.setState({
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        })
    }

    handleSelect(name, price) {

        console.log('name:', name, 'price:', price)
        const newBasket = this.state.basket
        let newAdd = {
            name: name,
            price: price
        }

        newBasket.push(newAdd);

        let newTotal = this.state.total + parseInt(price);
        let newTotalEcoTax = this.state.totalEcoTax + 0.3;
        console.log('price', price)
        console.log('newTotal', newTotal)
        this.setState({
            basket: newBasket,
            total: newTotal,
            totalEcoTax: newTotalEcoTax,
            totalTVA: newTotal * 0.20,
            totalTTC: newTotal * 1.20
        })
    }

    render() {

        return (

            <div>
                <p>Pay</p>
                <div className="allTotal">
                    <span>SubTotal: {this.state.total.toFixed(2)} €</span>
                    <span>VAT: {this.state.totalTVA.toFixed(2)} €</span>
                    <span>Eco tax: {this.state.totalEcoTax.toFixed(2)} €</span>
                    <span><strong>Total: {this.state.totalTTC.toFixed(2)} €</strong></span>
                </div>
                <div className="theCard">
                    {this.props.items.map((elem => {
                        return <Card itemName={elem.name} price={elem.price} onClick={this.handleSelect} />
                    }))}
                </div>

                <div>
                    <p>{this.state.total}</p>
                </div>

                <button onClick={this.clear}>Clear</button>
            </div>
        )
    }
}

export default Pay;