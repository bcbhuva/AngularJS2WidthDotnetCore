/**
 * DevExtreme (integration/knockout/clean_node.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    ko = require("knockout"),
    cleanData = $.cleanData,
    compareVersion = require("../../core/utils/version").compare;
if (compareVersion($.fn.jquery, [2, 0]) >= 0) {
    $.cleanData = function(nodes) {
        var result = cleanData(nodes);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].cleanedByJquery = true
        }
        for (i = 0; i < nodes.length; i++) {
            if (!nodes[i].cleanedByKo) {
                ko.cleanNode(nodes[i])
            }
            delete nodes[i].cleanedByKo
        }
        for (i = 0; i < nodes.length; i++) {
            delete nodes[i].cleanedByJquery
        }
        return result
    };
    ko.utils.domNodeDisposal.cleanExternalData = function(node) {
        node.cleanedByKo = true;
        if (!node.cleanedByJquery) {
            $.cleanData([node])
        }
    }
}