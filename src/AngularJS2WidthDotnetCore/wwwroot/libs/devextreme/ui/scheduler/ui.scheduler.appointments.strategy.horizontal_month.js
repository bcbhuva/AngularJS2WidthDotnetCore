/**
 * DevExtreme (ui/scheduler/ui.scheduler.appointments.strategy.horizontal_month.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    HorizontalMonthLineAppointmentsStrategy = require("./ui.scheduler.appointments.strategy.horizontal_month_line");
var MONTH_APPOINTMENT_HEIGHT_RATIO = .6;
var HorizontalMonthRenderingStrategy = HorizontalMonthLineAppointmentsStrategy.inherit({
    _getAppointmentParts: function(appointmentGeometry, appointmentSettings, startDate, groupIndex) {
        var deltaWidth = appointmentGeometry.sourceAppointmentWidth - appointmentGeometry.reducedWidth,
            height = appointmentGeometry.height,
            fullWeekAppointmentWidth = this._getFullWeekAppointmentWidth(groupIndex),
            maxAppointmentWidth = this._getMaxAppointmentWidth(startDate),
            longPartCount = Math.ceil(deltaWidth / fullWeekAppointmentWidth) - 1,
            tailWidth = Math.floor(deltaWidth % fullWeekAppointmentWidth) || fullWeekAppointmentWidth,
            result = [],
            totalWidth = appointmentGeometry.reducedWidth + tailWidth,
            currentPartTop = appointmentSettings.top + this._defaultHeight,
            left = this._calculateMultiWeekAppointmentLeftOffset(appointmentSettings.hMax, fullWeekAppointmentWidth);
        for (var i = 0; i < longPartCount; i++) {
            if (totalWidth > maxAppointmentWidth) {
                break
            }
            result.push($.extend(true, {}, appointmentSettings, {
                top: currentPartTop,
                left: left,
                height: height,
                width: fullWeekAppointmentWidth,
                appointmentReduced: "body",
                rowIndex: ++appointmentSettings.rowIndex
            }));
            currentPartTop += this._defaultHeight;
            totalWidth += fullWeekAppointmentWidth
        }
        if (tailWidth) {
            if (this._isRtl()) {
                left += fullWeekAppointmentWidth - tailWidth
            }
            result.push($.extend(true, {}, appointmentSettings, {
                top: currentPartTop,
                left: left,
                height: height,
                width: tailWidth,
                appointmentReduced: "tail",
                rowIndex: ++appointmentSettings.rowIndex
            }))
        }
        return result
    },
    _calculateMultiWeekAppointmentLeftOffset: function(max, width) {
        return this._isRtl() ? max : max - width
    },
    _correctRtlCoordinatesParts: $.noop,
    _getFullWeekAppointmentWidth: function(groupIndex) {
        this.instance.notifyObserver("getFullWeekAppointmentWidth", {
            groupIndex: groupIndex,
            callback: $.proxy(function(width) {
                this._maxFullWeekAppointmentWidth = width
            }, this)
        });
        return this._maxFullWeekAppointmentWidth
    },
    _getCompactLeftCoordinate: function(itemLeft, index) {
        var cellWidth = this._defaultWidth || this.getAppointmentMinSize();
        return itemLeft + cellWidth * index
    },
    _checkLongCompactAppointment: function(item, result) {
        this._splitLongCompactAppointment(item, result);
        return result
    },
    _customizeAppointmentGeometry: function(coordinates) {
        var compactAppointmentDefaultSize, compactAppointmentDefaultOffset, maxHeight = this._defaultHeight || this.getAppointmentMinSize(),
            index = coordinates.index,
            height = MONTH_APPOINTMENT_HEIGHT_RATIO * maxHeight / 2,
            top = (1 - MONTH_APPOINTMENT_HEIGHT_RATIO) * maxHeight + coordinates.top + index * height,
            width = coordinates.width,
            left = coordinates.left;
        if (coordinates.isCompact) {
            compactAppointmentDefaultSize = this.getCompactAppointmentDefaultSize();
            compactAppointmentDefaultOffset = this.getCompactAppointmentDefaultOffset();
            top = coordinates.top + compactAppointmentDefaultOffset;
            left = coordinates.left + (index - 2) * (compactAppointmentDefaultSize + compactAppointmentDefaultOffset) + compactAppointmentDefaultOffset;
            height = compactAppointmentDefaultSize;
            width = compactAppointmentDefaultSize;
            this._markAppointmentAsVirtual(coordinates)
        }
        return {
            height: height,
            width: width,
            top: top,
            left: left
        }
    },
    createTaskPositionMap: function(items) {
        return this.callBase(items, true)
    },
    _getSortedPositions: function(map) {
        return this.callBase(map, true)
    }
});
module.exports = HorizontalMonthRenderingStrategy;