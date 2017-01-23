/**
 * DevExtreme (ui/data_grid/ui.data_grid.grouping_module.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    gridCore = require("./ui.data_grid.core"),
    ExpandedGroupingHelper = require("./ui.data_grid.grouping.server").GroupingHelper,
    CollapsedGroupingHelper = require("./ui.data_grid.grouping.client").GroupingHelper,
    messageLocalization = require("../../localization/message"),
    dataSourceAdapter = require("./ui.data_grid.data_source_adapter"),
    commonUtils = require("../../core/utils/common"),
    devices = require("../../core/devices"),
    when = require("../../integration/jquery/deferred").when;
var DATAGRID_GROUP_PANEL_CLASS = "dx-datagrid-group-panel",
    DATAGRID_GROUP_PANEL_MESSAGE_CLASS = "dx-group-panel-message",
    DATAGRID_GROUP_PANEL_ITEM_CLASS = "dx-group-panel-item",
    DATAGRID_GROUP_OPENED_CLASS = "dx-datagrid-group-opened",
    DATAGRID_GROUP_CLOSED_CLASS = "dx-datagrid-group-closed",
    DATAGRID_EXPAND_CLASS = "dx-datagrid-expand",
    DATAGRID_SELECTION_DISABLED_CLASS = "dx-selection-disabled",
    DATAGRID_GROUP_ROW_CLASS = "dx-group-row";
var GroupingDataSourceAdapterExtender = function() {
    return {
        init: function() {
            this.callBase.apply(this, arguments);
            this._initGroupingHelper()
        },
        _initGroupingHelper: function(options) {
            var grouping = this._grouping,
                remoteOperations = options ? options.remoteOperations : this.remoteOperations();
            if (remoteOperations.filtering && remoteOperations.sorting && remoteOperations.paging && !remoteOperations.grouping) {
                if (!grouping || grouping instanceof CollapsedGroupingHelper) {
                    this._grouping = new ExpandedGroupingHelper(this)
                }
            } else {
                if (!grouping || grouping instanceof ExpandedGroupingHelper) {
                    this._grouping = new CollapsedGroupingHelper(this)
                }
            }
        },
        totalItemsCount: function() {
            var that = this,
                totalCount = that.callBase();
            return totalCount > 0 && that._dataSource.group() && that._dataSource.requireTotalCount() ? totalCount + that._grouping.totalCountCorrection() : totalCount
        },
        itemsCount: function() {
            return this._dataSource.group() ? this._grouping.itemsCount() || 0 : this.callBase()
        },
        allowCollapseAll: function() {
            return this._grouping.allowCollapseAll()
        },
        isRowExpanded: function(key) {
            var groupInfo = this._grouping.findGroupInfo(key);
            return groupInfo ? groupInfo.isExpanded : !this._grouping.allowCollapseAll()
        },
        collapseAll: function(groupIndex) {
            return this._collapseExpandAll(groupIndex, false)
        },
        expandAll: function(groupIndex) {
            return this._collapseExpandAll(groupIndex, true)
        },
        _collapseExpandAll: function(groupIndex, isExpand) {
            var i, that = this,
                dataSource = that._dataSource,
                group = dataSource.group(),
                groups = gridCore.normalizeSortingInfo(group || []);
            if (groups.length) {
                for (i = 0; i < groups.length; i++) {
                    if (void 0 === groupIndex || groupIndex === i) {
                        groups[i].isExpanded = isExpand
                    } else {
                        if (group && group[i]) {
                            groups[i].isExpanded = group[i].isExpanded
                        }
                    }
                }
                dataSource.group(groups);
                that._grouping.foreachGroups(function(groupInfo, parents) {
                    if (void 0 === groupIndex || groupIndex === parents.length - 1) {
                        groupInfo.isExpanded = isExpand
                    }
                }, false, true)
            }
            return true
        },
        refresh: function() {
            this.callBase.apply(this, arguments);
            return this._grouping.refresh.apply(this._grouping, arguments)
        },
        changeRowExpand: function(path) {
            var that = this,
                dataSource = that._dataSource;
            if (dataSource.group()) {
                dataSource._changeLoadingCount(1);
                return that._changeRowExpandCore(path).always(function() {
                    dataSource._changeLoadingCount(-1)
                })
            }
        },
        _changeRowExpandCore: function(path) {
            return this._grouping.changeRowExpand(path)
        },
        _hasGroupLevelsExpandState: function(group, isExpanded) {
            if (group && $.isArray(group)) {
                for (var i = 0; i < group.length; i++) {
                    if (group[i].isExpanded === isExpanded) {
                        return true
                    }
                }
            }
        },
        _customizeRemoteOperations: function(options) {
            var remoteOperations = options.remoteOperations;
            if (options.storeLoadOptions.group) {
                if (remoteOperations.grouping && !options.isCustomLoading) {
                    if (!remoteOperations.groupPaging || this._hasGroupLevelsExpandState(options.storeLoadOptions.group, true)) {
                        remoteOperations.paging = false
                    }
                }
                if (!remoteOperations.grouping && (!remoteOperations.sorting || !remoteOperations.filtering || options.isCustomLoading || this._hasGroupLevelsExpandState(options.storeLoadOptions.group, false))) {
                    remoteOperations.paging = false
                }
            }
            this.callBase.apply(this, arguments)
        },
        _handleDataLoading: function(options) {
            this.callBase(options);
            this._initGroupingHelper(options);
            return this._grouping.handleDataLoading(options)
        },
        _handleDataLoaded: function(options) {
            return this._grouping.handleDataLoaded(options, $.proxy(this.callBase, this))
        },
        _handleDataLoadedCore: function(options) {
            return this._grouping.handleDataLoadedCore(options, $.proxy(this.callBase, this))
        }
    }
}();
dataSourceAdapter.extend(GroupingDataSourceAdapterExtender);
var GroupingDataControllerExtender = function() {
    return {
        init: function() {
            var that = this;
            that.callBase();
            that.createAction("onRowExpanding");
            that.createAction("onRowExpanded");
            that.createAction("onRowCollapsing");
            that.createAction("onRowCollapsed")
        },
        _processItems: function(items, changeType) {
            var groupColumns = this._columnsController.getGroupColumns();
            if (items.length && groupColumns.length) {
                items = this._processGroupItems(items, groupColumns.length)
            }
            return this.callBase(items, changeType)
        },
        _processItem: function(item, options) {
            if (commonUtils.isDefined(item.groupIndex) && commonUtils.isString(item.rowType) && 0 === item.rowType.indexOf("group")) {
                item = this._processGroupItem(item, options);
                options.dataIndex = 0
            } else {
                item = this.callBase.apply(this, arguments)
            }
            return item
        },
        _processGroupItem: function(item) {
            return item
        },
        _processGroupItems: function(items, groupsCount, options) {
            var scrollingMode, i, item, resultItems, that = this,
                groupedColumns = that._columnsController.getGroupColumns(),
                column = groupedColumns[groupedColumns.length - groupsCount];
            if (!options) {
                scrollingMode = that.option("scrolling.mode");
                options = {
                    collectContinuationItems: "virtual" !== scrollingMode && "infinite" !== scrollingMode,
                    resultItems: [],
                    path: [],
                    values: []
                }
            }
            resultItems = options.resultItems;
            if (options.data) {
                if (options.collectContinuationItems || !options.data.isContinuation) {
                    resultItems.push({
                        rowType: "group",
                        data: options.data,
                        groupIndex: options.path.length - 1,
                        isExpanded: !!options.data.items,
                        key: options.path.slice(0),
                        values: options.values.slice(0)
                    })
                }
            }
            if (items) {
                if (0 === groupsCount) {
                    resultItems.push.apply(resultItems, items)
                } else {
                    for (i = 0; i < items.length; i++) {
                        item = items[i];
                        if (item && "items" in item) {
                            options.data = item;
                            options.path.push(item.key);
                            options.values.push(column && column.deserializeValue ? column.deserializeValue(item.key) : item.key);
                            that._processGroupItems(item.items, groupsCount - 1, options);
                            options.data = void 0;
                            options.path.pop();
                            options.values.pop()
                        } else {
                            resultItems.push(item)
                        }
                    }
                }
            }
            return resultItems
        },
        publicMethods: function() {
            return this.callBase().concat(["collapseAll", "expandAll", "isRowExpanded", "expandRow", "collapseRow"])
        },
        collapseAll: function(groupIndex) {
            var dataSource = this._dataSource;
            if (dataSource && dataSource.collapseAll(groupIndex)) {
                dataSource.pageIndex(0);
                dataSource.reload()
            }
        },
        expandAll: function(groupIndex) {
            var dataSource = this._dataSource;
            if (dataSource && dataSource.expandAll(groupIndex)) {
                dataSource.pageIndex(0);
                dataSource.reload()
            }
        },
        changeRowExpand: function(key) {
            var that = this,
                expanded = that.isRowExpanded(key),
                args = {
                    key: key,
                    expanded: expanded
                };
            that.executeAction(expanded ? "onRowCollapsing" : "onRowExpanding", args);
            if (!args.cancel) {
                return when(that._changeRowExpandCore(key)).done(function() {
                    args.expanded = !expanded;
                    that.executeAction(expanded ? "onRowCollapsed" : "onRowExpanded", args)
                })
            }
        },
        _changeRowExpandCore: function(key) {
            var d, that = this,
                dataSource = this._dataSource;
            if (!dataSource) {
                return
            }
            d = $.Deferred();
            when(dataSource.changeRowExpand(key)).done(function() {
                that.load().done(d.resolve).fail(d.reject)
            }).fail(d.reject);
            return d
        },
        isRowExpanded: function(key) {
            var dataSource = this._dataSource;
            return dataSource && dataSource.isRowExpanded(key)
        },
        expandRow: function(key) {
            if (!this.isRowExpanded(key)) {
                return this.changeRowExpand(key)
            }
            return $.Deferred().resolve()
        },
        collapseRow: function(key) {
            if (this.isRowExpanded(key)) {
                return this.changeRowExpand(key)
            }
            return $.Deferred().resolve()
        },
        optionChanged: function(args) {
            if ("grouping" === args.name) {
                args.name = "dataSource"
            }
            this.callBase(args)
        }
    }
}();
var onGroupingMenuItemClick = function(column, params) {
    var columnsController = this._columnsController;
    switch (params.itemData.value) {
        case "group":
            var groups = columnsController._dataSource.group() || [];
            columnsController.columnOption(column.dataField, "groupIndex", groups.length);
            break;
        case "ungroup":
            columnsController.columnOption(column.dataField, "groupIndex", -1);
            break;
        case "ungroupAll":
            this.component.clearGrouping()
    }
};
var GroupingHeaderPanelExtender = function() {
    return {
        _getToolbarItems: function() {
            var items = this.callBase();
            return this._appendGroupingItem(items)
        },
        _appendGroupingItem: function(items) {
            var that = this;
            if (that._isGroupPanelVisible()) {
                var toolbarItem = {
                    template: function(data, index, $container) {
                        var $groupPanel = $("<div />").addClass(DATAGRID_GROUP_PANEL_CLASS).appendTo($container);
                        that._updateGroupPanelContent($groupPanel)
                    },
                    name: "groupPanel",
                    location: "before",
                    locateInMenu: "never"
                };
                items.push(toolbarItem)
            }
            return items
        },
        _updateGroupPanelContent: function($groupPanel) {
            var that = this,
                groupColumns = that.getController("columns").getGroupColumns(),
                groupPanelOptions = that.option("groupPanel");
            that._renderGroupPanelItems($groupPanel, groupColumns);
            if (groupPanelOptions.allowColumnDragging && !groupColumns.length) {
                $("<div />").addClass(DATAGRID_GROUP_PANEL_MESSAGE_CLASS).text(groupPanelOptions.emptyPanelText).appendTo($groupPanel)
            }
        },
        _isGroupPanelVisible: function() {
            var isVisible, groupPanelOptions = this.option("groupPanel");
            if (groupPanelOptions) {
                isVisible = groupPanelOptions.visible;
                if ("auto" === isVisible) {
                    isVisible = "desktop" === devices.current().deviceType ? true : false
                }
            }
            return isVisible
        },
        _renderGroupPanelItems: function($groupPanel, groupColumns) {
            var that = this;
            $groupPanel.empty();
            $.each(groupColumns, function(index, groupColumn) {
                that._createGroupPanelItem($groupPanel, groupColumn)
            })
        },
        _createGroupPanelItem: function($rootElement, groupColumn) {
            return $("<div />").addClass(groupColumn.cssClass).addClass(DATAGRID_GROUP_PANEL_ITEM_CLASS).data("columnData", groupColumn).appendTo($rootElement).text(groupColumn.caption)
        },
        _renderCore: function() {
            if (this._toolbar) {
                var $groupPanel = this.element().find("." + DATAGRID_GROUP_PANEL_CLASS);
                if ($groupPanel.length) {
                    this._updateGroupPanelContent($groupPanel)
                }
            }
            this.callBase()
        },
        allowDragging: function(column) {
            var groupPanelOptions = this.option("groupPanel");
            return this._isGroupPanelVisible() && groupPanelOptions.allowColumnDragging && column && column.allowGrouping
        },
        getColumnElements: function() {
            var $element = this.element();
            return $element && $element.find("." + DATAGRID_GROUP_PANEL_ITEM_CLASS)
        },
        getColumns: function() {
            return this.getController("columns").getGroupColumns()
        },
        getBoundingRect: function() {
            var offset, that = this,
                $element = that.element();
            if ($element && $element.find("." + DATAGRID_GROUP_PANEL_CLASS).length) {
                offset = $element.offset();
                return {
                    top: offset.top,
                    bottom: offset.top + $element.height()
                }
            }
            return null
        },
        getName: function() {
            return "group"
        },
        getContextMenuItems: function(options) {
            var items, that = this,
                contextMenuEnabled = that.option("grouping.contextMenuEnabled"),
                $groupedColumnElement = options.targetElement.closest("." + DATAGRID_GROUP_PANEL_ITEM_CLASS);
            if ($groupedColumnElement.length) {
                options.column = $groupedColumnElement.data("columnData")
            }
            if (contextMenuEnabled && options.column) {
                var column = options.column,
                    isGroupingAllowed = commonUtils.isDefined(column.allowGrouping) ? column.allowGrouping : true;
                if (isGroupingAllowed) {
                    var isColumnGrouped = commonUtils.isDefined(column.groupIndex) && column.groupIndex > -1,
                        groupingTexts = that.option("grouping.texts"),
                        onItemClick = $.proxy(onGroupingMenuItemClick, that, column);
                    items = [{
                        text: groupingTexts.ungroup,
                        value: "ungroup",
                        disabled: !isColumnGrouped,
                        onItemClick: onItemClick
                    }, {
                        text: groupingTexts.ungroupAll,
                        value: "ungroupAll",
                        onItemClick: onItemClick
                    }]
                }
            }
            return items
        },
        isVisible: function() {
            return this.callBase() || this._isGroupPanelVisible()
        },
        optionChanged: function(args) {
            if ("groupPanel" === args.name) {
                this.updateToolbar();
                args.handled = true
            } else {
                this.callBase(args)
            }
        }
    }
}();
exports.GroupingHeaderPanelExtender = GroupingHeaderPanelExtender;
var GroupingRowsViewExtender = function() {
    return {
        getContextMenuItems: function(options) {
            var items, that = this,
                contextMenuEnabled = that.option("grouping.contextMenuEnabled");
            if (contextMenuEnabled && options.row && "group" === options.row.rowType) {
                var columnsController = that._columnsController,
                    column = columnsController.columnOption("groupIndex:" + options.row.groupIndex);
                if (column && column.allowGrouping) {
                    var groupingTexts = that.option("grouping.texts"),
                        onItemClick = $.proxy(onGroupingMenuItemClick, that, column);
                    items = [];
                    items.push({
                        text: groupingTexts.ungroup,
                        value: "ungroup",
                        onItemClick: onItemClick
                    }, {
                        text: groupingTexts.ungroupAll,
                        value: "ungroupAll",
                        onItemClick: onItemClick
                    })
                }
            }
            return items
        },
        _rowClick: function(e) {
            var that = this,
                expandMode = that.option("grouping.expandMode"),
                isGroupRowStateChanged = "rowClick" === expandMode && $(e.jQueryEvent.target).closest("." + DATAGRID_GROUP_ROW_CLASS).length,
                isExpandButtonClicked = $(e.jQueryEvent.target).closest("." + DATAGRID_EXPAND_CLASS).length;
            if (isGroupRowStateChanged || isExpandButtonClicked) {
                that._changeGroupRowState(e)
            }
            that.callBase(e)
        },
        _changeGroupRowState: function(e) {
            var dataController = this.getController("data"),
                row = dataController.items()[e.rowIndex];
            if ("detail" !== row.rowType) {
                dataController.changeRowExpand(row.key);
                e.jQueryEvent.preventDefault();
                e.handled = true
            }
        },
        _getCellTemplate: function(options) {
            var that = this;
            if ("expand" === options.column.command) {
                return {
                    allowRenderToDetachedContainer: true,
                    render: function(container, options) {
                        if (commonUtils.isDefined(options.value) && !(options.data && options.data.isContinuation) && !options.row.inserted) {
                            container.addClass(DATAGRID_EXPAND_CLASS).addClass(DATAGRID_SELECTION_DISABLED_CLASS);
                            $("<div>").addClass(options.value ? DATAGRID_GROUP_OPENED_CLASS : DATAGRID_GROUP_CLOSED_CLASS).appendTo(container);
                            that.setAria("label", options.value ? that.localize("dxDataGrid-ariaCollapse") : that.localize("dxDataGrid-ariaExpand"), container)
                        }
                    }
                }
            }
            return that.callBase(options)
        }
    }
}();
var columnHeadersViewExtender = function() {
    return {
        getContextMenuItems: function(options) {
            var that = this,
                contextMenuEnabled = that.option("grouping.contextMenuEnabled"),
                items = that.callBase(options);
            if (contextMenuEnabled && options.row && "header" === options.row.rowType) {
                var column = options.column;
                if (!column.command && (!commonUtils.isDefined(column.allowGrouping) || column.allowGrouping)) {
                    var groupingTexts = that.option("grouping.texts"),
                        isColumnGrouped = commonUtils.isDefined(column.groupIndex) && column.groupIndex > -1,
                        onItemClick = $.proxy(onGroupingMenuItemClick, that, column);
                    items = items || [];
                    items.push({
                        text: groupingTexts.groupByThisColumn,
                        value: "group",
                        beginGroup: true,
                        disabled: isColumnGrouped,
                        onItemClick: onItemClick
                    });
                    if (column.showWhenGrouped) {
                        items.push({
                            text: groupingTexts.ungroup,
                            value: "ungroup",
                            disabled: !isColumnGrouped,
                            onItemClick: onItemClick
                        })
                    }
                    items.push({
                        text: groupingTexts.ungroupAll,
                        value: "ungroupAll",
                        onItemClick: onItemClick
                    })
                }
            }
            return items
        }
    }
}();
gridCore.registerModule("grouping", {
    defaultOptions: function() {
        return {
            grouping: {
                autoExpandAll: true,
                allowCollapsing: true,
                contextMenuEnabled: false,
                expandMode: "buttonClick",
                texts: {
                    groupContinuesMessage: messageLocalization.format("dxDataGrid-groupContinuesMessage"),
                    groupContinuedMessage: messageLocalization.format("dxDataGrid-groupContinuedMessage"),
                    groupByThisColumn: messageLocalization.format("dxDataGrid-groupHeaderText"),
                    ungroup: messageLocalization.format("dxDataGrid-ungroupHeaderText"),
                    ungroupAll: messageLocalization.format("dxDataGrid-ungroupAllText")
                }
            },
            groupPanel: {
                visible: false,
                emptyPanelText: messageLocalization.format("dxDataGrid-groupPanelEmptyText"),
                allowColumnDragging: true
            }
        }
    },
    extenders: {
        controllers: {
            data: GroupingDataControllerExtender
        },
        views: {
            headerPanel: GroupingHeaderPanelExtender,
            rowsView: GroupingRowsViewExtender,
            columnHeadersView: columnHeadersViewExtender
        }
    }
});