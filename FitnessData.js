import React from 'react';
import { Line } from 'react-chartjs-2';

const FitnessData = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Steps',
        data: [8000, 9000, 12000, 7000, 15000, 6000, 10000],
        fill: false,
        borderColor: '#0072c6',
      },
      {
        label: 'Calories',
        data: [300, 400, 350, 500, 450, 600, 550],
        fill: false,
        borderColor: '#ff6384',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card">
      <h2>Fitness Data</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FitnessData;
