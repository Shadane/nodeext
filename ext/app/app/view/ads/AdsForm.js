/* ---------------------------------------
 ' AdsForm
 ' ---------------------------------------
 ' модальное окно с формой объявлений
 ' ---------------------------------------
 */
Ext.define('MyApp.view.ads.AdsForm', {
      extend: 'Ext.window.Window',
      xtype: 'myapp-adsform',
      requires:[
          'Ext.form.*'
      ],
      padding: 5,
      width: 500,
      controller: 'FormController',
      title: 'Сохранение объявления',
      modal: 'true',
      items: [
            {
                  /* ----------------------------
                   *      Форма объявлений
                   * ----------------------------
                   */
                  xtype: 'form',
                  bodyPadding: 10,
                  title: "",
                  defaults: {
                        labelWidth: 140,
                        margin: '0 0 10 0',
                        anchor: '90%'
                  },
                  items: [
                        {
                                      /* ------------------------------------
                                       * Частное лицо и компания radiobuttons
                                       * ------------------------------------
                                       */
                              xtype: 'fieldcontainer',
                              fieldLabel: '',
                              defaultType: 'radiofield',
                              layout: 'hbox',
                              items: [
                                    {
                                          boxLabel: 'Частное лицо',
                                          name: 'private',
                                          inputValue: 0,
                                          id: 'radio1',
                                          checked: true,
                                          margin: '0 0 10 170'
                                    }, {
                                          boxLabel: 'Компания',
                                          name: 'private',
                                          inputValue: 1,
                                          id: 'radio2',
                                          margin: '0 0 10 30'
                                    }
                              ]
                        },
                        {
                                      /* -------------------------------------------
                                       *      Поле названия объявления(required)
                                       * -------------------------------------------
                                       */
                              xtype: 'textfield',
                              name: 'title',
                              fieldLabel: 'Название **',
                              allowBlank: false,
                              blankText: "Введите название"
                        },
                        {
                                      /* ------------------------------------
                                       *      Поле описания объявления
                                       * ------------------------------------
                                       */
                              xtype: 'textareafield',
                              name: 'description',
                              fieldLabel: 'Описание'
                        },
                        {
                                      /* --------------------------------------------
                                       *    Поле выбора автора из списка(required)
                                       * --------------------------------------------
                                       */
                              xtype: 'combobox',
                              fieldLabel: 'Выберите автора**',
                              queryMode: 'local',
                              bind: {store: '{authors}'},
                              tpl: '<tpl for="."><div class="x-boundlist-item" >{name} {email}</div></tpl>',
                              displayField: 'nameEmail',
                              editable: false,
                              valueField: '_id',
                              name: 'author_id',
                              allowBlank: false,
                              blankText: "Выберите автора или создайте нового если их нет"
                              
                        },
                        {
                                      /* ------------------------------------
                                       *     Checkbox о рассылке почты
                                       * ------------------------------------
                                       */
                              xtype: 'checkbox',
                              boxLabel: 'Хочу получать рассылку на почту',
                              margin: '0 0 10 145',
                              name: 'allow_mails',
                              inputValue: '1'
                        },
                        {
                                      /* ------------------------------------
                                       *      Поле телефонного номера
                                       * ------------------------------------
                                       */
                              xtype: 'numberfield',
                              name: 'phone',
                              fieldLabel: 'Телефонный номер**',
                              minValue: 0,
                              maxValue: 99999999999,
                              hideTrigger: true,
                              keyNavEnabled: false,
                              mouseWheelEnabled: false,
                              vtype: 'phone',
                              allowBlank: false,
                              blankText:'Введите телефон'
                        },
                        {
                                      /* ------------------------------------
                                       *         Селектор города
                                       * ------------------------------------
                                       */
                              xtype: 'combobox',
                              fieldLabel: 'Выберите город',
                              queryMode: 'local',
                              bind: {store: '{cities}'},
                              displayField: 'city_name',
                              editable: false,
                              valueField: '_id',
                              name: 'location_id'
                        },
                        {
                                      /* ------------------------------------------------
                                       *        Селектор категории
                                       * ------------------------------------------------
                                       * Сюда попадает adjacency list, загруженный из БД,
                                       * если у строки parent_id==null, то добавляется
                                       * класс 'optgroup', у которого свой css 
                                       * ------------------------------------------------
                                       */
                              xtype: 'combobox',
                              region: 'south',
                              fieldLabel: 'Выберите категорию',
                              name: 'category_id',
                              queryMode: 'local',
                              bind: {store: '{categories}'},
                              tpl: [
                                    '<tpl for=".">',
                                    '<div class="x-boundlist-item {[values.parent_id==null ? \"optgroup\" : ""]}">{category}</div>',
                                    '</tpl>'
                              ],
                              listeners: {
                                    beforeselect: function (combo, record, index) {
                                          return (record.data.parent_id !== null);
                                    }
                              },
                              editable: false,
                              displayField: 'category',
                              valueField: '_id'
                        },
                        {
                                      /* ------------------------------------
                                       *        Поле ввода цены
                                       * ------------------------------------
                                       */
                              xtype: 'numberfield',
                              name: 'price',
                              fieldLabel: 'Цена',
                              step: 1,
                              value: 0,
                              minValue: 0,
                              allowBlank: false
                        },
                        {
                                      /* ------------------------------------
                                       *       Контейнер с кнопками
                                       * ------------------------------------
                                       */                              
                              xtype: 'container',
                              padding: '10 10 10 10',
                              layout: {
                                    type: 'hbox',
                                    align: 'middle',
                                    pack: 'center'
                              },
                              items: [
                                    {
                                            /* ------------------------------------
                                             *         Кнопка submit
                                             * ------------------------------------
                                             */                                          
                                          xtype: 'button',
                                          text: 'Сохранить',
//                                          formBind: true,
                                          margin: '5 5 5 15',
                                          handler: 'onSaveBtn'

                                    },
                                    {
                                            /* ------------------------------------
                                             *         Кнопка cancel
                                             * ------------------------------------
                                             */                                           
                                          xtype: 'button',
                                          text: 'Отмена',
                                          handler: 'onCancelBtn'

                                    }
                              ]
                        }
                  ]
            }


      ]
});


