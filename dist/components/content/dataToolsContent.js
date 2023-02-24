"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var dataToolsCategories_1 = require("./dataToolsCategories");
var react_1 = require("react");
var next_i18next_1 = require("next-i18next");
var DataToolsContent = function (_a) {
    var data = _a.data;
    var t = (0, next_i18next_1.useTranslation)().t;
    var resourcesByCategory = data
        ? data.reduce(function (group, resource) {
            var _a;
            var category = resource.attributes.data_tool_category.data.attributes.title;
            var description = resource.attributes.data_tool_category.data.attributes.description;
            group[category] = (_a = group[category]) !== null && _a !== void 0 ? _a : [];
            group[category].push(__assign(__assign({}, resource), { description: description }));
            return group;
        }, {})
        : {};
    var resourcesArray = resourcesByCategory
        ? Object.entries(resourcesByCategory)
        : [];
    var groupedResources = resourcesArray.filter(function (resource) {
        return resource[0].toLowerCase() !== 'others' &&
            resource[0].toLowerCase() !== 'autres';
    });
    var otherResources = resourcesArray.filter(function (resource) {
        return resource[0].toLowerCase() === 'others' ||
            resource[0].toLowerCase() === 'autres';
    });
    var resourcesTypes = __spreadArray([], new Set(groupedResources.map(function (item) { return item[0]; })), true);
    var _b = (0, react_1.useState)(groupedResources), item = _b[0], setItem = _b[1];
    var filterItem = function (filteredType) {
        var newItem = groupedResources.filter(function (item) {
            return item[0] === filteredType;
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
    var initialState = function (resourcesArray) { return (setItem(resourcesArray), scrollTop()); };
    var initialStateMobile = function (resourcesArray) { return setItem(resourcesArray); };
    return (<>
      <section className='borderLight w-full table-auto border-t pb-12'>
        <nav className='borderLight hidden border-b bg-mgray-300 text-xs font-light dark:bg-mblack-700 lg:block lg:text-base'>
          <div className='grid grid-cols-2 gap-x-12 gap-y-3 py-6 px-6 lg:px-24'>
            <div className='flex items-center'>
              <div className='accent-myellow-500'>
                <input className='h-4 w-4 border-gray-300 ' onClick={function () { return initialStateMobile(resourcesArray); }} name='outreach type' type='radio'/>
              </div>
              <label className='ml-3 block'>{t('allItems')}</label>
            </div>
            {resourcesTypes.map(function (type, i) {
            return (<div className='flex items-center' key={i}>
                  <div className='accent-myellow-500'>
                    <input className='h-4 w-4 border-gray-300 ' onClick={function () {
                    filterItem(type);
                }} name='outreach type' type='radio'/>
                  </div>
                  <label htmlFor={i} className='ml-3 block'>
                    {type}
                  </label>
                </div>);
        })}
            <div className='flex items-center'>
              <div className='accent-myellow-500'>
                <input className='h-4 w-4 border-gray-300 ' onClick={function () { return initialStateMobile(otherResources); }} name='outreach type' type='radio'/>
              </div>
              <label className='ml-3 block'>{otherResources.flat()[0]}</label>
            </div>
          </div>
        </nav>
        <div>
          <dataToolsCategories_1.default data={item}/>
          {/* <DataToolsCategories data={otherResources} /> */}
        </div>
      </section>
    </>);
};
exports.default = DataToolsContent;
