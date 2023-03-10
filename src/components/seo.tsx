import Head from 'next/head';
import { siteMetadata } from '@/utils/siteMetadata';

export const Seo = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <Head>
      <title>
        {title} {siteMetadata.title}
      </title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={description} />
      <meta name='image' content={siteMetadata.image} />
      <meta property='og:title' content={siteMetadata.title} />
      <meta property='og:description' content={siteMetadata.description} />
      <meta property='og:image' content={siteMetadata.image} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteMetadata.title} />
      <meta name='twitter:description' content={siteMetadata.description} />
      <meta name='twitter:image' content={siteMetadata.image} />
      <meta name='twitter:creator' content={siteMetadata.twitter} />
    </Head>
  );
};
