const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

// middle
app.use(cors())

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

app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    console.log('i need data',id);
    const user = users.find(user => user.id === id)
    console.log(user);
    if(user){
        res.send(user)
    }
    else{
        res.status(404).send('user not found')
    }
})

app.listen(port, () => {
    console.log(`the port is: ${port}`);
})