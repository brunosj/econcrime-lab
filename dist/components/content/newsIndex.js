"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var next_i18next_1 = require("next-i18next");
var react_markdown_1 = require("react-markdown");
var outline_1 = require("@heroicons/react/24/outline");
var clsx_1 = require("clsx");
var NewsIndex = function (_a) {
    var news = _a.news, newsBgColor = _a.newsBgColor;
    var t = (0, next_i18next_1.useTranslation)('common').t;
    var newsSorted = news.sort(function (a, b) {
        return a.attributes.date > b.attributes.date ? -1 : 1;
    });
    return (<div className='borderLight flex flex-col gap-12 py-12'>
      {newsSorted.map(function (item, i) {
            return (<div key={i} className={(0, clsx_1.default)('p-6 md:grid lg:p-12', newsBgColor)}>
            <div className='flex flex-col justify-center'>
              <h1 className=' text-morange-700 accent-morange-500 dark:text-morange-500'>
                {item.attributes.title}
              </h1>

              <react_markdown_1.default className='markdown mt-6 '>
                {item.attributes.content}
              </react_markdown_1.default>
              {item.attributes.date && (<div className='mt-6 flex items-center gap-4  text-mgray-800'>
                  <span className='mt-2'>
                    <outline_1.CalendarDaysIcon className='h-5 w-5 '/>
                  </span>
                  <p className='mt-3 font-mono text-sm'>
                    {"".concat(item.attributes.date
                        .slice(-5)
                        .slice(-2)).concat(item.attributes.date.slice(4, 8)).concat(item.attributes.date.slice(0, 4), " ")}
                  </p>
                </div>)}
            </div>
          </div>);
        })}
    </div>);
};
exports.default = NewsIndex;
