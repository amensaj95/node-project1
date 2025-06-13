const port = 3001;
const express = require('express');
const cors = require('cors');
const Myuser = require('../mongodbmodel/schema.js');
const connectToDatabase = require('../mongodbconfig.js');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/getdata/:id',(req,res) =>{
  console.log(req.params.id);
  res.send('Hello world');
});   
app.post('/createdata',async (req, res) => {  
  const data = req.body;
  console.log(data);
  await Myuser.create(data)
  res.send('Data received');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
connectToDatabase();