import React from 'react';

const WorkoutHistory = () => {
  const workouts = [
    { date: '2023-10-01', type: 'Running', duration: '30 min' },
    { date: '2023-10-02', type: 'Cycling', duration: '45 min' },
    { date: '2023-10-03', type: 'Swimming', duration: '25 min' },
  ];

  return (
    <div className="card">
      <h2>Workout History</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.date}: {workout.type} - {workout.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutHistory;
