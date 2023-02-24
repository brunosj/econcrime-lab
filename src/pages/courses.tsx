import type { NextPage } from 'next';
import { PageTypes, CourseTypes } from 'src/types/ResponsesInterface';
import { Seo } from '@/components/seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import Layout from '@/components/layout';
import CoursesContent from '@/components/content/coursesContent';

const CoursesPage: NextPage<{
  pages: PageTypes[];
  courses: CourseTypes[];
}> = ({ pages, courses }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'courses');

  return (
    <Layout>
      <Seo
        title={`${page.attributes.title} |`}
        description={page.attributes.description}
      />
      <section className=''>
        <PageHeaderTitle
          textColor='text-mturquoise-700 dark:text-mturquoise-500'
          svgBackground='textureBgTurquoise'
          description={page.attributes.description}
        >
          {page.attributes.title}
        </PageHeaderTitle>
        <PageContentGrid>
          <CoursesContent courses={courses} />
        </PageContentGrid>
      </section>
    </Layout>
  );
};

export default CoursesPage;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  const res = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}courses?locale=${locale}&populate[problematics][populate][0]=pdf`
  );
  const courses = await res.json();

  return {
    props: {
      pages: pages.data,
      courses: courses.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
