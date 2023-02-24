"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var outline_1 = require("@heroicons/react/24/outline");
var link_1 = require("next/link");
var PublicationListing = function (_a) {
    var publications = _a.publications;
    return (<>
      {publications.map(function (publication, i) { return (<link_1.default key={i} className='textHover group mb-6 flex items-center' rel='noopener noreferrer' target='_blank' href={publication.attributes.url}>
          <outline_1.DocumentTextIcon className='h-8 w-8 flex-shrink-0 lg:h-6 lg:w-6'/>
          <p className='ml-3 text-sm lg:text-base'>
            {publication.attributes.title}
          </p>
        </link_1.default>); })}
    </>);
};
exports.default = PublicationListing;
