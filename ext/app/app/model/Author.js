/* ------------------------------------
 '         Модель автора
 ' ------------------------------------
 */ 
Ext.define('MyApp.model.Author', {
    extend: 'Ext.data.Model',
      idProperty: '_id',
    requires: [
          'Ext.data.Field',
          'MyApp.ux.data.proxy.MyRest',
          'Ext.data.reader.Json'
    ],
    
    fields: [ 
          {name:'id'},
          {name:'name'}, 
          {name:'email'}, 
          {
                calculate: function(rec){
                      return  rec.name + '  :  ' + rec.email;
                },
                name:'nameEmail'
          } 
    ],
    proxy: {
          type: 'myrest',
          url: '/api/authors',
          reader:{
                type:'json',
                rootProperty: 'authors'
          }
 
    }
  
    
});

