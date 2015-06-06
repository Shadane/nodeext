        /* ---------------------------------------
         * Модель города
         * ---------------------------------------
         */
module.exports = function (mongoose) {

      var CitySchema = new mongoose.Schema({
            _id:{type: Number},
            city_name: {type: String}
      });

      var City = mongoose.model('City', CitySchema);

      //put custom methods here

      return {
            City: City
      };
};

