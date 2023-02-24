"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var next_i18next_1 = require("next-i18next");
var DataToolsCategories = function (_a) {
    var data = _a.data;
    var t = (0, next_i18next_1.useTranslation)().t;
    return (<>
      {data.map(function (item, i) {
            var category = item[0];
            var description = item[1][0].description;
            var items = item.slice(1).flat();
            return (<div key={i} className='' id={category}>
            <div className='bg-myellow-700 py-2 text-mgray-200 dark:bg-myellow-500 dark:text-mblack-500'>
              <h2 className='layout font-mono font-bold uppercase'>
                {category}
              </h2>
            </div>
            <div className='borderLight border-b bg-mgray-500 py-2 dark:bg-mblack-500'>
              <h4 className='layout mt-2 font-mono font-light italic'>
                {description}
              </h4>
            </div>
            <div className='layout borderLight hidden grid-cols-6 gap-12 border-b py-3  font-semibold text-myellow-700 dark:text-myellow-500 lg:grid'>
              <span className='col-span-3 font-mono'>{t('name')}</span>
              <span className='col-span-3'>{t('description')}</span>
            </div>
            {items.map(function (item, i) { return (<link_1.default className='layout borderLight textHover divide group flex grid-cols-6 flex-col gap-6 border-b py-3 duration-300  hover:bg-mgray-200 hover:dark:bg-mblack-500 lg:grid lg:items-center lg:gap-12' href={item.attributes.url} rel='noopener noreferrer' target='_blank' key={i}>
                <p className='lg::text-mblack-500 col-span-3 font-mono text-lg text-myellow-700 duration-300 group-hover:text-myellow-700 dark:text-myellow-500 dark:group-hover:text-myellow-500 lg:text-mblack-500 lg:dark:text-mgray-500 '>
                  {item.attributes.title}
                </p>
                <p className='col-span-3 text-sm lg:text-base'>
                  {item.attributes.description}
                </p>
                {/* <span className='hidden lg:inline'>
                          {formatString(item.attributes.type)}
                        </span> */}
              </link_1.default>); })}
          </div>);
        })}
    </>);
};
exports.default = DataToolsCategories;
