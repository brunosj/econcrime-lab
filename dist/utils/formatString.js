"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatString = void 0;
var formatString = function (string) {
    var firstLetter = string.charAt(0).toUpperCase();
    var remaining = string.slice(1).split('_').join(' ');
    return firstLetter + remaining;
};
exports.formatString = formatString;
