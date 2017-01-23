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
import { DxiConstantLineComponent } from './constant-line-dxi';
import { DxiStripComponent } from './strip-dxi';
export declare class DxiValueAxisComponent extends CollectionNestedOption {
    color: any;
    constantLineStyle: any;
    discreteAxisDivisionMode: any;
    grid: any;
    inverted: any;
    label: any;
    maxValueMargin: any;
    minorGrid: any;
    minorTick: any;
    minValueMargin: any;
    opacity: any;
    placeholderSize: any;
    setTicksAtUnitBeginning: any;
    stripStyle: any;
    tick: any;
    title: any;
    valueMarginsEnabled: any;
    visible: any;
    width: any;
    axisDivisionFactor: any;
    categories: any;
    constantLines: any;
    logarithmBase: any;
    max: any;
    min: any;
    minorTickCount: any;
    minorTickInterval: any;
    multipleAxesSpacing: any;
    name: any;
    pane: any;
    position: any;
    showZero: any;
    strips: any;
    synchronizedValue: any;
    tickInterval: any;
    type: any;
    valueType: any;
    protected readonly _optionPath: string;
    constantLinesChildren: QueryList<DxiConstantLineComponent>;
    stripsChildren: QueryList<DxiStripComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiValueAxisModule {
}