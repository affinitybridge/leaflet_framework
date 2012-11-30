LF.Handler.Layers = L.Handler.extend({
    initialize: function (map) {
        this._map = map;
        this._base_layers = {};
        this._overlays = {};
    },

    addHooks: function () {},

    removeHooks: function () {},

    addLayer: function (layer, definition) {
        if (!definition.disabled) {
            this._map.addLayer(layer);
        }
        if (this._control && 'type' in definition) {
            if (definition.type == 'base') {
                this._control.addBaseLayer(layer, definition.title)
            }
            else if (definition.type == 'overlay') {
                this._control.addOverlay(layer, definition.title);
            }
        }
    },

    addControl: function (options) {
        this._control = L.control.layers({}, {}, options).addTo(this._map);
    },

});
