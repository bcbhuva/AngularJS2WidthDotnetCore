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
var number_box_1 = require('devextreme/ui/number_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var DxNumberBoxComponent = (function (_super) {
    __extends(DxNumberBoxComponent, _super);
    function DxNumberBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
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
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'invalidValueMessageChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'modeChange' },
            { emit: 'showSpinButtonsChange' },
            { emit: 'stepChange' }
        ]);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxNumberBoxComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "inputAttr", {
        get: function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "invalidValueMessage", {
        get: function () {
            return this._getOption('invalidValueMessage');
        },
        set: function (value) {
            this._setOption('invalidValueMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "showSpinButtons", {
        get: function () {
            return this._getOption('showSpinButtons');
        },
        set: function (value) {
            this._setOption('showSpinButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "step", {
        get: function () {
            return this._getOption('step');
        },
        set: function (value) {
            this._setOption('step', value);
        },
        enumerable: true,
        configurable: true
    });
    DxNumberBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new number_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxNumberBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxNumberBoxComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxNumberBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-number-box',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    DxNumberBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxNumberBoxComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
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
        'text': [{ type: core_1.Input },],
        'valueChangeEvent': [{ type: core_1.Input },],
        'invalidValueMessage': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'mode': [{ type: core_1.Input },],
        'showSpinButtons': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
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
        'textChange': [{ type: core_1.Output },],
        'valueChangeEventChange': [{ type: core_1.Output },],
        'invalidValueMessageChange': [{ type: core_1.Output },],
        'maxChange': [{ type: core_1.Output },],
        'minChange': [{ type: core_1.Output },],
        'modeChange': [{ type: core_1.Output },],
        'showSpinButtonsChange': [{ type: core_1.Output },],
        'stepChange': [{ type: core_1.Output },],
    };
    return DxNumberBoxComponent;
}(component_1.DxComponent));
exports.DxNumberBoxComponent = DxNumberBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxNumberBoxValueAccessorDirective; }),
    multi: true
};
var DxNumberBoxValueAccessorDirective = (function () {
    function DxNumberBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxNumberBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxNumberBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxNumberBoxValueAccessorDirective.prototype.setDisabledState = function (isDisabled) {
        this.host.disabled = isDisabled;
    };
    DxNumberBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxNumberBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DxNumberBoxValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dx-number-box[formControlName],dx-number-box[formControl],dx-number-box[ngModel]',
                    providers: [CUSTOM_VALUE_ACCESSOR]
                },] },
    ];
    DxNumberBoxValueAccessorDirective.ctorParameters = function () { return [
        { type: DxNumberBoxComponent, },
    ]; };
    DxNumberBoxValueAccessorDirective.propDecorators = {
        'onChange': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
    };
    return DxNumberBoxValueAccessorDirective;
}());
exports.DxNumberBoxValueAccessorDirective = DxNumberBoxValueAccessorDirective;
var DxNumberBoxModule = (function () {
    function DxNumberBoxModule() {
    }
    DxNumberBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxNumberBoxComponent,
                        DxNumberBoxValueAccessorDirective
                    ],
                    exports: [
                        DxNumberBoxComponent,
                        DxNumberBoxValueAccessorDirective,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxNumberBoxModule.ctorParameters = function () { return []; };
    return DxNumberBoxModule;
}());
exports.DxNumberBoxModule = DxNumberBoxModule;
//# sourceMappingURL=number-box.js.map