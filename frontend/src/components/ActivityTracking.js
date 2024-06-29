import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

function ActivityTracking() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/activities');
        setActivities(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="container">
      <h2>Activity Tracking</h2>
      {activities.map((activity, index) => (
        <div key={index} className="activity">
          <p><span>Date:</span> {activity.date}</p>
          <p><span>Activity:</span> {activity.activity}</p>
          <p><span>Duration:</span> {activity.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default ActivityTracking;
