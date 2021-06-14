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
      .then(data => {
        console.log("la data", data)
        if (data[0].name !== undefined) {
          const newArray = [];
          
          newArray.push(data[0])
          
          setHeroes(newArray)
        } else {
          setHeroes([])
        }
      })
  }

  const funcValueInput = (e) => {
    console.log(e.target.value)
    setValueInput(e.target.value)
  }


  if (heroes !== null) {
   
   console.log("je me relance !!!")
    return (
      <div className="app">

        <h1>Heroes App</h1>
        <div className="search">
          <label>Search a hero</label>
          <input onChange={(e) => funcValueInput(e)} type="text" name="search"></input>
          <button onClick={searchHero}>Search</button>
        </div>

        <div className="allCards">
          {heroes.map((elem, index) => {
            return <Card
              key={index}
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
