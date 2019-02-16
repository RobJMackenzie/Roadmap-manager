const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;



console.log('Hello World');

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  