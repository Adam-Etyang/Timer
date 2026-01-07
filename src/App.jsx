import './App.css'
import { useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minuites, setMinuites] = useState(0);
  const [hours, setHours] = useState(0);

  return (
    <div className='container'>
      {/*setting time page*/}
      <div className='time-container'>
        <div className='hour-container'>
          <span className='hr-tag'><p>hr</p></span>
          <span className='seconds'><p>{seconds}</p></span>
        </div>
        <div className='minuite-container'>
          <span className='time'><p>{minuites}</p></span>
        </div>
        <div className='seconds-container'>
          <span><p className='time'>{hours}</p></span>
        </div>
      </div>
      <div className='buttons-container'>
        <div className='cancel-button'></div>
        <div className='start-button'></div>
      </div>

    </div>
  );


}

