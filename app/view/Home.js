Ext.define('sessionsapp.view.Home', {
    extend: 'Ext.Container',
    xtype: 'viewHome',
    config: {
        style: 'background-color: #ECF0F1; text-align: center; padding: 16px;',
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [{
                xtype: 'component',
                html: '<b>Sessions</b> is a free, open source, and multi-platform music player designed to help musicians practice their instruments and pick songs by ear. <br />' +
                      'It is available on multiple platforms: <b>iOS</b> (iPhone/iPad), <b>Android</b> (Phone/Tablet), <b>Mac</b>, <b>Linux</b> and <b>Windows</b>.'
            },
            {
                xtype: 'button',
                padding: '8px',
                width: '200px',
                style: 'margin-left: auto; margin-right: auto; margin-top: 8px;',
                text: 'Take me to the tour!'
            }]
    }
});
