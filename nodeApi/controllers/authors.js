/* ------------------------------------------------------------
' route controller authors
' -------------------------------------------------------------
' Попадаем к этим методам по пути /api/authors. Т.к мы записали 
' в роутере модель к каждому контроллеру, то эта модель
' достается тут и совершает поиск по базе данных.
' А дальше в зависимости от условий - сохра-
' няет, удаляет, выдает обратно ошибки.
' -------------------------------------------------------------
*/


              /* ------------------------------------------
               *           Загрузка авторов
               * ------------------------------------------
               */
exports.read = function(req, res){
      exports.model.Author.find(function (err, authors) {
        if (!err) {
           res.send({'authors':authors,'success':true});
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            res.send({ error: 'Server error' });
        }
    });
};

              /* ------------------------------------------
               *        Добавление нового автора
               * ------------------------------------------
               */
exports.add = function(req, res){
      var message;
     delete(req.body._id);
      var author = new exports.model.Author(req.body);
      author.save(function(err, au) {
         if (!err) {
            res.send({'ads':au,'success':true, message: 'Автор успешно добавлен'});
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
               *     Обновление существующего автора
               * ------------------------------------------
               */
exports.update = function(req, res){
      var message;
     var id = req.body._id;

        exports.model.Author.findByIdAndUpdate(id,req.body,function (err) {
        if (!err) {
            res.send({'message':'Автор успешно обновлен', 'success':true});
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
               *     Удаление автора - not implemented
               * ------------------------------------------
               */
exports.destroy = function(req, res){
      
};

