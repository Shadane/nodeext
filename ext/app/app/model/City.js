/* ------------------------------------
 '         Модель города
 ' ------------------------------------
 */ 
Ext.define('MyApp.model.City',{
      extend: 'Ext.data.Model',
      idProperty: '_id',
      fields:[{name:'_id'},
              {name:'city_name'}
        ],
        proxy: {
              type: 'rest',
              url: 'http://localhost:1337/api/cities'
        }
      
});