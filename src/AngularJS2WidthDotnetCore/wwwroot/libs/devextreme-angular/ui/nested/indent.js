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
var DxoIndentComponent = (function (_super) {
    __extends(DxoIndentComponent, _super);
    function DxoIndentComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoIndentComponent.prototype, "left", {
        get: function () {
            return this._getOption('left');
        },
        set: function (value) {
            this._setOption('left', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoIndentComponent.prototype, "right", {
        get: function () {
            return this._getOption('right');
        },
        set: function (value) {
            this._setOption('right', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoIndentComponent.prototype, "_optionPath", {
        get: function () {
            return 'indent';
        },
        enumerable: true,
        configurable: true
    });
    DxoIndentComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-indent',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoIndentComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoIndentComponent.propDecorators = {
        'left': [{ type: core_1.Input },],
        'right': [{ type: core_1.Input },],
    };
    return DxoIndentComponent;
}(nested_option_2.NestedOption));
exports.DxoIndentComponent = DxoIndentComponent;
var DxoIndentModule = (function () {
    function DxoIndentModule() {
    }
    DxoIndentModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoIndentComponent
                    ],
                    exports: [
                        DxoIndentComponent
                    ],
                },] },
    ];
    DxoIndentModule.ctorParameters = function () { return []; };
    return DxoIndentModule;
}());
exports.DxoIndentModule = DxoIndentModule;
//# sourceMappingURL=indent.js.map