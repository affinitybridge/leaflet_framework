(function ($) {

Drupal.leaflet_framework = {};

Drupal.behaviors.leaflet_framework = {
    attach: attach
}

function attach(context, settings) {
    var defaults, plugin_registry;

    for (var id in settings.leaflet_framework) {
        defaults = settings.leaflet_framework[id].defaults;
        plugin_registry = settings.leaflet_framework[id].plugins;
        prepare(id, plugin_registry, defaults);
    }
}

function prepare(id, plugin_registry, defaults) {
    var logical, plugin, args,
        plugins = [];

    $('#' + id).once(id, function() {
        for (var name in plugin_registry) {
            logical = plugin_registry[name].logical;
            delete plugin_registry[name].logical;

            plugin = LF.Util.resolve(logical);
            if (plugin === null) {
                throw Error("Can't resolve logical plugin name: " + logical);
            }
            args = plugin_registry[name];
            plugins.push([name, plugin, args]);
        }

        Drupal.leaflet_framework[id] = new LF.Core(this, plugins, defaults)
    });
}

}(jQuery));
