"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var next_i18next_1 = require("next-i18next");
var HomeResearch = function (_a) {
    var research = _a.research;
    var t = (0, next_i18next_1.useTranslation)('common').t;
    return (<section className='borderLight border-b'>
      <div className='layout py-16'>
        <h2 className='text-3xl underline'>{t('research')}</h2>
        <div className='mt-16 grid grid-cols-1 gap-12 lg:grid-cols-4'>
          {research.map(function (item, i) {
            return (<link_1.default key={i} className='borderLight grid border p-8 duration-300 hover:bg-mgray-200 hover:dark:bg-mblack-500' href={"/research#".concat(item.attributes.slug)}>
                <p className=''>{i + 1}</p>
                <h1 className='mt-6 text-mpurple-700 accent-mpurple-500 dark:text-mpurple-500'>
                  {item.attributes.title}
                </h1>
              </link_1.default>);
        })}
        </div>
      </div>
    </section>);
};
exports.default = HomeResearch;
