import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import Profile from './components/Profile';
import WorkoutPlans from './components/WorkoutPlans';
import DietPlans from './components/DietPlans';
import ActivityTracking from './components/ActivityTracking';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/activity-tracking" element={<ActivityTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
