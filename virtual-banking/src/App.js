import React from 'react'
import {BrowserRouter as Router,Switch , Route } from 'react-router-dom'
import Home from './pages'
import './App.css';
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
