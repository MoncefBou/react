import React from "react";
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/Button';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  
  constructor() {
    super()

    this.state = {
      activeTab: 'add',
      items: []
    }
  }

  render() {

    return(
     <div>
       
       <Button children='Add' isSelected='Add'/>
       <Button children='List'/>
       <Button children='Pay'/>
       
       <Add />
       <List />
       <Pay />
     </div>
    )
  }
}

export default App;
