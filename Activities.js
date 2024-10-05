import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const response = await axios.get('https://api.garmin.com/wellness-api/rest/activities', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div>
      <h2>Your Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.type} on {activity.date} - Duration: {activity.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Callback from './Callback';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
};

export default App;
