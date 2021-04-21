import "./App.css";
import React, { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {News} from "./components/News"
function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/registeration" component={Register} />
            <Route path="/news" component={News} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
