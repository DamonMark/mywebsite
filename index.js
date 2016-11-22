var express = require('express')
var app = express()

app.post('/',function(req,res){
    res.send("hello world")
    var name = req.get("name");
    var pass = req.get("pass");
    connect.excute("insert into User values(name = " + name + ",pass = " + pass + ")");

})

app.use(express.static('static'))

app.listen(3000,function(){
    console.log("example app listening")
})