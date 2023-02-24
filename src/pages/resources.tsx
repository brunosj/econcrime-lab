import * as React from 'react';
import type { NextPage } from 'next';
import { PageTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import Layout from '@/components/layout';
import { Seo } from '@/components/seo';
import ReactMarkdown from 'react-markdown';

const ResourcesPage: NextPage<{ pages: PageTypes[] }> = ({ pages }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'resources');
  return (
    <Layout>
      <Seo
        title={`${page.attributes.title} |`}
        description={page.attributes.description}
      />
      <PageHeaderTitle
        textColor='text-myellow-700 dark:text-myellow-500'
        svgBackground='textureBgPurple'
        description={page.attributes.description}
      >
        {page.attributes.title}
      </PageHeaderTitle>

      <div className='layout col-span-4 pb-6 lg:pb-12'>
        <ReactMarkdown className='markdown'>
          {page.attributes.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export default ResourcesPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  const dataResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}database-items?locale=${locale}&populate=*`
  );
  const resources = await dataResponse.json();

  return {
    props: {
      pages: pages.data,
      resources: resources.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}
