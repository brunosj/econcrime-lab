"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var publicationTag_1 = require("./publicationTag");
var link_1 = require("next/link");
var ButtonIcon = function (_a) {
    var types = _a.types, type = _a.type, url = _a.url, label = _a.label, icon = _a.icon, tagColor = _a.tagColor;
    var Icon = function (_a) {
        var label = _a.label, Icon = _a.icon;
        return (<div className='flex items-center '>
        <Icon className='h-6 w-6 flex-shrink-0'/>
        <div className='pl-2'>{label}</div>
      </div>);
    };
    return (<publicationTag_1.default type={type} types={types} className='group mt-2 flex '>
      <link_1.default href={url} rel='noopener noreferrer' target='_blank' className={tagColor}>
        <Icon icon={icon} label={label}/>
      </link_1.default>
    </publicationTag_1.default>);
};
exports.default = ButtonIcon;
