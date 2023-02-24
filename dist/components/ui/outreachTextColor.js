"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var OutreachTextColor = function (_a) {
    var types = _a.types, type = _a.type, className = _a.className, children = _a.children;
    var textColor = '';
    if (type === types[0]) {
        textColor =
            'text-mturquoise-700 dark:text-mturquoise-500 accent-mturquoise-500';
    }
    else if (type === types[1]) {
        textColor = 'text-mpurple-700 dark:text-mpurple-500 accent-mpurple-500';
    }
    else if (type === types[2]) {
        textColor = 'text-mblue-700 dark:text-mblue-500 accent-mblue-500';
    }
    else if (type === types[3]) {
        textColor = 'text-morange-700 dark:text-morange-500 accent-morange-500';
    }
    else {
        textColor = 'dark:text-mgray-500 text-mblack-500 accent-mgray-500';
    }
    return <div className={(0, clsx_1.clsx)(textColor, className)}>{children}</div>;
};
exports.default = OutreachTextColor;
