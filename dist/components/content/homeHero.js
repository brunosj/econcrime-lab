"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("next/image");
var backgroundIllustration_1 = require("@/assets/backgroundIllustration");
var Hero = function (_a) {
    var description = _a.description;
    return (<div className='layout lg:grid'>
      <div className='relative flex items-center '>
        <div className='hidden lg:block'>
          <backgroundIllustration_1.BackgroundIllustration className=' absolute left-32  top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0'/>
        </div>
        <div className='py-16  text-mblack-500   dark:text-mblue-500 lg:py-48'>
          <h1 className='dark:gradientTextDark font-mono text-6xl  lg:text-8xl'>
            Econ
            <span className='font-bold  underline '>Crime</span> Lab
          </h1>
        </div>
      </div>
      {/* <div className='flex items-center pb-16 lg:pb-0 '>
            <h1>{description}</h1>
          </div> */}
    </div>);
};
exports.default = Hero;
