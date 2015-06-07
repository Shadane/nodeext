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
              url: '/api/cats'
              
        }
      
});
