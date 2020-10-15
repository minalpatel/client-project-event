import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Faqs from './pages/faqs';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/faqs" component={Faqs} />
      </Switch>
    </Router>
  );
}

export default App;