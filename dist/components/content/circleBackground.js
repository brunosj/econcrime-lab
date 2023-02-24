"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleBackground = void 0;
var react_1 = require("react");
function CircleBackground(_a) {
    var color = _a.color, _b = _a.width, width = _b === void 0 ? 558 : _b, _c = _a.height, height = _c === void 0 ? 558 : _c, props = __rest(_a, ["color", "width", "height"]);
    var id = (0, react_1.useId)();
    return (<svg viewBox="0 0 558 558" width={width} height={height} fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={id} x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse">
          <stop stopColor={color}/>
          <stop offset="1" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke={color}/>
      <path d="M1 279C1 125.465 125.465 1 279 1" stroke={"url(#".concat(id, ")")} strokeLinecap="round"/>
    </svg>);
}
exports.CircleBackground = CircleBackground;
