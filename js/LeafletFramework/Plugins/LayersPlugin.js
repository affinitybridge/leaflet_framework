LF.Plugin.Layers = LF.Plugin.extend({

    requireHandlers: function () {
        return [LF.Handler.Layers];
    },

    enable: function (map, layers) {
        var i, definition, layer;

        if (this.options.switcher) {
            layers.addControl(this.options.switcher);
        }

        for (i in this.options.layers) {
            definition = this.options.layers[i];
            layer = L.tileLayer(definition.url, definition.options || {});
            layers.addLayer(layer, definition);
        }

    }
});
