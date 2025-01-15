//Create web server and listen to port
const express = require('express');
const app = express();
const port = 3000;

//Create a route for GET request
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//Listen to port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});