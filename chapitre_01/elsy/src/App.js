import React from "react";
import "./App.css";
import Box from "./components/Box";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }

    this.onHeartChange = this.onHeartChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
    this.plusSteps = this.plusSteps.bind(this);
    this.minusSteps = this.minusSteps.bind(this);

  }

  onHeartChange(value) {

    this.setState({ heart: value })
    this.calculateWater()
  };

  onTemperatureChange(value) {

    this.setState({ temperature: value })
    this.calculateWater()
  };

  onStepsChange(value) {

    this.setState({ steps: value })
    this.calculateWater()
  };

  calculateWater() {
    let tempWater = 0;
    let heartWater = 0;
    let stepsWater = 0;

    if (this.state.temperature > 20) {
      tempWater = (this.state.temperature - 20) * 0.02;
    }

    if (this.state.heart > 120) {
      heartWater = (this.state.heart - 120) * 0.0008;
    }

    if (this.state.steps > 10000) {
      stepsWater = (this.state.steps - 10000) * 0.00002;
    }

    this.setState({ water: (1.5 + tempWater + heartWater + stepsWater).toFixed(2) });
  }

  plusSteps() {
    if(this.state.steps <= 49000) {
      this.setState({steps: this.state.steps + 1000})
      this.calculateWater()
    }
  }

  minusSteps() {
    if(this.state.steps >= 1000) {
      this.setState({steps: this.state.steps - 1000})
      this.calculateWater()
    }
  }

  render() {

    return (
      <div className="container-fluid">

        <div className="row">

          {/* WATER */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />

          {/* STEPS */}
          <Box min={stepsMin} max={stepsMax} onClickMinus={this.minusSteps} onClickPlus={this.plusSteps} icon="directions_walk" color="black" value={this.state.steps} unit="steps" />

          {/* HEART */}
          <Box min={heartMin} max={heartMax} onChange={this.onHeartChange} icon="favorite" color="red" value={this.state.heart} unit="bpm" />

          {/* TEMPERATURE */}
          <Box min={tempMin} max={tempMax} onChange={this.onTemperatureChange} icon="wb_sunny" color="yellow" value={this.state.temperature} unit="??C" />

          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>

        </div>

      </div>
    );
  }

}

export default App;
