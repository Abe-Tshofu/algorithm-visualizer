import React from 'react';

const ControlsPanel = () => {
  return (
    <div style={controlsPanelStyle}>
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
      <select>
        <option>Bubble Sort</option>
        <option>Quick Sort</option>
        <option>Merge Sort</option>
        {/* Add more algorithms here */}
      </select>
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

