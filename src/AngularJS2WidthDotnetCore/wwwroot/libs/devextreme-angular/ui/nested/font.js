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
var viz_font_1 = require('./base/viz-font');
var DxoFontComponent = (function (_super) {
    __extends(DxoFontComponent, _super);
    function DxoFontComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoFontComponent.prototype, "_optionPath", {
        get: function () {
            return 'font';
        },
        enumerable: true,
        configurable: true
    });
    DxoFontComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-font',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'color',
                        'family',
                        'opacity',
                        'size',
                        'weight'
                    ]
                },] },
    ];
    DxoFontComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoFontComponent;
}(viz_font_1.DxoVizFont));
exports.DxoFontComponent = DxoFontComponent;
var DxoFontModule = (function () {
    function DxoFontModule() {
    }
    DxoFontModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFontComponent
                    ],
                    exports: [
                        DxoFontComponent
                    ],
                },] },
    ];
    DxoFontModule.ctorParameters = function () { return []; };
    return DxoFontModule;
}());
exports.DxoFontModule = DxoFontModule;
//# sourceMappingURL=font.js.map