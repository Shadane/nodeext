var express = require('express');

 
//то, что загружается со стороны
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//то, что загружается из моих файлов
var config      = require('./config');
var router = require('./router');

//создаем приложение
var app = express();

//подключаем бодипарсер и корс
app.use(bodyParser.json()); 
app.use(cors());


//загружаем наши модели
var models = {
    Author: require('./models/author')(mongoose),
    Ad: require('./models/ad')(mongoose),
    
    City: require('./models/city')(mongoose),
    Category: require('./models/category')(mongoose)
};


mongoose.connect(config.get('mongoose:uri'),function onMongooseError(err) {
    if (err) throw err;
});


//эту строку можно закомментировать если не нужны тестовые данные
require('./seed')(mongoose,models);

//подключаем наш ext проект
app.use('/ext', express.static('../ext/'));

//запускаем роутер
router.init(app, models);

app.listen(config.get('port'), function(){
    console.log('Express server listening on port ' + config.get('port'));
});