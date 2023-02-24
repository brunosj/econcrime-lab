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
var React = require("react");
var serverSideTranslations_1 = require("next-i18next/serverSideTranslations");
var seo_1 = require("@/components/seo");
var pageHeaderTitle_1 = require("../components/layout/pageHeaderTitle");
var pageContentGrid_1 = require("../components/layout/pageContentGrid");
var layout_1 = require("../components/layout");
var next_i18next_1 = require("next-i18next");
var react_markdown_1 = require("react-markdown/lib/react-markdown");
var react_1 = require("react");
var next_i18next_2 = require("next-i18next");
var ContactPage = function (_a) {
    var pages = _a.pages;
    var page = pages.filter(function (page) { return page.attributes.slug === 'contact'; })[0];
    var t = (0, next_i18next_1.useTranslation)().t;
    // States for contact form fields
    var _b = (0, react_1.useState)(''), fullname = _b[0], setFullname = _b[1];
    var _c = (0, react_1.useState)(''), email = _c[0], setEmail = _c[1];
    var _d = (0, react_1.useState)(''), subject = _d[0], setSubject = _d[1];
    var _e = (0, react_1.useState)(''), message = _e[0], setMessage = _e[1];
    //   Form validation state
    var _f = (0, react_1.useState)({}), errors = _f[0], setErrors = _f[1];
    //   Setting button text on form submission
    var _g = (0, react_1.useState)(next_i18next_2.i18n.t('send')), buttonText = _g[0], setButtonText = _g[1];
    // Setting success or failure messages states
    var _h = (0, react_1.useState)(false), showSuccessMessage = _h[0], setShowSuccessMessage = _h[1];
    var _j = (0, react_1.useState)(false), showFailureMessage = _j[0], setShowFailureMessage = _j[1];
    // Validation check method
    var handleValidation = function () {
        var tempErrors = {};
        var isValid = true;
        if (fullname.length <= 0) {
            tempErrors['fullname'] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors['email'] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors['subject'] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors['message'] = true;
            isValid = false;
        }
        setErrors(__assign({}, tempErrors));
        console.log('errors', errors);
        return isValid;
    };
    //   Handling form submit
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var isValidForm, res, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    isValidForm = handleValidation();
                    if (!isValidForm) return [3 /*break*/, 3];
                    setButtonText(next_i18next_2.i18n.t('sending'));
                    return [4 /*yield*/, fetch('/api/form', {
                            body: JSON.stringify({
                                email: email,
                                fullname: fullname,
                                subject: subject,
                                message: message,
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            method: 'POST',
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    error = (_a.sent()).error;
                    if (error) {
                        console.log(error);
                        setShowSuccessMessage(false);
                        setShowFailureMessage(true);
                        setButtonText(next_i18next_2.i18n.t('send'));
                        return [2 /*return*/];
                    }
                    setShowSuccessMessage(true);
                    setShowFailureMessage(false);
                    setButtonText(next_i18next_2.i18n.t('send'));
                    _a.label = 3;
                case 3:
                    console.log(fullname, email, subject, message);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<layout_1.default>
      <seo_1.Seo title={"".concat(page.attributes.title, " |")} description={page.attributes.description}/>
      <section className=''>
        <pageHeaderTitle_1.default textColor='text-mblue-700 dark:text-mblue-500' svgBackground='textureBgTurquoise' description={page.attributes.description}>
          {page.attributes.title}
        </pageHeaderTitle_1.default>
        <pageContentGrid_1.default>
          <section className='layout relative col-span-4' aria-labelledby='contact-heading'>
            <div className='bg-warm-gray-50 absolute h-1/2 w-full' aria-hidden='true'/>

            <div className='font-mono'>
              <div className='relative'>
                <h2 id='contact-heading' className='sr-only'>
                  Contact us
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  {/* Contact information */}
                  <div className='relative mr-0 overflow-hidden bg-gradient-to-b py-6 lg:mr-12 lg:py-12'>
                    <h3 className='text-lg font-medium'>
                      {t('contactInformation')}
                    </h3>
                    <div className='mt-6 max-w-3xl '>
                      <div className='markdown text-sm '>
                        <react_markdown_1.ReactMarkdown>{page.attributes.content}</react_markdown_1.ReactMarkdown>
                      </div>
                    </div>
                  </div>

                  {/* Contact form */}
                  <div className='ml-0 py-6 lg:col-span-2 lg:ml-12 lg:py-12'>
                    <h3 className=' text-lg font-medium'>{t('getInTouch')}</h3>
                    <form className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8' onSubmit={handleSubmit}>
                      <div className='sm:col-span-2'>
                        <label htmlFor='fullname' className=' block text-sm font-medium'>
                          {t('name')}
                        </label>
                        <div className='mt-1'>
                          <input type='text' name='fullname' id='fullname' autoComplete='fullname' onChange={function (e) {
            setFullname(e.target.value);
        }} value={fullname} className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500'/>
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label htmlFor='email' className=' block text-sm font-medium'>
                          {t('email')}
                        </label>
                        <div className='mt-1'>
                          <input id='email' name='email' type='email' autoComplete='email' value={email} onChange={function (e) {
            setEmail(e.target.value);
        }} className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500'/>
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label htmlFor='subject' className=' block text-sm font-medium'>
                          {t('subject')}
                        </label>
                        <div className='mt-1'>
                          <input type='text' name='subject' id='subject' value={subject} onChange={function (e) {
            setSubject(e.target.value);
        }} className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500'/>
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='flex justify-between'>
                          <label htmlFor='message' className=' block text-sm font-medium'>
                            Message
                          </label>
                          <span id='message-max' className='text-warm-gray-500 text-sm'>
                            Max. 500 {t('characters')}
                          </span>
                        </div>
                        <div className='mt-1'>
                          <textarea id='message' name='message' rows={4} value={message} onChange={function (e) {
            setMessage(e.target.value);
        }} className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500' aria-describedby='message-max'/>
                        </div>
                      </div>
                      <div className='sm:col-span-2 sm:flex sm:justify-end'>
                        <button type='submit' aria-label='submit' className='text-small mt-2 inline-flex w-full  items-center justify-center rounded-xl border border-mblue-500 border-transparent bg-mblue-500 py-1 px-2 text-xs text-mblack-700 shadow-sm duration-300 hover:bg-transparent hover:bg-mblack-500  hover:text-mblue-700 focus:bg-transparent focus:text-mblue-700 focus:outline-none focus:ring-2 focus:ring-mblue-500 focus:ring-offset-2 dark:text-mblack-700 hover:dark:text-mblue-500 focus:dark:text-mblue-500 sm:w-auto lg:px-4 lg:text-sm'>
                          {buttonText}
                        </button>
                      </div>
                      <div className='text-left'>
                        {showSuccessMessage && (<p className='my-2 text-sm font-semibold text-mblue-700 dark:text-mblue-500'>
                            {t('messageSuccess')}
                          </p>)}
                        {showFailureMessage && (<p className='text-morange-700 dark:text-morange-500'>
                            {t('messageFailure')}
                          </p>)}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </pageContentGrid_1.default>
      </section>
    </layout_1.default>);
};
exports.default = ContactPage;
function getStaticProps(_a) {
    var locale = _a.locale;
    return __awaiter(this, void 0, void 0, function () {
        var pagesResponse, pages, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, fetch("".concat(process.env.STRAPI_PUBLIC_API_URL, "pages?locale=").concat(locale, "&populate=*"))];
                case 1:
                    pagesResponse = _d.sent();
                    return [4 /*yield*/, pagesResponse.json()];
                case 2:
                    pages = _d.sent();
                    _c = {};
                    _b = [{ pages: pages.data }];
                    return [4 /*yield*/, (0, serverSideTranslations_1.serverSideTranslations)(locale !== null && locale !== void 0 ? locale : 'en', 'common')];
                case 3: return [2 /*return*/, (_c.props = __assign.apply(void 0, _b.concat([(_d.sent())])),
                        _c.revalidate = 10,
                        _c)];
            }
        });
    });
}
exports.getStaticProps = getStaticProps;
