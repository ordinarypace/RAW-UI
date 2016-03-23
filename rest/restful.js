var express = require('express'),
    router = require('./router/router');

var app = express();

// express configure
app.configure(function(){
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});


// CURD setup
app.get('API', router.FindAll);
app.get('API/:uuid', router.FindById);
app.post('API/:uuid', router.Insert);
app.put('API/:uuid', router.Update);
app.delete('API/:uuid', router.Delete);

app.listen(3000);
console.log('Listening on port 3000....');


