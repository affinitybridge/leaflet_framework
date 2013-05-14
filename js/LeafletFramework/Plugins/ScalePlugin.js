LF.Plugin.Scale = LF.Plugin.extend({
    enable: function (map) {
        this._control = L.control.scale(this.options).addTo(map);
    }
});
