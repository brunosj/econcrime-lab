"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SectionFadeIn = function (_a) {
    var children = _a.children, inView = _a.inView;
    return (<section className={"relative ".concat(inView
            ? 'translate-y-0 transform opacity-100'
            : 'translate-y-20 transform opacity-0 ', "    transition-all  duration-700")}>
      {children}
    </section>);
};
exports.default = SectionFadeIn;
