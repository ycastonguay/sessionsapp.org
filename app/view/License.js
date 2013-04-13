Ext.define('sessionsapp.view.License', {
    extend: 'Ext.Container',
    xtype: 'viewLicense',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #27AE60; color: white; text-align: center; padding: 16px;',
        items: [{
                xtype: 'container',
                style: 'padding: 8px; margin-bottom: 16px;',
                html: "Sessions is released under the <b>GPLv3</b> open source license. This means the application can be modified by " +
                    "other people and basically guarantees it will always be <b>free</b>. <br /> " +
                    "The source code, including stable and development branches, are available on <b>GitHub</b>."
            },
            {
                xtype: 'button',
                action: 'license',
                itemId: 'btnLicense',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto; margin-bottom: 8px;',
                text: 'Show me the license'
            },
            {
                xtype: 'button',
                action: 'GitHub',
                itemId: 'btnGitHub',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto;',
                text: 'View source code on GitHub'
            }]

//            {
//                xtype: 'container',
//                style: 'padding: 8px; margin-bottom: 16px;',
//                html: loadURL('license.html')
//            }]
    }
});
