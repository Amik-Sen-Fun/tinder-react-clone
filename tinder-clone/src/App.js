import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from './ChatScreen';

import { BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       {/*To have header in every page*/}
      <Router>
        {/*Everything inside Router has access to routes*/}
        <Switch>
          {/* Individual chat options  */}
        <Route path="/chats/:person"element = {
          <>
          <Header backButton="/chat"/>
          <ChatScreen/>
          </>
        }/>
      {/* We need one landing page for the chat functionality */}
        <Route path="/chats"element = {
          <>
          <Header backButton="/"/>
          <Chats/>
          </>
        }/>
        
      {/*We need one landing page for the home page of cards */}
        <Route path="/" element={
          <>
          <Header/>
          {/* Tinder Card */}
          <TinderCards/>
          {/* Lower Options */}
          <SwipeButtons/>
          </>
        }/>    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
