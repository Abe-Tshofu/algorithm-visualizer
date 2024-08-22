import React from 'react';

const VisualizationArea = () => {
  return (
    <div style={visualizationAreaStyle}>
      {/* This is where the algorithm visualization will be displayed */}
      <p>Visualization goes here...</p>
    </div>
  );
};

const visualizationAreaStyle = {
  width: '80%',
  height: '300px',
  margin: '0 auto',
  border: '2px solid #282c34',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
};

export default VisualizationArea;

