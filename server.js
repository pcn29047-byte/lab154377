const express = require('express');
const app = express();
const port = 3000;

app.get('/',express.static('www'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
console.log("Pimchanok")
});
