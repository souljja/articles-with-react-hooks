import React from 'react';
import { Header } from './header';
import './App.scss';
import { CardsLayout } from './cards/CardsLayout';

function App() {
  return (
    <div className="App">
      <div className="App-main-container">
        <Header />
        <div className="App-container">
          <div className="App-content">
            <CardsLayout/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
