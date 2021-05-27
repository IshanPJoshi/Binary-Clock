import './App.css';
// import {useState, useEffect} from 'react'
import Header from './Header'
import Timer from './Timer'

function App() {

  return (
    <div >
      <Header title = 'Binary Clock'>
      </Header>
      <h2 className='head'>A 19-bit <a href="https://en.wikipedia.org/wiki/Binary_clock" style={{ color: '#eb2c4f' }}>binary clock</a> I wrote using React.</h2>
      <h2 className='head'>Each binary column corresponds to a digit on the clock below.</h2>
      <Timer></Timer>
    </div>
  );
}

export default App;
