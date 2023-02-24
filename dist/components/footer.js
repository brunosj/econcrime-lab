"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var link_1 = require("next/link");
var router_1 = require("next/router");
var next_i18next_1 = require("next-i18next");
var ThemeSwitch_1 = require("./ui/ThemeSwitch");
var logo_1 = require("@/assets/logo");
var next_themes_1 = require("next-themes");
var Footer = function () {
    var theme = (0, next_themes_1.useTheme)().theme;
    var router = (0, router_1.useRouter)();
    var t = (0, next_i18next_1.useTranslation)().t;
    var menu = t('menu', { returnObjects: true });
    return (<footer className='borderLight layout bottom-0 w-full border-t bg-mgray-400 py-6 dark:bg-mblack-600  '>
      <div className='grid grid-cols-4'>
        <div className='col-span-1 flex flex-col'>
          <link_1.default href='/' className='font-mono text-sm  lg:text-lg'>
            <button className='w-32 lg:w-36' aria-label='logo'>
              {theme === 'light' ? <logo_1.LogoBlack /> : <logo_1.LogoWhite />}
            </button>
          </link_1.default>
          <p className='mt-2 hidden font-mono text-xs xl:block'>
            {t('siteDescription')}
          </p>
        </div>
        <div className='col-span-2 hidden grid-cols-2 justify-items-end xl:grid'>
          <div>
            {menu.slice(0, 5).map(function (item, i) { return (<link_1.default key={i} href={item.path} className='textHover mb-2 block cursor-pointer text-sm active:text-mgray-700'>
                {item.name}
              </link_1.default>); })}
          </div>
          <div>
            {menu.slice(5).map(function (item, i) { return (<link_1.default key={i} href={item.path} className='textHover mb-2 block cursor-pointer text-sm active:text-mgray-700'>
                {item.name}
              </link_1.default>); })}
          </div>
        </div>
        <div className='col-span-2 col-start-3 ml-auto flex flex-col xl:col-span-1 xl:hidden'>
          <p className='block font-mono text-xs'>{t('siteDescription')}</p>
        </div>
        <div className='-mt-1 flex items-start'>
          <div className='ml-auto hidden items-center xl:flex'>
            <link_1.default href={router.asPath} locale={router.locale === 'en' ? 'fr-CA' : 'en'} className='textHover text-sm lg:text-base'>
              <button aria-label='change language'>EN / FR</button>
            </link_1.default>
            <ThemeSwitch_1.default />
          </div>
        </div>
      </div>
    </footer>);
};
exports.default = Footer;
