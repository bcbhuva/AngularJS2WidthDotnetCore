/**
 * DevExtreme (data/query.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    arrayQueryImpl = require("./array_query"),
    remoteQueryImpl = require("./remote_query");
var queryImpl = {
    array: arrayQueryImpl,
    remote: remoteQueryImpl
};
var query = function() {
    var impl = $.isArray(arguments[0]) ? "array" : "remote";
    return queryImpl[impl].apply(this, arguments)
};
module.exports = query;
module.exports.queryImpl = queryImpl;
module.exports.default = module.exports;