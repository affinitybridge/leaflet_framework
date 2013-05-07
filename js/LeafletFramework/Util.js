/**
 * Utility functions for LeafletFramework.
 */
LF.Util = {
    /**
     * Resolve logical class name references to the object via namespace.
     */
    resolve: function (logical) {
        var components = logical.split('.'),
            prop = components[0],
            obj;

        // For < IE9 can't call hasOwnProperty() on native objects (window).
        if (!window[prop]) {
            return null;
        }
        obj = window[prop];

        for (var i = 1, len = components.length; i < len; i++) {
            prop = components[i];
            if (obj.hasOwnProperty(prop)) {
                obj = obj[prop];
            }
            else {
                return null;
            }
        }

        return obj;
    }
}

LF.Util.Factory = L.Class.extend({
    options: {
        type: undefined,
    },

    initialize: function (options) {
        L.setOptions(this, options);
    },

    get: function (provider) {
        if (provider in this) {
            var factory = this[provider];
            return factory.apply(this, Array.prototype.splice.call(arguments, 1));
        }
        else {
            throw new Error('Unknown "' + this.options.type + '" factory provider: ' + provider);
        }
    }
});
