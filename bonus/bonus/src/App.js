import React from "react";
import "./App.css";
import Team from "./components/Team";

class App extends React.Component {



  render() {
    
    const listTeams =[
      {name: 'Arsenal', points: 10, color: 'red'},
      {name: 'Manchester United', points: 12, color: 'red'},
      {name: 'Manchester City', points: 15, color: 'blue'},
      {name: 'Tottenham', points: 11, color: 'black'}
    ] 

    return (
      <div className='container'>

       <h1>Liste des équipes de foot d'Angleterre</h1>

       {listTeams.map((team) => <Team name = {team.name} points = {team.points} color = {team.color} />)}

      <h4>Fin de la liste</h4>
      </div>
    )
  }
}

export default App;