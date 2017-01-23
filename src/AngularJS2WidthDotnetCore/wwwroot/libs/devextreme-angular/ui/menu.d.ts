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
import DxMenu from 'devextreme/ui/menu';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
export declare class DxMenuComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxMenu;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    activeStateEnabled: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    dataSource: any;
    itemTemplate: any;
    selectedItem: any;
    selectionByClick: any;
    selectionMode: any;
    items: any;
    disabledExpr: any;
    displayExpr: any;
    itemsExpr: any;
    selectedExpr: any;
    animation: any;
    cssClass: any;
    selectByClick: any;
    showSubmenuMode: any;
    adaptivityEnabled: any;
    hideSubmenuOnMouseLeave: any;
    orientation: any;
    showFirstSubmenuMode: any;
    submenuDirection: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onItemClick: any;
    onItemContextMenu: any;
    onItemRendered: any;
    onSelectionChanged: any;
    onSubmenuHidden: any;
    onSubmenuHiding: any;
    onSubmenuShowing: any;
    onSubmenuShown: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    accessKeyChange: any;
    activeStateEnabledChange: any;
    disabledChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    tabIndexChange: any;
    visibleChange: any;
    dataSourceChange: any;
    itemTemplateChange: any;
    selectedItemChange: any;
    selectionByClickChange: any;
    selectionModeChange: any;
    itemsChange: any;
    disabledExprChange: any;
    displayExprChange: any;
    itemsExprChange: any;
    selectedExprChange: any;
    animationChange: any;
    cssClassChange: any;
    selectByClickChange: any;
    showSubmenuModeChange: any;
    adaptivityEnabledChange: any;
    hideSubmenuOnMouseLeaveChange: any;
    orientationChange: any;
    showFirstSubmenuModeChange: any;
    submenuDirectionChange: any;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxMenu;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxMenuModule {
}