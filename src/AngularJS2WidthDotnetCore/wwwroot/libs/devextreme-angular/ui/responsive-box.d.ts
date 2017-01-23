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
import { ElementRef, NgZone, OnDestroy, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DxResponsiveBox from 'devextreme/ui/responsive_box';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
import { DxiColComponent } from './nested/col-dxi';
import { DxiRowComponent } from './nested/row-dxi';
export declare class DxResponsiveBoxComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxResponsiveBox;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    disabled: any;
    hoverStateEnabled: any;
    visible: any;
    dataSource: any;
    itemHoldTimeout: any;
    itemTemplate: any;
    items: any;
    cols: any;
    rows: any;
    screenByWidth: any;
    singleColumnScreen: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onItemClick: any;
    onItemContextMenu: any;
    onItemHold: any;
    onItemRendered: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    disabledChange: any;
    hoverStateEnabledChange: any;
    visibleChange: any;
    dataSourceChange: any;
    itemHoldTimeoutChange: any;
    itemTemplateChange: any;
    itemsChange: any;
    colsChange: any;
    rowsChange: any;
    screenByWidthChange: any;
    singleColumnScreenChange: any;
    itemsChildren: QueryList<DxiItemComponent>;
    colsChildren: QueryList<DxiColComponent>;
    rowsChildren: QueryList<DxiRowComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxResponsiveBox;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxResponsiveBoxModule {
}