import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from "./components/Button";

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
    fetch(`https://restcountries.eu/rest/v2/name/${country.toLowerCase()}`)
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
      <div>
        <Button onClick={this.getCountry}>France</Button>
        <Button onClick={this.getCountry} >Brazil</Button>
        <Button onClick={this.getCountry} >Croatia</Button>
      </div>
    )
  }

  render() {


    return (
      <div className="d-flex flex-column">
        <span>name : {this.state.name}</span>
        <span>capital : {this.state.capital}</span>
        <span>flag : {this.state.flag}</span>
        <span>population : {this.state.population}</span>
        <span>region : {this.state.region}</span>

        {this.buttonRender()}

        
      </div>
    )
  }
}

export default App;

