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
var DxoShutterComponent = (function (_super) {
    __extends(DxoShutterComponent, _super);
    function DxoShutterComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoShutterComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShutterComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShutterComponent.prototype, "_optionPath", {
        get: function () {
            return 'shutter';
        },
        enumerable: true,
        configurable: true
    });
    DxoShutterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-shutter',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoShutterComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoShutterComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
    };
    return DxoShutterComponent;
}(nested_option_2.NestedOption));
exports.DxoShutterComponent = DxoShutterComponent;
var DxoShutterModule = (function () {
    function DxoShutterModule() {
    }
    DxoShutterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoShutterComponent
                    ],
                    exports: [
                        DxoShutterComponent
                    ],
                },] },
    ];
    DxoShutterModule.ctorParameters = function () { return []; };
    return DxoShutterModule;
}());
exports.DxoShutterModule = DxoShutterModule;
//# sourceMappingURL=shutter.js.map