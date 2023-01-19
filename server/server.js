const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

app.get("/api", (req, res) => {
    res.json({ message: 'Testing Express' });
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

