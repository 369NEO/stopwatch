import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time , setTime] = useState(0)
  const[running, setRunning] = useState(false)

  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    }else if (!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]) 
  
  return (
    <div className='max-w-md flex flex-col items-center justify-center'>
    <h1 className='text-lg items center justify-center'>01-Stopwatch</h1>
    <div>
      <span>{("0" + Math.floor((time/6000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0" + ((time/10)%100)).slice(-2)}</span>
    </div>
    <div>
    {running ? (
    <button onClick={() => setRunning(false)}>Stop</button>
    ): (
      <button onClick={() => setRunning(true)}>Start</button>
    )}

      <button onClick={() => setTime(0)}>Reset</button>
    </div>
    </div>
  )
}

export default App
