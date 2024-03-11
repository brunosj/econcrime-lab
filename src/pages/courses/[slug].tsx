import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import Layout from '@/components/layout';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'next-i18next';
import { siteMetadata } from '@/utils/siteMetadata';
import ButtonIcon from '@/components/ui/buttonIcon';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { Seo } from '@/components/seo';
import { CourseTypes } from '@/types/ResponsesInterface';
import { ProblematicTypes } from '@/types/ResponsesInterface';

interface CoursePage {
  content: CourseTypes;
  otherLocaleContent: CourseTypes;
  problematicsAll: ProblematicTypes[];
}
const Course: NextPage<CoursePage> = ({
  content,
  otherLocaleContent,
  problematicsAll,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  let locale = router.locale;
  const courseSlug = content.attributes.slug;
  const currentContent = locale === 'en' ? content : otherLocaleContent;

  const courseProblematicsLocale = problematicsAll
    .filter((problematic: ProblematicTypes) =>
      problematic.attributes.courses.data.some((course: CourseTypes) =>
        course.attributes.slug.includes(courseSlug)
      )
    )
    .filter(
      (problematic: ProblematicTypes) =>
        problematic.attributes.locale === locale
    );

  const problematicsBySemester: { [key: string]: ProblematicTypes[] } =
    courseProblematicsLocale
      ? courseProblematicsLocale.reduce((group, problematic) => {
          const semester = problematic.attributes.semester;
          group[semester] = group[semester] ?? [];
          group[semester].push(problematic);
          return group;
        }, {} as { [key: string]: ProblematicTypes[] })
      : {};

  const problematicsArray = problematicsBySemester
    ? Object.entries(problematicsBySemester)
    : [];

  const problematicsSorted = problematicsArray.sort((a, b) => {
    const aYearFirst = `${a[0].slice(-4)}${a[0].slice(0, 1)}`;
    const bYearFirst = `${b[0].slice(-4)}${b[0].slice(0, 1)}`;
    return aYearFirst < bYearFirst ? 1 : -1;
  });

  return (
    <Layout>
      <Seo
        title={`${currentContent.attributes.title.slice(0, -11)} |`}
        description={currentContent.attributes.description}
      />
      <section className=''>
        <PageHeaderTitle
          textColor='text-mturquoise-700 dark:text-mturquoise-500'
          svgBackground='textureBgTurquoise'
        >
          {t('course')}: {currentContent.attributes.title.slice(0, -11)}
        </PageHeaderTitle>
        <PageContentGrid>
          <section className='borderLight over relative top-0 z-0 h-full self-start overflow-auto border-r lg:sticky lg:top-16  lg:h-screen'>
            <div className='m-auto mt-12 pl-6 pr-6 lg:pl-24 lg:pr-12'>
              <div className='font-mono text-sm lg:text-base'>
                <p className='text-mturquoise-700 dark:text-mturquoise-500'>
                  {t('name')}
                </p>
                <p className='mt-1'>
                  {currentContent.attributes.title.slice(0, -11)}
                </p>
                <p className='mt-6 text-mturquoise-700 dark:text-mturquoise-500'>
                  {t('number')}
                </p>
                <p className='mt-1'>
                  {currentContent.attributes.title.slice(0, -1).slice(-8)}
                </p>
                <p className='mt-6 text-mturquoise-700 dark:text-mturquoise-500'>
                  {t('description')}
                </p>
                <p className='mt-1'>{currentContent.attributes.description}</p>
                <p className='mt-6 text-mturquoise-700 dark:text-mturquoise-500'>
                  {t('semesters')}
                </p>
                <p className='mt-1'>
                  {t('fall')} / {t('winter')}
                </p>
              </div>
            </div>
          </section>

          <div className='col-span-4 lg:col-span-3'>
            <article className='markdown layout py-12'>
              <ReactMarkdown>{currentContent.attributes.content}</ReactMarkdown>
            </article>
            <div>
              {problematicsSorted &&
                problematicsSorted.map((problematic, i) => {
                  const category = problematic[0];
                  const items = problematic.slice(1).flat();
                  return (
                    <div key={i}>
                      <div className='bg-mturquoise-700 text-mgray-200 dark:bg-mturquoise-500 dark:text-mblack-500'>
                        <h2 className='layout py-2 font-mono'>{category}</h2>
                      </div>
                      {items.map((problematic: any, i) => (
                        <div
                          key={i}
                          className='layout borderLight border-b py-12 last:border-0'
                        >
                          <h2 className='mb-2 font-mono text-lg font-semibold uppercase'>
                            {problematic.attributes.title}
                          </h2>
                          <article className='markdown'>
                            <ReactMarkdown>
                              {problematic.attributes.content}
                            </ReactMarkdown>
                          </article>
                          {problematic.attributes.pdf?.data && (
                            <div className='my-3'>
                              {problematic.attributes.pdf.data.map(
                                (file: any, i: number) => (
                                  <ButtonIcon
                                    key={i}
                                    icon={DocumentTextIcon}
                                    label={file.attributes.name}
                                    url={`${siteMetadata.cmsUrl}${file.attributes.url}`}
                                    type='Scientific articles'
                                    // using this types array is a workaround to color the READ button to the turquoise color (since colors are dynamically assigned, we need to pass an array although we only need one value)
                                    types={[
                                      'Scientific articles',
                                      'Scientific articles',
                                      'Scientific articles',
                                    ]}
                                  />
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}
            </div>
          </div>
        </PageContentGrid>
      </section>
    </Layout>
  );
};

export default Course;

export async function getStaticProps({
  params,
  locale,
}: {
  params: { slug: string };
  locale: string;
}) {
  const { slug } = params;
  const initialRes = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}courses?locale=all&populate=*`
  );
  const initial = await initialRes.json();
  // Find the entry for the current locale
  const currentLocaleEntry = initial.data.find(
    (entry: CourseTypes) =>
      entry.attributes.slug === slug && entry.attributes.locale === 'en'
  );

  // Find the entry for the other locale
  const otherLocaleEntry = currentLocaleEntry.attributes.localizations.data[0];

  // Get all problematics
  const problematicsRes = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}problematic-items?locale=all&populate=*`
  );

  const problematicsAll = await problematicsRes.json();

  return {
    props: {
      content: currentLocaleEntry,
      otherLocaleContent: otherLocaleEntry,
      problematicsAll: problematicsAll.data,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}courses?locale=all&populate=localizations`
  );
  const items = await res.json();
  const paths = items.data.map((item: CourseTypes) => ({
    params: { slug: item.attributes.slug },
    locale: item.attributes.locale,
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
