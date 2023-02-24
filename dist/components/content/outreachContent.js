"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var link_1 = require("next/link");
var outreachTextColor_1 = require("@/ui/outreachTextColor");
var pageContentSection_1 = require("@/layout/pageContentSection");
var next_i18next_1 = require("next-i18next");
var OutreachContent = function (_a) {
    var outreach = _a.outreach;
    var t = (0, next_i18next_1.useTranslation)().t;
    var outreachTypes = __spreadArray([], new Set(outreach.map(function (item) { return item.attributes.type; })), true);
    var _b = (0, react_1.useState)(outreach), item = _b[0], setItem = _b[1];
    var filterItem = function (filteredType) {
        var newItem = outreach.filter(function (item) {
            return item.attributes.type === filteredType;
        });
        setItem(newItem);
    };
    var scrollTop = function () {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 360, left: 0, behavior: 'smooth' });
        }
    };
    var clickEvent = function (type) {
        filterItem(type);
        scrollTop();
    };
    var initialState = function (outreach) { return (setItem(outreach), scrollTop()); };
    var initialStateMobile = function (outreach) { return setItem(outreach); };
    return (<>
      <article className='col-span-4'>
        <nav className='borderLight  top-12 border-b bg-mgray-300 text-xs font-light dark:bg-mblack-700 lg:sticky lg:text-base '>
          <div className='grid grid-cols-2 flex-wrap justify-between gap-x-12 gap-y-3 py-6 px-6 lg:flex lg:px-24'>
            <div className='flex items-center'>
              <outreachTextColor_1.default types={outreachTypes} type='All items'>
                <input className='h-4 w-4 border-gray-300' onClick={function () { return initialStateMobile(outreach); }} name='outreach type' type='radio'/>
              </outreachTextColor_1.default>
              <label className='ml-3 block'>{t('allItems')}</label>
            </div>
            {outreachTypes.map(function (type, i) {
            return (<div className='flex items-center' key={i}>
                  <outreachTextColor_1.default type={type} types={outreachTypes}>
                    <input className='h-4 w-4 border-gray-300 ' onClick={function () {
                    filterItem(type);
                }} name='outreach type' type='radio' types={outreachTypes}/>
                  </outreachTextColor_1.default>
                  <label htmlFor={i} className='ml-3 block'>
                    {type}
                  </label>
                </div>);
        })}
          </div>
        </nav>
        <pageContentSection_1.default className='py-6 lg:py-0'>
          <div className='grid-cols-2 justify-between lg:grid'>
            {item.map(function (outreach, i) { return (<>
                {outreach.attributes.urlConference && (<link_1.default href={outreach.attributes.urlConference} key={i} rel='noopener noreferrer' target='_blank' className='borderLight group w-full border-b border-r py-12 duration-300 last:border-b-0 hover:bg-mgray-200 hover:dark:bg-mblack-500 '>
                    <div className='borderLight border-b px-6 pb-6 lg:border-none lg:px-24 lg:pb-0'>
                      <outreachTextColor_1.default type={outreach.attributes.type} types={outreachTypes}>
                        <p className='mb-3 font-mono text-base uppercase lg:text-lg'>
                          {outreach.attributes.type}
                        </p>
                      </outreachTextColor_1.default>
                      <h1 className='textHover'>{outreach.attributes.title}</h1>
                      <p className='mt-3 text-sm'>
                        {t('by')} {outreach.attributes.author}
                      </p>
                    </div>
                  </link_1.default>)}
              </>); })}
          </div>
        </pageContentSection_1.default>
      </article>
    </>);
};
exports.default = OutreachContent;
