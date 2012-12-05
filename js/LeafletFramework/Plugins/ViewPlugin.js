LF.Plugin.View = LF.Plugin.extend({
    requireHandlers: function () {
        return [LF.Handler.View];
    },

    enable: function (map, view) {
        var center = this.options.center,
            zoom = this.options.zoom;

        view.set(center, zoom);
    }
});
