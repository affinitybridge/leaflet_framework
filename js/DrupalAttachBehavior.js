(function ($) {

Drupal.leaflet_framework = {};

Drupal.behaviors.leaflet_framework = {
    attach: attach
}

function attach(context, settings) {
    var plugin_registry;

    for (var id in settings.leaflet_framework) {
        plugin_registry = settings.leaflet_framework[id];
        prepare(id, plugin_registry);
    }
}

function prepare(id, plugin_registry) {
    var logical, plugin, args,
        plugins = [];

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

    $('#' + id).once(id, function() {
        Drupal.leaflet_framework[id] = new LF.Core(this, plugins)
    });
}

}(jQuery));
