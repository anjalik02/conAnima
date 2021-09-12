import { applyActionCode } from "@firebase/auth";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Brainstorming, Sheet, Generator, Lyrics, Share } from "./components";
//import './App.css'
//import { App } from "./Python/Con-Anima-master";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/generator" exact component={() => <Generator />} />
          <Route path="/brainstorming" exact component={() => <Brainstorming />} />
          <Route path="/Sheet" exact component={() => <Sheet />} />
          <Route path="/lyrics" exact component={() => <Lyrics />} />
          <Route path="/share" exact component={() => <Share />} />
          {/* <Route path="/plagiarism" exact component={() => <App />} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;