Ext.define('Modular.builder.store.Module', {
    extend: 'Ext.data.Store',

    alias: 'store.module',

    model: 'Modular.builder.model.Module',

    data: {items: []},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});