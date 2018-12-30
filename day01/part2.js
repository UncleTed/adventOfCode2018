"use strict";
exports.__esModule = true;
var readFile_1 = require("./readFile");
var Twice = /** @class */ (function () {
    function Twice() {
        this.frequency = {};
    }
    return Twice;
}());
var frequencies = new Array();
function onLine(line) {
    var number = Number(line);
    frequencies.push(number);
}
function onClose() {
    var found = false;
    var twice = new Twice();
    var currentFrequency = 0;
    while (!found) {
        for (var _i = 0, frequencies_1 = frequencies; _i < frequencies_1.length; _i++) {
            var freq = frequencies_1[_i];
            currentFrequency += freq;
            if (twice[currentFrequency]) {
                console.log('found it: ', currentFrequency);
                found = true;
                break;
            }
            else {
                twice[currentFrequency] = true;
            }
        }
    }
}
new readFile_1.ReadFile().readInputFile(onLine, onClose);
