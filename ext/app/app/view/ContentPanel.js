/* ----------------------------------
 ' ContentPanel
 ' ----------------------------------
 ' в sass/view прописан background 
 ' image для контент-панели. Эта
 ' панель содержит в себе обе 
 ' таблицы и кнопку резета.
 ' ----------------------------------
 */
Ext.define('MyApp.view.ContentPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'contentPanel',
    id: 'content-panel',
    controller: 'adsctrl',
    scrollable: true,
    requires:[
          'MyApp.view.ads.AuthorsTable',
          'MyApp.view.ads.AdsTable'
    ],
    header: {
        hidden: true
    }
});
