var express = require('express');
    app = express();

app.use(express.static(__dirname));
app.use(express.bodyParser());

app.get('/logs', function(req, res) {
    res.send(require('./data.json'));
});

app.listen(3000);
console.log('Server started on port 3000');