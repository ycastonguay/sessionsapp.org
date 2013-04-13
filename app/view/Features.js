Ext.define('sessionsapp.view.Features', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'viewFeatures',
    config: {
        style: 'background-color: #eee; text-align: center;',
        items: [{
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [{
                    xtype: 'container',
                    html: 'Supported formats'
                }]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [{
                    xtype: 'container',
                    html: 'Markers'
                }]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [{
                    xtype: 'container',
                    html: 'Loops'
                }]
            }]
    }
});
