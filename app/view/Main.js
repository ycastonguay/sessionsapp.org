Ext.define('sessionsapp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'viewMain',
    config: {
        itemId: 'tabs',
        layout: {
            animation: {
                type: 'slide',
                direction: Ext.os.deviceType == 'Phone' ? 'right' : 'up'
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
                title: 'Features',
                hidden: Ext.os.deviceType == 'Phone' ? true : false
            },
            {
                xtype: 'viewDownload',
                title: 'Download',
                hidden: Ext.os.deviceType == 'Phone' ? true : false
            },
            {
                xtype: 'viewLicense',
                title: 'License',
                hidden: Ext.os.deviceType == 'Phone' ? true : false
            },
            {
                xtype: 'viewSupport',
                title: 'Support',
                hidden: Ext.os.deviceType == 'Phone' ? true : false
            },
            {
                xtype: 'viewBlog',
                title: 'Blog',
                hidden: Ext.os.deviceType == 'Phone' ? true : false
            },
            {
                xtype: 'viewAbout',
                title: 'About',
                hidden: Ext.os.deviceType == 'Phone' ? true : false
            },
            {
                xtype: 'mobileMenuList',
                title: 'Menu',
                hidden: Ext.os.deviceType == 'Phone' ? false : true
            }]
    }
});
