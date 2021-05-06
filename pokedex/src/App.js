import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import './App.css';

import LittleBox from './components/LittleBox';


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      allPokemon: []
    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=1")
      .then(res => res.json())
      .then(dataPokemon => {

        this.setState({
          allPokemon: dataPokemon.results
        })
      })
  }

  render() {

    if (this.state.allPokemon.length === 0) {
      return <div>Wait Please</div>
    } else {
      return (
        <div>
          {/* {this.state.allPokemon.map(elem => {
            fetch(elem.url)
              .then(res => res.json())
              .then(pokemon => {
                
                <LittleBox sprite={pokemon.sprites.other.officialArtwork.front_default} name={elem.name} />
              })
          })} */}
        </div>
      )
    }
  }
}


export default App;
