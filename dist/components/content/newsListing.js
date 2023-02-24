"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var next_i18next_1 = require("next-i18next");
var react_markdown_1 = require("react-markdown");
var image_1 = require("next/image");
var constants_1 = require("../../lib/constants");
var outline_1 = require("@heroicons/react/24/outline");
var NewsListing = function (_a) {
    var news = _a.news;
    var t = (0, next_i18next_1.useTranslation)('common').t;
    var newsSorted = news.sort(function (a, b) {
        return a.attributes.date > b.attributes.date ? -1 : 1;
    });
    return (<div className='borderLight justify-between pb-12 '>
      {newsSorted.map(function (item, i) {
            return (<div className='borderLight  mr-0  flex flex-col border-b pb-12 pt-12 last:mb-0 last:border-b-0 lg:mb-12 lg:mr-24 lg:pt-0' key={i}>
            <div>
              <h1 className=' text-morange-700 accent-morange-500 dark:text-morange-500'>
                {item.attributes.title}
              </h1>
            </div>
            <react_markdown_1.default className='markdown mt-6 '>
              {item.attributes.content}
            </react_markdown_1.default>
            {item.attributes.date && (<div className='mt-6 flex items-center gap-4  text-mgray-700'>
                <span className='mt-2'>
                  <outline_1.CalendarDaysIcon className='h-5 w-5 '/>
                </span>
                <p className='mt-3 font-mono text-sm'>
                  {"".concat(item.attributes.date
                        .slice(-5)
                        .slice(-2)).concat(item.attributes.date.slice(4, 8)).concat(item.attributes.date.slice(0, 4), " ")}
                </p>
              </div>)}
          </div>);
        })}
    </div>);
};
exports.default = NewsListing;
