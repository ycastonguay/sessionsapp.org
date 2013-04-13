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
        //tabBarPosition: 'bottom',
        //style: 'background-color: blue; background-image: 0;',

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
            },
            {
                xtype: 'container',
                title: 'About',
                style: 'background-color:yellow'
            }]
    }
});
