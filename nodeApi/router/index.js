/* ------------------------------------
 * Router
 * ------------------------------------
 * Загружаем контроллеры, затем прописываем
 * им  необходимые для их работы модели,
 * затем прописываем пути , запускаем
 * мы  все  это из  входного скрипта 
 * через routerVar.init(app,models)
 * ------------------------------------
 */
exports.init = function(app, models)
{
    var ads = require('../controllers/ads');
    var authors = require('../controllers/authors');
    var misc = require('../controllers/misc');
 
    ads.model = models.Ad;
    authors.model = models.Author;
    misc.model = { City: models.City.City, Category: models.Category.Category};
    
    //read
    app.get('/api/ads', ads.read);
    app.get('/api/ads/:id', ads.show);
    app.post('/api/ads', ads.add);
    app.put('/api/ads/:id', ads.update);
    app.delete('/api/ads/:id', ads.destroy);
    
    //read
    app.get('/api/authors', authors.read);
    app.post('/api/authors', authors.add);
    app.put('/api/authors/:id', authors.update);
    app.delete('/api/authors/:id', authors.destroy);
    
    app.get('/api/cities/', misc.readCity);
    app.get('/api/cats/', misc.readCats);

    app.get('/', function(req, res){
        res.redirect('/ext/app');
    })
};

