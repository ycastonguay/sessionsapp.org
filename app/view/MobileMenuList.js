Ext.define('sessionsapp.view.MobileMenuList', {
    extend: 'Ext.List',
    xtype: 'mobileMenuList',
    requires: ['sessionsapp.store.Sections'],

    config: {
//        layout: {
//            type: 'fit',
//            animation: {
//                type: 'slide',
//                direction: 'left'
//            }
//        },
        //layout: 'fit',
        //width: 200,
        //title: 'Pages',
        itemTpl: '{title}',
        store: 'Sections',
        onItemDisclosure: true
    }
});