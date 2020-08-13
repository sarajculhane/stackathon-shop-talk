import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
          <Routes />
    </div>
  );
}

export default App;
