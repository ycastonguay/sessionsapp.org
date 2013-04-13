Ext.define('sessionsapp.view.Download', {
    extend: 'Ext.Container',
    xtype: 'viewDownload',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #C0392B; color: white; text-align: center; padding: 16px;',
        items: [{
                xtype: 'container',
                style: 'padding: 8px; margin-bottom: 16px;',
                html: 'The latest version for Mac, Linux and Windows is available on <b>SourceForge.net</b>. <br />' +
                      'Sessions is also available on the <b>App Store</b> and on <b>Google Play</b>.'
            },
            {
                xtype: 'button',
                action: 'download',
                itemId: 'btnDownload',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto;',
                text: 'Sessions on SourceForge.net'
            },
            {
                xtype: 'button',
                action: 'appStore',
                itemId: 'btnAppStore',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto; margin-top: 8px;',
                text: 'Sessions on the App Store'
            },
            {
                xtype: 'button',
                action: 'googlePlay',
                itemId: 'btnGooglePlay',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto; margin-top: 8px;',
                text: 'Sessions on Google Play'
            }]
    }
});
