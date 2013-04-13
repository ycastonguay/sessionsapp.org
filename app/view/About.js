Ext.define('sessionsapp.view.About', {
    extend: 'Ext.Container',
    xtype: 'viewAbout',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #2C3E50; color: white; text-align: center; padding: 16px;',
        items: [{
                xtype: 'container',
                style: 'padding: 8px; margin-bottom: 16px;',
                html: '<b>Sessions</b> and <b>sessionsapp.org</b> are © 2011-2013 Yanick Castonguay and are released under the GPLv3 license. <br />' +
                      '<b>BASS audio library</b> is © 1999-2013 Un4seen Developments. <br />' +
                      '<b>BASS.NET audio library</b> is © 2005-2013 Bernd Niedergesäß. <br />' +
                      '<b>FamFamFam icons</b> are © 2009-2013 Mark James. <br /><br />' +
                      'Web Site Version 2.0.0.0 Alpha (2013-04-12)'
            }]
    }
});
