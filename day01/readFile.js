"use strict";
exports.__esModule = true;
var fs = require("fs");
var readline = require("readline");
var ReadFile = /** @class */ (function () {
    function ReadFile() {
    }
    ReadFile.prototype.readInputFile = function (eachLine, onClose) {
        var reader = readline.createInterface({
            input: fs.createReadStream('./input')
        });
        reader.on('line', eachLine);
        reader.on('close', onClose);
    };
    return ReadFile;
}());
exports.ReadFile = ReadFile;
