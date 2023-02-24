import { Seo } from '@/components/seo';
import type { NextPage } from 'next';
import { PageTypes, OutreachTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import Layout from '@/components/layout';
import OutreachContent from '@/components/content/outreachContent';

const OutreachPage: NextPage<{
  pages: PageTypes[];
  outreach: OutreachTypes[];
}> = ({ pages, outreach }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'outreach');

  const outreachSorted = outreach.sort((a, b) =>
    a.attributes.year > b.attributes.year ? -1 : 1
  );
  return (
    <Layout>
      <Seo
        title={`${page.attributes.title} |`}
        description={page.attributes.description}
      />
      <section className=''>
        <PageHeaderTitle
          textColor='text-mblue-700 dark:text-mblue-500'
          svgBackground='textureBgTurquoise'
          description={page.attributes.description}
        >
          {page.attributes.title}
        </PageHeaderTitle>
        <PageContentGrid>
          <OutreachContent outreach={outreachSorted} />
        </PageContentGrid>
      </section>
    </Layout>
  );
};

export default OutreachPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  const outreachResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}outreach-items?locale=${locale}&populate=*`
  );

  const outreach = await outreachResponse.json();

  return {
    props: {
      pages: pages.data,
      outreach: outreach.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}
