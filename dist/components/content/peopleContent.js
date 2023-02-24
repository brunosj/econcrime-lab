"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var link_1 = require("next/link");
var pageContentSection_1 = require("@/layout/pageContentSection");
var next_i18next_1 = require("next-i18next");
var image_1 = require("next/image");
var constants_1 = require("../../lib/constants");
var PeopleContent = function (_a) {
    var people = _a.people;
    var t = (0, next_i18next_1.useTranslation)().t;
    var peopleSorted = people.sort(function (a, b) {
        return a.attributes.type > b.attributes.type ? 1 : -1;
    });
    return (<>
      <article className='col-span-4'>
        <pageContentSection_1.default className=''>
          <div className=''>
            {peopleSorted.map(function (people, i) { return (<link_1.default className='borderLight group flex w-full flex-col border-b  border-r py-12 pl-6 duration-300 last:border-b-0 hover:bg-mgray-200 hover:dark:bg-mblack-500 lg:pl-24 lg:pr-12' key={i} href={"/people/".concat(people.attributes.slug)}>
                <div className='col-span-7  text-mpurple-700  dark:text-mpurple-500'>
                  <p className='mb-0 text-lg lg:mb-3 lg:text-2xl'>
                    {people.attributes.name}
                  </p>
                </div>
                <div className='grid-cols-7 lg:grid'>
                  <div className='col-span-2 mt-6 '>
                    {people.attributes.photo.data && (<div className='relative h-24 w-24 rounded-full grayscale duration-300 group-hover:grayscale-0 lg:h-32 lg:w-32'>
                        <image_1.default src={"".concat(constants_1.CMS_URL).concat(people.attributes.photo.data.attributes.url)} alt={"".concat(constants_1.CMS_URL).concat(people.attributes.name)} className='rounded-full  object-cover' fill priority sizes='100vw'/>
                      </div>)}
                  </div>
                  <div className='col-span-7 mt-6 pr-6 lg:col-span-5'>
                    <div className='grid grid-cols-7 font-mono text-sm lg:text-base'>
                      {/* Relation row */}
                      <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                        {t('role')}
                      </span>
                      <span className='col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3'>
                        {people.attributes.type.slice(3)}
                      </span>
                      {/* description row */}

                      <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                        {t('description')}
                      </span>
                      <span className='col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3'>
                        {people.attributes.projectDescription}
                      </span>

                      {/* project row */}
                      {people.attributes.research_projects.data.length >= 1 && (<>
                          <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                            {t('research')}
                          </span>
                          <div className='col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3'>
                            <div className='flex flex-col'>
                              {people.attributes.research_projects.data.map(function (project, i) { return (<link_1.default href={"/research#".concat(project.attributes.slug)} key={i} className=' mb-2 last:mb-0'>
                                    {project.attributes.title}
                                  </link_1.default>); })}
                            </div>
                          </div>
                        </>)}
                      {/* tags row */}
                      {/* {people.attributes.researchInterests.length >= 1 && (
              <>
                <span className='col-span-7 mb-1 mt-3 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                  {t('Focus')}
                </span>
                <div className='col-span-7 mt-3  mb-3 ml-0 lg:col-span-5 lg:ml-3'>
                  <div>
                    {people.attributes.researchInterests.map(
                      (interest, i) => (
                        <span
                          key={i}
                          className='mr-12 rounded-xl border py-1 px-2  last:mr-0 '
                        >
                          {interest.tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </>
            )} */}
                    </div>
                  </div>
                </div>
              </link_1.default>); })}
          </div>
        </pageContentSection_1.default>
      </article>
    </>);
};
exports.default = PeopleContent;
