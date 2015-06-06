/* ---------------------------------------
 ' AuForm
 ' ---------------------------------------
 ' модальное окно с формой авторов
 ' ---------------------------------------
 */
Ext.define('MyApp.view.ads.AuForm', {
      extend: 'Ext.window.Window',
      xtype: 'myapp-auform',
      padding: 5,
      width: 500,
      controller: 'FormController',
      title: 'Сохранение автора',
      modal: 'true',
      items: [
            {
                /* ------------------------------------
                 *         Форма авторов
                 * ------------------------------------
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
                              *         Поле ввода имени
                              * ------------------------------------
                              */ 
                              xtype: 'textfield',
                              name: 'name',
                              fieldLabel: 'Имя',
                              allowBlank: false,
                              blankText: "Введите имя"
                        },
                        {
                             /* ------------------------------------
                              *         Поле ввода почты
                              * ------------------------------------
                              */ 
                              xtype: 'textfield',
                              name: 'email',
                              fieldLabel: 'Электронная почта',
                              allowBlank: false,
                              blankText: "Введите почту",
                              vtype: 'email'
                        },
                        
                        {
                             /* ------------------------------------
                              *      Контейней с кнопками
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


