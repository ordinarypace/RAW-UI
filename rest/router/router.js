var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var host = 'mongodb://localhost/rawuidb',
    db = mongoose.connect(host),
    tasks = new schema(data),
    model = mongoose.model('task', tasks);

var task = new model();

