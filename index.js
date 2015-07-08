var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))

// Serve the static files I need.
app.use('/', express.static(__dirname + '/static'))

//app.get('/', function(request, response) {
//  response.send('Hello World!')
//})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
