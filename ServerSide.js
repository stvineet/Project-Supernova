var codes = {};
var idCounter = 0;
var express = require('express');
var app = express();

var port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', async(req, res) => {
    res.send('Test');
  });  
app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`);
});
