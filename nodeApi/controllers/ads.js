/* --------------------------------------------------------
' route controller ads
' ---------------------------------------------------------
' Попадаем к этим методам по пути /api/ads. Т.к мы записали 
' в роутере модель к каждому контроллеру, то эта модель
' достается тут и совершает поиск по базе данных.
' А дальше в зависимости от условий - сохра-
' няет, удаляет, выдает обратно ошибки.
' ---------------------------------------------------------
*/
        
        
              /* ------------------------------------------
               *     Загрузка объявлений
               * ------------------------------------------
               */
exports.read = function(req, res){
      exports.model.Ad.find({},{_id:1,private:1,title:1,price:1,author_id:1, phone:1},function (err, ads) {
        if (!err) {
            res.send({'ads':ads,'success':true});
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            res.send({'message':'Ошибка базы данных'});
        }
    });
};
              /* ------------------------------------------
               *     Загрузка одного объявления
               * ------------------------------------------
               */
exports.show = function(req, res){
      
      var id = req.params.id;
      exports.model.Ad.findById(id,function(err, ads){
           if (!err) {
            res.send({'ads':ads,'success':true});
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            res.send({'message':'Ошибка базы данных'});
        } 
      })
};
              /* ------------------------------------------
               *     Добавление объявления
               * ------------------------------------------
               */
exports.add = function(req, res){
      delete(req.body._id);
      var message;
      var ad = new exports.model.Ad(req.body);
      ad.save(function(err, ad) {
         if (!err) {
            res.send({'ads':ad,'success':true, 'message':'Объявление успешно добавлено'});
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            if(err.name ==='ValidationError'){
                  message = 'Ошибка валидации';
            }else{
                  message = 'Ошибка базы данных';
            }
            res.send({message:message, success: false});
        }     
});
};
              /* ------------------------------------------
               *     Обновление объявления
               * ------------------------------------------
               */
exports.update = function(req, res){
      var message;
       var id = req.body._id;

        exports.model.Ad.findByIdAndUpdate(id,req.body,function (err, ad) {
        if (!err) {
            res.send({'message':'Объявление успешно обновлено', 'success':true});
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
           if(err.name ==='ValidationError'){
                  message = 'Ошибка валидации';
            }else{
                  message = 'Ошибка базы данных';
            }
            res.send({message:message, success: false});
        }
    });    
};
              /* ------------------------------------------
               *     Удаление объявления
               * ------------------------------------------
               */
exports.destroy = function(req, res){
      var id = req.params.id;
      exports.model.Ad.findByIdAndRemove(id, function(err) {
      if (!err) {
            res.send({'message':'Объявление успешно удалено', 'success':true});
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            res.send({ 'message':'Ошибка базы данных'});
        }
});
};


