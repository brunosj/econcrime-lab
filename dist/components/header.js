"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var link_1 = require("next/link");
var router_1 = require("next/router");
var next_i18next_1 = require("next-i18next");
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/24/outline");
var outline_2 = require("@heroicons/react/24/outline");
var ThemeSwitch_1 = require("./ui/ThemeSwitch");
var image_1 = require("next/image");
var clsx_1 = require("clsx");
var logo_1 = require("@/assets/logo");
var next_themes_1 = require("next-themes");
var Header = function () {
    var router = (0, router_1.useRouter)();
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var theme = (0, next_themes_1.useTheme)().theme;
    var _b = (0, next_i18next_1.useTranslation)(), t = _b.t, ready = _b.ready;
    if (!ready)
        return 'loading translations...';
    var menu = t('menu', { returnObjects: true });
    return (<header className='borderLight sticky top-0 z-50'>
      <div className='layout bg-mgray-300 py-3  opacity-90 dark:bg-mblack-700 '>
        <div className='flex items-center justify-between'>
          <link_1.default href='/' className='textHover font-mono text-sm lg:text-base' aria-label='logo'>
            <div className='w-8'>
              <logo_1.LogoCoin />
            </div>
          </link_1.default>

          <div className='flex items-center'>
            <link_1.default href={router.asPath} locale={router.locale === 'en' ? 'fr-CA' : 'en'} className='textHover text-sm lg:text-base'>
              <button aria-label='change language'>EN / FR</button>
            </link_1.default>
            <ThemeSwitch_1.default />
            <nav className='ml-3 flex items-center lg:ml-4'>
              <button type='button' aria-label='change theme' className='textHover' onClick={function () { return setOpen(true); }}>
                <outline_2.Bars4Icon className='h-6 w-6 lg:h-8 lg:w-8'/>
              </button>
            </nav>
          </div>
        </div>

        <react_2.Transition.Root show={open} as={react_1.Fragment}>
          <react_2.Dialog as='div' className='relative z-40' onClose={setOpen}>
            <react_2.Transition.Child as={react_1.Fragment} enter='ease-in-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in-out duration-0' leaveFrom='opacity-100' leaveTo='opacity-50'>
              <div className='fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity'/>
            </react_2.Transition.Child>

            <div className='fixed inset-0 overflow-hidden'>
              <div className='absolute inset-0 overflow-hidden'>
                <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                  <react_2.Transition.Child as={react_1.Fragment} enter='transform transition ease-in-out duration-500 sm:duration-700' enterFrom='translate-x-full' enterTo='translate-x-0' leave='transform transition ease-in-out duration-100 sm:duration-300' leaveFrom='translate-x-0' leaveTo='translate-x-full'>
                    <react_2.Dialog.Panel className='lg;max-w-lg pointer-events-auto w-screen max-w-md xl:max-w-xl'>
                      <div className='flex h-full flex-col  bg-mgray-300 py-3 shadow-xl dark:bg-mblack-700'>
                        <div className='px-6 lg:px-24'>
                          <div className='flex'>
                            <div className='ml-auto flex h-7 items-center'>
                              <button type='button' className='textHover' onClick={function () { return setOpen(false); }}>
                                <span className='sr-only'>Close panel</span>
                                <outline_1.XMarkIcon className='h-8 w-8' aria-hidden='true'/>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='relative mx-auto mt-6 flex flex-1 items-center'>
                          <div className='space-y-3 lg:space-y-6'>
                            {menu.map(function (item, i) { return (<link_1.default key={i} href={item.path} className='textHover block cursor-pointer text-2xl duration-300 md:text-3xl xl:text-5xl' onClick={function () { return setOpen(false); }}>
                                {item.name}
                              </link_1.default>); })}
                          </div>
                        </div>
                      </div>
                    </react_2.Dialog.Panel>
                  </react_2.Transition.Child>
                </div>
              </div>
            </div>
          </react_2.Dialog>
        </react_2.Transition.Root>
      </div>
      <div className='relative h-[0.3vh] w-full opacity-90'>
        <image_1.default src='/home_gradient.svg' fill priority alt='econ crime lab' className=' object-cover'/>
      </div>
    </header>);
};
exports.default = Header;
