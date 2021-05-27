import React, { useState, useEffect } from 'react';
import Clock from './Clock'
const Timer = () => {
  const [[hour, minute, second, day], setSeconds] = useState(new Date().toLocaleTimeString("en-US").split(/:| /));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().toLocaleTimeString("en-US").split(/:| /));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
        {/* <div className="test">{(hour>>>0).toString(2).padStart(6,0)}|{(minute>>>0).toString(2).padStart(6,0)}|{(second>>>0).toString(2).padStart(6,0)}</div> */}
        <Clock hours={hour.padStart(2,0)} minutes={minute} seconds={second}></Clock>
        <div className="time-grid">
        <div className="time-line">
        <div>{hour.padStart(2,0)[0]}</div>
        <div>{hour.padStart(2,0)[1]}</div>
        </div>
        <div className="time-line">
        <div>{minute[0]}</div>
        <div>{minute[1]}</div>
        </div>
        <div className="time-line">
        <div>{second[0]}</div>
        <div>{second[1]}</div>
      </div>
      </div>
    </div>
  );
};

export default Timer;