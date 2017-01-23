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
var DxiStripComponent = (function (_super) {
    __extends(DxiStripComponent, _super);
    function DxiStripComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiStripComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiStripComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiStripComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiStripComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiStripComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiStripComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiStripComponent.prototype, "_optionPath", {
        get: function () {
            return 'strips';
        },
        enumerable: true,
        configurable: true
    });
    DxiStripComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-strip',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiStripComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiStripComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'paddingLeftRight': [{ type: core_1.Input },],
        'paddingTopBottom': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'endValue': [{ type: core_1.Input },],
        'startValue': [{ type: core_1.Input },],
    };
    return DxiStripComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiStripComponent = DxiStripComponent;
var DxiStripModule = (function () {
    function DxiStripModule() {
    }
    DxiStripModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiStripComponent
                    ],
                    exports: [
                        DxiStripComponent
                    ],
                },] },
    ];
    DxiStripModule.ctorParameters = function () { return []; };
    return DxiStripModule;
}());
exports.DxiStripModule = DxiStripModule;
//# sourceMappingURL=strip-dxi.js.map