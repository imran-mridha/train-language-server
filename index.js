const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res)=> {
  res.send('Train Language Server Running')
})
app.get('/courses', (req,res)=>{
  res.send(courses)
})
app.get('/course-categories', (req, res) => {
  res.send(categories)
})

app.get('/category/:id',(req, res)=>{
  const id = req.params.id;
  if(id === '18'){
    res.send(courses)
  }else{
    const categoryCourse = courses.filter(n => n.category_id === id);
    res.send(categoryCourse)
  }
})

app.get('/course/:id', (req, res)=>{
  const id = req.params.id;
  const selectedCourse = courses.find(course => course._id === id);
  res.send(selectedCourse);
})

app.listen(Port, ()=> {
  console.log('Server Running On Port', Port);
})