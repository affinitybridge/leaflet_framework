LF.Plugin.View = LF.Plugin.extend({
    requireHandlers: function () {
        return [LF.Handler.View];
    },

    enable: function (map, view) {
        if ('auto' in this.options) {
            var extent = this.options.auto;
            view.fit([
                [extent.maxy, extent.maxx],
                [extent.miny, extent.minx]
            ]);
        }
        else if ('center' in this.options) {
            var center = this.options.center,
                zoom = this.options.zoom;
            view.set(center, zoom);
        }
    }
});
