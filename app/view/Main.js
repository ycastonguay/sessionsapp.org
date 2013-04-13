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
        //style: 'background-color: blue; background-image: 0;',

        items: [
            {
                xtype: 'container',
                title: 'Sessions',
                style: 'background-color:white',
                items: [{
                    xtype: 'button',
                    title: 'test',
                    width: '100px'
                }]
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
                xtype: 'container',
                title: 'Features',
                style: 'background-color:blue'
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
