Ext.define('sessionsapp.view.Home', {
    extend: 'Ext.Container',
    xtype: 'viewHome',
    config: {
        style: 'background-color: white; text-align: center;',
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [{
                xtype: 'component',
                padding: '8px',
                html: '<b>Sessions</b> is a multi-platform music player designed to help musicians practice their instrument and pick songs by ear.'
            },
            {
                xtype: 'button',
                padding: '8px',
                width: '200px',
                style: 'margin-left: auto; margin-right: auto;',
                text: 'Take the tour'
            }]
    }
});
