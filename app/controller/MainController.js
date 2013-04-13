
Ext.define('AppStore.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.navigation.View'],

    config: {
        control: {
            downloadRef: {
                tap: 'download'
            }
        },
        refs: {
            downloadRef: 'button[action=download]'
        }
    },
    download: function() {
        console.log('download');
    }
});
