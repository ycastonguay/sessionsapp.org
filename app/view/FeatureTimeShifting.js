Ext.define('sessionsapp.view.FeatureTimeShifting', {
    extend: 'Ext.Container',
    xtype: 'viewFeatureTimeShifting',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #3498DB; color: white; padding: 16px;',
        items: [{
            xtype: 'container',
            html: '<b>Time Shifting</b> makes it easier to pick up complex rythmic sections or practice a song at a <b>slower</b> or <b>higher</b> tempo. ' +
                'You can slow down or speed up audio streams from <b>50%</b> up to <b>150%</b>.'
        }]
    }
});
