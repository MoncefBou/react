import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Count2 from "./components/Count2";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0
    }

    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);

    this.decrementCount2 = this.decrementCount2.bind(this);
    this.incrementCount2 = this.incrementCount2.bind(this);
  }

  decrementCount() {
    
    if ( this.state.count !== 0 ) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  decrementCount2() {
    
    if ( this.state.count2 !== 0) {
   
      if (this.state.count === this.state.count2) {
        this.setState({ count2: this.state.count2 - 1, count: this.state.count - 1 })
      } else {
        this.setState({ count2: this.state.count2 - 1 })
      }
    }
    
  }

  incrementCount() {
   
    if ( this.state.count !== 100 ) {
      
      if (this.state.count === this.state.count2) {
        this.setState({ count: this.state.count + 1, count2: this.state.count2 + 1 })
      } else {
        this.setState({ count: this.state.count + 1 })
      }
    }
  }

  incrementCount2() {
   
    if ( this.state.count2 !== 100 ) {
      this.setState({ count2: this.state.count2 + 1 })
    }  
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <h1 style={{fontFamily: 'arial'}}>Counter 1</h1>

        <Counter count={this.state.count} addFunction={this.incrementCount} removeFunction={this.decrementCount} />

        <h1 style={{fontFamily: 'arial'}}>Counter 2</h1>
        
        <Count2 count2={this.state.count2} addFunction={this.incrementCount2} removeFunction={this.decrementCount2} />

      </div>
    )
  }
}

export default App;