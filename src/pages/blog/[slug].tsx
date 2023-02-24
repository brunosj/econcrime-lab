import type { NextPage } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import BlogContent from '@/components/content/blogContent';
import { useRouter } from 'next/router';
import { Seo } from '@/components/seo';
import { BlogTypes } from '@/types/ResponsesInterface';

const Blog: NextPage<{
  content: BlogTypes;
  otherLocaleContent: BlogTypes;
}> = ({ content, otherLocaleContent }) => {
  const { t } = useTranslation();
  const router = useRouter();
  let locale = router.locale;
  const currentContent = locale === 'en' ? content : otherLocaleContent;

  return (
    <>
      <Seo
        title={`${currentContent.attributes.title} |`}
        description={currentContent.attributes.description}
      />
      <Layout>
        <PageHeaderTitle
          textColor='text-mpurple-700 dark:text-mpurple-500'
          svgBackground='textureBgTurquoise'
          className='text-center'
        >
          {currentContent.attributes.title}
        </PageHeaderTitle>
        <PageContentGrid>
          <BlogContent content={currentContent} />
        </PageContentGrid>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps({
  params,
  locale,
}: {
  params: { slug: string };
  locale: string;
}) {
  const { slug } = params;
  const initialRes = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}blog-items?locale=all&populate=localizations`
  );
  const initial = await initialRes.json();
  // Find the entry for the current locale
  const currentLocaleEntry = initial.data.find(
    (entry: BlogTypes) =>
      entry.attributes.slug === slug && entry.attributes.locale === 'en'
  );

  // Find the entry for the other locale
  const otherLocaleEntry = currentLocaleEntry.attributes.localizations.data[0];

  return {
    props: {
      content: currentLocaleEntry,
      otherLocaleContent: otherLocaleEntry,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}blog-items?locale=all&populate=localizations`
  );
  const items = await res.json();
  const paths = items.data.map((item: BlogTypes) => ({
    params: { slug: item.attributes.slug },
    locale: item.attributes.locale,
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
