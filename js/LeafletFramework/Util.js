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
    },

    /**
     * TODO: Is this being used?
     */
    applyWrapper: function (constructor) {
        function F(args) {
            return constructor.apply(this, args);
        }
        F.prototype = constructor.prototype;

        return F;
    }
}
