Ext.define('Modular.builder.view.module.Module', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-module',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Modular.builder.view.module.ModuleController',
        'Modular.builder.view.module.ModuleModel',
        'Modular.builder.view.module.List'
    ],

    controller: 'module',
    viewModel: 'module',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Modules List',
        iconCls: 'fa-duotone fa-browsers',
        items: [{
            xtype: 'modulelist'
        }]
    }]
    
},

);