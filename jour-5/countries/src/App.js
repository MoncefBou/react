import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }

    this.getCountry = this.getCountry.bind(this)
  }

  getCountry(country) {
    fetch(`http://localhost:8000/countries/${country.toLowerCase()}`)
      .then(res => res.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(res => res.json())
      .then(result => {
        console.log(result)

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      }
      )
  }

  buttonRender() {

    return (
      <div style={{ width: 350 }} className="d-flex justify-content-between mb-4 mt-4">
        <Button onClick={this.getCountry}>France</Button>
        <Button onClick={this.getCountry} >Brazil</Button>
        <Button onClick={this.getCountry} >Croatia</Button>
      </div>
    )
  }

  cardRender() {

    return (
      <div>
        <Card name={this.state.name} capital={this.state.capital} flag={this.state.flag} population={this.state.population} region={this.state.region} />
      </div>
    )
  }

  render() {

    return (
      <div>

        <div className="d-flex flex-column align-items-center">

          <h1 className="mt-2">Country selector</h1>
          {this.buttonRender()}
          {this.cardRender()}

        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          
        </div>


      </div>
    )
  }
}

export default App;

