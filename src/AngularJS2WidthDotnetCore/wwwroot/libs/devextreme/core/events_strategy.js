/**
 * DevExtreme (core/events_strategy.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("./class");
module.exports = Class.inherit({
    ctor: function(owner) {
        this._events = {};
        this._owner = owner
    },
    hasEvent: function(eventName) {
        var callbacks = this._events[eventName];
        if (callbacks) {
            return callbacks.has()
        }
        return false
    },
    fireEvent: function(eventName, eventArgs) {
        var callbacks = this._events[eventName];
        if (callbacks) {
            callbacks.fireWith(this._owner, eventArgs)
        }
    },
    on: function(eventName, eventHandler) {
        var addFn, callbacks = this._events[eventName];
        if (!callbacks) {
            callbacks = $.Callbacks();
            this._events[eventName] = callbacks
        }
        addFn = callbacks.originalAdd || callbacks.add;
        addFn.call(callbacks, eventHandler)
    },
    off: function(eventName, eventHandler) {
        var callbacks = this._events[eventName];
        if (callbacks) {
            if ($.isFunction(eventHandler)) {
                callbacks.remove(eventHandler)
            } else {
                callbacks.empty()
            }
        }
    },
    dispose: function() {
        $.each(this._events, function() {
            this.empty()
        })
    }
});