var express = require('express');//import
var app =express();
var http=require("http").Server(app);
var io=require('socket.io')(http);

var port=process.env.PORT || 5000

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

http.listen(port,function(){
	console.log('listening on:' +port);
});

/* 
socket.io
*/
io.sockets.on('connection',function(socket){
	console.log('A new client connection');

	socket.on('play video',function(data){
		 console.log("play server");
		io.sockets.emit('playing video',{hello: 'world'});
	}); 

	socket.on('pause video',function(data){
		    console.log("PauseVideo server");
		io.sockets.emit('pausing video',{hello: 'world'});
	}); 
});