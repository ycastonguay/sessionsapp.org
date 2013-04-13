Ext.define('sessionsapp.view.FeatureMultiPlatform', {
    extend: 'Ext.Container',
    xtype: 'viewFeatureMultiPlatform',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #2980B9; color: white; padding: 16px;',
        items: [{
            xtype: 'container',
            html: "<b>Sessions</b> is available on multiple platforms: <b>iOS</b> (iPhone/iPad), <b>Android</b> (Phone/Tablet), <b>Mac</b>, <b>Linux</b> and <b>Windows</b>. " +
                "The user interface is adapted to each device for <b>easier</b> use."
        },
        {
            xtype: 'button',
            padding: '8px',
            width: '280px',
            style: 'margin-left: auto; margin-right: auto; margin-top: 8px;',
            text: 'Take me to the download page!'
        }]
    }
});
