import React from 'react';

import './App.css';
import Routes from './routes'
import NavBar from './components/NavBar'
import StockTest from './components/StockTest'

function App() {
  return (
    <div className="App">
          <NavBar />
          <Routes />
    </div>
  );
}

export default App;
