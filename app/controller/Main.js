
Ext.define('sessionsapp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'page/:viewXtype': 'skipToPage'
        },
        control: {
            featuresRef: {
                tap: 'goToFeaturesTab'
            },
            downloadRef: {
                tap: 'goToDownloadTab'
            },
            mainRef: {
                activeitemchange: 'itemchange'
            }
        },
        refs: {
            downloadRef: 'button[action=download]',
            featuresRef: 'button[action=features]',
            mainRef: 'viewMain'
        }
    },
    // This allows changing the tab active item without triggering itemchange event
    disableHistory: false,
    init: function() {
        // By default, use the viewHome hash
        if(!window.location.hash) {
            window.history.pushState({}, "", "#page/viewHome");
        }
    },
    skipToPage: function(viewXtype) {
        this.disableHistory = true;
        this.getMainRef().setActiveItem(viewXtype);
        this.disableHistory = false;
    },
    goToFeaturesTab: function() {
        this.getMainRef().setActiveItem(2);
    },
    goToDownloadTab: function() {
        this.getMainRef().setActiveItem(3);
    },
    itemchange: function(sender, value, oldValue, eOpts) {
        // Change page title
        var windowTitle = 'Sessions';
        if(value.xtype != 'viewHome') {
            windowTitle += ' - ' + value.title;
        }
        document.title = windowTitle;

        // Push history state hash
        if(!this.disableHistory) {
            window.history.pushState({}, "", "#page/" + value.xtype);
        }
    }
});
