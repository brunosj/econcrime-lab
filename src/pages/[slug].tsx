import type { NextPage } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import { useRouter } from 'next/router';
import { Seo } from '@/components/seo';
import { PageExtraTypes } from '@/types/ResponsesInterface';
import PageExtraContent from '@/components/content/pageExtraContent';

interface PageExtra {
  content: PageExtraTypes;
  otherLocaleContent: PageExtraTypes;
}
const PageExtra: NextPage<PageExtra> = ({ content, otherLocaleContent }) => {
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
          <PageExtraContent content={currentContent} />
        </PageContentGrid>
      </Layout>
    </>
  );
};

export default PageExtra;

export async function getStaticProps({
  params,
  locale,
}: {
  params: { slug: string };
  locale: string;
}) {
  const { slug } = params;

  // Fetch the original page data and the localization data in parallel
  const [initialRes, localizationRes] = await Promise.all([
    fetch(
      `${process.env.STRAPI_PUBLIC_API_URL}page-extras?slug=${slug}&populate=people_items.photo`
    ),
    fetch(
      `${process.env.STRAPI_PUBLIC_API_URL}page-extras?locale=${locale}&slug=${slug}&populate=people_items.photo`
    ),
  ]);

  const [initial, localization] = await Promise.all([
    initialRes.json(),
    localizationRes.json(),
  ]);

  // Find the entry for the current locale
  const currentLocaleEntry = localization.data[0];

  return {
    props: {
      content: initial.data[0],
      otherLocaleContent: currentLocaleEntry,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}page-extras?locale=all&populate=localizations`
  );
  const items = await res.json();
  const paths = items.data.map((item: PageExtraTypes) => ({
    params: { slug: item.attributes.slug },
    locale: item.attributes.locale,
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
