import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";
import Search from "./components/Search";

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      countries: [],

      inputCatching: "",
      found: true
    }


    this.catchInput = this.catchInput.bind(this);
    this.getCountry = this.getCountry.bind(this);
    this.searchCountry = this.searchCountry.bind(this);
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
    fetch("http://localhost:8000/countries/france")
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

  catchInput(e) {

    this.setState({
      inputCatching: e.target.value
    })

  }

  searchCountry() {
    fetch(`http://localhost:8000/countries`)
      .then(res => res.json())
      .then(result => {
        const input = this.state.inputCatching.toUpperCase()

        const arrayFilter = result.filter((country) => {
          let selected = true;
          let nameCountry = country.name.toUpperCase().split(" ")

          // for (let i = 0; i < input.length; i++) {
          if (nameCountry.indexOf(input) === -1) {
            selected = false
          }
          // }

          return selected
        })
        
        console.log('arrayFilter:', arrayFilter);
        
        const arraySearch = arrayFilter.map((elem) => {
          return (
            {
              name: elem.name,
              capital: elem.capital,
              flag: elem.flag,
              population: elem.population,
              region: elem.region
            }
          )
        })
       
        console.log('arraySearch:', arraySearch)
        
        if (arraySearch.length === 0) {
          this.setState({
            found: false
          })
        } else {

          this.setState({
            countries: arraySearch,
            found: true
          })
        }
      })


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

  searchRender() {

    return (
      <div style={{ width: 350 }} className="d-flex justify-content-between mb-4 mt-4">
        <Search funcToCatch={this.catchInput} onClick={this.searchCountry} />
      </div>
    )
  }

  cardRender() {
    if (this.state.countries.length === 0 && this.state.found) {
      return (
        <></>
      )
    } else if (!this.state.found) {
      return (
        <div className="d-flex flex-wrap justify-content-center">
          Not found !
        </div>
      )
    } else {
      return (
        <div className="d-flex flex-wrap justify-content-center">

          {this.state.countries.map(country => {
            return <Card name={country.name} capital={country.capital} flag={country.flag} population={country.population} region={country.region}></Card>
          })}

        </div>
      )
    }
  }

  render() {

    return (
      <div>

        <div className="d-flex flex-column align-items-center">

          <h1 className="mt-2">Country selector</h1>
          {this.searchRender()}
          {this.cardRender()}

        </div>

      </div>
    )
  }
}

export default App;

