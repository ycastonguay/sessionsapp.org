Ext.define('sessionsapp.view.Features', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'viewFeatures',
    config: {
        style: 'text-align: center;',
        items: [
            {
                xtype: 'viewFeatureLoopsMarkers'
            },
            {
                xtype: 'viewFeatureTimeShifting'
            },
            {
                xtype: 'viewFeaturePitchShifting'
            },
            {
                xtype: 'viewFeatureFormats'
            },
            {
                xtype: 'viewFeatureMultiPlatform'
            }]
    }
});
