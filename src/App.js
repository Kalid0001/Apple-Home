import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home page
import Navigation from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Body from "./components/Body";

// Pages
import Iphone from "./pages/Iphone";

import Four04 from "./pages/Four04";

// import general css
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
