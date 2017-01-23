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
var DxoGeometryComponent = (function (_super) {
    __extends(DxoGeometryComponent, _super);
    function DxoGeometryComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoGeometryComponent.prototype, "endAngle", {
        get: function () {
            return this._getOption('endAngle');
        },
        set: function (value) {
            this._setOption('endAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "startAngle", {
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "_optionPath", {
        get: function () {
            return 'geometry';
        },
        enumerable: true,
        configurable: true
    });
    DxoGeometryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-geometry',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoGeometryComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoGeometryComponent.propDecorators = {
        'endAngle': [{ type: core_1.Input },],
        'startAngle': [{ type: core_1.Input },],
        'orientation': [{ type: core_1.Input },],
    };
    return DxoGeometryComponent;
}(nested_option_2.NestedOption));
exports.DxoGeometryComponent = DxoGeometryComponent;
var DxoGeometryModule = (function () {
    function DxoGeometryModule() {
    }
    DxoGeometryModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoGeometryComponent
                    ],
                    exports: [
                        DxoGeometryComponent
                    ],
                },] },
    ];
    DxoGeometryModule.ctorParameters = function () { return []; };
    return DxoGeometryModule;
}());
exports.DxoGeometryModule = DxoGeometryModule;
//# sourceMappingURL=geometry.js.map