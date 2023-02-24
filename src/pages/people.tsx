import { Seo } from '@/components/seo';
import type { NextPage } from 'next';
import { PageTypes, PeopleTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layout';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import PeopleContent from '@/components/content/peopleContent';

const PeoplePage: NextPage<{
  pages: PageTypes[];
  people: PeopleTypes[];
}> = ({ pages, people }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'people');
  return (
    <Layout>
      <Seo
        title={`${page.attributes.title} |`}
        description={page.attributes.description}
      />
      <PageHeaderTitle
        textColor='text-mpurple-700 dark:text-mpurple-500'
        svgBackground='textureBgTurquoise'
        description={page.attributes.description}
      >
        {page.attributes.title}
      </PageHeaderTitle>
      <PageContentGrid>
        <PeopleContent people={people} />
      </PageContentGrid>
    </Layout>
  );
};

export default PeoplePage;

export async function getStaticProps({ locale }: { locale: string }) {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  const peopleResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}student-items?locale=${locale}&populate=photo&populate=research_projects&populate=researchInterests`
  );

  const people = await peopleResponse.json();

  return {
    props: {
      pages: pages.data,
      people: people.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}
