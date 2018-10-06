var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var hbs=require("express-handlebars");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var gpio = require('gpio');
var gpio4,gpio17,gpio27,gpio22;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({extname:'hbs',defaultLayout:'error',layoutsDir:__dirname+'/views'}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', function(req, res, next) {
  res.render('home');
});


app.get('/front',function(req,res){
 gpio4 = gpio.export(4, {
direction: gpio.DIRECTION.OUT,
   ready: function() {
      gpio4.set();
   }
});
gpio17=gpio.export(17,{
direction: gpio.DIRECTION.OUT,
ready:function(){
gpio17.set();
}
});
gpio27=gpio.export(27,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio27.set(0);
  }
});
gpio22=gpio.export(22,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio22.set(0);
  }
});
  console.log("front");
  res.redirect('/');
 
  
});

app.get('/back',function(req,res){
gpio4=gpio.export(4,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio4.set(0);
  }
});
gpio17=gpio.export(17,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio17.set(0);
  }
});
gpio27=gpio.export(27,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio27.set();
  }
});
gpio22=gpio.export(22,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio22.set();
  }
});
  console.log("back");
  res.redirect('/');
});

app.get('/right',function(req,res){
 gpio4=gpio.export(4,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio4.set();
  }
});
gpio17=gpio.export(17,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio17.set(0);
  }
});
gpio27=gpio.export(27,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio27.set(0);
  }
});
gpio22=gpio.export(22,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio22.set(0);
  }
}); 
console.log("right");
  res.redirect('/');
});

app.get('/left',function(req,res){
 
gpio4=gpio.export(4,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio4.set(0);
  }
});
gpio17=gpio.export(17,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio17.set();
  }
});
gpio27=gpio.export(27,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio27.set(0);
  }
});
gpio22=gpio.export(22,{
  direction:gpio.DIRECTION.OUT,
  ready:function(){
    gpio22.set(0);
  }
}); 
console.log("left");
  res.redirect('/');
});

app.listen(8000,function(){
console.log("server at 8000");
});

module.exports = app;

