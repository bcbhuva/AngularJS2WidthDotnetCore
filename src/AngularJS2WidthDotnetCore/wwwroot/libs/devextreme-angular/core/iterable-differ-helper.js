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
var core_1 = require('@angular/core');
var IterableDifferHelper = (function () {
    function IterableDifferHelper(_differs, _cdr) {
        this._differs = _differs;
        this._cdr = _cdr;
        this._propertyDiffers = {};
    }
    IterableDifferHelper.prototype.setHost = function (host) {
        this._host = host;
    };
    IterableDifferHelper.prototype.setup = function (prop, changes) {
        if (prop in changes) {
            var value = changes[prop].currentValue;
            if (value && Array.isArray(value)) {
                if (!this._propertyDiffers[prop]) {
                    try {
                        this._propertyDiffers[prop] = this._differs.find(value).create(this._cdr, null);
                    }
                    catch (e) { }
                }
            }
            else {
                delete this._propertyDiffers[prop];
            }
        }
    };
    IterableDifferHelper.prototype.doCheck = function (prop) {
        if (this._propertyDiffers[prop]) {
            var changes = this._propertyDiffers[prop].diff(this._host[prop]);
            if (changes && this._host.instance) {
                this._host.instance.option(prop, this._host[prop]);
            }
        }
    };
    IterableDifferHelper.decorators = [
        { type: core_1.Injectable },
    ];
    IterableDifferHelper.ctorParameters = function () { return [
        { type: core_1.IterableDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IterableDifferHelper;
}());
exports.IterableDifferHelper = IterableDifferHelper;
//# sourceMappingURL=iterable-differ-helper.js.map