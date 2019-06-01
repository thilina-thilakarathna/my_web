const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'send')));
app.use('/post',posts);
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'send/index.html'));
});



//const port = process.env.PORT || 4600;
//app.listen(port,(req,res)=>{
  //  console.log(`Running on port ${port}`);
//});
app.listen(process.env.ALWAYSDATA_HTTPD_PORT, process.env.ALWAYSDATA_HTTPD_IP, function () {
  console.log('Example app started!')
})
