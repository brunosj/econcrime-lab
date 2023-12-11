import * as React from 'react';
import type { NextPage } from 'next';
import { PageTypes } from 'src/types/ResponsesInterface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Seo } from '@/components/seo';
import PageHeaderTitle from '../components/layout/pageHeaderTitle';
import PageContentGrid from '../components/layout/pageContentGrid';
import Layout from '../components/layout';
import { useTranslation } from 'next-i18next';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useState } from 'react';
import { i18n } from 'next-i18next';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';

const ContactPage: NextPage<{
  pages: PageTypes[];
}> = ({ pages }) => {
  const [page] = pages.filter((page) => page.attributes.slug === 'contact');
  const { t } = useTranslation();
  const router = useRouter();
  let locale = router.locale ?? 'en';

  // States for contact form fields
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState(
    locale === 'en' ? 'Send' : 'Envoyer'
  );

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = (
    tempErrors: any = {},
    isValid: boolean = true
  ): boolean => {
    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText(locale === 'en' ? 'Sending...' : 'Envoi en cours...');
      const res = await fetch('/api/form', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText(locale === 'en' ? 'Send' : 'Envoyer');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText(locale === 'en' ? 'Send' : 'Envoyer');
    }
    console.log(fullname, email, subject, message);
  };

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
          <section
            className='layout relative col-span-4'
            aria-labelledby='contact-heading'
          >
            <div
              className='bg-warm-gray-50 absolute h-1/2 w-full'
              aria-hidden='true'
            />
            <div className='font-mono'>
              <div className='relative'>
                <h2 id='contact-heading' className='sr-only'>
                  Contact us
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  {/* Contact information */}
                  <div className='relative mr-0 overflow-hidden bg-gradient-to-b py-6 lg:mr-12 lg:py-12'>
                    <h3 className='text-lg font-medium'>
                      {t('contactInformation')}
                    </h3>
                    <div className='mt-6 max-w-3xl '>
                      <div className='markdown text-sm '>
                        <ReactMarkdown>{page.attributes.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>

                  {/* Contact form */}
                  <div className='ml-0 py-6 lg:col-span-2 lg:ml-12 lg:py-12'>
                    <h3 className=' text-lg font-medium'>{t('getInTouch')}</h3>
                    <form
                      className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                      onSubmit={handleSubmit}
                    >
                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='fullname'
                          className=' block text-sm font-medium'
                        >
                          {t('name')}
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='fullname'
                            id='fullname'
                            autoComplete='fullname'
                            onChange={(e) => {
                              setFullname(e.target.value);
                            }}
                            value={fullname}
                            className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='email'
                          className=' block text-sm font-medium'
                        >
                          {t('email')}
                        </label>
                        <div className='mt-1'>
                          <input
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='email'
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='subject'
                          className=' block text-sm font-medium'
                        >
                          {t('subject')}
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='subject'
                            id='subject'
                            value={subject}
                            onChange={(e) => {
                              setSubject(e.target.value);
                            }}
                            className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='flex justify-between'>
                          <label
                            htmlFor='message'
                            className=' block text-sm font-medium'
                          >
                            Message
                          </label>
                          <span
                            id='message-max'
                            className='text-warm-gray-500 text-sm'
                          >
                            Max. 500 {t('characters')}
                          </span>
                        </div>
                        <div className='mt-1'>
                          <textarea
                            id='message'
                            name='message'
                            rows={4}
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                            className='border-warm-gray-300  block w-full rounded-md py-3 px-4 shadow-sm focus:border-mblue-500 focus:ring-mblue-500'
                            aria-describedby='message-max'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-2 sm:flex sm:justify-end'>
                        <button
                          type='submit'
                          aria-label='submit'
                          className='text-small mt-2 inline-flex w-full  items-center justify-center rounded-xl border border-mblue-500 border-transparent bg-mblue-500 py-1 px-2 text-xs text-mblack-700 shadow-sm duration-300 hover:bg-transparent hover:bg-mblack-500  hover:text-mblue-700 focus:bg-transparent focus:text-mblue-700 focus:outline-none focus:ring-2 focus:ring-mblue-500 focus:ring-offset-2 dark:text-mblack-700 hover:dark:text-mblue-500 focus:dark:text-mblue-500 sm:w-auto lg:px-4 lg:text-sm'
                        >
                          {buttonText}
                        </button>
                      </div>
                      <div className='text-left'>
                        {showSuccessMessage && (
                          <p className='my-2 text-sm font-semibold text-mblue-700 dark:text-mblue-500'>
                            {t('messageSuccess')}
                          </p>
                        )}
                        {showFailureMessage && (
                          <p className='text-morange-700 dark:text-morange-500'>
                            {t('messageFailure')}
                          </p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PageContentGrid>
      </section>
    </Layout>
  );
};

export default ContactPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const pagesResponse = await fetch(
    `${process.env.STRAPI_PUBLIC_API_URL}pages?locale=${locale}&populate=*`
  );
  const pages = await pagesResponse.json();

  return {
    props: {
      pages: pages.data,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 10,
  };
}
