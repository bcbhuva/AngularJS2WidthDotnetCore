/**
 * DevExtreme (mobile/hide_top_overlay.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery");
var hideCallback = function() {
    var callbacks = [];
    return {
        add: function(callback) {
            var indexOfCallback = $.inArray(callback, callbacks);
            if (indexOfCallback === -1) {
                callbacks.push(callback)
            }
        },
        remove: function(callback) {
            var indexOfCallback = $.inArray(callback, callbacks);
            if (indexOfCallback !== -1) {
                callbacks.splice(indexOfCallback, 1)
            }
        },
        fire: function() {
            var callback = callbacks.pop(),
                result = !!callback;
            if (result) {
                callback()
            }
            return result
        },
        hasCallback: function() {
            return callbacks.length > 0
        }
    }
}();
module.exports = function() {
    return hideCallback.fire()
};
module.exports.hideCallback = hideCallback;
module.exports.default = module.exports;