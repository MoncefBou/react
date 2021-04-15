import React from 'react';
import './USA.css';
import Button from "./components/Button-usa"

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
            return (<h1 style={{ textAlign: 'center', color: 'green' }}>Code for everyone</h1>)

        } else {
            return (<h1 style={{ textAlign: 'center', color: 'red' }}>Make America code again</h1>)
        }
    }

    render() {

        return (
            <div>

                {this.displayRender()}

                <Button onClick={this.disunite}>Disunite USA</Button>
                <Button onClick={this.unite}>Unite USA</Button>
            </div>
        )
    }
}

export default USA;
