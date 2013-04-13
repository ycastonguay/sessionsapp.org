Ext.define('sessionsapp.view.FeaturePitchShifting', {
    extend: 'Ext.Container',
    xtype: 'viewFeaturePitchShifting',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #2980B9; color: white; padding: 16px;',
        items: [{
            xtype: 'container',
            html: '<b>Pitch Shifting</b> can change the <b>key</b> of a song. This can be useful if you want to practice a song in a <b>easier key</b> for an instrument or your voice.'
        }]
    }
});
