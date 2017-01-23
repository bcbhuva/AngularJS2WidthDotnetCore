/**
 * DevExtreme (ui/scheduler/ui.scheduler.work_space_day.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    registerComponent = require("../../core/component_registrator"),
    SchedulerWorkSpace = require("./ui.scheduler.work_space");
var DAY_CLASS = "dx-scheduler-work-space-day";
var SchedulerWorkSpaceDay = SchedulerWorkSpace.inherit({
    _getElementClass: function() {
        return DAY_CLASS
    },
    _getRowCount: function() {
        return this._getCellCountInDay()
    },
    _getCellCount: function() {
        return 1
    },
    _setFirstViewDate: function() {
        this._firstViewDate = this.option("currentDate");
        this._setStartDayHour(this._firstViewDate)
    },
    _getDateByIndex: function() {
        return this._firstViewDate
    },
    _getFormat: function() {
        return "longdate"
    },
    _renderDateHeader: $.noop,
    _getRightCell: function(isMultiSelection) {
        if (!isMultiSelection) {
            return this.callBase(isMultiSelection)
        }
        return this._$focusedCell
    },
    _getLeftCell: function(isMultiSelection) {
        if (!isMultiSelection) {
            return this.callBase(isMultiSelection)
        }
        return this._$focusedCell
    }
});
registerComponent("dxSchedulerWorkSpaceDay", SchedulerWorkSpaceDay);
module.exports = SchedulerWorkSpaceDay;