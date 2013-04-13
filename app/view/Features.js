Ext.define('sessionsapp.view.Features', {
    extend: 'Ext.Container',
    xtype: 'main',
//    requires: [
//        'Ext.TitleBar'
//    ],
    config: {
//        tabBarPosition: 'bottom',

        items: [{
                xtype: 'button',
                action: 'features',
                itemId: 'btnFeatures',
                text: 'Features',
                align: 'right'
            },
            {
                xtype: 'button',
                action: 'download',
                itemId: 'btnDownload',
                text: 'Download',
                align: 'right'
            },
            {
                xtype: 'button',
                action: 'license',
                itemId: 'btnLicense',
                text: 'License',
                align: 'right'
            }]
    }
});
