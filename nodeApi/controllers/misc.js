/* -------------------------------------------------------
 ' route controller misc
 ' --------------------------------------------------------
 ' Попадаем к этим методам по пути /api/cities и /api/cats.
 ' Т.к мы записали в роутере модель к каждому контролле-
 ' ру, то эта модель достается тут и совершает поиск
 ' по базе данных. А дальше в зависимости от 
 ' условий - сохраняет, удаляет, выдает 
 ' обратно на клиент ошибки.
 ' --------------------------------------------------------
 */


              /* ------------------------------------------
               *           Загрузка городов
               * ------------------------------------------
               */
exports.readCity = function(req, res){
      exports.model.City.find(function (err, cityList) {
        if (!err) {
           res.send(cityList);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            res.send({ error: 'Server error' });
        }
        });
};
              /* ------------------------------------------
               *           Загрузка категорий
               * ------------------------------------------
               */
exports.readCats = function(req,res){
      exports.model.Category.find(function (err, categoryList) {
        if (!err) {
           res.send(categoryList);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            res.send({ error: 'Server error' });
        }
    });
};
