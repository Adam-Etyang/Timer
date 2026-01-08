import './App.css'
import { useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minuites, setMinuites] = useState(0);
  const [hours, setHours] = useState(0);

  return (
    <>
      <div className='container'>
        {/*setting time page*/}
        <div className='time-container'>
          <div className='hour-container'>
            <p className='label'>hr</p>
            <p className='value'>{hours}</p>
          </div>
          <div className='minuite-container'>
            <p className='label'>min</p>
            <p className='value'>{minuites}</p>
          </div>
          <div className='seconds-container'>
            <p className='label'>sec</p>
            <p className='value'>{seconds}</p>
          </div>
        </div>
        <div className='buttons-container'>
          <div>
            <button className='cancel-button'>Cancel</button>
          </div>
          <div>
            <button className='start-button'>Start</button>

          </div>
        </div>


      </div>
    </>

  );


}

