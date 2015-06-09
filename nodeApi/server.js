var express = require('express');

 
//то, что загружается со стороны
var cors = require('cors');
var bodyParser = require('body-parser');
var compress = require('compression');
var mongoose = require('mongoose');

//то, что загружается из моих файлов
var config      = require('./config');
var router = require('./router');

//создаем приложение
var app = express();
app.use(compress());
//подключаем бодипарсер и корс
app.use(bodyParser.json()); 
app.use(cors());


//загружаем наши модели
var models = {
    Author: require('./models/Author')(mongoose),
    Ad: require('./models/Ad')(mongoose),
    
    City: require('./models/City')(mongoose),
    Category: require('./models/Category')(mongoose)
};


mongoose.connect(config.get('mongoose:uri'),function onMongooseError(err) {
    if (err) throw err;
});


//подключаем наш ext проект
app.use('/ext/app', express.static('../ext/build/production/MyApp/'));

//запускаем роутер
router.init(app, models);

app.listen(config.get('port'), function(){
    console.log('Express server listening on port ' + config.get('port'));
});