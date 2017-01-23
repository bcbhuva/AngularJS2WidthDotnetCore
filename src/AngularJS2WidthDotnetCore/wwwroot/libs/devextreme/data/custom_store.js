/**
 * DevExtreme (data/custom_store.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    deferredUtils = require("../integration/jquery/deferred"),
    dataUtils = require("./utils"),
    errors = require("./errors").errors,
    Store = require("./abstract_store");
var TOTAL_COUNT = "totalCount",
    LOAD = "load",
    BY_KEY = "byKey",
    INSERT = "insert",
    UPDATE = "update",
    REMOVE = "remove";

function isPromise(obj) {
    return obj && $.isFunction(obj.then)
}

function trivialPromise(value) {
    return $.Deferred().resolve(value).promise()
}

function ensureRequiredFuncOption(name, obj) {
    if (!$.isFunction(obj)) {
        throw errors.Error("E4011", name)
    }
}

function throwInvalidUserFuncResult(name) {
    throw errors.Error("E4012", name)
}

function createUserFuncFailureHandler(pendingDeferred) {
    function errorMessageFromXhr(promiseArguments) {
        var xhr = promiseArguments[0],
            textStatus = promiseArguments[1];
        if (!xhr || !xhr.getResponseHeader) {
            return null
        }
        return dataUtils.errorMessageFromXhr(xhr, textStatus)
    }
    return function(arg) {
        var error;
        if (arg instanceof Error) {
            error = arg
        } else {
            error = new Error(errorMessageFromXhr(arguments) || arg && String(arg) || "Unknown error")
        }
        pendingDeferred.reject(error)
    }
}
var CustomStore = Store.inherit({
    ctor: function(options) {
        options = options || {};
        this.callBase(options);
        this._useDefaultSearch = !!options.useDefaultSearch;
        this._loadFunc = options[LOAD];
        this._totalCountFunc = options[TOTAL_COUNT];
        this._byKeyFunc = options[BY_KEY];
        this._insertFunc = options[INSERT];
        this._updateFunc = options[UPDATE];
        this._removeFunc = options[REMOVE]
    },
    createQuery: function() {
        throw errors.Error("E4010")
    },
    _totalCountImpl: function(options) {
        var userResult, userFunc = this._totalCountFunc,
            d = $.Deferred();
        if (!$.isFunction(userFunc)) {
            throw errors.Error("E4021")
        }
        userResult = userFunc.apply(this, [options]);
        if (!isPromise(userResult)) {
            userResult = Number(userResult);
            if (!isFinite(userResult)) {
                throwInvalidUserFuncResult(TOTAL_COUNT)
            }
            userResult = trivialPromise(userResult)
        }
        deferredUtils.fromPromise(userResult).done(function(count) {
            d.resolve(Number(count))
        }).fail(createUserFuncFailureHandler(d));
        return this._addFailHandlers(d.promise())
    },
    _loadImpl: function(options) {
        var userResult, userFunc = this._loadFunc,
            d = $.Deferred();
        ensureRequiredFuncOption(LOAD, userFunc);
        userResult = userFunc.apply(this, [options]);
        if ($.isArray(userResult)) {
            userResult = trivialPromise(userResult)
        } else {
            if (null === userResult || void 0 === userResult) {
                userResult = trivialPromise([])
            } else {
                if (!isPromise(userResult)) {
                    throwInvalidUserFuncResult(LOAD)
                }
            }
        }
        deferredUtils.fromPromise(userResult).done(function(data, extra) {
            d.resolve(data, extra)
        }).fail(createUserFuncFailureHandler(d));
        return this._addFailHandlers(d.promise())
    },
    _byKeyImpl: function(key, extraOptions) {
        var userResult, userFunc = this._byKeyFunc,
            d = $.Deferred();
        ensureRequiredFuncOption(BY_KEY, userFunc);
        userResult = userFunc.apply(this, [key, extraOptions]);
        if (!isPromise(userResult)) {
            userResult = trivialPromise(userResult)
        }
        deferredUtils.fromPromise(userResult).done(function(obj) {
            d.resolve(obj)
        }).fail(createUserFuncFailureHandler(d));
        return d.promise()
    },
    _insertImpl: function(values) {
        var userResult, userFunc = this._insertFunc,
            d = $.Deferred();
        ensureRequiredFuncOption(INSERT, userFunc);
        userResult = userFunc.apply(this, [values]);
        if (!isPromise(userResult)) {
            userResult = trivialPromise(userResult)
        }
        deferredUtils.fromPromise(userResult).done(function(newKey) {
            d.resolve(values, newKey)
        }).fail(createUserFuncFailureHandler(d));
        return d.promise()
    },
    _updateImpl: function(key, values) {
        var userResult, userFunc = this._updateFunc,
            d = $.Deferred();
        ensureRequiredFuncOption(UPDATE, userFunc);
        userResult = userFunc.apply(this, [key, values]);
        if (!isPromise(userResult)) {
            userResult = trivialPromise()
        }
        deferredUtils.fromPromise(userResult).done(function() {
            d.resolve(key, values)
        }).fail(createUserFuncFailureHandler(d));
        return d.promise()
    },
    _removeImpl: function(key) {
        var userResult, userFunc = this._removeFunc,
            d = $.Deferred();
        ensureRequiredFuncOption(REMOVE, userFunc);
        userResult = userFunc.apply(this, [key]);
        if (!isPromise(userResult)) {
            userResult = trivialPromise()
        }
        deferredUtils.fromPromise(userResult).done(function() {
            d.resolve(key)
        }).fail(createUserFuncFailureHandler(d));
        return d.promise()
    }
});
module.exports = CustomStore;
module.exports.default = module.exports;