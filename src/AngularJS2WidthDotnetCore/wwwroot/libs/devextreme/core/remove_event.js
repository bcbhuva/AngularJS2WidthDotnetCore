/**
 * DevExtreme (core/remove_event.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    cleanData = $.cleanData,
    specialEvents = $.event.special;
var eventName = "dxremove",
    eventPropName = "dxRemoveEvent";
$.cleanData = function(elements) {
    elements = [].slice.call(elements);
    for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        if ($element.prop(eventPropName)) {
            $element.removeProp(eventPropName);
            $element.triggerHandler(eventName)
        }
    }
    return cleanData(elements)
};
specialEvents[eventName] = {
    noBubble: true,
    setup: function() {
        $(this).prop(eventPropName, true)
    }
};
module.exports = eventName;