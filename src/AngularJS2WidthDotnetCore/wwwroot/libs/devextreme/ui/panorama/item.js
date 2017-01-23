/**
 * DevExtreme (ui/panorama/item.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    CollectionWidgetItem = require("../collection/item");
var PANORAMA_ITEM_TITLE_CLASS = "dx-panorama-item-title";
var PanoramaItem = CollectionWidgetItem.inherit({
    _renderWatchers: function() {
        this.callBase();
        this._startWatcher("title", this._renderTitle.bind(this))
    },
    _renderTitle: function(title) {
        this._$element.children("." + PANORAMA_ITEM_TITLE_CLASS).remove();
        if (!title) {
            return
        }
        var $header = $("<div>").addClass(PANORAMA_ITEM_TITLE_CLASS).text(title);
        this._$element.prepend($header)
    }
});
module.exports = PanoramaItem;