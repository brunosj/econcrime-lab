"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundIllustration_1 = require("@/assets/backgroundIllustration");
var next_themes_1 = require("next-themes");
var logo_1 = require("@/assets/logo");
var HomeDescription = function (_a) {
    var content = _a.content;
    var theme = (0, next_themes_1.useTheme)().theme;
    return (<section>
      <backgroundIllustration_1.BackgroundIllustration className='absolute left-2 -top-4 z-10 h-[25rem]  w-[25rem] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:left-64 lg:-top-16 lg:ml-12 lg:h-[1026px] lg:w-[1026px] xl:-top-20 xl:ml-0'/>
      <div className='layout pt-16 pb-8  text-mblack-500   dark:text-mblue-500 lg:pt-32 lg:pb-24 xl:pb-32 xl:pt-40'>
        {/* <h1 className='dark:gradientTextDark font-mono text-6xl  lg:text-8xl'>
            Econ
            <span className='font-bold  underline '>Crime</span> Lab
          </h1> */}
        <div className='w-72 md:w-96 lg:w-[35rem] xl:w-[50rem] '>
          {theme === 'light' ? <logo_1.LogoBlack /> : <logo_1.LogoWhite />}
        </div>
      </div>

      {/* <BackGroundWavy className='top-1/2 z-0 h-full w-full overflow-hidden bg-transparent object-cover lg:absolute' /> */}
      <div className='relative z-20 py-0 lg:grid lg:py-40'>
        <div className=' grid-cols-2 px-6 text-xl  lg:absolute  lg:grid lg:pl-24 lg:text-3xl '>
          <div className='py-2'>{content}</div>
        </div>
      </div>
    </section>);
};
exports.default = HomeDescription;
