const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res)=> {
  res.send('Train Language Server Running')
})

app.listen(Port, ()=> {
  console.log('Server Running On Port', Port);
})