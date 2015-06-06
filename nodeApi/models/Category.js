        /* ---------------------------------------
         * Модель Категории
         * ---------------------------------------
         */
module.exports = function (mongoose) {

      var CategorySchema = new mongoose.Schema({
             _id:{type: String},
            category: {type: String},
            parent_id: {type: String}
      });

      var Category = mongoose.model('Category', CategorySchema);

      //put custom methods here

      return {
            Category: Category
      };
};

