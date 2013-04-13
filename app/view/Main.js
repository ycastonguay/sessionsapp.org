Ext.define('sessionsapp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'viewMain',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        layout: {
            animation: {
                type: 'slide',
                direction: 'up'
            }
        },
        tabBar: {
            layout: {
                pack: 'end'
            }
        },
        showAnimation: {
            type: 'fadeIn',
            duration: 200
        },
        items: [
            {
                xtype: 'viewHome',
                title: 'Sessions'
            },
            {
                xtype: 'container',
                title: ' ',
                disabled: true,
                tab: {
                    flex: 1
                }
            },
            {
                xtype: 'viewFeatures',
                title: 'Features'
            },
            {
                xtype: 'viewDownload',
                title: 'Download'
            },
            {
                xtype: 'viewLicense',
                title: 'License'
            },
            {
                xtype: 'viewSupport',
                title: 'Support'
            },
            {
                xtype: 'viewBlog',
                title: 'Blog'
            },
            {
                xtype: 'viewAbout',
                title: 'About'
            }]
    }
});
