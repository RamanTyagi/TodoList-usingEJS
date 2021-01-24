const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
let items=[];
let workitems=[];
app.get("/",function(req,res){

let day = date.getDate();
res.render('list',{listheading : day,kindofitem: items});
})

app.post("/",function(req,res){
 let item = req.body.i;
 if(req.body.button==="Work List"){
   workitems.push(item);
   res.redirect("/work");
 }
else{
  items.push(item);
 res.redirect("/");
 // res.render('list',{newitem : item}); -- YE ERROR DEGA KYUKI kindofday KI VALUE NI MILEGI TAB!!!
}

})
app.get("/work",function(req,res){
res.render('list',{listheading : "Work List",kindofitem: workitems});
})



app.listen(3000,function(){
  console.log("SERVER RUNNING ON PORT 3000");
})
