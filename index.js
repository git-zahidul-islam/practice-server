const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

const users = [
    {id: 1,name: "zahid", email: "zahid@gmail.com"},
    {id: 2,name: "said", email: "said@gmail.com"},
    {id: 3,name: "tohid", email: "tohid@gmail.com"}
]

app.get('/', (req, res) => {
    res.send('hay i am default data')
})

app.get('/users',(req,res)=>{
    res.send(users)
})



app.listen(port, () => {
    console.log(`the port is: ${port}`);
})