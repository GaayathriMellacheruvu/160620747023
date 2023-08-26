import React from 'react';

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h2>{train.trainName}</h2>
      <p>Departure: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      <p>Price: {train.price.sleeper}</p>
      <p>Seats Available: Sleeper - {train.seatsAvailable.sleeper}, AC - {train.seatsAvailable.AC}</p>
    </div>
  );
}

export default TrainCard;
