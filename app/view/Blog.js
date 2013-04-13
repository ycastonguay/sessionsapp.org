Ext.define('sessionsapp.view.Blog', {
    extend: 'Ext.Container',
    xtype: 'viewBlog',
    config: {
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        style: 'background-color: #8E44AD; color: white; text-align: center; padding: 16px;',
        items: [{
                xtype: 'container',
                style: 'padding: 8px; margin-bottom: 16px;',
                html: 'Get the latest news about Sessions by visiting our <b>blog</b>. We are also present on <b>Twitter</b> and <b>Facebook</b>.'
            },
            {
                xtype: 'button',
                action: 'blog',
                itemId: 'btnBlog',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto;',
                text: 'Visit our blog'
            },
            {
                xtype: 'button',
                action: 'twitter',
                itemId: 'btnTwitter',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto; margin-top: 8px;',
                text: 'Sessions on Twitter'
            },
            {
                xtype: 'button',
                action: 'facebook',
                itemId: 'btnFacebook',
                width: '300px',
                style: 'margin-left: auto; margin-right: auto; margin-top: 8px;',
                text: 'Sessions on Facebook'
            }]
    }
});
