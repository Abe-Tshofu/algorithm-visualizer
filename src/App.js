import React from 'react';
import Header from './components/Header';
import ControlsPanel from './components/ControlsPanel';
import VisualizationArea from './components/VisualizationArea';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ControlsPanel />
      <VisualizationArea />
    </div>
  );
}

export default App;

