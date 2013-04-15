Ext.define('sessionsapp.view.MobileMenu', {
    extend: 'Ext.Panel',
    xtype: 'viewMobileMenu',
    requires: ['sessionsapp.view.MobileMenuList'],
    config: {
        centered: true,
        width: 280,
        height: 300,
        layout: 'fit',
        items: [
            {
                xtype: 'mobileMenuList'
            }]
    }
});
