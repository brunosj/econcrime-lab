"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var next_i18next_1 = require("next-i18next");
var react_markdown_1 = require("react-markdown");
var pageNavigationTitle_1 = require("@/layout/pageNavigationTitle");
var publicationListing_1 = require("./publicationListing");
var peopleListing_1 = require("./peopleListing");
var ResearchListing = function (_a) {
    var researchProjects = _a.researchProjects;
    var t = (0, next_i18next_1.useTranslation)().t;
    return (<>
      {researchProjects.map(function (project, i) { return (<div key={i} className='borderLight  layout  border-b pt-12 pb-6 last:border-0'>
          <div className='anchor' id={project.attributes.slug}/>

          <div className=''>
            <span className='font-mono  text-xs uppercase text-mgray-700 lg:text-sm'>
              {project.attributes.type}
            </span>
            <h1 className='mt-2 text-mpurple-700 dark:text-mpurple-500'>
              {project.attributes.title}
            </h1>
            <div className='py-6 font-mono text-sm lg:text-base '>
              <p>
                {project.attributes.isCompleted === true
                ? "".concat(t('project'), " ").concat(t('completed'), "\n                  ")
                : "".concat(t('project'), " ").concat(t('inProgress'))}
              </p>
              <react_markdown_1.default className='markdownSmallText mt-1 font-mono'>
                {project.attributes.description}
              </react_markdown_1.default>
            </div>
          </div>
          <div className='lg:py-6'>
            {project.attributes.content && (<article className='markdown'>
                <react_markdown_1.default>{project.attributes.content}</react_markdown_1.default>
              </article>)}
          </div>
          {project.attributes.publication_items.data.length >= 1 && (<div className='pt-6'>
              <pageNavigationTitle_1.default title='Publications' textColor='text-mpurple-700 dark:text-mpurple-500'/>
              <div className='mt-6'>
                <publicationListing_1.default publications={project.attributes.publication_items.data}/>
              </div>
            </div>)}
          <div className='py-6'>
            {project.attributes.people_items.data.length >= 1 && (<section className='w-full '>
                <pageNavigationTitle_1.default title={t('people')} textColor='text-mpurple-700 dark:text-mpurple-500'/>
                <div className='mt-6 flex flex-wrap'>
                  <peopleListing_1.default people={project.attributes.people_items.data}/>
                </div>
              </section>)}
          </div>
        </div>); })}
    </>);
};
exports.default = ResearchListing;
