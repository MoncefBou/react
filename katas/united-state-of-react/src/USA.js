// Katas sur codewars : https://www.codewars.com/kata/5a830fa2373c2ec8eb00019d
// J'en ai fait qu'un finalement parce que j'ai eu plein de soucis, j'ai pas compris comment fallait le tester
// Mais je l'ai pimpé un peu, j'ai rajouté des bouttons et tout mdr...



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './USA.css';
import Button from "./components/Button-usa";

class USA extends React.Component {

    constructor() {
        super()

        this.state = {
            united: false
        }

        this.unite = this.unite.bind(this)
        this.disunite = this.disunite.bind(this)
    }

    unite() {
        this.setState({ united: true })
    }

    disunite() {
        this.setState({ united: false })
    }

    displayRender() {
        if (this.state.united === true) {
            return (<h1 className="mt-4" style={{ textAlign: 'center', color: 'green' }}>Code for everyone</h1>)

        } else {
            return (<h1 className="mt-4" style={{ textAlign: 'center', color: 'red' }}>Make America code again</h1>)
        }
    }

    render() {

        return (
            <div>

                {this.displayRender()}
                <div className="d-flex justify-content-center mt-5">
                <Button  className="btn btn-danger mx-4" onClick={this.disunite}>Disunite USA</Button>
                <Button className="btn btn-success" onClick={this.unite}>Unite USA</Button>
                </div>
            </div>
        )
    }
}

export default USA;
