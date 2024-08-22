import React, { useState } from 'react';
import Header from './components/Header';
import ControlsPanel from './components/ControlsPanel';
import VisualizationArea from './components/VisualizationArea';
import { bubbleSort } from './algorithms/sortingAlgorithms';
import './App.css';

function App() {
  const [array, setArray] = useState([5, 3, 8, 4, 2, 7, 1, 6]);
  const [isSorting, setIsSorting] = useState(false);

  const startSorting = (algorithm) => {
    setIsSorting(true);
    if (algorithm === 'Bubble Sort') {
      bubbleSort(array, setArray, setIsSorting);
    }
    // Add conditions for other algorithms here
  };

  return (
    <div className="App">
      <Header />
      <ControlsPanel startSorting={startSorting} isSorting={isSorting} />
      <VisualizationArea array={array} />
    </div>
  );
}

export default App;

