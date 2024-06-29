import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/profile');
        setProfile(response.data);
      } catch (error) {
        console.error(error);
        // Handle error (e.g., redirect to login if not authenticated)
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="container profile-container">
      <h2>Profile</h2>
      <p><span>Name:</span> {profile.name}</p>
      <p><span>Email:</span> {profile.email}</p>
      <p><span>Age:</span> {profile.age}</p>
      <p><span>Gender:</span> {profile.gender}</p>
      <p><span>Weight:</span> {profile.weight} kg</p>
      <p><span>Height:</span> {profile.height} cm</p>
      <p><span>Fitness Goals:</span> {profile.fitnessGoals}</p>
      <p><span>Health Conditions:</span> {profile.healthConditions}</p>
    </div>
  );
}

export default Profile;
