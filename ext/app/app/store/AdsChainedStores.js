/* ---------------------------------------------
 ' AdsChainedStores
 ' ---------------------------------------------
 ' viewModel, который служит для доступа ко всем
 ' данным, получаемым с сервера, а также для
 ' дополнительных фильтруемых сторов.
 ' ---------------------------------------------
 */

Ext.define('MyApp.store.AdsChainedStores', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adschainedstores',
    requires: [
          'MyApp.model.Ad',
          'MyApp.model.Author',
          'MyApp.model.City',
          'MyApp.model.Category'
    ],

    stores: {
        ads: {
            model: 'MyApp.model.Ad',
            autoLoad: true,
            autoSync: true
        },
        authors: {
            model: 'MyApp.model.Author',
            autoLoad: true,
            autoSync: true
        },
                /* --------------------------------------
                 * authsForFiltering
                 * --------------------------------------
                 * Нажимая на одно из объявлений именно
                 * это хранилище фильтруется для
                 * поиска совпадения автора
                 * --------------------------------------
                 */
        authsForFiltering: {
              source: '{authors}' 
        },
        cities: {
              model: 'MyApp.model.City',
              autoLoad: true
        },
        categories: {
              model: 'MyApp.model.Category',
              sorters: '_id',
              autoLoad: true
        }
    }
});


