import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Graph.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const formatValue = (value) => {
      return value === 2 ? 'light' : value === 3 ? 'medium' : value === 4 ? 'heavy' : 'none';
    };

    return (
      <div className="custom-tooltip">
        <p className="intro">{`Morning : ${formatValue(payload[0].value)}`}</p>
        <p className="intro">{`Afternoon : ${formatValue(payload[1].value)}`}</p>
      </div>
    );
  }

  return null;
};


const Graph = ({ title, data }) => {
  // Map the "light", "medium", and "heavy" values to numerical values
  const mappedData = data.map(item => ({
    ...item,
    morning: item.morning === 'light' ? 2 : item.morning === 'medium' ? 3 : 4,
    afternoon: item.afternoon === 'light' ? 2 : item.afternoon === 'medium' ? 3 : 4,
  }));

  // Custom tick formatter
  const formatTick = (tick) => {
    return tick === 1 ? 'none' : tick === 2 ? 'light': tick === 3 ? 'medium' : 'heavy';
  };

  return (
    <div className="graph">
      <h2>{title}</h2>
      <BarChart
        width={600}
        height={300}
        data={mappedData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={[1, 4]} ticks={[1, 2, 3, 4]} tickFormatter={formatTick} />
        {/* <Tooltip content={<CustomTooltip />}/> */}
        <Legend />
        <Bar dataKey="morning" fill="#D06A30" />
        <Bar dataKey="afternoon" fill="#1B3454" />
      </BarChart>
    </div>
  );
};

export default Graph;