import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Algorithm Visualizer</h1>
      <p>Visualize different sorting algorithms in action!</p>
    </header>
  );
};

const headerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#282c34',
  color: 'white',
};

export default Header;

