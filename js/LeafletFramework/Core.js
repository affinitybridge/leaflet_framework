/**
 *
 */
LF.Core = L.Class.extend({

    initialize: function (container, plugins, defaults) {
        // Starting with an empty map, plugins will attach handlers to
        // configure and build extend this map.
        this._map = L.map(container, defaults);

        // The registry stores all plugins enabled on this map.
        this._registry = {};

        var name, ctor, plugin, options;
        // Create plugins and register them with the core.
        for (var i = 0, len = plugins.length; i < len; i++) {
            name = plugins[i][0];
            ctor = plugins[i][1];
            options = plugins[i][2];

            plugin = new ctor(options);

            this._registry[name] = {
                plugin: plugin,
            }
            if ('requireHandlers' in plugin) {
                this._registry[name].handlers = this._initHandlers(name, plugin.requireHandlers());
            }
            if ('listeners' in plugin) {
                this._registry[name].listeners = this._bindEvents(plugin.listeners());
            }
        }

        this._initPlugins();
    },

    _initHandlers: function (plugin_name, handlers) {
        for (var i = 0, len = handlers.length; i < len; i++) {
            name = plugin_name + ':' + i;
            // this._map.options[name] = true;
            this._map.addHandler(name, handlers[i]);
            handlers[i] = this._map[name];
        }
        return handlers;
    },

    _bindEvents: function (listeners) {
        this._map.on(listeners);
        return listeners;
    },

    _initPlugins: function () {
        var plugin, args;

        for (var name in this._registry) {
            args = [this._map];
            plugin = this._registry[name].plugin;

            if ('handlers' in this._registry[name]) {
                args = args.concat(this._registry[name].handlers);
            }

            plugin.enable.apply(plugin, args);
        }
    }

});
