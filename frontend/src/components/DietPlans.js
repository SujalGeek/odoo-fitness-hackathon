import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

function DietPlans() {
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const fetchDiets = async () => {
      try {
        const response = await axios.get('/diets');
        setDiets(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchDiets();
  }, []);

  return (
    <div className="container">
      <h2>Diet Plans</h2>
      {diets.map((diet, index) => (
        <div key={index} className="plan">
          <h3>{diet.name}</h3>
          <p>{diet.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DietPlans;
