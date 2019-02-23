const express = require('express');
const parser = require('body-parser') //instantiate an express object by calling it. 
const path = require('path');
const app = express();
const cors = require('cors')

app.use(cors()) 

app.use(parser.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(`${__dirname}/../public`)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  })



const port = process.env.PORT || 3020;
app.listen(port, () => {
    console.log(`SERVER LAUNCHED port = ${port}`);
  });