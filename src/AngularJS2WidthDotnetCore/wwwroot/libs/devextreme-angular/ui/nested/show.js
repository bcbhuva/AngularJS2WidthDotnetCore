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
var animation_config_1 = require('./base/animation-config');
var DxoShowComponent = (function (_super) {
    __extends(DxoShowComponent, _super);
    function DxoShowComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoShowComponent.prototype, "_optionPath", {
        get: function () {
            return 'show';
        },
        enumerable: true,
        configurable: true
    });
    DxoShowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-show',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'complete',
                        'delay',
                        'direction',
                        'duration',
                        'easing',
                        'from',
                        'staggerDelay',
                        'start',
                        'to',
                        'type'
                    ]
                },] },
    ];
    DxoShowComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoShowComponent;
}(animation_config_1.DxoAnimationConfig));
exports.DxoShowComponent = DxoShowComponent;
var DxoShowModule = (function () {
    function DxoShowModule() {
    }
    DxoShowModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoShowComponent
                    ],
                    exports: [
                        DxoShowComponent
                    ],
                },] },
    ];
    DxoShowModule.ctorParameters = function () { return []; };
    return DxoShowModule;
}());
exports.DxoShowModule = DxoShowModule;
//# sourceMappingURL=show.js.map