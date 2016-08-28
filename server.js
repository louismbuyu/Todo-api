var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.send('Todo API ROOT');
});

app.listen(PORT, function(){
	console.log('Express ist f listening on port '+ PORT +'!');
})