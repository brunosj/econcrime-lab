"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var image_1 = require("next/image");
var constants_1 = require("src/lib/constants");
var PeopleListing = function (_a) {
    var people = _a.people;
    return (<>
      {people.map(function (people, i) { return (<link_1.default href={"/people/".concat(people.attributes.slug)} className='group flex w-full items-center gap-6 pb-6 lg:w-1/2' key={i}>
          {people.attributes.photo.data && (<div className=' relative h-16 w-16 flex-shrink-0 rounded-full grayscale duration-300 group-hover:grayscale-0 '>
              <image_1.default src={"".concat(constants_1.CMS_URL).concat(people.attributes.photo.data.attributes.url)} alt={"".concat(constants_1.CMS_URL).concat(people.attributes.name)} className='rounded-full  object-cover' fill priority sizes='100vw'/>
            </div>)}
          <span className='textHover block text-sm lg:text-base'>
            {people.attributes.name}
          </span>
        </link_1.default>); })}
    </>);
};
exports.default = PeopleListing;
