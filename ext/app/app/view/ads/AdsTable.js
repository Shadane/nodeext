 /* ----------------------------
  *    Таблица с Объявлениями
  * ----------------------------
  */

Ext.define('MyApp.view.ads.AdsTable', {
      extend: 'Ext.grid.Panel',
      xtype: 'myapp-adstable',
      requires:[
            'MyApp.view.ads.AdsForm',
            'MyApp.controller.FormController'
      ],
      width: 800,
      height: 400,
      title: 'Объявления',
      stateful: true,
      collapsible: true,
      columnLines: true,
                  /* --------------------------------------------
                   * viewConfig
                   * --------------------------------------------
                   * При загрузке строк идет проверка на свойство
                   * private, и если оно = 1 , то класс строки
                   * становится company, для него есть css
                   * --------------------------------------------
                   */
      viewConfig: {
            getRowClass: function (record, rowIndex, rowParams, store) {
                  if (record.get('private') !== 1){
                        return 'private';
                  }
                  return 'company';

            }
      },
      columns: [
            {
                   /* -------------------------------------
                    *    Колонка с названием объявления
                    * -------------------------------------
                    */
                  text: 'Название',
                  width: 200,
                  sortable: false,
                  hideable: false,
                  flex: 1,
                  dataIndex: 'title'
            },
            {
                   /* -------------------------------------
                    *    Колонка с ценой объявления
                    * -------------------------------------
                    */
                  width: 60,
                  text:'Цена',
                  dataIndex: 'dollarPrice'

            },
            {
                   /* -------------------------------------
                    *    Колонка с телефоном объявления
                    * -------------------------------------
                    */
                  text: 'Телефон',
                  flex: 1,
                  dataIndex: 'phone'
            },
            {
                   /* -------------------------------------
                    *   Колонка с кнопкой удаления строки
                    * -------------------------------------
                    */
                  menuDisabled: true,
                  sortable: false,
                  xtype: 'actioncolumn',
                  width: 25,
                  items: [{
                              icon: './resources/images/icons/delete.png',
                              tooltip: 'Удалить',
                              handler: 'onDeleteBtn'

                        }]
            }

      ],
     /* ---------------------------------------------
      *    bottomBar с кнопкой Добавить Обьявление
      * ---------------------------------------------
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
                              text: 'Добавить объявление',
                              handler: 'adAddBtn'
                        }
                  ]
            }]
});

