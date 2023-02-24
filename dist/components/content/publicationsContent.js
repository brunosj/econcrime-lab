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
var next_i18next_1 = require("next-i18next");
var publicationTag_1 = require("@/ui/publicationTag");
var publicationTextColor_1 = require("@/ui/publicationTextColor");
var outline_1 = require("@heroicons/react/24/outline");
var publicationDetails_1 = require("./publicationDetails");
var buttonIcon_1 = require("@/ui/buttonIcon");
var pageNavigationSection_1 = require("@/layout/pageNavigationSection");
var pageContentSection_1 = require("@/layout/pageContentSection");
var PublicationsContent = function (_a) {
    var publications = _a.publications;
    var t = (0, next_i18next_1.useTranslation)().t;
    var menuItems = __spreadArray([], new Set(publications.map(function (publication) { return publication.attributes.type; })), true);
    var _b = (0, react_1.useState)(publications), item = _b[0], setItem = _b[1];
    var filterItem = function (filteredType) {
        var newItem = publications.filter(function (publication) {
            return publication.attributes.type === filteredType;
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
    var initialState = function (publications) { return (setItem(publications), scrollTop()); };
    var initialStateMobile = function (publications) { return setItem(publications); };
    return (<>
      {/* desktop filters  */}
      <pageNavigationSection_1.default pageNavigationTitle={t('publicationTypes')}>
        <div className='flex-col text-base font-medium  lg:flex lg:text-lg'>
          <button className='py-3' onClick={function () { return initialState(publications); }} aria-label='all items'>
            <publicationTag_1.default className='flex-1' types={menuItems} type='All publications'>
              {t('allPublications')}
            </publicationTag_1.default>
          </button>
          {menuItems.map(function (type, i) {
            return (<button className='py-3' aria-label='choose category' onClick={function () {
                    clickEvent(type);
                }} key={i}>
                <publicationTag_1.default type={type} types={menuItems} className='flex-1'>
                  {type}
                </publicationTag_1.default>
              </button>);
        })}
        </div>
      </pageNavigationSection_1.default>

      {/* mobile filters */}
      <nav className='borderLight block border-b bg-mgray-300 text-xs font-light dark:bg-mblack-700 lg:hidden '>
        <div className='grid grid-cols-2 gap-x-6 gap-y-2 py-6 px-6 lg:px-24'>
          <div className='flex items-center'>
            <publicationTextColor_1.default types={menuItems} type='All publications'>
              <input className='h-4 w-4 border-gray-300 ' onClick={function () { return initialStateMobile(publications); }} name='outreach type' type='radio'/>
            </publicationTextColor_1.default>
            <label className='ml-3 block'>{t('allPublications')} </label>
          </div>
          {menuItems.map(function (type, i) {
            return (<div className='flex items-center' key={i}>
                <publicationTextColor_1.default type={type} types={menuItems}>
                  <input className='h-4 w-4 border-gray-300 ' onClick={function () {
                    filterItem(type);
                }} name='outreach type' type='radio' types={menuItems}/>
                </publicationTextColor_1.default>
                <label htmlFor={i} className='ml-3 block'>
                  {type}
                </label>
              </div>);
        })}
        </div>
      </nav>

      <pageContentSection_1.default className='col-span-4 lg:col-span-3'>
        {item.map(function (publication, i) { return (<div key={i} id={publication.attributes.slug} className='borderLight border-b py-12'>
            <div className='px-6 lg:px-24'>
              <div className=''>
                <publicationTextColor_1.default type={publication.attributes.type} types={menuItems}>
                  <h1>{publication.attributes.title}</h1>
                </publicationTextColor_1.default>
                <div className='mt-6 font-mono text-sm'>
                  <publicationDetails_1.default type={publication.attributes.type} label='Type' value={publication.attributes.type} types={menuItems}/>
                  <publicationDetails_1.default type={publication.attributes.type} label={t('authors')} value={publication.attributes.author} types={menuItems}/>
                  <publicationDetails_1.default type={publication.attributes.type} label='Journal' value={publication.attributes.journal} types={menuItems}/>
                  <publicationDetails_1.default type={publication.attributes.type} label={t('year')} value={publication.attributes.year.slice(0, 4)} types={menuItems}/>
                </div>
              </div>
              <p className='mt-12 mb-6 text-sm lg:text-base'>
                {publication.attributes.abstract}
              </p>

              <buttonIcon_1.default icon={outline_1.DocumentTextIcon} label={t('read')} type={publication.attributes.type} url={publication.attributes.url} tagColor={publication.attributes.type} types={menuItems}/>
            </div>
          </div>); })}
      </pageContentSection_1.default>
    </>);
};
exports.default = PublicationsContent;
