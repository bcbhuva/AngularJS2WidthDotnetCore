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
var validation_rule_dxi_1 = require('./validation-rule-dxi');
var tab_dxi_1 = require('./tab-dxi');
var location_dxi_1 = require('./location-dxi');
var DxiItemComponent = (function (_super) {
    __extends(DxiItemComponent, _super);
    function DxiItemComponent(parentOptionHost, optionHost, element) {
        _super.call(this);
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiItemComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "html", {
        get: function () {
            return this._getOption('html');
        },
        set: function (value) {
            this._setOption('html', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "icon", {
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "iconSrc", {
        get: function () {
            return this._getOption('iconSrc');
        },
        set: function (value) {
            this._setOption('iconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "onClick", {
        get: function () {
            return this._getOption('onClick');
        },
        set: function (value) {
            this._setOption('onClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "baseSize", {
        get: function () {
            return this._getOption('baseSize');
        },
        set: function (value) {
            this._setOption('baseSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "box", {
        get: function () {
            return this._getOption('box');
        },
        set: function (value) {
            this._setOption('box', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "ratio", {
        get: function () {
            return this._getOption('ratio');
        },
        set: function (value) {
            this._setOption('ratio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "beginGroup", {
        get: function () {
            return this._getOption('beginGroup');
        },
        set: function (value) {
            this._setOption('beginGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "closeMenuOnClick", {
        get: function () {
            return this._getOption('closeMenuOnClick');
        },
        set: function (value) {
            this._setOption('closeMenuOnClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "selectable", {
        get: function () {
            return this._getOption('selectable');
        },
        set: function (value) {
            this._setOption('selectable', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "selected", {
        get: function () {
            return this._getOption('selected');
        },
        set: function (value) {
            this._setOption('selected', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "colSpan", {
        get: function () {
            return this._getOption('colSpan');
        },
        set: function (value) {
            this._setOption('colSpan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "itemType", {
        get: function () {
            return this._getOption('itemType');
        },
        set: function (value) {
            this._setOption('itemType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "visibleIndex", {
        get: function () {
            return this._getOption('visibleIndex');
        },
        set: function (value) {
            this._setOption('visibleIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "alignItemLabels", {
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "colCount", {
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "colCountByScreen", {
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "editorOptions", {
        get: function () {
            return this._getOption('editorOptions');
        },
        set: function (value) {
            this._setOption('editorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "editorType", {
        get: function () {
            return this._getOption('editorType');
        },
        set: function (value) {
            this._setOption('editorType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "helpText", {
        get: function () {
            return this._getOption('helpText');
        },
        set: function (value) {
            this._setOption('helpText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "isRequired", {
        get: function () {
            return this._getOption('isRequired');
        },
        set: function (value) {
            this._setOption('isRequired', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "tabPanelOptions", {
        get: function () {
            return this._getOption('tabPanelOptions');
        },
        set: function (value) {
            this._setOption('tabPanelOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "tabs", {
        get: function () {
            return this._getOption('tabs');
        },
        set: function (value) {
            this._setOption('tabs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "badge", {
        get: function () {
            return this._getOption('badge');
        },
        set: function (value) {
            this._setOption('badge', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "tabTemplate", {
        get: function () {
            return this._getOption('tabTemplate');
        },
        set: function (value) {
            this._setOption('tabTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "imageAlt", {
        get: function () {
            return this._getOption('imageAlt');
        },
        set: function (value) {
            this._setOption('imageAlt', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "imageSrc", {
        get: function () {
            return this._getOption('imageSrc');
        },
        set: function (value) {
            this._setOption('imageSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "key", {
        get: function () {
            return this._getOption('key');
        },
        set: function (value) {
            this._setOption('key', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "showChevron", {
        get: function () {
            return this._getOption('showChevron');
        },
        set: function (value) {
            this._setOption('showChevron', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "titleTemplate", {
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "menuTemplate", {
        get: function () {
            return this._getOption('menuTemplate');
        },
        set: function (value) {
            this._setOption('menuTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "heightRatio", {
        get: function () {
            return this._getOption('heightRatio');
        },
        set: function (value) {
            this._setOption('heightRatio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "widthRatio", {
        get: function () {
            return this._getOption('widthRatio');
        },
        set: function (value) {
            this._setOption('widthRatio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "locateInMenu", {
        get: function () {
            return this._getOption('locateInMenu');
        },
        set: function (value) {
            this._setOption('locateInMenu', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "menuItemTemplate", {
        get: function () {
            return this._getOption('menuItemTemplate');
        },
        set: function (value) {
            this._setOption('menuItemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "options", {
        get: function () {
            return this._getOption('options');
        },
        set: function (value) {
            this._setOption('options', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "showText", {
        get: function () {
            return this._getOption('showText');
        },
        set: function (value) {
            this._setOption('showText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "widget", {
        get: function () {
            return this._getOption('widget');
        },
        set: function (value) {
            this._setOption('widget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "expanded", {
        get: function () {
            return this._getOption('expanded');
        },
        set: function (value) {
            this._setOption('expanded', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "hasItems", {
        get: function () {
            return this._getOption('hasItems');
        },
        set: function (value) {
            this._setOption('hasItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "parentId", {
        get: function () {
            return this._getOption('parentId');
        },
        set: function (value) {
            this._setOption('parentId', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'items';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "tabsChildren", {
        get: function () {
            return this._getOption('tabs');
        },
        set: function (value) {
            this.setChildren('tabs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "locationChildren", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this.setChildren('location', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiItemComponent.prototype.ngAfterViewInit = function () {
        nested_option_1.extractTemplate(this, this.element);
    };
    DxiItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-item',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiItemComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    DxiItemComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'html': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'iconSrc': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'baseSize': [{ type: core_1.Input },],
        'box': [{ type: core_1.Input },],
        'ratio': [{ type: core_1.Input },],
        'beginGroup': [{ type: core_1.Input },],
        'closeMenuOnClick': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'selectable': [{ type: core_1.Input },],
        'selected': [{ type: core_1.Input },],
        'colSpan': [{ type: core_1.Input },],
        'cssClass': [{ type: core_1.Input },],
        'itemType': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'visibleIndex': [{ type: core_1.Input },],
        'alignItemLabels': [{ type: core_1.Input },],
        'caption': [{ type: core_1.Input },],
        'colCount': [{ type: core_1.Input },],
        'colCountByScreen': [{ type: core_1.Input },],
        'dataField': [{ type: core_1.Input },],
        'editorOptions': [{ type: core_1.Input },],
        'editorType': [{ type: core_1.Input },],
        'helpText': [{ type: core_1.Input },],
        'isRequired': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'validationRules': [{ type: core_1.Input },],
        'tabPanelOptions': [{ type: core_1.Input },],
        'tabs': [{ type: core_1.Input },],
        'badge': [{ type: core_1.Input },],
        'tabTemplate': [{ type: core_1.Input },],
        'imageAlt': [{ type: core_1.Input },],
        'imageSrc': [{ type: core_1.Input },],
        'key': [{ type: core_1.Input },],
        'showChevron': [{ type: core_1.Input },],
        'titleTemplate': [{ type: core_1.Input },],
        'location': [{ type: core_1.Input },],
        'menuTemplate': [{ type: core_1.Input },],
        'heightRatio': [{ type: core_1.Input },],
        'widthRatio': [{ type: core_1.Input },],
        'locateInMenu': [{ type: core_1.Input },],
        'menuItemTemplate': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'showText': [{ type: core_1.Input },],
        'widget': [{ type: core_1.Input },],
        'expanded': [{ type: core_1.Input },],
        'hasItems': [{ type: core_1.Input },],
        'parentId': [{ type: core_1.Input },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return DxiItemComponent; }),] },],
        'validationRulesChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return validation_rule_dxi_1.DxiValidationRuleComponent; }),] },],
        'tabsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return tab_dxi_1.DxiTabComponent; }),] },],
        'locationChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return location_dxi_1.DxiLocationComponent; }),] },],
    };
    return DxiItemComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiItemComponent = DxiItemComponent;
var DxiItemModule = (function () {
    function DxiItemModule() {
    }
    DxiItemModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiItemComponent
                    ],
                    exports: [
                        DxiItemComponent
                    ],
                },] },
    ];
    DxiItemModule.ctorParameters = function () { return []; };
    return DxiItemModule;
}());
exports.DxiItemModule = DxiItemModule;
//# sourceMappingURL=item-dxi.js.map