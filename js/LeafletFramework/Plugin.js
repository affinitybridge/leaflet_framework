LF.Plugin = L.Class.extend({

    initialize: function (options) {
        L.setOptions(this, options);
    },

    /**
     * Interface:
     * requireHandlers() -> L.Handler[]
     */

    /**
     * Interface:
     * enable( <L.Handler> handler, ... )
     *
     * Default no-op provided.
     */
    enable: function () {}

});
