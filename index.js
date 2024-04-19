const express = require('express');
const app = express()
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('hay i am default data')
})


app.listen(port, () => {
    console.log(`the port is: ${port}`);
})