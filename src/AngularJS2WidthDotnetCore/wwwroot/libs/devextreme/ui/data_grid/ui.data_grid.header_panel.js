/**
 * DevExtreme (ui/data_grid/ui.data_grid.header_panel.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    gridCore = require("./ui.data_grid.core"),
    Toolbar = require("../toolbar"),
    columnsView = require("./ui.data_grid.columns_view"),
    commonUtils = require("../../core/utils/common");
require("../drop_down_menu");
var DATAGRID_HEADER_PANEL_CLASS = "dx-datagrid-header-panel",
    DATAGRID_TOOLBAR_BUTTON_CLASS = "dx-datagrid-toolbar-button";
exports.HeaderPanel = columnsView.ColumnsView.inherit({
    _getToolbarItems: function() {
        return []
    },
    _getButtonContainer: function() {
        return $("<div />").addClass(DATAGRID_TOOLBAR_BUTTON_CLASS)
    },
    _getToolbarButtonClass: function(specificClass) {
        var secondClass = specificClass ? " " + specificClass : "";
        return DATAGRID_TOOLBAR_BUTTON_CLASS + secondClass
    },
    _getToolbarOptions: function() {
        var toolbarItems, options = {
            toolbarOptions: {
                items: this._getToolbarItems()
            }
        };
        this.executeAction("onToolbarPreparing", options);
        if (options.toolbarOptions && !commonUtils.isDefined(options.toolbarOptions.visible)) {
            toolbarItems = options.toolbarOptions.items;
            options.toolbarOptions.visible = !!(toolbarItems && toolbarItems.length)
        }
        return options.toolbarOptions
    },
    _renderCore: function() {
        if (!this._toolbar) {
            this.element().addClass(DATAGRID_HEADER_PANEL_CLASS);
            this._toolbar = this._createComponent($("<div />").appendTo(this.element()), Toolbar, this._toolbarOptions)
        }
    },
    init: function() {
        this.callBase();
        this.createAction("onToolbarPreparing", {
            excludeValidators: ["designMode", "disabled", "readOnly"]
        })
    },
    render: function() {
        this._toolbarOptions = this._toolbarOptions || this._getToolbarOptions();
        this.callBase.apply(this, arguments)
    },
    updateToolbar: function() {
        this._toolbarOptions = this._getToolbarOptions();
        if (this._toolbar) {
            this._toolbar.option(this._toolbarOptions)
        }
    },
    updateToolbarItemOption: function(name, optionName, optionValue) {
        var toolbarInstance = this._toolbar;
        if (toolbarInstance) {
            var items = toolbarInstance.option("items");
            if (items && items.length) {
                var itemIndex;
                $.each(items, function(index, item) {
                    if (item.name === name) {
                        itemIndex = index;
                        return false
                    }
                });
                if (void 0 !== itemIndex) {
                    if (commonUtils.isObject(optionName)) {
                        toolbarInstance.option("items[" + itemIndex + "]", optionName)
                    } else {
                        toolbarInstance.option("items[" + itemIndex + "]." + optionName, optionValue);
                        if ("disabled" === optionName) {
                            var widgetOptions = toolbarInstance.option("items[" + itemIndex + "].options") || {};
                            widgetOptions.disabled = optionValue;
                            toolbarInstance.option("items[" + itemIndex + "].options", widgetOptions)
                        }
                    }
                }
            }
        }
    },
    getToolbarItemOption: function(name, optionName) {
        var toolbarInstance = this._toolbar;
        if (toolbarInstance) {
            var items = toolbarInstance.option("items");
            if (items && items.length) {
                var optionValue;
                $.each(items, function(index, item) {
                    if (item.name === name) {
                        optionValue = item[optionName];
                        return false
                    }
                });
                return optionValue
            }
        }
    },
    getHeaderPanel: function() {
        return this.element()
    },
    getHeight: function() {
        return this.getElementHeight()
    },
    optionChanged: function(args) {
        if ("onToolbarPreparing" === args.name) {
            this.updateToolbar();
            args.handled = true
        }
        this.callBase(args)
    },
    isVisible: function() {
        return this._toolbarOptions && this._toolbarOptions.visible
    }
});
gridCore.registerModule("headerPanel", {
    defaultOptions: function() {
        return {}
    },
    views: {
        headerPanel: exports.HeaderPanel
    }
});