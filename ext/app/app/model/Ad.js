/* ------------------------------------
 '         Модель обьявления
 ' ------------------------------------
 */ 
Ext.define('MyApp.model.Ad', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    requires: [
          'Ext.data.Field',
          'MyApp.ux.data.proxy.MyRest',
          'Ext.data.reader.Json'
    ],
    
    fields: [ 
          {name:'_id'},
          {name:'private'},
          {name:'allow_mails'},
          {name:'title'}, 
          {name:'description'}, 
          {name:'location_id'}, 
          {name:'category_id'}, 
          {name:'price'}, 
          {name:'author_id'},
          {
              name:'dollarPrice', 
              calculate: function (data) {
                      return '$'+data.price;
              }
          }
    ],
    proxy: {
          type: 'myrest',
          url: '/api/ads',
          reader:{
                type:'json',
                rootProperty: 'ads'
          }

    }
   
    
});