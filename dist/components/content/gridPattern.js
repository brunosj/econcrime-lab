"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridPattern = void 0;
var react_1 = require("react");
function GridPattern(props) {
    var patternId = (0, react_1.useId)();
    return (<svg aria-hidden='true' className='absolute inset-0 h-full w-full opacity-50'>
      <defs>
        <pattern id={patternId} width='128' height='128' patternUnits='userSpaceOnUse' {...props}>
          <path d='M0 128V.5H128' fill='none' stroke='currentColor'/>
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={"url(#".concat(patternId, ")")}/>
    </svg>);
}
exports.GridPattern = GridPattern;
