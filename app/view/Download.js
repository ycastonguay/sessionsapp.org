Ext.define('sessionsapp.view.Download', {
    extend: 'Ext.Container',
    xtype: 'viewDownload',
    config: {
        style: 'background-color: blue',
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
