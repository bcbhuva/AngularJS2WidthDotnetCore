/**
 * DevExtreme (viz/tree_map/tiling.slice_and_dice.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var tiling = require("./tiling");

function sliceAndDice(data) {
    var items = data.items,
        sidesData = tiling.buildSidesData(data.rect, data.directions, data.isRotated ? 1 : 0);
    tiling.calculateRectangles(items, 0, data.rect, sidesData, {
        sum: data.sum,
        count: items.length,
        side: sidesData.variedSide
    })
}
tiling.addAlgorithm("sliceanddice", sliceAndDice);
module.exports = sliceAndDice;