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
var DxoBorderComponent = (function (_super) {
    __extends(DxoBorderComponent, _super);
    function DxoBorderComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoBorderComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "cornerRadius", {
        get: function () {
            return this._getOption('cornerRadius');
        },
        set: function (value) {
            this._setOption('cornerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "bottom", {
        get: function () {
            return this._getOption('bottom');
        },
        set: function (value) {
            this._setOption('bottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "left", {
        get: function () {
            return this._getOption('left');
        },
        set: function (value) {
            this._setOption('left', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "right", {
        get: function () {
            return this._getOption('right');
        },
        set: function (value) {
            this._setOption('right', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "top", {
        get: function () {
            return this._getOption('top');
        },
        set: function (value) {
            this._setOption('top', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBorderComponent.prototype, "_optionPath", {
        get: function () {
            return 'border';
        },
        enumerable: true,
        configurable: true
    });
    DxoBorderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-border',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoBorderComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoBorderComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'dashStyle': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'cornerRadius': [{ type: core_1.Input },],
        'bottom': [{ type: core_1.Input },],
        'left': [{ type: core_1.Input },],
        'right': [{ type: core_1.Input },],
        'top': [{ type: core_1.Input },],
    };
    return DxoBorderComponent;
}(nested_option_2.NestedOption));
exports.DxoBorderComponent = DxoBorderComponent;
var DxoBorderModule = (function () {
    function DxoBorderModule() {
    }
    DxoBorderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoBorderComponent
                    ],
                    exports: [
                        DxoBorderComponent
                    ],
                },] },
    ];
    DxoBorderModule.ctorParameters = function () { return []; };
    return DxoBorderModule;
}());
exports.DxoBorderModule = DxoBorderModule;
//# sourceMappingURL=border.js.map