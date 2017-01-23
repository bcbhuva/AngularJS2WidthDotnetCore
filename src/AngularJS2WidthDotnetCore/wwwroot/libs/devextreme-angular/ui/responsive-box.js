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
var responsive_box_1 = require('devextreme/ui/responsive_box');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var item_dxi_1 = require('./nested/item-dxi');
var location_dxi_1 = require('./nested/location-dxi');
var col_dxi_1 = require('./nested/col-dxi');
var row_dxi_1 = require('./nested/row-dxi');
var item_dxi_2 = require('./nested/item-dxi');
var col_dxi_2 = require('./nested/col-dxi');
var row_dxi_2 = require('./nested/row-dxi');
var DxResponsiveBoxComponent = (function (_super) {
    __extends(DxResponsiveBoxComponent, _super);
    function DxResponsiveBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'disabledChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'dataSourceChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemsChange' },
            { emit: 'colsChange' },
            { emit: 'rowsChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'singleColumnScreenChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemHoldTimeout", {
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "cols", {
        get: function () {
            return this._getOption('cols');
        },
        set: function (value) {
            this._setOption('cols', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rows", {
        get: function () {
            return this._getOption('rows');
        },
        set: function (value) {
            this._setOption('rows', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "screenByWidth", {
        get: function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "singleColumnScreen", {
        get: function () {
            return this._getOption('singleColumnScreen');
        },
        set: function (value) {
            this._setOption('singleColumnScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "colsChildren", {
        get: function () {
            return this._getOption('cols');
        },
        set: function (value) {
            this.setChildren('cols', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rowsChildren", {
        get: function () {
            return this._getOption('rows');
        },
        set: function (value) {
            this.setChildren('rows', value);
        },
        enumerable: true,
        configurable: true
    });
    DxResponsiveBoxComponent.prototype._createInstance = function (element, options) {
        return new responsive_box_1.default(element, options);
    };
    DxResponsiveBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxResponsiveBoxComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('cols', changes);
        this._idh.setup('rows', changes);
    };
    DxResponsiveBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('cols');
        this._idh.doCheck('rows');
        this._watcherHelper.checkWatchers();
    };
    DxResponsiveBoxComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxResponsiveBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-responsive-box',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxResponsiveBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxResponsiveBoxComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'itemHoldTimeout': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'cols': [{ type: core_1.Input },],
        'rows': [{ type: core_1.Input },],
        'screenByWidth': [{ type: core_1.Input },],
        'singleColumnScreen': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onItemContextMenu': [{ type: core_1.Output },],
        'onItemHold': [{ type: core_1.Output },],
        'onItemRendered': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'itemHoldTimeoutChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'colsChange': [{ type: core_1.Output },],
        'rowsChange': [{ type: core_1.Output },],
        'screenByWidthChange': [{ type: core_1.Output },],
        'singleColumnScreenChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
        'colsChildren': [{ type: core_1.ContentChildren, args: [col_dxi_2.DxiColComponent,] },],
        'rowsChildren': [{ type: core_1.ContentChildren, args: [row_dxi_2.DxiRowComponent,] },],
    };
    return DxResponsiveBoxComponent;
}(component_1.DxComponent));
exports.DxResponsiveBoxComponent = DxResponsiveBoxComponent;
var DxResponsiveBoxModule = (function () {
    function DxResponsiveBoxModule() {
    }
    DxResponsiveBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        location_dxi_1.DxiLocationModule,
                        col_dxi_1.DxiColModule,
                        row_dxi_1.DxiRowModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxResponsiveBoxComponent
                    ],
                    exports: [
                        DxResponsiveBoxComponent,
                        item_dxi_1.DxiItemModule,
                        location_dxi_1.DxiLocationModule,
                        col_dxi_1.DxiColModule,
                        row_dxi_1.DxiRowModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxResponsiveBoxModule.ctorParameters = function () { return []; };
    return DxResponsiveBoxModule;
}());
exports.DxResponsiveBoxModule = DxResponsiveBoxModule;
//# sourceMappingURL=responsive-box.js.map