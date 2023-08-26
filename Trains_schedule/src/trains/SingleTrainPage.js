import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from './api'; // Update path as needed

function SingleTrainPage() {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    getSingleTrain(trainNumber)
      .then(data => setTrain(data))
      .catch(error => console.error(error));
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Train Details</h1>
      <h2>{train.trainName}</h2>
      {/* Display other train details */}
    </div>
  );
}

export default SingleTrainPage;

