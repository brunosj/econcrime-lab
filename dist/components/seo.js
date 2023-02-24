"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seo = void 0;
var head_1 = require("next/head");
var siteMetadata_1 = require("@/utils/siteMetadata");
var Seo = function (_a) {
    var title = _a.title, description = _a.description;
    return (<head_1.default>
      <title>
        {title} {siteMetadata_1.default.title}
      </title>
      <link rel='icon' href='/favicon.ico'/>
      <meta name='description' content={description}/>
      <meta name='image' content={siteMetadata_1.default.image}/>
      <meta property='og:title' content={siteMetadata_1.default.title}/>
      <meta property='og:description' content={siteMetadata_1.default.description}/>
      <meta property='og:image' content={siteMetadata_1.default.image}/>
      <meta property='og:type' content='website'/>
      <meta name='twitter:card' content='summary_large_image'/>
      <meta name='twitter:title' content={siteMetadata_1.default.title}/>
      <meta name='twitter:url' content={siteMetadata_1.default.url}/>
      <meta name='twitter:description' content={siteMetadata_1.default.description}/>
      <meta name='twitter:image' content={siteMetadata_1.default.image}/>
      <meta name='twitter:creator' content={siteMetadata_1.default.twitter}/>
    </head_1.default>);
};
exports.Seo = Seo;
