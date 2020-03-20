import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './Containers/About';
import Home from './Containers/Home';
import Requirements from './Containers/Requirements';
import RegisterHero from './Containers/RegisterHero';
import Help from './Containers/Help';
import Login from './Containers/Login';
import RequestForm from './Containers/RequestForm';

function App() {
  return (
    <div className="App">
      <About />
      <Router>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/register-hero">Register as a superhero</Link>
        </li>
        <li>
          <Link to="/register-help">Register for help</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/requests">Open Requests</Link>
        </li>
        <li>
          <Link to='request-form'>Request Form</Link>
        </li>
      </ul>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/requests">
          <Requirements />
        </Route>
        <Route path="/register-hero">
          <RegisterHero />
        </Route>
        <Route path="/register-help">
          <Help />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path='request-form'>
          <RequestForm />
        </Route>
      </Router>
      <div style={{marginTop: 30, marginLeft: 20}}>
        Please share it as much as possible so, that everyone can be benefited from this.
      </div>
      <div style={{position: 'absolute', bottom: 10, textAlign: 'center', width: '100%'}}>Made with 💓 by <a target="_blank" href='http://www.externlabs.com'>Extern Labs</a> Family</div>
    </div>
  );
}

export default App;
