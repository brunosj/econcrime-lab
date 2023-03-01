import * as React from 'react';
import type { NextPage } from 'next';
import { PageTypes, BlogTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import Layout from '@/components/layout';
import { Seo } from '@/components/seo';
import BlogPreviews from '@/components/content/blogPreviews';

const BlogPage: NextPage<{
  pages: PageTypes[];
  blogs: BlogTypes[];
}> = ({ pages, blogs }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'blog');
  return (
    <Layout>
      <Seo
        title={`${page.attributes.title} |`}
        description={page.attributes.description}
      />
      <article className=''>
        <PageHeaderTitle textColor='text-mblue-700 dark:text-mblue-500'>
          {page.attributes.title}
        </PageHeaderTitle>
        <PageContentGrid>
          <BlogPreviews blogs={blogs} />
        </PageContentGrid>
      </article>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?populate=*`
  );
  const pages = await pagesResponse.json();

  const res = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}blog-items?locale=${locale}&populate=*`
  );
  const data = await res.json();

  return {
    props: {
      pages: pages.data,
      blogs: data.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
