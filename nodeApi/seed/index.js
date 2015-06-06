/* ---------------------------------------------
 * Seed
 * ---------------------------------------------
 * Заполняет базу данных тестовыми записями,
 * предварительно очищая существующее там.
 * ---------------------------------------------
 */

module.exports = function(mongoose,models){
      var catJSON = require('./categories');
      var cityJSON = require('./cities');
      
      var AuthorModel = models.Author.Author;
      var AdModel = models.Ad.Ad;
      var CatCol = mongoose.connection.collection('categories');
      var CityCol = mongoose.connection.collection('cities');
      
      CatCol.remove();
      CatCol.insert(catJSON);


      CityCol.remove();
      CityCol.insert(cityJSON);

      AuthorModel.remove().exec();
      AdModel.remove().exec();

      setTimeout(function () {
            var author1 = new AuthorModel({
                  name: 'Александр',
                  email: 'email@mail.ru'
            });
            author1.save();

            var author2 = new AuthorModel({
                  name: 'Мария',
                  email: 'mari85@mail.me'
            });
            author2.save();

            var author3 = new AuthorModel({
                  name: 'Вован',
                  email: 'vovik@gmail.com'
            });
            author3.save();




            var ad1 = new AdModel({
                  private: 0,
                  allow_mails: 0,
                  title: 'Продам машину',
                  description: 'Машина в гараже, приходи.',
                  phone: 89132088532,
                  author_id: author1.id,
            });
            ad1.save();
            var ad2 = new AdModel({
                  private: 1,
                  allow_mails: 1,
                  title: 'Куплю слона',
                  phone: 89138758382,
                  description: 'Розового, как положено',
                  author_id: author2.id,
            });
            ad2.save();
            var ad3 = new AdModel({
                  private: 0,
                  title: 'Недвижимость в Новосибирске',
                  phone: 88538758382,
                  description: 'Хорошие домики по низким ценам.',
                  author_id: author3.id,
            });
            ad3.save();
console.log('db purged and seeded');
      }, 500);
};


