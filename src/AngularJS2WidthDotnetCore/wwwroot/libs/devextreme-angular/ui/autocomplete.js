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
var autocomplete_1 = require('devextreme/ui/autocomplete');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var item_dxi_1 = require('./nested/item-dxi');
var item_dxi_2 = require('./nested/item-dxi');
var DxAutocompleteComponent = (function (_super) {
    __extends(DxAutocompleteComponent, _super);
    function DxAutocompleteComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'dataSourceChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'valueExprChange' },
            { emit: 'itemsChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'attrChange' },
            { emit: 'inputAttrChange' },
            { emit: 'placeholderChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'maxLengthChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'openedChange' },
            { emit: 'displayValueChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'maxItemCountChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxAutocompleteComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "inputAttr", {
        get: function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "spellcheck", {
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxLength", {
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "displayValue", {
        get: function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "minSearchLength", {
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchExpr", {
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchMode", {
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxItemCount", {
        get: function () {
            return this._getOption('maxItemCount');
        },
        set: function (value) {
            this._setOption('maxItemCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxAutocompleteComponent.prototype._createInstance = function (element, options) {
        var widget = new autocomplete_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxAutocompleteComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('searchExpr', changes);
    };
    DxAutocompleteComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
    };
    DxAutocompleteComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxAutocompleteComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-autocomplete',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxAutocompleteComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxAutocompleteComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'dataSource': [{ type: core_1.Input },],
        'displayExpr': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'valueExpr': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'attr': [{ type: core_1.Input },],
        'inputAttr': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'showClearButton': [{ type: core_1.Input },],
        'spellcheck': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'valueChangeEvent': [{ type: core_1.Input },],
        'maxLength': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'opened': [{ type: core_1.Input },],
        'displayValue': [{ type: core_1.Input },],
        'minSearchLength': [{ type: core_1.Input },],
        'searchExpr': [{ type: core_1.Input },],
        'searchMode': [{ type: core_1.Input },],
        'searchTimeout': [{ type: core_1.Input },],
        'selectedItem': [{ type: core_1.Input },],
        'maxItemCount': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onFocusIn': [{ type: core_1.Output },],
        'onFocusOut': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'onChange': [{ type: core_1.Output },],
        'onCopy': [{ type: core_1.Output },],
        'onCut': [{ type: core_1.Output },],
        'onEnterKey': [{ type: core_1.Output },],
        'onInput': [{ type: core_1.Output },],
        'onKeyDown': [{ type: core_1.Output },],
        'onKeyPress': [{ type: core_1.Output },],
        'onKeyUp': [{ type: core_1.Output },],
        'onPaste': [{ type: core_1.Output },],
        'onClosed': [{ type: core_1.Output },],
        'onOpened': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'displayExprChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'valueExprChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'attrChange': [{ type: core_1.Output },],
        'inputAttrChange': [{ type: core_1.Output },],
        'placeholderChange': [{ type: core_1.Output },],
        'showClearButtonChange': [{ type: core_1.Output },],
        'spellcheckChange': [{ type: core_1.Output },],
        'textChange': [{ type: core_1.Output },],
        'valueChangeEventChange': [{ type: core_1.Output },],
        'maxLengthChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'openedChange': [{ type: core_1.Output },],
        'displayValueChange': [{ type: core_1.Output },],
        'minSearchLengthChange': [{ type: core_1.Output },],
        'searchExprChange': [{ type: core_1.Output },],
        'searchModeChange': [{ type: core_1.Output },],
        'searchTimeoutChange': [{ type: core_1.Output },],
        'selectedItemChange': [{ type: core_1.Output },],
        'maxItemCountChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxAutocompleteComponent;
}(component_1.DxComponent));
exports.DxAutocompleteComponent = DxAutocompleteComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxAutocompleteValueAccessorDirective; }),
    multi: true
};
var DxAutocompleteValueAccessorDirective = (function () {
    function DxAutocompleteValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxAutocompleteValueAccessorDirective.prototype.onChange = function (_) { };
    DxAutocompleteValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxAutocompleteValueAccessorDirective.prototype.setDisabledState = function (isDisabled) {
        this.host.disabled = isDisabled;
    };
    DxAutocompleteValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxAutocompleteValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DxAutocompleteValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dx-autocomplete[formControlName],dx-autocomplete[formControl],dx-autocomplete[ngModel]',
                    providers: [CUSTOM_VALUE_ACCESSOR]
                },] },
    ];
    DxAutocompleteValueAccessorDirective.ctorParameters = function () { return [
        { type: DxAutocompleteComponent, },
    ]; };
    DxAutocompleteValueAccessorDirective.propDecorators = {
        'onChange': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
    };
    return DxAutocompleteValueAccessorDirective;
}());
exports.DxAutocompleteValueAccessorDirective = DxAutocompleteValueAccessorDirective;
var DxAutocompleteModule = (function () {
    function DxAutocompleteModule() {
    }
    DxAutocompleteModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxAutocompleteComponent,
                        DxAutocompleteValueAccessorDirective
                    ],
                    exports: [
                        DxAutocompleteComponent,
                        item_dxi_1.DxiItemModule,
                        DxAutocompleteValueAccessorDirective,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxAutocompleteModule.ctorParameters = function () { return []; };
    return DxAutocompleteModule;
}());
exports.DxAutocompleteModule = DxAutocompleteModule;
//# sourceMappingURL=autocomplete.js.map