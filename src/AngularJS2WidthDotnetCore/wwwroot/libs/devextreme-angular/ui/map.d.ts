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
import DxMap from 'devextreme/ui/map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiCenterComponent } from './nested/center-dxi';
import { DxiMarkerComponent } from './nested/marker-dxi';
import { DxiRouteComponent } from './nested/route-dxi';
export declare class DxMapComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxMap;
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
    autoAdjust: any;
    center: any;
    controls: any;
    key: any;
    markerIconSrc: any;
    markers: any;
    provider: any;
    routes: any;
    type: any;
    zoom: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onClick: any;
    onMarkerAdded: any;
    onMarkerRemoved: any;
    onReady: any;
    onRouteAdded: any;
    onRouteRemoved: any;
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
    autoAdjustChange: any;
    centerChange: any;
    controlsChange: any;
    keyChange: any;
    markerIconSrcChange: any;
    markersChange: any;
    providerChange: any;
    routesChange: any;
    typeChange: any;
    zoomChange: any;
    centerChildren: QueryList<DxiCenterComponent>;
    markersChildren: QueryList<DxiMarkerComponent>;
    routesChildren: QueryList<DxiRouteComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxMapModule {
}