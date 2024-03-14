// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './Timer';

interface TimerState {
  id: number;
  isRunning: boolean;
}

const App: React.FC = () => {
  const [timers, setTimers] = useState<TimerState[]>([]);
  const [globalTime, setGlobalTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addTimer = () => {
    const newTimer = {
      id: timers.length + 1, // Simple ID assignment
      isRunning: false, // Start as not running
    };
    setTimers((prevTimers) => [...prevTimers, newTimer]);
  };

  const removeTimer = (id: number) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  const toggleTimer = (id: number) => {
    setTimers((timers) =>
      timers.map((timer) =>
        timer.id === id ? { ...timer, isRunning: !timer.isRunning } : timer
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addTimer}>Add Timer</button>
        <div>
          {timers.map(({ id, isRunning }) => (
            <Timer
              key={id}
              id={id}
              globalTime={isRunning ? globalTime : undefined} // Pass globalTime only if running
              onRemove={removeTimer}
              toggleTimer={toggleTimer}
              isRunning={isRunning}
            />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
