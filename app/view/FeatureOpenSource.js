Ext.define('sessionsapp.view.FeatureOpenSource', {
    extend: 'Ext.Container',
    xtype: 'viewFeatureOpenSource',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        //style: 'background-color: #BDC3C7; padding: 16px;',
        style: 'background-color: #F1C40F; color: white; padding: 16px;',
        items: [{
            xtype: 'container',
            html: "Sessions is a <b>free</b> and <b>open source</b> application released under the <b>GPLv3</b> license. " +
                "The source code is available on <a href='https://github.com/ycastonguay/MPfm'>GitHub</a>."
        }]
    }
});
