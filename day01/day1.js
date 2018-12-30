"use strict";
exports.__esModule = true;
var readFile_1 = require("./readFile");
var currentFrequency = 0;
function oneLine(line) {
    var number = Number(line);
    currentFrequency += number;
}
function onClose() {
    console.log("current frequency ", currentFrequency);
}
new readFile_1.ReadFile().readInputFile(oneLine, onClose);
