import { useState, FC } from 'react';
import './App.css';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const showResetButton: boolean = count > 0;
  const startStopText: string = count === 0 ? 'Start' : 'Pause';

  const handleStartStop = (): void => {
    if (count === 0) {
      const interval: number = window.setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIntervalId(intervalId ? null : interval);
    } else {
      clearInterval(intervalId as number);
      setIntervalId(null);
    }
  };

  const handleReset = (): void => {
    clearInterval(intervalId as number);
    setIntervalId(null);
    setCount(0);
  };

  return (
    <div className='app'>
      <h1>Counter App</h1>
      <h2>{`Counter: ${count}`}</h2>
      <button onClick={handleStartStop}>{startStopText}</button>
      { 
        showResetButton && <button style={{ marginTop: '8px' }} onClick={handleReset}>Reset</button>
      }
    </div>
  );
};

export default App;
