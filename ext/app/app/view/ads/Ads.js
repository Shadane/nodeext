/* -------------------------------------------
 ' Ads
 ' -------------------------------------------
 ' Этот класс - основной вид нашего приложения
 ' -------------------------------------------
 */
Ext.define('MyApp.view.ads.Ads', {
      extend: 'Ext.container.Container',
      requires: [
            'MyApp.controller.AdsController',
            'MyApp.controller.ResponseCtrl',
            'MyApp.store.AdsChainedStores',
            'MyApp.view.Header',
            'MyApp.view.ContentPanel'

      ],
      xtype: 'app-main',
      viewModel: {
            type: 'adschainedstores'
      },
      controller: 'responsectrl',
      layout: {
            type: 'border'
      },
      items: [
            {
                 /* ----------------------------------------
                  *             Header страницы
                  * ----------------------------------------
                  */
                  xtype: 'myapp-header',
                  region: 'north'
            },
            {
                 /* ----------------------------------------
                  *           view/ContentPanel.js
                  * ----------------------------------------
                  */
                  region: 'center',
                  xtype: 'contentPanel',
                  items: [
                        {
                             /* ----------------------------------------
                              *       Контейнер с двумя таблицами
                              * ----------------------------------------
                              */
                              xtype: 'container',
                              layout: 'border',
                             
                              width: 1000,
                              height: 400,
                              style: 'background: transparent',
                              items: [
                                    {
                                         /* ----------------------------------------
                                          *           Таблица объявлений
                                          * ----------------------------------------
                                          */
                                          region: 'center',
                                          bind: '{ads}',
                                          xtype: 'myapp-adstable'
                                    }, 
                                    {
                                         /* ----------------------------------------
                                          *           Таблица авторов
                                          * ----------------------------------------
                                          */ 
                                          region: 'west',
                                          bind: '{authsForFiltering}',
                                          xtype: 'myapp-authorstable'
                                    }
                                    
                              ]
                        }, 
                        {
                             /* ----------------------------------------
                              *   Контейнер с кнопкой Сбросить фильтры
                              * ----------------------------------------
                              */                              
                              xtype: 'container',
                              layout: 'vbox',
                              width: 300,
                              padding: '20 20 20 20',
                              items: [{
                                          xtype: 'button',
                                          text: 'Сбросить фильтры',
                                          region: 'north',
                                          maxWidth: '200',
                                          handler: 'resetFilters'
                                    }]
                        }
                  ]
            }]
});
