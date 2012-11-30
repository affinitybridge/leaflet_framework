LFE.Plugin.Hash = LF.Plugin.extend({

    requireHandlers: function () {
        return [LFE.Hash];
    },

    enable: function (hash) {
        if (!window.location.hash) {
            var zoom = this.options.zoom,
                lat = this.options.center[0],
                lng = this.options.center[1];
            window.location.hash = zoom + '/' + lat + '/' + lng;
        }
    }

});

LFE.Hash = L.Handler.extend({
    initialize: function (map) {
        map.addHash();
    },

    addHooks: function () {},

    removeHooks: function () {}

});
