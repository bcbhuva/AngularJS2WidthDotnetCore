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
import { ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
import { DxiTabComponent } from './tab-dxi';
import { DxiLocationComponent } from './location-dxi';
export declare class DxiItemComponent extends CollectionNestedOption implements AfterViewInit {
    private element;
    disabled: any;
    html: any;
    template: any;
    text: any;
    visible: any;
    icon: any;
    iconSrc: any;
    title: any;
    onClick: any;
    type: any;
    baseSize: any;
    box: any;
    ratio: any;
    beginGroup: any;
    closeMenuOnClick: any;
    items: any;
    selectable: any;
    selected: any;
    colSpan: any;
    cssClass: any;
    itemType: any;
    name: any;
    visibleIndex: any;
    alignItemLabels: any;
    caption: any;
    colCount: any;
    colCountByScreen: any;
    dataField: any;
    editorOptions: any;
    editorType: any;
    helpText: any;
    isRequired: any;
    label: any;
    validationRules: any;
    tabPanelOptions: any;
    tabs: any;
    badge: any;
    tabTemplate: any;
    imageAlt: any;
    imageSrc: any;
    key: any;
    showChevron: any;
    titleTemplate: any;
    location: any;
    menuTemplate: any;
    heightRatio: any;
    widthRatio: any;
    locateInMenu: any;
    menuItemTemplate: any;
    options: any;
    showText: any;
    widget: any;
    expanded: any;
    hasItems: any;
    parentId: any;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    tabsChildren: QueryList<DxiTabComponent>;
    locationChildren: QueryList<DxiLocationComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, element: ElementRef);
    ngAfterViewInit(): void;
}
export declare class DxiItemModule {
}
