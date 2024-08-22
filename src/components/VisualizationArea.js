import React from 'react';

const VisualizationArea = ({ array }) => {
  return (
    <div style={visualizationAreaStyle}>
      {array.map((value, idx) => (
        <div
          key={idx}
          style={{
            ...barStyle,
            height: `${value * 20}px`,
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

const visualizationAreaStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  height: '300px',
  margin: '0 auto',
  border: '2px solid #282c34',
  backgroundColor: '#f0f0f0',
};

const barStyle = {
  width: '30px',
  margin: '0 5px',
  backgroundColor: '#61dafb',
  textAlign: 'center',
  color: '#282c34',
};

export default VisualizationArea;

