"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var PageNavigationTitle = function (_a) {
    var title = _a.title, textColor = _a.textColor;
    return (<h2 className={(0, clsx_1.clsx)('mb-4 mt-0 text-lg underline underline-offset-8 lg:text-xl', textColor)}>
      {title}
    </h2>);
};
exports.default = PageNavigationTitle;
