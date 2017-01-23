/*!
 * devextreme-angular
 * Version: 16.2.4
 * Build date: Wed Jan 18 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var nested_option_1 = require('../../core/nested-option');
var nested_option_2 = require('../../core/nested-option');
var validation_rule_dxi_1 = require('./validation-rule-dxi');
var DxiColumnComponent = (function (_super) {
    __extends(DxiColumnComponent, _super);
    function DxiColumnComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiColumnComponent.prototype, "alignment", {
        get: function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowEditing", {
        get: function () {
            return this._getOption('allowEditing');
        },
        set: function (value) {
            this._setOption('allowEditing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowFiltering", {
        get: function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowFixing", {
        get: function () {
            return this._getOption('allowFixing');
        },
        set: function (value) {
            this._setOption('allowFixing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowGrouping", {
        get: function () {
            return this._getOption('allowGrouping');
        },
        set: function (value) {
            this._setOption('allowGrouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowHeaderFiltering", {
        get: function () {
            return this._getOption('allowHeaderFiltering');
        },
        set: function (value) {
            this._setOption('allowHeaderFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowHiding", {
        get: function () {
            return this._getOption('allowHiding');
        },
        set: function (value) {
            this._setOption('allowHiding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowReordering", {
        get: function () {
            return this._getOption('allowReordering');
        },
        set: function (value) {
            this._setOption('allowReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowResizing", {
        get: function () {
            return this._getOption('allowResizing');
        },
        set: function (value) {
            this._setOption('allowResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowSearch", {
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "allowSorting", {
        get: function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "autoExpandGroup", {
        get: function () {
            return this._getOption('autoExpandGroup');
        },
        set: function (value) {
            this._setOption('autoExpandGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "calculateCellValue", {
        get: function () {
            return this._getOption('calculateCellValue');
        },
        set: function (value) {
            this._setOption('calculateCellValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "calculateDisplayValue", {
        get: function () {
            return this._getOption('calculateDisplayValue');
        },
        set: function (value) {
            this._setOption('calculateDisplayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "calculateFilterExpression", {
        get: function () {
            return this._getOption('calculateFilterExpression');
        },
        set: function (value) {
            this._setOption('calculateFilterExpression', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "calculateGroupValue", {
        get: function () {
            return this._getOption('calculateGroupValue');
        },
        set: function (value) {
            this._setOption('calculateGroupValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "calculateSortValue", {
        get: function () {
            return this._getOption('calculateSortValue');
        },
        set: function (value) {
            this._setOption('calculateSortValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "cellTemplate", {
        get: function () {
            return this._getOption('cellTemplate');
        },
        set: function (value) {
            this._setOption('cellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "columns", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this._setOption('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "dataType", {
        get: function () {
            return this._getOption('dataType');
        },
        set: function (value) {
            this._setOption('dataType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "editCellTemplate", {
        get: function () {
            return this._getOption('editCellTemplate');
        },
        set: function (value) {
            this._setOption('editCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "editorOptions", {
        get: function () {
            return this._getOption('editorOptions');
        },
        set: function (value) {
            this._setOption('editorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "encodeHtml", {
        get: function () {
            return this._getOption('encodeHtml');
        },
        set: function (value) {
            this._setOption('encodeHtml', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "falseText", {
        get: function () {
            return this._getOption('falseText');
        },
        set: function (value) {
            this._setOption('falseText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "filterOperations", {
        get: function () {
            return this._getOption('filterOperations');
        },
        set: function (value) {
            this._setOption('filterOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "filterType", {
        get: function () {
            return this._getOption('filterType');
        },
        set: function (value) {
            this._setOption('filterType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "filterValue", {
        get: function () {
            return this._getOption('filterValue');
        },
        set: function (value) {
            this._setOption('filterValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "filterValues", {
        get: function () {
            return this._getOption('filterValues');
        },
        set: function (value) {
            this._setOption('filterValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "fixed", {
        get: function () {
            return this._getOption('fixed');
        },
        set: function (value) {
            this._setOption('fixed', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "fixedPosition", {
        get: function () {
            return this._getOption('fixedPosition');
        },
        set: function (value) {
            this._setOption('fixedPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "formItem", {
        get: function () {
            return this._getOption('formItem');
        },
        set: function (value) {
            this._setOption('formItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "groupCellTemplate", {
        get: function () {
            return this._getOption('groupCellTemplate');
        },
        set: function (value) {
            this._setOption('groupCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "groupIndex", {
        get: function () {
            return this._getOption('groupIndex');
        },
        set: function (value) {
            this._setOption('groupIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "headerCellTemplate", {
        get: function () {
            return this._getOption('headerCellTemplate');
        },
        set: function (value) {
            this._setOption('headerCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "headerFilter", {
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "hidingPriority", {
        get: function () {
            return this._getOption('hidingPriority');
        },
        set: function (value) {
            this._setOption('hidingPriority', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "isBand", {
        get: function () {
            return this._getOption('isBand');
        },
        set: function (value) {
            this._setOption('isBand', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "lookup", {
        get: function () {
            return this._getOption('lookup');
        },
        set: function (value) {
            this._setOption('lookup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "ownerBand", {
        get: function () {
            return this._getOption('ownerBand');
        },
        set: function (value) {
            this._setOption('ownerBand', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "precision", {
        get: function () {
            return this._getOption('precision');
        },
        set: function (value) {
            this._setOption('precision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "selectedFilterOperation", {
        get: function () {
            return this._getOption('selectedFilterOperation');
        },
        set: function (value) {
            this._setOption('selectedFilterOperation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "setCellValue", {
        get: function () {
            return this._getOption('setCellValue');
        },
        set: function (value) {
            this._setOption('setCellValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "showEditorAlways", {
        get: function () {
            return this._getOption('showEditorAlways');
        },
        set: function (value) {
            this._setOption('showEditorAlways', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "showInColumnChooser", {
        get: function () {
            return this._getOption('showInColumnChooser');
        },
        set: function (value) {
            this._setOption('showInColumnChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "showWhenGrouped", {
        get: function () {
            return this._getOption('showWhenGrouped');
        },
        set: function (value) {
            this._setOption('showWhenGrouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "sortIndex", {
        get: function () {
            return this._getOption('sortIndex');
        },
        set: function (value) {
            this._setOption('sortIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "sortOrder", {
        get: function () {
            return this._getOption('sortOrder');
        },
        set: function (value) {
            this._setOption('sortOrder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "trueText", {
        get: function () {
            return this._getOption('trueText');
        },
        set: function (value) {
            this._setOption('trueText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "visibleIndex", {
        get: function () {
            return this._getOption('visibleIndex');
        },
        set: function (value) {
            this._setOption('visibleIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "_optionPath", {
        get: function () {
            return 'columns';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiColumnComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-column',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiColumnComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiColumnComponent.propDecorators = {
        'alignment': [{ type: core_1.Input },],
        'allowEditing': [{ type: core_1.Input },],
        'allowFiltering': [{ type: core_1.Input },],
        'allowFixing': [{ type: core_1.Input },],
        'allowGrouping': [{ type: core_1.Input },],
        'allowHeaderFiltering': [{ type: core_1.Input },],
        'allowHiding': [{ type: core_1.Input },],
        'allowReordering': [{ type: core_1.Input },],
        'allowResizing': [{ type: core_1.Input },],
        'allowSearch': [{ type: core_1.Input },],
        'allowSorting': [{ type: core_1.Input },],
        'autoExpandGroup': [{ type: core_1.Input },],
        'calculateCellValue': [{ type: core_1.Input },],
        'calculateDisplayValue': [{ type: core_1.Input },],
        'calculateFilterExpression': [{ type: core_1.Input },],
        'calculateGroupValue': [{ type: core_1.Input },],
        'calculateSortValue': [{ type: core_1.Input },],
        'caption': [{ type: core_1.Input },],
        'cellTemplate': [{ type: core_1.Input },],
        'columns': [{ type: core_1.Input },],
        'cssClass': [{ type: core_1.Input },],
        'customizeText': [{ type: core_1.Input },],
        'dataField': [{ type: core_1.Input },],
        'dataType': [{ type: core_1.Input },],
        'editCellTemplate': [{ type: core_1.Input },],
        'editorOptions': [{ type: core_1.Input },],
        'encodeHtml': [{ type: core_1.Input },],
        'falseText': [{ type: core_1.Input },],
        'filterOperations': [{ type: core_1.Input },],
        'filterType': [{ type: core_1.Input },],
        'filterValue': [{ type: core_1.Input },],
        'filterValues': [{ type: core_1.Input },],
        'fixed': [{ type: core_1.Input },],
        'fixedPosition': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'formItem': [{ type: core_1.Input },],
        'groupCellTemplate': [{ type: core_1.Input },],
        'groupIndex': [{ type: core_1.Input },],
        'headerCellTemplate': [{ type: core_1.Input },],
        'headerFilter': [{ type: core_1.Input },],
        'hidingPriority': [{ type: core_1.Input },],
        'isBand': [{ type: core_1.Input },],
        'lookup': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'ownerBand': [{ type: core_1.Input },],
        'precision': [{ type: core_1.Input },],
        'selectedFilterOperation': [{ type: core_1.Input },],
        'setCellValue': [{ type: core_1.Input },],
        'showEditorAlways': [{ type: core_1.Input },],
        'showInColumnChooser': [{ type: core_1.Input },],
        'showWhenGrouped': [{ type: core_1.Input },],
        'sortIndex': [{ type: core_1.Input },],
        'sortOrder': [{ type: core_1.Input },],
        'trueText': [{ type: core_1.Input },],
        'validationRules': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'visibleIndex': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'validationRulesChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return validation_rule_dxi_1.DxiValidationRuleComponent; }),] },],
    };
    return DxiColumnComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiColumnComponent = DxiColumnComponent;
var DxiColumnModule = (function () {
    function DxiColumnModule() {
    }
    DxiColumnModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiColumnComponent
                    ],
                    exports: [
                        DxiColumnComponent
                    ],
                },] },
    ];
    DxiColumnModule.ctorParameters = function () { return []; };
    return DxiColumnModule;
}());
exports.DxiColumnModule = DxiColumnModule;
//# sourceMappingURL=column-dxi.js.map