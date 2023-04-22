/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Modular.builder.Application',

    name: 'Modular.builder',

    requires: [
        // This will automatically load all classes in the Modular.builder namespace
        // so that application classes do not need to require each other.
        'Modular.builder.*'
    ],

    // The name of the initial view to create.
    mainView: 'Modular.builder.view.main.Main'
});
