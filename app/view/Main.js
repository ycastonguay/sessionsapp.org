Ext.define('sessionsapp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
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
        //tabBarPosition: 'bottom',

        items: [{
                xtype: 'navigationview',
                itemId: 'navView',
                title: 'Features',
                style: 'background-color:blue',
                navigationBar: {
                    items: [{
                        xtype: 'button',
                        action: 'features',
                        itemId: 'btnFeatures',
                        text: 'Features',
                        align: 'right'
                    },
                    {
                        xtype: 'button',
                        action: 'download',
                        itemId: 'btnDownload',
                        text: 'Download',
                        align: 'right'
                    },
                    {
                        xtype: 'button',
                        action: 'license',
                        itemId: 'btnLicense',
                        text: 'License',
                        align: 'right'
                    }]
                }
            },
            {
                xtype: 'container',
                title: 'Download',
                style: 'background-color:red'

            },
            {
                xtype: 'container',
                title: 'License',
                style: 'background-color:green'
            },
            {
                xtype: 'container',
                title: 'Support',
                style: 'background-color:pink'
            },
            {
                xtype: 'container',
                title: 'Blog',
                style: 'background-color:brown'
            }]
    }
});
