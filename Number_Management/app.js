const express = require('express');
const axios = require('axios'); // For making HTTP requests
const app = express();
const port = 8008;

// Update the test server URLs
const primeNumbersUrl = 'http://20.244.56.144/numbers/primes';
const fiboNumbersUrl = 'http://20.244.56.144/numbers/fibo';

app.get('/numbers', async (req, res) => {
  const urls = req.query.url; // Array of URLs from query parameters

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid URLs' });
  }

  // Fetch data from URLs
  const fetchDataPromises = urls.map(async (url) => {
    try {
      const response = await axios.get(url, { timeout: 500 });
      return response.data.numbers;
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
      return [];
    }
  });

  try {
    const fetchedData = await Promise.all(fetchDataPromises);
    const mergedNumbers = Array.from(new Set(fetchedData.flat())).sort((a, b) => a - b);
    res.json({ numbers: mergedNumbers });
  } catch (error) {
    console.error(`Error processing data: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
