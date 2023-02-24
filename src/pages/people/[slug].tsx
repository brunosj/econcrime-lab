import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import Layout from '@/components/layout';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CMS_URL } from '../../lib/constants';
import Link from 'next/link';
import PublicationListing from '@/components/content/publicationListing';
import { Seo } from '@/components/seo';
import { PeopleTypes } from '@/types/ResponsesInterface';
import { ResearchTypes } from '@/types/ResponsesInterface';
import { PublicationTypes } from '@/types/ResponsesInterface';

const Person: NextPage<{
  content: PeopleTypes;
  otherLocaleContent: PeopleTypes;
  researchAll: ResearchTypes[];
  publicationsAll: PublicationTypes[];
}> = ({ content, otherLocaleContent, researchAll, publicationsAll }) => {
  const { t } = useTranslation();
  const router = useRouter();
  let locale = router.locale;
  const personSlug = content.attributes.slug;
  const currentContent = locale === 'en' ? content : otherLocaleContent;

  const personResearchLocale = researchAll
    .filter((item: ResearchTypes) =>
      item.attributes.people_items.data.some((person: PeopleTypes) =>
        person.attributes.slug.includes(personSlug)
      )
    )
    .filter((item) => item.attributes.locale === locale);

  const personPublicationLocale = publicationsAll
    .filter((item: PublicationTypes) =>
      item.attributes.people.data.some((person: PeopleTypes) =>
        person.attributes.slug.includes(personSlug)
      )
    )
    .filter((item: PublicationTypes) => item.attributes.locale === locale);
  console.log(content);
  return (
    <Layout>
      <Seo title={`${currentContent.attributes.name} |`} />
      <section className=''>
        <PageHeaderTitle
          textColor='text-mpurple-700 dark:text-mpurple-500'
          svgBackground='textureBgTurquoise'
        >
          {currentContent.attributes.name}
        </PageHeaderTitle>
        <PageContentGrid>
          <div className='col-span-4'>
            <div className='flex w-full flex-col  py-6 pl-6  lg:py-12  lg:pl-24 lg:pr-12'>
              <div className='flex flex-col gap-12 lg:flex-row'>
                <div className='order-last col-span-7 mt-6 pr-6 lg:order-first lg:col-span-5'>
                  <div className='grid grid-cols-7 font-mono text-base'>
                    {/* Relation row */}
                    <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                      {t('role')}
                    </span>
                    <span className='col-span-7 ml-0 mb-6 lg:col-span-5 lg:mb-3 lg:ml-3'>
                      {currentContent.attributes.type.slice(3)}
                    </span>

                    {/* description row */}
                    <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                      {t('description')}
                    </span>
                    <span className='col-span-7 mb-6 ml-0 lg:col-span-4 lg:mb-3 lg:ml-3 lg:pt-6'>
                      {currentContent.attributes.projectDescription}
                    </span>

                    {/* tags row */}
                    {currentContent.attributes.researchInterests.length >=
                      1 && (
                      <>
                        <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                          {t('focus')}
                        </span>
                        <div className='col-span-7 mb-6 ml-0 lg:col-span-4 lg:mb-3 lg:ml-3 lg:pt-6'>
                          <div>
                            {currentContent.attributes.researchInterests.map(
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
                    )}
                    {/* project row */}
                    {personResearchLocale.length >= 1 && (
                      <>
                        <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                          {t('research')}
                        </span>
                        <div className='col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3 lg:pt-6'>
                          <div className='flex flex-col'>
                            {personResearchLocale.map((project, i) => (
                              <Link
                                href={`/research#${project.attributes.slug}`}
                                key={i}
                                className=' textHover mb-2 last:mb-0'
                              >
                                {project.attributes.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {/* publications row */}
                    {personPublicationLocale.length >= 1 && (
                      <>
                        <span className='col-span-7  mt-3 pb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0 lg:pt-6'>
                          {t('researchArticles')}
                        </span>
                        <div className='col-span-7  mt-3 mb-3 ml-0 lg:col-span-5 lg:ml-3 lg:pt-6'>
                          <PublicationListing
                            publications={personPublicationLocale}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className='order-first col-span-2 mt-6 pr-6 lg:order-last lg:ml-auto lg:pr-12'>
                  {currentContent.attributes.photo.data && (
                    <div className='relative h-32 w-32 rounded-full  duration-300 lg:h-48 lg:w-48'>
                      <Image
                        src={`${CMS_URL}${currentContent.attributes.photo.data.attributes.url}`}
                        // srcSet={`
                        //           ${CMS_URL}${currentContent.attributes.photo.data.attributes.url}?w=400 400w,
                        //           ${CMS_URL}${currentContent.attributes.photo.data.attributes.url}?w=800 800w,
                        //           ${CMS_URL}${currentContent.attributes.photo.data.attributes.url}?w=1200 1200w,
                        //           ${CMS_URL}${currentContent.attributes.photo.data.attributes.url}?w=1600 1600w
                        //         `}
                        alt={`${CMS_URL}${currentContent.attributes.photo.data.attributes.url}`}
                        className='rounded-full  object-cover'
                        fill
                        priority
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </PageContentGrid>
      </section>
    </Layout>
  );
};

export default Person;

export async function getStaticProps({
  params,
  locale,
}: {
  params: { slug: string };
  locale: string;
}) {
  const { slug } = params;
  const initialRes = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}student-items?locale=all&populate=*`
  );
  const initial = await initialRes.json();

  // Find the entry for the current locale
  const currentLocaleEntry = initial.data.find(
    (entry: PeopleTypes) =>
      entry.attributes.slug === slug && entry.attributes.locale === 'en'
  );

  // Find the entry for the other locale
  const otherLocaleEntry = initial.data.find(
    (entry: PeopleTypes) =>
      entry.attributes.slug === slug && entry.attributes.locale === 'fr-CA'
  );
  // Get all research projects
  const researchRes = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}researchs?locale=all&populate=*`
  );

  const researchAll = await researchRes.json();

  // Get all publications projects
  const publicationsRes = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}publication-items?locale=all&populate=*`
  );

  const publicationsAll = await publicationsRes.json();

  return {
    props: {
      content: currentLocaleEntry,
      otherLocaleContent: otherLocaleEntry,
      researchAll: researchAll.data,
      publicationsAll: publicationsAll.data,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}student-items?locale=all&populate=*`
  );
  const items = await res.json();
  const paths = items.data.map((item: PeopleTypes) => ({
    params: { slug: item.attributes.slug },
    locale: item.attributes.locale,
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
