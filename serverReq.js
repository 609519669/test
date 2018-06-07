var express = require('express');
var app = express();

var requestPort = 80;

app.use(express.static(__dirname + '/staticReq')); //3000端口的静态文件，即index.html
app.get('/test',function(request,response){
    response.setHeader('Content-Type','text/html')
    response.sendFile(__dirname + '/staticRes/index.html')
})

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});
