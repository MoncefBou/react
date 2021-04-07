import React from "react";
import "./App.css";

import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Page d'accueil</h1>

        <Welcome name="Moncef" age="19" />
        <Welcome name="Cefmon" age="28" />

      </div>
    );
  }
}

export default App;