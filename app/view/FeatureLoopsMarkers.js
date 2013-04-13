Ext.define('sessionsapp.view.FeatureLoopsMarkers', {
    extend: 'Ext.Container',
    xtype: 'viewFeatureLoopsMarkers',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #2980B9; color: white; padding: 16px;',
        items: [{
            xtype: 'container',
            html: "<b>Loops</b> and <b>Markers</b> allow you to practice any part of a song, making your practice session " +
                "much more efficient. You can then create a <b>practice session</b> with the loops you created. <b>Keep your hands on your instrument!</b>"
        }]
    }
});
