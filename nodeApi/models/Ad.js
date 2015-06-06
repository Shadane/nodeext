        /* ---------------------------------------
         * Модель Объявления
         * ---------------------------------------
         */
module.exports = function (mongoose) {

      var AdSchema = new mongoose.Schema({
            private: {type: Number, required: true},
            allow_mails: {type: Boolean},
            title: {type: String, required: true},
            description: {type: String},
            location_id: {type: String},
            category_id: {type: String},
            price: {type: Number, default: 0},
            phone: {type: Number, required: true},
            author_id: {type: String, required: true}
      });

      var Ad = mongoose.model('Ad', AdSchema);

      //put custom methods here

      return {
            Ad: Ad
      };
};