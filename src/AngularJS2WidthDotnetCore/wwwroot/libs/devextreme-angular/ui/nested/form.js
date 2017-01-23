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
var form_options_1 = require('./base/form-options');
var item_dxi_1 = require('./item-dxi');
var DxoFormComponent = (function (_super) {
    __extends(DxoFormComponent, _super);
    function DxoFormComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoFormComponent.prototype, "_optionPath", {
        get: function () {
            return 'form';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-form',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'onDisposing',
                        'onInitialized',
                        'onOptionChanged',
                        'elementAttr',
                        'height',
                        'rtlEnabled',
                        'width',
                        'accessKey',
                        'activeStateEnabled',
                        'disabled',
                        'focusStateEnabled',
                        'hint',
                        'hoverStateEnabled',
                        'onContentReady',
                        'tabIndex',
                        'visible',
                        'alignItemLabels',
                        'alignItemLabelsInAllGroups',
                        'colCount',
                        'colCountByScreen',
                        'customizeItem',
                        'formData',
                        'items',
                        'labelLocation',
                        'minColWidth',
                        'onEditorEnterKey',
                        'onFieldDataChanged',
                        'optionalMark',
                        'readOnly',
                        'requiredMark',
                        'requiredMessage',
                        'screenByWidth',
                        'scrollingEnabled',
                        'showColonAfterLabel',
                        'showOptionalMark',
                        'showRequiredMark',
                        'showValidationSummary',
                        'validationGroup'
                    ]
                },] },
    ];
    DxoFormComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFormComponent.propDecorators = {
        'itemsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return item_dxi_1.DxiItemComponent; }),] },],
    };
    return DxoFormComponent;
}(form_options_1.DxoFormOptions));
exports.DxoFormComponent = DxoFormComponent;
var DxoFormModule = (function () {
    function DxoFormModule() {
    }
    DxoFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFormComponent
                    ],
                    exports: [
                        DxoFormComponent
                    ],
                },] },
    ];
    DxoFormModule.ctorParameters = function () { return []; };
    return DxoFormModule;
}());
exports.DxoFormModule = DxoFormModule;
//# sourceMappingURL=form.js.map