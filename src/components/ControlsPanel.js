import React, { useState } from 'react';

const ControlsPanel = ({ startSorting, isSorting }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Bubble Sort');

  const handleStart = () => {
    startSorting(selectedAlgorithm);
  };

  return (
    <div style={controlsPanelStyle}>
      <select
        value={selectedAlgorithm}
        onChange={(e) => setSelectedAlgorithm(e.target.value)}
        disabled={isSorting}
      >
        <option>Bubble Sort</option>
        <option>Quick Sort</option>
        <option>Merge Sort</option>
        {/* Add more algorithms here */}
      </select>
      <button onClick={handleStart} disabled={isSorting}>Start</button>
      <button disabled={isSorting}>Pause</button>
      <button disabled={isSorting}>Reset</button>
    </div>
  );
};

const controlsPanelStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px',
  gap: '10px',
};

export default ControlsPanel;

