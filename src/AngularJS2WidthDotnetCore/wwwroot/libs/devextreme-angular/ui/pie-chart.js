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
var pie_chart_1 = require('devextreme/viz/pie_chart');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var export_1 = require('./nested/export');
var loading_indicator_1 = require('./nested/loading-indicator');
var font_1 = require('./nested/font');
var margin_1 = require('./nested/margin');
var size_1 = require('./nested/size');
var title_1 = require('./nested/title');
var subtitle_1 = require('./nested/subtitle');
var tooltip_1 = require('./nested/tooltip');
var border_1 = require('./nested/border');
var format_1 = require('./nested/format');
var shadow_1 = require('./nested/shadow');
var argument_format_1 = require('./nested/argument-format');
var adaptive_layout_1 = require('./nested/adaptive-layout');
var animation_1 = require('./nested/animation');
var legend_1 = require('./nested/legend');
var common_series_settings_1 = require('./nested/common-series-settings');
var hover_style_1 = require('./nested/hover-style');
var hatching_1 = require('./nested/hatching');
var label_1 = require('./nested/label');
var connector_1 = require('./nested/connector');
var selection_style_1 = require('./nested/selection-style');
var small_values_grouping_1 = require('./nested/small-values-grouping');
var series_dxi_1 = require('./nested/series-dxi');
var series_dxi_2 = require('./nested/series-dxi');
var DxPieChartComponent = (function (_super) {
    __extends(DxPieChartComponent, _super);
    function DxPieChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { emit: 'elementAttrChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'legendChange' },
            { emit: 'paletteChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'diameterChange' },
            { emit: 'innerRadiusChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'segmentsDirectionChange' },
            { emit: 'seriesChange' },
            { emit: 'startAngleChange' },
            { emit: 'typeChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxPieChartComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "adaptiveLayout", {
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "customizeLabel", {
        get: function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "customizePoint", {
        get: function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "legend", {
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "pointSelectionMode", {
        get: function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "diameter", {
        get: function () {
            return this._getOption('diameter');
        },
        set: function (value) {
            this._setOption('diameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "innerRadius", {
        get: function () {
            return this._getOption('innerRadius');
        },
        set: function (value) {
            this._setOption('innerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "resolveLabelOverlapping", {
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "segmentsDirection", {
        get: function () {
            return this._getOption('segmentsDirection');
        },
        set: function (value) {
            this._setOption('segmentsDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "startAngle", {
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPieChartComponent.prototype._createInstance = function (element, options) {
        return new pie_chart_1.default(element, options);
    };
    DxPieChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPieChartComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('palette', changes);
        this._idh.setup('series', changes);
    };
    DxPieChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
    };
    DxPieChartComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxPieChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-pie-chart',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxPieChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxPieChartComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'adaptiveLayout': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'customizeLabel': [{ type: core_1.Input },],
        'customizePoint': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'pointSelectionMode': [{ type: core_1.Input },],
        'commonSeriesSettings': [{ type: core_1.Input },],
        'diameter': [{ type: core_1.Input },],
        'innerRadius': [{ type: core_1.Input },],
        'resolveLabelOverlapping': [{ type: core_1.Input },],
        'segmentsDirection': [{ type: core_1.Input },],
        'series': [{ type: core_1.Input },],
        'startAngle': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onDone': [{ type: core_1.Output },],
        'onPointClick': [{ type: core_1.Output },],
        'onPointHoverChanged': [{ type: core_1.Output },],
        'onPointSelectionChanged': [{ type: core_1.Output },],
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'onLegendClick': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'adaptiveLayoutChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'customizeLabelChange': [{ type: core_1.Output },],
        'customizePointChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'legendChange': [{ type: core_1.Output },],
        'paletteChange': [{ type: core_1.Output },],
        'pointSelectionModeChange': [{ type: core_1.Output },],
        'commonSeriesSettingsChange': [{ type: core_1.Output },],
        'diameterChange': [{ type: core_1.Output },],
        'innerRadiusChange': [{ type: core_1.Output },],
        'resolveLabelOverlappingChange': [{ type: core_1.Output },],
        'segmentsDirectionChange': [{ type: core_1.Output },],
        'seriesChange': [{ type: core_1.Output },],
        'startAngleChange': [{ type: core_1.Output },],
        'typeChange': [{ type: core_1.Output },],
        'seriesChildren': [{ type: core_1.ContentChildren, args: [series_dxi_2.DxiSeriesComponent,] },],
    };
    return DxPieChartComponent;
}(component_1.DxComponent));
exports.DxPieChartComponent = DxPieChartComponent;
var DxPieChartModule = (function () {
    function DxPieChartModule() {
    }
    DxPieChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        argument_format_1.DxoArgumentFormatModule,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        legend_1.DxoLegendModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        connector_1.DxoConnectorModule,
                        selection_style_1.DxoSelectionStyleModule,
                        small_values_grouping_1.DxoSmallValuesGroupingModule,
                        series_dxi_1.DxiSeriesModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxPieChartComponent
                    ],
                    exports: [
                        DxPieChartComponent,
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        argument_format_1.DxoArgumentFormatModule,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        legend_1.DxoLegendModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        connector_1.DxoConnectorModule,
                        selection_style_1.DxoSelectionStyleModule,
                        small_values_grouping_1.DxoSmallValuesGroupingModule,
                        series_dxi_1.DxiSeriesModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxPieChartModule.ctorParameters = function () { return []; };
    return DxPieChartModule;
}());
exports.DxPieChartModule = DxPieChartModule;
//# sourceMappingURL=pie-chart.js.map