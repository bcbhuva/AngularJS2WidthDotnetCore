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
var DxoHeightComponent = (function (_super) {
    __extends(DxoHeightComponent, _super);
    function DxoHeightComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoHeightComponent.prototype, "rangeMaxPoint", {
        get: function () {
            return this._getOption('rangeMaxPoint');
        },
        set: function (value) {
            this._setOption('rangeMaxPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeightComponent.prototype, "rangeMinPoint", {
        get: function () {
            return this._getOption('rangeMinPoint');
        },
        set: function (value) {
            this._setOption('rangeMinPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeightComponent.prototype, "_optionPath", {
        get: function () {
            return 'height';
        },
        enumerable: true,
        configurable: true
    });
    DxoHeightComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-height',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoHeightComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoHeightComponent.propDecorators = {
        'rangeMaxPoint': [{ type: core_1.Input },],
        'rangeMinPoint': [{ type: core_1.Input },],
    };
    return DxoHeightComponent;
}(nested_option_2.NestedOption));
exports.DxoHeightComponent = DxoHeightComponent;
var DxoHeightModule = (function () {
    function DxoHeightModule() {
    }
    DxoHeightModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoHeightComponent
                    ],
                    exports: [
                        DxoHeightComponent
                    ],
                },] },
    ];
    DxoHeightModule.ctorParameters = function () { return []; };
    return DxoHeightModule;
}());
exports.DxoHeightModule = DxoHeightModule;
//# sourceMappingURL=height.js.map