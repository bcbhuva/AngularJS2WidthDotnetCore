/**
 * DevExtreme (bundles/modules/data.odata.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
require("./data");
DevExpress.data.ODataStore = require("../../data/odata/store");
DevExpress.data.ODataContext = require("../../data/odata/context");
DevExpress.data.utils = DevExpress.data.utils || {};
DevExpress.data.utils.odata = {};
DevExpress.data.utils.odata.keyConverters = require("../../data/odata/utils").keyConverters;
DevExpress.data.EdmLiteral = require("../../data/odata/utils").EdmLiteral;
var ODataUtilsModule = require("../../data/odata/utils");
DevExpress.data.utils.odata.serializePropName = ODataUtilsModule.serializePropName;
DevExpress.data.utils.odata.serializeValue = ODataUtilsModule.serializeValue;
DevExpress.data.utils.odata.serializeKey = ODataUtilsModule.serializeKey;
DevExpress.data.utils.odata.sendRequest = ODataUtilsModule.sendRequest;
DevExpress.data.queryAdapters = DevExpress.data.queryAdapters || {};
DevExpress.data.queryAdapters.odata = require("../../data/odata/query_adapter").odata;