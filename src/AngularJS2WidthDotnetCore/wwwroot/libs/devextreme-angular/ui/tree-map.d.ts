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
import { ElementRef, NgZone, OnDestroy, AfterViewInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxTreeMap from 'devextreme/viz/tree_map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxTreeMapComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeMap;
    elementAttr: any;
    rtlEnabled: any;
    export: any;
    loadingIndicator: any;
    pathModified: any;
    redrawOnResize: any;
    size: any;
    theme: any;
    title: any;
    tooltip: any;
    childrenField: any;
    colorField: any;
    colorizer: any;
    dataSource: any;
    group: any;
    hoverEnabled: any;
    idField: any;
    interactWithGroup: any;
    labelField: any;
    layoutAlgorithm: any;
    layoutDirection: any;
    maxDepth: any;
    parentField: any;
    resolveLabelOverflow: any;
    selectionMode: any;
    tile: any;
    valueField: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onClick: any;
    onDrill: any;
    onHoverChanged: any;
    onNodesInitialized: any;
    onNodesRendering: any;
    onSelectionChanged: any;
    elementAttrChange: any;
    rtlEnabledChange: any;
    exportChange: any;
    loadingIndicatorChange: any;
    pathModifiedChange: any;
    redrawOnResizeChange: any;
    sizeChange: any;
    themeChange: any;
    titleChange: any;
    tooltipChange: any;
    childrenFieldChange: any;
    colorFieldChange: any;
    colorizerChange: any;
    dataSourceChange: any;
    groupChange: any;
    hoverEnabledChange: any;
    idFieldChange: any;
    interactWithGroupChange: any;
    labelFieldChange: any;
    layoutAlgorithmChange: any;
    layoutDirectionChange: any;
    maxDepthChange: any;
    parentFieldChange: any;
    resolveLabelOverflowChange: any;
    selectionModeChange: any;
    tileChange: any;
    valueFieldChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTreeMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxTreeMapModule {
}