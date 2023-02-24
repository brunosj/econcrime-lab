"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var next_i18next_1 = require("next-i18next");
var react_markdown_1 = require("react-markdown");
var newsListing_1 = require("./newsListing");
var newsIndex_1 = require("./newsIndex");
var link_1 = require("next/link");
var HomeNews = function (_a) {
    var news = _a.news;
    var t = (0, next_i18next_1.useTranslation)('common').t;
    return (<section className='borderLight relative grid-cols-2 px-6 pt-12 lg:grid lg:px-0'>
      <div className='z-50 self-start lg:sticky lg:top-24 lg:px-24'>
        <link_1.default href='/news'>
          <h2 className='textHover text-2xl underline lg:text-3xl'>
            {t('news')}
          </h2>
        </link_1.default>
      </div>
      <newsListing_1.default news={news}/>
    </section>);
};
exports.default = HomeNews;
