"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var publicationTextColor_1 = require("../ui/publicationTextColor");
var PublicationDetails = function (_a) {
    var type = _a.type, label = _a.label, value = _a.value, types = _a.types;
    return (<div className='mt-1 grid-cols-7 lg:grid'>
      <publicationTextColor_1.default type={type} types={types} className='col-span-1'>
        {label}
      </publicationTextColor_1.default>
      <p className='col-span-6'>{value}</p>
    </div>);
};
exports.default = PublicationDetails;
