Ext.define('sessionsapp.store.Sections', {
    extend: 'Ext.data.Store',

    config: {
        model: 'sessionsapp.model.Section',
        data: [
            { title: 'Home', target: 'viewHome' },
            { title: 'Features', target: 'viewFeatures' },
            { title: 'Download', target: 'viewDownload' },
            { title: 'License', target: 'viewLicense' },
            { title: 'Support', target: 'viewSupport' },
            { title: 'Blog', target: 'viewBlog' },
            { title: 'About', target: 'viewAbout' }
        ]
    }
});