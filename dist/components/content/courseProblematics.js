"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var siteMetadata_1 = require("@/utils/siteMetadata");
var buttonIcon_1 = require("@/ui/buttonIcon");
var react_1 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/24/outline");
var outline_2 = require("@heroicons/react/24/outline");
var next_i18next_1 = require("next-i18next");
var react_markdown_1 = require("react-markdown");
var CourseProblematics = function (_a) {
    var problematics = _a.problematics;
    var t = (0, next_i18next_1.useTranslation)().t;
    return (<div>
      {problematics.map(function (problematic, i) {
            return (<div key={i} className='mt-1'>
            <react_1.Disclosure>
              {function (_a) {
                    var open = _a.open;
                    return (<>
                  <react_1.Disclosure.Button className='group relative flex w-full items-center justify-between  bg-mgray-500 py-6 px-6 text-left font-semibold dark:bg-mblack-500 lg:px-12'>
                    <p className='font-mono text-xs uppercase text-mturquoise-700  duration-300 dark:text-mturquoise-500 group-hover:dark:text-mgray-500 lg:text-sm'>
                      {problematic.attributes.title}
                    </p>
                    <outline_1.ChevronRightIcon className={open
                            ? 'h-3 w-3 rotate-90 transform text-mturquoise-700 dark:text-mturquoise-500'
                            : 'h-3 w-3 text-mturquoise-700  dark:text-mturquoise-500 group-hover:dark:text-mgray-500'}/>
                  </react_1.Disclosure.Button>
                  <react_1.Disclosure.Panel className='bg-mgray-500 dark:bg-mblack-500'>
                    <div className='px-6 pb-6 text-xs lg:px-12 lg:text-sm'>
                      <div className='markdownSmallText'>
                        <react_markdown_1.default>
                          {problematic.attributes.content}
                        </react_markdown_1.default>
                      </div>

                      {problematic.attributes.pdf.data && (<div className='my-3'>
                          <buttonIcon_1.default icon={outline_2.DocumentTextIcon} label={t('read')} url={"".concat(siteMetadata_1.default.cmsUrl).concat(problematic.attributes.pdf.data[0].attributes.url)} type='Scientific articles' 
                        // using this types array is a workaround to color the READ button to the turquoise color (since colors are dynamically assigned, we need to pass an array although we only need one value)
                        types={[
                                'Scientific articles',
                                'Scientific articles',
                                'Scientific articles',
                            ]}/>
                        </div>)}
                    </div>
                  </react_1.Disclosure.Panel>
                </>);
                }}
            </react_1.Disclosure>
          </div>);
        })}
    </div>);
};
exports.default = CourseProblematics;
