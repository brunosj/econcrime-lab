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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var seo_1 = require("@/components/seo");
var serverSideTranslations_1 = require("next-i18next/serverSideTranslations");
var pageHeaderTitle_1 = require("@/components/layout/pageHeaderTitle");
var pageContentGrid_1 = require("@/components/layout/pageContentGrid");
var layout_1 = require("@/components/layout");
var outreachContent_1 = require("@/components/content/outreachContent");
var newsIndex_1 = require("@/components/content/newsIndex");
var newsListing_1 = require("@/components/content/newsListing");
var NewsPage = function (_a) {
    var pages = _a.pages, news = _a.news;
    var page = pages.filter(function (page) { return page.attributes.slug === 'news'; })[0];
    return (<layout_1.default>
      <seo_1.Seo title={"".concat(page.attributes.title, " |")} description={page.attributes.description}/>
      <section className=''>
        <pageHeaderTitle_1.default textColor='text-morange-700 dark:text-morange-500' svgBackground='textureBgTurquoise' description={page.attributes.description}>
          {page.attributes.title}
        </pageHeaderTitle_1.default>
        <pageContentGrid_1.default>
          <div className='layout col-span-4'>
            <newsIndex_1.default news={news} newsBgColor='dark:bg-mblack-600 bg-mgray-500'/>
          </div>
        </pageContentGrid_1.default>
      </section>
    </layout_1.default>);
};
exports.default = NewsPage;
function getStaticProps(_a) {
    var locale = _a.locale;
    return __awaiter(this, void 0, void 0, function () {
        var pagesResponse, pages, newsResponse, news, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, fetch("".concat(process.env.STRAPI_PUBLIC_API_URL, "pages?locale=").concat(locale, "&populate=*"))];
                case 1:
                    pagesResponse = _d.sent();
                    return [4 /*yield*/, pagesResponse.json()];
                case 2:
                    pages = _d.sent();
                    return [4 /*yield*/, fetch("".concat(process.env.STRAPI_PUBLIC_API_URL, "news-items?locale=").concat(locale, "&populate=*"))];
                case 3:
                    newsResponse = _d.sent();
                    return [4 /*yield*/, newsResponse.json()];
                case 4:
                    news = _d.sent();
                    _c = {};
                    _b = [{ pages: pages.data, news: news.data }];
                    return [4 /*yield*/, (0, serverSideTranslations_1.serverSideTranslations)(locale !== null && locale !== void 0 ? locale : 'en', 'common')];
                case 5: return [2 /*return*/, (_c.props = __assign.apply(void 0, _b.concat([(_d.sent())])),
                        _c.revalidate = 10,
                        _c)];
            }
        });
    });
}
exports.getStaticProps = getStaticProps;
