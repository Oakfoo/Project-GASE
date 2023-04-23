Ext.define('Modular.builder.view.module.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'modulelist',

    requires: [
        'Modular.builder.store.Module'
    ],

    title: 'Modules List',

    store: {
        type: 'module'
    },

    columns: [
        {text: 'Name', dataIndex: 'name'},
        {text: 'Description', dataIndex: 'description', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});