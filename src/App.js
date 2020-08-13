import React from 'react';

import './App.css';
import Routes from './routes'
import NavBar, {Jumbo} from './components/NavBar'
// import StockTest from './components/StockTest'

function App() {
  return (
    <div className="App">
          <NavBar />
          <Jumbo />
          {/* <StockTest /> */}
          <Routes />

    </div>
  );
}

export default App;
