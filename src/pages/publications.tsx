import { Seo } from '@/components/seo';
import type { NextPage } from 'next';
import { PageTypes, PublicationTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import PublicationsContent from '@/components/content/publicationsContent';
import Layout from '@/components/layout';

const PublicationsPage: NextPage<{
  pages: PageTypes[];
  publications: PublicationTypes[];
}> = ({ pages, publications }) => {
  const [page] = pages.filter(
    (page) => page.attributes.slug === 'publications'
  );
  const publicationsSorted = publications.sort((a, b) =>
    a.attributes.year > b.attributes.year ? -1 : 1
  );
  return (
    <>
      <Seo
        title={`${page.attributes.title} |`}
        description={page.attributes.description}
      />
      <Layout>
        <PageHeaderTitle
          textColor='text-morange-700 dark:text-morange-500'
          svgBackground='textureBgOrange'
          description={page.attributes.description}
        >
          {page.attributes.title}
        </PageHeaderTitle>
        <PageContentGrid>
          <PublicationsContent publications={publicationsSorted} />
        </PageContentGrid>
      </Layout>
    </>
  );
};

export default PublicationsPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  const publicationResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}publication-items?locale=${locale}&populate=*`
  );

  const publications = await publicationResponse.json();

  return {
    props: {
      pages: pages.data,

      publications: publications.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}
