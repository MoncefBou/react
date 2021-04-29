import React from "react";
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/Button';
import History from './components/History';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      activeTab: 'add',
      items: [],

      toSave: [],
      totalToSave: []

    };

    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.selectHistory = this.selectHistory.bind(this);

    this.addItem = this.addItem.bind(this);
    this.deleteFunc = this.deleteFunc.bind(this);
    this.saveHistory = this.saveHistory.bind(this);
  }

  selectAdd() {
    this.setState({ activeTab: 'add' });
  }

  selectList() {
    this.setState({ activeTab: 'list' });
  }

  selectPay() {
    this.setState({ activeTab: 'pay' });
  }

  selectHistory() {
    this.setState({ activeTab: 'history' });
  }

  saveHistory(arrayBasket, totalTTC) {
    const arrayToSave = this.state.toSave
    const arrayTotalTTC = this.state.totalToSave

    arrayTotalTTC.push(totalTTC.toFixed(2))
    arrayToSave.push(arrayBasket)

    this.setState({
      toSave: arrayToSave,
      totalToSave: arrayTotalTTC,
      activeTab: "history"
    })
  }

  addItem(theName, thePrice) {
    const newItem = {
      name: theName,
      price: thePrice
    };
    const updateItems = this.state.items;

    updateItems.push(newItem);

    this.setState({ items: updateItems });
    this.selectList()
  }

  deleteFunc() {
    const arrayItems = this.state.items;

    arrayItems.pop()

    this.setState({ items: arrayItems });
  }

  renderViews() {
    if (this.state.activeTab === "add") {
      return (
        <section>
          <Add addFunc={this.addItem} />
        </section>
      )
    } else if (this.state.activeTab === "list") {
      return (
        <section>
          <List deleteFunc={this.deleteFunc} items={this.state.items} />
        </section>
      )
    } else if (this.state.activeTab === "history") {
      return (
        <section>
          <History keySave={this.state.toSave} arrayTotalTTC={this.state.totalToSave} />
        </section>
      )
    } else {
      return (
        <section>
          <Pay save={this.saveHistory} items={this.state.items} />
        </section>
      )
    }

  }


  render() {

    return (
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column" style={{ width: 600 }}>

          <h1 className="h1" style={{ textAlign: 'center' }}>Bakery</h1>

          <div className="d-flex flex-row justify-content-start">
            <Button isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</Button>
            <Button isSelected={this.state.activeTab} onClick={this.selectList} >List</Button>
            <Button isSelected={this.state.activeTab} onClick={this.selectPay} >Pay</Button>
            <Button isSelected={this.state.activeTab} onClick={this.selectHistory} >History</Button>
          </div>

          {this.renderViews()}
        </div>
      </div>
    )
  }
}

export default App;
