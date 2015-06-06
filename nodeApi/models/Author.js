        /* ---------------------------------------
         * Модель Автора
         * ---------------------------------------
         */
module.exports = function (mongoose) {

      var AuthorSchema = new mongoose.Schema({
            name: {type: String, required: true},
            email: {type: String, required: true}
      });

      var Author = mongoose.model('Author', AuthorSchema);

      //put custom methods here

      return {
            Author: Author
      };
};
