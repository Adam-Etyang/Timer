import './App.css'
import { useState, useEffect } from 'react';

export default function App() {

  const [seconds, setSeconds] = useState(0);
  const [minuites, setMinuites] = useState(0);
  const [hours, setHours] = useState(0);
  const [running, setRunning] = useState(false);
  const TotalDuration = hours * 3600 + minuites * 60 + seconds;
  const [remaining, setRemaining] = useState(TotalDuration);
  const [paused, setPaused] = useState(false);





  const handleStart = () => {
    const total = hours * 3600 + minuites * 60 + seconds;
    if (total === 0) return;
    setRemaining(total);
    setPaused(false)
    setRunning(true);

  }

  const handleCancel = () => {
    setRunning(false);
    setRemaining(0);
    setPaused(false);
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

  //counter-logic
  useEffect(() => {
    if (!running || paused || remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining(r => r - 1);
    }, 1000);
    return () => clearInterval(id);
  },
    [paused, running, remaining]);

  useEffect(() => {
    if (remaining === 0) {
      setRunning(false);
    }
  }, [remaining])


  if (!running) {
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
  const RADIUS = 200;
  const STROKE = 10;
  const CIRC = 2 * Math.PI * RADIUS;

  const progress = TotalDuration === 0 ? 0 : remaining / TotalDuration;

  const offset = CIRC * (1 - progress);





  return (
    <>
      <div className='Timer-container'>
        <div className='Enclosure'>
          {/*
          <div className='Timer'>
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
*/}
          <div className='ring-wrapper'>
            <svg
              width={(RADIUS + STROKE) * 2}
              height={(RADIUS + STROKE) * 2}
              className='ring'
            >
              <circle
                cx={RADIUS + STROKE}
                cy={RADIUS + STROKE}
                r={RADIUS}
                className='ring-bg'
              />
              <circle
                cx={RADIUS + STROKE}
                cy={RADIUS + STROKE}
                r={RADIUS}
                className='ring-progress'
                style={{
                  strokeDasharray: CIRC,
                  strokeDashoffset: offset
                }}
              />
            </svg>
            <div className='Timer'>
              <div className="hour-container">
                <p className="label">hr</p>
                <p className="value">{Math.floor(remaining / 3600)}</p>
              </div>
              <div className="minuite-container">
                <p className="label">min</p>
                <p className="value">
                  {Math.floor((remaining % 3600) / 60)}
                </p>
              </div>
              <div className="seconds-container">
                <p className="label">sec</p>
                <p className="value">{remaining % 60}</p>
              </div>
            </div>

          </div>

        </div>
        <div className='buttons-container'>
          <button type="button" className='cancel-button' onClick={() => { setRunning(false) }}>Cancel</button>
          <button type="button" className='pause-button' onClick={() => setPaused(p => !p)}>{paused ? "Resume" : "Pause"}</button>
        </div>

      </div>
    </>
  );


}

