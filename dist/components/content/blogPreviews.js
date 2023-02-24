"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var link_1 = require("next/link");
var next_i18next_1 = require("next-i18next");
var router_1 = require("next/router");
var pageContentSection_1 = require("../layout/pageContentSection");
var BlogPreviews = function (_a) {
    var blogs = _a.blogs;
    var t = (0, next_i18next_1.useTranslation)().t;
    // const router = useRouter();
    // const activeLanguage = router.locale;
    // let blogPath = '';
    // if (typeof window !== 'undefined') {
    //   const windowUrl = window.location.href;
    //   if (activeLanguage === 'fr-CA') {
    //     blogPath = windowUrl.replace('fr-CA/', '');
    //     console.log(blogPath);
    //   }
    // }
    return (<>
      {/* <PageNavigationSection
          pageNavigationTitle={t('blogPosts')}
          className='hidden lg:block'
        >
          {blogs.map((blog, i) => (
            <div key={i} className='py-6 '>
              <Link href={`#${blog.attributes.slug}`}>
                <h2 className='textHover text-mpurple-700 dark:text-mpurple-500'>
                  {blog.attributes.title}
                </h2>
              </Link>
            </div>
          ))}
        </PageNavigationSection> */}
      <pageContentSection_1.default className='col-span-4'>
        {blogs.map(function (blog, i) { return (<link_1.default href={"blog/".concat(blog.attributes.slug)} key={i} className=' borderLight group w-full border-b py-12 duration-300 last:border-b-0 hover:bg-mgray-200 hover:dark:bg-mblack-500  '>
            <div className='borderLight border-b py-12 px-6 lg:px-24'>
              <h1 className='text-mpurple-700 dark:text-mpurple-500'>
                {blog.attributes.title}
              </h1>
              <p className='textHover mt-6'>{blog.attributes.description}</p>
            </div>
          </link_1.default>); })}
      </pageContentSection_1.default>
    </>);
};
exports.default = BlogPreviews;
