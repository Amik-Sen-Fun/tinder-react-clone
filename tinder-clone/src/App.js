import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header/>
       {/*To have header in every page*/}
      <Router>
        <Switch>
      {/* We need one landing page for the chat functionality */}
          <Route path='/chat' >
          <h1>Hemlo This will contain the chat options</h1>
          </Route>
      {/*We need one landing page for the home page of cards */}
          <Route path='/'>
            <TinderCards/>
          </Route>
        </Switch>
      </Router>
      {/* Tinder Card */}
      {/* Lower Options */}
    </div>
  );
}

export default App;
