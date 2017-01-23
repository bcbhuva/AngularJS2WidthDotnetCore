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
var DxoAdapterComponent = (function (_super) {
    __extends(DxoAdapterComponent, _super);
    function DxoAdapterComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoAdapterComponent.prototype, "applyValidationResults", {
        get: function () {
            return this._getOption('applyValidationResults');
        },
        set: function (value) {
            this._setOption('applyValidationResults', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "bypass", {
        get: function () {
            return this._getOption('bypass');
        },
        set: function (value) {
            this._setOption('bypass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "focus", {
        get: function () {
            return this._getOption('focus');
        },
        set: function (value) {
            this._setOption('focus', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "getValue", {
        get: function () {
            return this._getOption('getValue');
        },
        set: function (value) {
            this._setOption('getValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "reset", {
        get: function () {
            return this._getOption('reset');
        },
        set: function (value) {
            this._setOption('reset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "validationRequestsCallbacks", {
        get: function () {
            return this._getOption('validationRequestsCallbacks');
        },
        set: function (value) {
            this._setOption('validationRequestsCallbacks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "_optionPath", {
        get: function () {
            return 'adapter';
        },
        enumerable: true,
        configurable: true
    });
    DxoAdapterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-adapter',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoAdapterComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoAdapterComponent.propDecorators = {
        'applyValidationResults': [{ type: core_1.Input },],
        'bypass': [{ type: core_1.Input },],
        'focus': [{ type: core_1.Input },],
        'getValue': [{ type: core_1.Input },],
        'reset': [{ type: core_1.Input },],
        'validationRequestsCallbacks': [{ type: core_1.Input },],
    };
    return DxoAdapterComponent;
}(nested_option_2.NestedOption));
exports.DxoAdapterComponent = DxoAdapterComponent;
var DxoAdapterModule = (function () {
    function DxoAdapterModule() {
    }
    DxoAdapterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoAdapterComponent
                    ],
                    exports: [
                        DxoAdapterComponent
                    ],
                },] },
    ];
    DxoAdapterModule.ctorParameters = function () { return []; };
    return DxoAdapterModule;
}());
exports.DxoAdapterModule = DxoAdapterModule;
//# sourceMappingURL=adapter.js.map