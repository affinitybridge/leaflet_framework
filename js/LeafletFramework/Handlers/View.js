LF.Handler.View = L.Handler.extend({
    addHooks: function () {},

    removeHooks: function () {},

    set: function (center, zoom) {
        this._map.setView(center, zoom);
    },
    fit: function (bounds) {
        this._map.fitBounds(bounds);
    }
});
