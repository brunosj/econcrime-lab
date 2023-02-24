"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PageContentGrid = function (_a) {
    var children = _a.children;
    return (<section className='borderLight border-t'>
      <div className='grid-cols-4 lg:grid'>{children}</div>
    </section>);
};
exports.default = PageContentGrid;
