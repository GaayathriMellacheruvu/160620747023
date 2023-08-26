import React, { useState, useEffect } from 'react';
import TrainCard from './TrainCard';
import { getTrains } from './api'; // Update path as needed

function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getTrains()
      .then(data => setTrains(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {trains.map(train => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
}

export default AllTrainsPage;
