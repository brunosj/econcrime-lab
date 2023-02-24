"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var link_1 = require("next/link");
var next_i18next_1 = require("next-i18next");
var react_markdown_1 = require("react-markdown");
var pageNavigationSection_1 = require("../layout/pageNavigationSection");
var pageContentSection_1 = require("../layout/pageContentSection");
var pageContentGrid_1 = require("../layout/pageContentGrid");
var BlogContent = function (_a) {
    var content = _a.content;
    var t = (0, next_i18next_1.useTranslation)().t;
    return (<>
      <pageNavigationSection_1.default>
        <div className='font-mono'>
          <p>
            {t('publishedOn')}: {content.attributes.date}
          </p>
          <p>
            {t('writtenBy')}: {content.attributes.author}
          </p>
          <p>Tags:</p>
          <span>{content.attributes.tag1}</span>
          <span>{content.attributes.tag2}</span>
        </div>
      </pageNavigationSection_1.default>
      <pageContentSection_1.default className='col-span-3 px-6 py-12 lg:px-24'>
        <article className='markdown'>
          <react_markdown_1.default>{content.attributes.content}</react_markdown_1.default>
        </article>
      </pageContentSection_1.default>
    </>);
};
exports.default = BlogContent;
