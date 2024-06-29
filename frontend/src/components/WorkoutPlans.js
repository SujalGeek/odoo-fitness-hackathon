import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";

function WorkoutPlans() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("/workouts");
        setWorkouts(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="container">
      <h2>Workout Plans</h2>
      {workouts.map((workout, index) => (
        <div key={index} className="plan">
          <h3>{workout.level}</h3>
          <p>{workout.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkoutPlans;
