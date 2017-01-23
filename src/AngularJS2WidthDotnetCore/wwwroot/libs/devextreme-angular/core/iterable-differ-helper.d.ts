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
import { SimpleChanges, IterableDiffers, ChangeDetectorRef } from '@angular/core';
import { DxComponent } from './component';
export declare class IterableDifferHelper {
    private _differs;
    private _cdr;
    private _host;
    private _propertyDiffers;
    constructor(_differs: IterableDiffers, _cdr: ChangeDetectorRef);
    setHost(host: DxComponent): void;
    setup(prop: string, changes: SimpleChanges): void;
    doCheck(prop: string): void;
}
