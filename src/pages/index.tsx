import type { NextPage } from 'next';
import { PageTypes, NewsTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layout';
import HomeNews from '@/components/content/homeNews';
import HomeDescription from '@/components/content/homeDescription';
import { Seo } from '@/components/seo';
import { useInView } from 'react-intersection-observer';
import SectionFadeIn from '@/components/layout/sectionFadeIn';

const Home: NextPage<{
  pages: PageTypes[];
  news: NewsTypes[];
}> = ({ pages, news }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'home');
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const newsSorted = news.sort((a: NewsTypes, b: NewsTypes) =>
    a.attributes.date > b.attributes.date ? -1 : 1
  );
  return (
    <>
      <Seo title='' description={page.attributes.description} />
      <Layout>
        <div ref={ref} className='relative'>
          <SectionFadeIn inView={inView} ref={ref}>
            <HomeDescription
              content={page.attributes.content}
              description={page.attributes.description}
            />
          </SectionFadeIn>
        </div>
        <HomeNews news={newsSorted.slice(0, 3)} />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  const newsResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}news-items?locale=${locale}&populate=*`
  );
  const news = await newsResponse.json();

  return {
    props: {
      pages: pages.data,
      news: news.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
