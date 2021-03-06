 /* ----------------------------------
  ' AdsController
  ' ----------------------------------
  ' Контроллер, отвечающий за таблицы
  ' ----------------------------------
  */
Ext.define('MyApp.controller.AdsController', {
      extend: 'Ext.app.ViewController',
      alias: 'controller.adsctrl',
      control: {
      /* ----------------------------------------------------------
       *          Следим за евентами Таблицы Объявлений
       * ----------------------------------------------------------
       */
            'myapp-adstable': {
                          /* ----------------------------------------------------------
                           * itemdblclick
                           * ----------------------------------------------------------
                           * При двойном нажатии на строку в таблице объявлений текущий 
                           * контроллер записывается в переменную, затем загружается
                           * объявление, на которое мы нажали. Дело в том, что изна
                           * чально при загрузке приложения мы получаем лишь нео-
                           * бходимые для вывода поля, остальное подгружается 
                           * по необходимости. Затем создается форма объяв.
                           * ----------------------------------------------------------
                           */
                  itemdblclick: function (itemclicked, record, item, index, e, eOpts) {
                        var ctrlr = this;
                        record.load({
                              failure: function (rec, operation) {
                                    console.log('failure');
                              },
                              success: function (rec, operation) {
                                    console.log('successfully loaded record.');
                                    ctrlr.createForm(record, 'AdsForm');
                              }
                        });

                  },
                          /* --------------------------------------------
                           * itemmousedown
                           * --------------------------------------------
                           * При нажатии на запись в таблице объявлений - 
                           * запускается функция контроллера по филь
                           * трованию авторов, которые привязаны
                           * к текущей записи по author_id.
                           * --------------------------------------------
                           */
                  itemmousedown: function (rowmodel, record, index, eOpts) {
                        this.storeFilter(record, 'author_id', 'authsForFiltering', '_id');
                  }

            },
      /* ----------------------------------------------------------
       *          Следим за евентами Таблицы Объявлений
       * ----------------------------------------------------------
       */
            'myapp-authorstable': {
                          /* ----------------------------------------------------------
                           * itemdblclick
                           * ----------------------------------------------------------
                           * При двойном нажатии на строку в таблице авторов
                           * запускается функция по созданию формы автоорв.
                           * ----------------------------------------------------------
                           */
                  itemdblclick: function (itemclicked, record, item, index, e, eOpts) {
                        this.createForm(record, 'AuForm');
                  },
                          /* ---------------------------------------------
                           * itemmousedown
                           * ---------------------------------------------
                           * При нажатии на запись в таблице авторов - 
                           * запускается функция контроллера по филь
                           * трованию объявлений, которые привяза-
                           * ны к текущему автору по author_id.
                           * --------------------------------------------
                           */
                  itemmousedown: function (rowmodel, record, index, eOpts) {
                        this.storeFilter(record, '_id', 'ads','author_id');
                  }
            }
      },
              /* ------------------------------------------------
               * createForm
               * ------------------------------------------------
               * Метод создания формы. На входе получает запись и
               * название модели формы на создание (строкой).
               * Из этого создается форма, а в нее грузим
               * переданную запись. Отображаем форму.
               * ------------------------------------------------
               */
      createForm: function (record, formName)
      {
            var formInstance = Ext.create('MyApp.view.ads.' + formName);
            var form = formInstance.down('form');
            if (record) {
                  form.loadRecord(record);
            }
            formInstance.show();
      },
              /* ---------------------------------------------------------
               * storeFilter
               * ---------------------------------------------------------
               * В метод фильтрации передается запись, а также три строки: 
               * filterField Поле, с которым будут сравниваться поля 
               * перебираемых записей, хранилище, в котором будет
               * происходить перебор, и поле,  которое будет
               * запрашиваться у каждой записи в хранилище
               * для сверки с filterField. FilterBy во-
               * звращает либо false( не показывать
               * запись текущего перебора), либо 
               * true(показать текущую запись)
               * ---------------------------------------------------------
               */
      storeFilter: function (record, filterField, storeField, iteratedField) {
            Ext.suspendLayouts();
            var filterId = record.get(filterField);
            var store = this.getStore(storeField);
            this.resetFilters();
            store.filterBy(function (rec) {
                  var foundMatch = false;
                  if (rec.get(iteratedField) === filterId) {
                        foundMatch = true;
                  }
                  return foundMatch;
            });
            Ext.resumeLayouts();
      },
              /* ---------------------------------------
               * onDeleteBtn
               * ---------------------------------------
               * При нажатии на (-) в таблице объявлений
               * находится текущая строка и стирается
               * ---------------------------------------
               */      

      onDeleteBtn: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex);
            rec.erase();
      },
              /* ---------------------------------------
               * adAddBtn
               * ---------------------------------------
               * Нажимая на кнопку 'Добавить объявление'
               * мы создаем нужную модель и запускаем
               * метод контролёра по созданию формы
               * ---------------------------------------
               */ 
      adAddBtn: function () {
            var record = Ext.create('MyApp.model.Ad');
            this.createForm(record, 'AdsForm');
      },
              /* ---------------------------------------
               * authorAddBtn
               * ---------------------------------------
               * Нажимая на кнопку 'Добавить автора' мы 
               * создаем нужную модель и запускается
               * метод контролёра по созданию формы
               * ---------------------------------------
               */
      authorAddBtn: function () {
            var record = Ext.create('MyApp.model.Author');
            this.createForm(record, 'AuForm');

      },
              /* ---------------------------------------
               * resetFilters
               * ---------------------------------------
               * Метод по очистке всех фильтров хранилищ
               * ---------------------------------------
               */
      resetFilters: function () {
            var auStore = this.getStore('authsForFiltering');
            var adStore = this.getStore('ads');

            auStore.clearFilter();
            adStore.clearFilter();

      }
      
});
