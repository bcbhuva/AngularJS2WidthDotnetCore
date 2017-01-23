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
import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
export declare class DxiColumnComponent extends CollectionNestedOption {
    alignment: any;
    allowEditing: any;
    allowFiltering: any;
    allowFixing: any;
    allowGrouping: any;
    allowHeaderFiltering: any;
    allowHiding: any;
    allowReordering: any;
    allowResizing: any;
    allowSearch: any;
    allowSorting: any;
    autoExpandGroup: any;
    calculateCellValue: any;
    calculateDisplayValue: any;
    calculateFilterExpression: any;
    calculateGroupValue: any;
    calculateSortValue: any;
    caption: any;
    cellTemplate: any;
    columns: any;
    cssClass: any;
    customizeText: any;
    dataField: any;
    dataType: any;
    editCellTemplate: any;
    editorOptions: any;
    encodeHtml: any;
    falseText: any;
    filterOperations: any;
    filterType: any;
    filterValue: any;
    filterValues: any;
    fixed: any;
    fixedPosition: any;
    format: any;
    formItem: any;
    groupCellTemplate: any;
    groupIndex: any;
    headerCellTemplate: any;
    headerFilter: any;
    hidingPriority: any;
    isBand: any;
    lookup: any;
    name: any;
    ownerBand: any;
    precision: any;
    selectedFilterOperation: any;
    setCellValue: any;
    showEditorAlways: any;
    showInColumnChooser: any;
    showWhenGrouped: any;
    sortIndex: any;
    sortOrder: any;
    trueText: any;
    validationRules: any;
    visible: any;
    visibleIndex: any;
    width: any;
    protected readonly _optionPath: string;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiColumnModule {
}