import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [heroes, setHeroes] = useState(null)
  const [valueInput, setValueInput] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/heroes")
      .then(res => res.json())
      .then(data => {
        setHeroes(data)
      })

  }, [])

  const searchHero = () => {
    fetch(`http://localhost:8000/heroes/${valueInput}`)
    .then(res => res.json())
    .then( data => {
      if (data.message !== undefined) {
        setHeroes([])
      } else {
        const newArray = [];

        newArray.push(data)

        setHeroes(newArray)
      }
    }) 
  }

  const funcValueInput = (e) => {
    setValueInput(e.target.value)
  }


  if (heroes !== null) {
    return (
      <div className="app">

        <h1>Heroes App</h1>
        <div className="search">
          <label for="search">Search a hero</label>
          <input onChange={(e) => funcValueInput(e)} type="text" name="search"></input>
          <button onClick={searchHero}>Search</button>
        </div>

        <div className="allCards">
          {heroes.map(elem => {
            return <Card
              name={elem.name}
              power={elem.power}
              color={elem.color}
              isAlive={elem.isAlive}
              age={elem.age}
              image={elem.image}
            />
          })}
        </div>
      </div>
    );
  } else {
    return (
      <h1>Please wait</h1>
    )
  }
}

export default App;
