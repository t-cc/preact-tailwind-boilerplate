import { h } from 'preact';
import { Router } from 'preact-router';

import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path='/' />
      <Contact path="/contact/" />
    </Router>
  </div>
);

export default App;
