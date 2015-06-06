/* ------------------------------------
 '         Модель категории
 ' ------------------------------------
 */ 
Ext.define('MyApp.model.Category',{
      extend: 'Ext.data.Model',
      fields:[{name:'_id', type: 'string'},
              {name:'category'},
              {name:'parent_id'}
        ],
       
        proxy: {
              type: 'rest',
              url: 'http://localhost:1337/api/cats'
              
        }
      
});
