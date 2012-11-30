LF.Plugin.View = LF.Plugin.extend({
    requireHandlers: function () {
        return [LF.Handler.View];
    },

    enable: function (view) {
        var center = this.options.center,
            zoom = this.options.zoom;

        view.set(center, zoom);
    }
});
