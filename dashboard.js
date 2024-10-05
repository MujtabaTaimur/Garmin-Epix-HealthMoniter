import React from 'react';
import Header from './Header';
import FitnessData from './FitnessData';
import WorkoutHistory from './WorkoutHistory';
import GPSMap from './GPSMap';

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <FitnessData />
      <WorkoutHistory />
      <GPSMap />
    </div>
  );
};

export default Dashboard;
