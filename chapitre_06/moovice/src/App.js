import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from './components/views/Home';
import Favorites from './components/views/Favorites';
import Popular from './components/views/Popular';
import PopularBattle from './components/views/PopularBattle';
import Weekly from './components/views/Weekly';
import WeeklyBattle from './components/views/WeeklyBattle';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weekly-battle">Weekly Battle</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/popular-battle">Popular Battle</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/weekly-battle" component={WeeklyBattle} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/popular-battle" component={PopularBattle} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084
export default App;
