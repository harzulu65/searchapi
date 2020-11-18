import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./components/Home";
import Search from "./components/Search";
import Modify from "./components/Modify";



function App() {



  return (
    <Router>
      <Navbar />

      <Route path="/" exact component>
        <Home />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/modify">
        <Modify />
      </Route>

    </Router>

  );
}

export default App;
