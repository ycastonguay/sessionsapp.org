Ext.define('sessionsapp.controller.MobileMenuList', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            mobileMenuListRef: {
                select: 'navigateToPage'
            }
        },
        refs: {
            mobileMenuListRef: 'mobileMenuList',
            viewMobileMenuRef: 'viewMobileMenu',
            mainRef: 'viewMain'
        }
    },

    navigateToPage: function(sender, record, eOpts) {
        var viewMain = this.getMainRef();
        console.log('target: ' + record.data.target);
        if(viewMain) {
            viewMain.setActiveItem(record.data.target);
        }
    }
});
