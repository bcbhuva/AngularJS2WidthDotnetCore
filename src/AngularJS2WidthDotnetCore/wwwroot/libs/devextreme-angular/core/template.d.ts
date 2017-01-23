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
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { DxTemplateHost } from './template-host';
export declare const DX_TEMPLATE_WRAPPER_CLASS: string;
export declare class RenderData {
    model: any;
    itemIndex: number;
    container: any;
}
export declare class DxTemplateDirective {
    private templateRef;
    private viewContainerRef;
    dxTemplateOf: any;
    name: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, templateHost: DxTemplateHost);
    render(renderData: RenderData): any;
}
export declare class DxTemplateModule {
}
