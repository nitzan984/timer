// src/Timer.tsx
import React from 'react';

interface TimerProps {
  id: number;
  globalTime?: number; // This can be undefined if not running
  onRemove: (id: number) => void;
  toggleTimer: (id: number) => void;
  isRunning: boolean;
}

const Timer: React.FC<TimerProps> = ({
  id,
  globalTime,
  onRemove,
  toggleTimer,
  isRunning,
}) => {
  return (
    <div className="timer">
      <h4>
        Timer #{id} - {globalTime ?? 0} Seconds
      </h4>{' '}
      {/* Display globalTime or 0 if undefined */}
      <button onClick={() => onRemove(id)}>Remove</button>
      <button onClick={() => toggleTimer(id)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
