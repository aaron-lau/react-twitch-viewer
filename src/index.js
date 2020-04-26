import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Games from "./components/Games";
import Header from "./components/Header";
import Streams from "./components/Streams";
import GameStreams from "./components/GameStreams";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Header />
        <Route exact path="/react-twitch-viewer" component={Games}/>
        <Route exact path="/react-twitch-viewer/games" component={Games} />
        <Route exact path="/react-twitch-viewer/streams" component={Streams} />
        <Route exact path="/react-twitch-viewer/game/:id" component={GameStreams} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
