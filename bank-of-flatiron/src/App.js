import React from 'react';
import './App.css';
import Transactions from './Components/Transactions';

function App() {
 
  return (
    <div >
      <div className='header-text'>
        <h2>Bank of Flatiron</h2>
      </div>
      <Transactions />
    </div>
  );
}

export default App;


