"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var PageContentSection = function (_a) {
    var children = _a.children, id = _a.id, className = _a.className;
    return (<section className={(0, clsx_1.clsx)('', className)} id={id}>
      {children}
    </section>);
};
exports.default = PageContentSection;
