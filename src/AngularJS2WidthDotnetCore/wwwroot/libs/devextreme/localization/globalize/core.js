/**
 * DevExtreme (localization/globalize/core.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var Globalize = require("globalize"),
    coreLocalization = require("../core");
if (Globalize && Globalize.load) {
    var likelySubtags = {
        supplemental: {
            version: {
                _cldrVersion: "28",
                _unicodeVersion: "8.0.0",
                _number: "$Revision: 11965 $"
            },
            likelySubtags: {
                en: "en-Latn-US",
                de: "de-Latn-DE",
                ru: "ru-Cyrl-RU",
                ja: "ja-Jpan-JP"
            }
        }
    };
    if (!Globalize.locale()) {
        Globalize.load(likelySubtags);
        Globalize.locale("en")
    }
    coreLocalization.inject({
        locale: function(locale) {
            if (!locale) {
                return Globalize.locale().locale
            }
            Globalize.locale(locale)
        }
    })
}