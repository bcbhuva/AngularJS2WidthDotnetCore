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
import { ElementRef, NgZone, OnDestroy, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DxValidator from 'devextreme/ui/validator';
import { DxComponentExtension } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiValidationRuleComponent } from './nested/validation-rule-dxi';
export declare class DxValidatorComponent extends DxComponentExtension implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxValidator;
    elementAttr: any;
    height: any;
    width: any;
    adapter: any;
    name: any;
    validationGroup: any;
    validationRules: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onValidated: any;
    elementAttrChange: any;
    heightChange: any;
    widthChange: any;
    adapterChange: any;
    nameChange: any;
    validationGroupChange: any;
    validationRulesChange: any;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxValidator;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxValidatorModule {
}