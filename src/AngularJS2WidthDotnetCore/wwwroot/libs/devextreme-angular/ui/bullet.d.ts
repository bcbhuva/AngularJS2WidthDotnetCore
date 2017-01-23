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
import { ElementRef, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import DxBullet from 'devextreme/viz/bullet';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxBulletComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxBullet;
    elementAttr: any;
    rtlEnabled: any;
    margin: any;
    pathModified: any;
    size: any;
    theme: any;
    tooltip: any;
    color: any;
    endScaleValue: any;
    showTarget: any;
    showZeroLevel: any;
    startScaleValue: any;
    target: any;
    targetColor: any;
    targetWidth: any;
    value: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onTooltipHidden: any;
    onTooltipShown: any;
    elementAttrChange: any;
    rtlEnabledChange: any;
    marginChange: any;
    pathModifiedChange: any;
    sizeChange: any;
    themeChange: any;
    tooltipChange: any;
    colorChange: any;
    endScaleValueChange: any;
    showTargetChange: any;
    showZeroLevelChange: any;
    startScaleValueChange: any;
    targetChange: any;
    targetColorChange: any;
    targetWidthChange: any;
    valueChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxBullet;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxBulletModule {
}