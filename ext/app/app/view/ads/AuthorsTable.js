 /* ----------------------------
  '    Таблица с авторами
  ' ----------------------------
  */
Ext.define('MyApp.view.ads.AuthorsTable', {
      extend: 'Ext.grid.Panel',
      xtype: 'myapp-authorstable',
      requires:[
            'MyApp.view.ads.AuForm',
            'MyApp.controller.FormController'
      ],
      width: 300,
      height: 200,
      title: 'Авторы',
      stateful: true,
      collapsible: true,
      split: true,
        columnLines: true,
        
      columns: [
            {
                   /* ---------------------------------
                    *      Колонка с именем Автора
                    * ---------------------------------
                    */
                  text: 'Имя Автора',
                  hideable: false,
                  flex: 1,
                  dataIndex: 'name'
                  
                  
            },
            {
                   /* ---------------------------------
                    *      Колонка с почтой Автора
                    * ---------------------------------
                    */
                  text: 'Электронная почта',
                  flex: 1,
                  dataIndex: 'email'
            }


      ],
     /* --------------------------------------------
      *      bottomBar с кнопкой Добавить Автора
      * --------------------------------------------
      */
      dockedItems: [{
                  xtype: 'toolbar',
                  dock: 'bottom',
                  layout: {
                        pack: 'center',
                        type: 'hbox'
                  },
                  items: [
                        {
                              xtype: 'button', 
                              text: 'Добавить автора', 
                              handler: 'authorAddBtn'
                        }
                  ]
            }]
});


