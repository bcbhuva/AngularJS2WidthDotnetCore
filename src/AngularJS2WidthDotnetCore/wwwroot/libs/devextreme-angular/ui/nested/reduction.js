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
var DxoReductionComponent = (function (_super) {
    __extends(DxoReductionComponent, _super);
    function DxoReductionComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoReductionComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoReductionComponent.prototype, "level", {
        get: function () {
            return this._getOption('level');
        },
        set: function (value) {
            this._setOption('level', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoReductionComponent.prototype, "_optionPath", {
        get: function () {
            return 'reduction';
        },
        enumerable: true,
        configurable: true
    });
    DxoReductionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-reduction',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoReductionComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoReductionComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'level': [{ type: core_1.Input },],
    };
    return DxoReductionComponent;
}(nested_option_2.NestedOption));
exports.DxoReductionComponent = DxoReductionComponent;
var DxoReductionModule = (function () {
    function DxoReductionModule() {
    }
    DxoReductionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoReductionComponent
                    ],
                    exports: [
                        DxoReductionComponent
                    ],
                },] },
    ];
    DxoReductionModule.ctorParameters = function () { return []; };
    return DxoReductionModule;
}());
exports.DxoReductionModule = DxoReductionModule;
//# sourceMappingURL=reduction.js.map