import * as React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeaderTitle from '@/components/layout/pageHeaderTitle';
import PageContentGrid from '@/components/layout/pageContentGrid';
import Layout from '@/components/layout';
import { Seo } from '@/components/seo';
import { useTranslation } from 'next-i18next';

const Custom404 = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title='' description='' />
      <article className=''>
        <PageHeaderTitle textColor='text-mblue-700 dark:text-mblue-500'>
          404
        </PageHeaderTitle>
        <PageContentGrid>
          <div className='layout col-span-4 py-12 lg:py-24'>{t('404')}</div>
        </PageContentGrid>
      </article>
    </Layout>
  );
};

export default Custom404;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}
