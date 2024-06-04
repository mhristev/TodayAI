import React from 'react';
import Header from './components/Header';
import Graph from './components/Graph';
import AdviceSummary from './components/AdviceSummary';
import './App.css';

const App = () => {
  
  const boxmeerData = [
    { day: 'Mon', morning: 'light', afternoon: 'light' },
    { day: 'Tue', morning: 'light', afternoon: 'heavy' },
    { day: 'Wed', morning: 'heavy', afternoon: 'medium' },
    { day: 'Thu', morning: 'light', afternoon: 'light' },
    { day: 'Fri', morning: 'medium', afternoon: 'light' },
  ];

  const hertogenboschData = [
    { day: 'Mon', morning: 'light', afternoon: 'light' },
    { day: 'Tue', morning: 'heavy', afternoon: 'heavy' },
    { day: 'Wed', morning: 'heavy', afternoon: 'heavy' },
    { day: 'Thu', morning: 'light', afternoon: 'light' },
    { day: 'Fri', morning: 'medium', afternoon: 'light' },
  ];

  return (
    <div className="App">
      <Header />

      <div className="graph-container">
        <Graph title="Boxmeer" data={boxmeerData} dataKey1="morning" dataKey2="afternoon" />
        <Graph title="'s-Hertogenbosch" data={hertogenboschData} dataKey1="morning" dataKey2="afternoon" />
      </div>
      <AdviceSummary boxmeer="Monday and Wednesday" hertogenbosch="Friday" />
    </div>
  );
};

export default App;
