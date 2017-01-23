/**
* DevExtreme (viz/pie_chart.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxPieChart(): JQuery;
    dxPieChart(options: "instance"): DevExpress.viz.dxPieChart;
    dxPieChart(options: string): any;
    dxPieChart(options: string, ...params: any[]): any;
    dxPieChart(options: DevExpress.viz.charts.dxPieChartOptions): JQuery;
}
}
export default DevExpress.viz.dxPieChart;