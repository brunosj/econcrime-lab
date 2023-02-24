"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var header_1 = require("./header");
var image_1 = require("next/image");
var footer_1 = require("./footer");
function Layout(_a) {
    var children = _a.children;
    return (<>
      <header_1.default />
      <main>{children}</main>
      <footer_1.default />
    </>);
}
exports.default = Layout;
