const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();

const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});