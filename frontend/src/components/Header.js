import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Level Up Your Fitness</h1>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/workout-plans">Workout Plans</Link></li>
          <li><Link to="/diet-plans">Diet Plans</Link></li>
          <li><Link to="/activity-tracking">Activity Tracking</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
