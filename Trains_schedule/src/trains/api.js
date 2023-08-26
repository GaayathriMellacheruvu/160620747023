import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

export const getTrains = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleTrain = async (trainNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains/${trainNumber}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
