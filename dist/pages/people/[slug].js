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
exports.getStaticPaths = exports.getStaticProps = void 0;
var serverSideTranslations_1 = require("next-i18next/serverSideTranslations");
var pageHeaderTitle_1 = require("@/components/layout/pageHeaderTitle");
var pageContentGrid_1 = require("@/components/layout/pageContentGrid");
var layout_1 = require("@/components/layout");
var next_i18next_1 = require("next-i18next");
var router_1 = require("next/router");
var image_1 = require("next/image");
var constants_1 = require("../../lib/constants");
var link_1 = require("next/link");
var publicationListing_1 = require("@/components/content/publicationListing");
var seo_1 = require("@/components/seo");
var Person = function (_a) {
    var content = _a.content, otherLocaleContent = _a.otherLocaleContent, researchAll = _a.researchAll, publicationsAll = _a.publicationsAll;
    var t = (0, next_i18next_1.useTranslation)().t;
    var router = (0, router_1.useRouter)();
    var locale = router.locale;
    var personSlug = content.attributes.slug;
    var currentContent = locale === 'en' ? content : otherLocaleContent;
    var personResearchLocale = researchAll
        .filter(function (item) {
        return item.attributes.people_items.data.some(function (person) {
            return person.attributes.slug.includes(personSlug);
        });
    })
        .filter(function (item) { return item.attributes.locale === locale; });
    var personPublicationLocale = publicationsAll
        .filter(function (item) {
        return item.attributes.people.data.some(function (person) {
            return person.attributes.slug.includes(personSlug);
        });
    })
        .filter(function (item) { return item.attributes.locale === locale; });
    return (<layout_1.default>
      <seo_1.Seo title={"".concat(currentContent.attributes.name, " |")}/>
      <section className=''>
        <pageHeaderTitle_1.default textColor='text-mpurple-700 dark:text-mpurple-500' svgBackground='textureBgTurquoise'>
          {currentContent.attributes.name}
        </pageHeaderTitle_1.default>
        <pageContentGrid_1.default>
          <div className='col-span-4'>
            <div className='flex w-full flex-col  py-6 pl-6  lg:py-12  lg:pl-24 lg:pr-12'>
              <div className='flex flex-col gap-12 lg:flex-row'>
                <div className='order-last col-span-7 mt-6 pr-6 lg:order-first lg:col-span-5'>
                  <div className='grid grid-cols-7 font-mono text-base'>
                    {/* Relation row */}
                    <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                      {t('role')}
                    </span>
                    <span className='col-span-7 ml-0 mb-6 lg:col-span-5 lg:mb-3 lg:ml-3'>
                      {currentContent.attributes.type.slice(3)}
                    </span>

                    {/* description row */}
                    <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                      {t('description')}
                    </span>
                    <span className='col-span-7 mb-6 ml-0 lg:col-span-4 lg:mb-3 lg:ml-3 lg:pt-6'>
                      {currentContent.attributes.projectDescription}
                    </span>

                    {/* tags row */}
                    {currentContent.attributes.researchInterests.length >=
            1 && (<>
                        <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                          {t('focus')}
                        </span>
                        <div className='col-span-7 mb-6 ml-0 lg:col-span-4 lg:mb-3 lg:ml-3 lg:pt-6'>
                          <div>
                            {currentContent.attributes.researchInterests.map(function (interest, i) { return (<span key={i} className='mr-12 rounded-xl border py-1 px-2  last:mr-0 '>
                                  {interest.tag}
                                </span>); })}
                          </div>
                        </div>
                      </>)}
                    {/* project row */}
                    {personResearchLocale.length >= 1 && (<>
                        <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                          {t('research')}
                        </span>
                        <div className='col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3 lg:pt-6'>
                          <div className='flex flex-col'>
                            {personResearchLocale.map(function (project, i) { return (<link_1.default href={"/research#".concat(project.attributes.slug)} key={i} className=' textHover mb-2 last:mb-0'>
                                {project.attributes.title}
                              </link_1.default>); })}
                          </div>
                        </div>
                      </>)}
                    {/* publications row */}
                    {personPublicationLocale.length >= 1 && (<>
                        <span className='col-span-7  mt-3 pb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                          {t('researchArticles')}
                        </span>
                        <div className='col-span-7  mt-3 mb-3 ml-0 lg:col-span-5 lg:ml-3 lg:pt-6'>
                          <publicationListing_1.default publications={personPublicationLocale}/>
                        </div>
                      </>)}
                  </div>
                </div>
                <div className='order-first col-span-2 mt-6 pr-6 lg:order-last lg:ml-auto lg:pr-12'>
                  {currentContent.attributes.photo.data && (<div className='relative h-32 w-32 rounded-full  duration-300 lg:h-48 lg:w-48'>
                      <image_1.default src={"".concat(constants_1.CMS_URL).concat(currentContent.attributes.photo.data.attributes.url)} srcSet={"\n                                  ".concat(constants_1.CMS_URL).concat(currentContent.attributes.photo.data.attributes.url, "?w=400 400w,\n                                  ").concat(constants_1.CMS_URL).concat(currentContent.attributes.photo.data.attributes.url, "?w=800 800w,\n                                  ").concat(constants_1.CMS_URL).concat(currentContent.attributes.photo.data.attributes.url, "?w=1200 1200w,\n                                  ").concat(constants_1.CMS_URL).concat(currentContent.attributes.photo.data.attributes.url, "?w=1600 1600w\n                                ")} alt={"".concat(constants_1.CMS_URL).concat(currentContent.attributes.photo.data.attributes.url)} className='rounded-full  object-cover' fill priority/>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </pageContentGrid_1.default>
      </section>
    </layout_1.default>);
};
exports.default = Person;
function getStaticProps(_a) {
    var params = _a.params, locale = _a.locale;
    return __awaiter(this, void 0, void 0, function () {
        var slug, initialRes, initial, currentLocaleEntry, otherLocaleEntry, researchRes, researchAll, publicationsRes, publicationsAll, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    slug = params.slug;
                    return [4 /*yield*/, fetch("".concat(process.env.STRAPI_PUBLIC_API_URL, "student-items?locale=all&populate=*"))];
                case 1:
                    initialRes = _d.sent();
                    return [4 /*yield*/, initialRes.json()];
                case 2:
                    initial = _d.sent();
                    currentLocaleEntry = initial.data.find(function (entry) {
                        return entry.attributes.slug === slug && entry.attributes.locale === 'en';
                    });
                    otherLocaleEntry = initial.data.find(function (entry) {
                        return entry.attributes.slug === slug && entry.attributes.locale === 'fr-CA';
                    });
                    return [4 /*yield*/, fetch("".concat(process.env.STRAPI_PUBLIC_API_URL, "researchs?locale=all&populate=*"))];
                case 3:
                    researchRes = _d.sent();
                    return [4 /*yield*/, researchRes.json()];
                case 4:
                    researchAll = _d.sent();
                    return [4 /*yield*/, fetch("".concat(process.env.STRAPI_PUBLIC_API_URL, "publication-items?locale=all&populate=*"))];
                case 5:
                    publicationsRes = _d.sent();
                    return [4 /*yield*/, publicationsRes.json()];
                case 6:
                    publicationsAll = _d.sent();
                    _c = {};
                    _b = [{ content: currentLocaleEntry, otherLocaleContent: otherLocaleEntry, researchAll: researchAll.data, publicationsAll: publicationsAll.data }];
                    return [4 /*yield*/, (0, serverSideTranslations_1.serverSideTranslations)(locale !== null && locale !== void 0 ? locale : 'en')];
                case 7: return [2 /*return*/, (_c.props = __assign.apply(void 0, _b.concat([(_d.sent())])),
                        _c.revalidate = 10,
                        _c)];
            }
        });
    });
}
exports.getStaticProps = getStaticProps;
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        var res, items, paths;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(process.env.STRAPI_PUBLIC_API_URL, "student-items?locale=all&populate=*"))];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    items = _a.sent();
                    paths = items.data.map(function (item) { return ({
                        params: { slug: item.attributes.slug },
                        locale: item.attributes.locale,
                    }); });
                    return [2 /*return*/, {
                            paths: paths,
                            fallback: 'blocking',
                        }];
            }
        });
    });
}
exports.getStaticPaths = getStaticPaths;
