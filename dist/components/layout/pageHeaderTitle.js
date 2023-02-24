"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_intersection_observer_1 = require("react-intersection-observer");
var PageHeaderTitle = function (_a) {
    var svgBackground = _a.svgBackground, textColor = _a.textColor, children = _a.children, className = _a.className, description = _a.description;
    var _b = (0, react_intersection_observer_1.useInView)({
        threshold: 0,
        triggerOnce: true,
    }), ref = _b[0], inView = _b[1];
    return (<section className={(0, clsx_1.clsx)('py-12 lg:py-36', svgBackground)} ref={ref} inView={inView}>
      <div className={(0, clsx_1.clsx)('layout text-4xl font-semibold lg:text-7xl', textColor, className)}>
        {children}
      </div>
      <div className='layout mt-3 text-lg lg:mt-6  lg:text-2xl'>
        {description}
      </div>
    </section>);
};
exports.default = PageHeaderTitle;
