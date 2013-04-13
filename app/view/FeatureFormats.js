Ext.define('sessionsapp.view.FeatureFormats', {
    extend: 'Ext.Container',
    xtype: 'viewFeatureFormats',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #3498DB; color: white; padding: 16px;',
        items: [{
            xtype: 'container',
            html: "<b>Sessions</b> is compatible with all the popular sound formats: <b>MP3</b>, <b>FLAC</b>, <b>OGG</b>, <b>WMA</b>, <b>WAV</b>, <b>WV</b>, <b>APE</b> and more."
        },
        {
            xtype: 'button',
            padding: '8px',
            width: '280px',
            style: 'margin-left: auto; margin-right: auto; margin-top: 8px;',
            text: 'View supported formats'
        }]
    }
});
