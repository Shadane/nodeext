document.title = 'Ext JS Объявления!';

Ext.define('MyApp.view.Header', {
    extend: 'Ext.Container',

    xtype: 'myapp-header',

    title: document.title,
    cls: 'app-header',
    height: 52,

    layout: {
        type: 'vbox',
        align: 'middle'
    },

    items: [{
        xtype: 'component',
        cls: 'app-header-title',
        html: document.title,
        flex: 1
    }]
});
