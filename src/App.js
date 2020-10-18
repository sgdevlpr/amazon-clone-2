import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
return (
  <div className="app">
    <Header />
    <Home />
    {/* <Router>
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </Router> */}
  </div>
);
}
export default App;
