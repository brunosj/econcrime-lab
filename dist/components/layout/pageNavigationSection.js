"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var pageNavigationTitle_1 = require("./pageNavigationTitle");
var PageNavigationSection = function (_a) {
    var className = _a.className, children = _a.children, pageNavigationTitle = _a.pageNavigationTitle;
    return (<section className={(0, clsx_1.clsx)('borderLight over sticky top-16 z-0 hidden h-screen self-start overflow-auto  border-r lg:block', className)}>
      <div className='m-auto mt-12 px-6 lg:px-24 '>
        <pageNavigationTitle_1.default title={pageNavigationTitle}/>
        {children}
      </div>
    </section>);
};
exports.default = PageNavigationSection;
