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
var DxoSortingComponent = (function (_super) {
    __extends(DxoSortingComponent, _super);
    function DxoSortingComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoSortingComponent.prototype, "ascendingText", {
        get: function () {
            return this._getOption('ascendingText');
        },
        set: function (value) {
            this._setOption('ascendingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "clearText", {
        get: function () {
            return this._getOption('clearText');
        },
        set: function (value) {
            this._setOption('clearText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "descendingText", {
        get: function () {
            return this._getOption('descendingText');
        },
        set: function (value) {
            this._setOption('descendingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSortingComponent.prototype, "_optionPath", {
        get: function () {
            return 'sorting';
        },
        enumerable: true,
        configurable: true
    });
    DxoSortingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-sorting',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoSortingComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSortingComponent.propDecorators = {
        'ascendingText': [{ type: core_1.Input },],
        'clearText': [{ type: core_1.Input },],
        'descendingText': [{ type: core_1.Input },],
        'mode': [{ type: core_1.Input },],
    };
    return DxoSortingComponent;
}(nested_option_2.NestedOption));
exports.DxoSortingComponent = DxoSortingComponent;
var DxoSortingModule = (function () {
    function DxoSortingModule() {
    }
    DxoSortingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSortingComponent
                    ],
                    exports: [
                        DxoSortingComponent
                    ],
                },] },
    ];
    DxoSortingModule.ctorParameters = function () { return []; };
    return DxoSortingModule;
}());
exports.DxoSortingModule = DxoSortingModule;
//# sourceMappingURL=sorting.js.map