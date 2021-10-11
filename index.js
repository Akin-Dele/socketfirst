const express = require('express');

//Setting up App
const app = express();

app.listen(3000, () => {
    console.log('Listening to what you have to say');
})

app.use(express.static('public'));