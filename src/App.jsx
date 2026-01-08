import { serviceworker } from 'globals';
import './App.css'
import { useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minuites, setMinuites] = useState(0);
  const [hours, setHours] = useState(0);
  const [running, setRunning] = useState(false);


  const handleStart = () => { setRunning(true); }
  const handleCancel = () => {
    setRunning(false);
    setSeconds(0);
    setMinuites(0);
    setHours(0);
  }
  const handleIncrease = (type) => {
    if (!running) {
      if (type === 'hours') { setHours(h => h + 1) }
      else if (type === 'minuites') { setMinuites(m => m + 1) }
      else if (type === 'seconds') { setSeconds(s => s + 1) }
    }
  }

  const handleDecrease = (type) => {
    if (!running) {
      if (type === 'hours') { setHours(h => h > 0 ? h - 1 : 0) }
      else if (type === 'minuites') { setMinuites(m => m > 0 ? m - 1 : 0) }
      else if (type === 'seconds') { setSeconds(s => s > 0 ? s - 1 : 0) }
    }
  }

  return (
    <>
      <div className='container'>
        {/*setting time page*/}
        <div className='time-container'>
          <div className='hour-container'>
            <p className='label'>hr</p>
            <button type="button" onClick={() => handleIncrease('hours')} className='increase-button'>+</button>
            <p className='value'>{hours}</p>
            <button type="button" onClick={() => handleDecrease('hours')} className='Decrease-button'>-</button>

          </div>
          <div className='minuite-container'>

            <p className='label'>min</p>
            <button type="" className='increase-button' onClick={() => handleIncrease('minuites')}>+</button>
            <p className='value'>{minuites}</p>
            <button type="" className='Decrease-button' onClick={() => handleDecrease('minuites')}>-</button>
          </div>
          <div className='seconds-container'>
            <p className='label'>sec</p>
            <button type="" className='increase-button' onClick={() => handleIncrease('seconds')}>+</button>
            <p className='value'>{seconds}</p>
            <button type="" className='Decrease-button' onClick={() => handleDecrease('seconds')}>-</button>

          </div>
        </div>
        <div className='buttons-container'>
          <div>
            <button className='cancel-button' onClick={handleCancel}>
              Cancel</button>
          </div>
          <div>
            <button className='start-button' onClick={handleStart}>Start</button>

          </div>
        </div>


      </div>
    </>

  );


}

