Ext.define('sessionsapp.view.Support', {
    extend: 'Ext.Container',
    xtype: 'viewSupport',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #16A085; color: white; text-align: center; padding: 16px;',
        items: [{
                xtype: 'container',
                style: 'padding: 8px; margin-bottom: 16px;',
                html: 'To submit a bug, request a feature, or view the Sessions roadmap/change log, check the <b>Mantis Bug Tracker</b>. <br />' +
                      'A online user guide is currently in the works and will be released in the near future.'
            },
            {
                xtype: 'button',
                action: 'download',
                itemId: 'btnDownload',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto;',
                text: 'Mantis Bug Tracker'
            }]
    }
});
