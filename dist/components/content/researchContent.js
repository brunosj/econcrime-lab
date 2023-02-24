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
var pageNavigationSection_1 = require("@/layout/pageNavigationSection");
var pageContentSection_1 = require("@/layout/pageContentSection");
var researchListing_1 = require("./researchListing");
var ResearchContent = function (_a) {
    var researchProjects = _a.researchProjects;
    var t = (0, next_i18next_1.useTranslation)().t;
    var menuItems = __spreadArray([], new Set(researchProjects.map(function (project) { return project.attributes.type; })), true);
    var _b = (0, react_1.useState)(researchProjects), item = _b[0], setItem = _b[1];
    var filterItem = function (filteredType) {
        var newItem = researchProjects.filter(function (project) {
            return project.attributes.type === filteredType;
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
    var initialState = function (researchProjects) { return (setItem(researchProjects), scrollTop()); };
    return (<>
      <pageNavigationSection_1.default pageNavigationTitle={t('projectTypes')}>
        <div className=''>
          <div>
            <button className='textHover py-3' aria-label='all items' onClick={function () { return initialState(researchProjects); }}>
              {t('allProjects')}
            </button>
          </div>
          {menuItems.map(function (type, i) {
            return (<button className='textHover py-3 active:underline' aria-label='choose category' onClick={function () {
                    clickEvent(type);
                }} key={i}>
                <div type={type} types={menuItems} className=''>
                  {type}
                </div>
              </button>);
        })}
        </div>
      </pageNavigationSection_1.default>
      <pageContentSection_1.default className='col-span-4 lg:col-span-3 '>
        <researchListing_1.default researchProjects={item}/>
      </pageContentSection_1.default>
    </>);
};
exports.default = ResearchContent;
