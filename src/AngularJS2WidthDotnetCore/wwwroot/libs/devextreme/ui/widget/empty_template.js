/**
 * DevExtreme (ui/widget/empty_template.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    TemplateBase = require("./ui.template_base");
var EmptyTemplate = TemplateBase.inherit({
    _renderCore: function() {
        return $()
    }
});
module.exports = EmptyTemplate;