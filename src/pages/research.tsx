import * as React from 'react';
import type { NextPage } from 'next';
import { PageTypes, ResearchTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import ResearchContent from '@/components/content/researchContent';
import PageContentGrid from '@/components/layout/pageContentGrid';
import Layout from '@/components/layout';
import { Seo } from '@/components/seo';

const ResearchPage: NextPage<{
  pages: PageTypes[];
  research: ResearchTypes[];
}> = ({ pages, research }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'research');
  return (
    <>
      <Seo
        title={`${page.attributes.title} |`}
        description={page.attributes.description}
      />
      <Layout>
        <PageHeaderTitle
          textColor='text-mpurple-700 dark:text-mpurple-500'
          svgBackground='textureBgPurple'
          description={page.attributes.description}
        >
          {page.attributes.title}
        </PageHeaderTitle>
        <PageContentGrid>
          <ResearchContent researchProjects={research} />
        </PageContentGrid>
      </Layout>
    </>
  );
};

export default ResearchPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  const researchResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}researchs?locale=${locale}&populate[people_items][populate][0]=photo&populate[publication_items][populate]`
  );
  const research = await researchResponse.json();

  return {
    props: {
      pages: pages.data,
      research: research.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}
