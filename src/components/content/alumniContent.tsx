import * as React from 'react';
import Link from 'next/link';
import PageContentSection from '@/layout/pageContentSection';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { CMS_URL } from '../../lib/constants';
import { AlumniTypes } from '@/types/ResponsesInterface';

type Alumni = {
  people: AlumniTypes[];
};

const AlumniContent = ({ people }: Alumni) => {
  const { t } = useTranslation();

  return (
    <>
      {people.length > 0 && (
        <section className='col-span-4'>
          <div className='borderLight  flex w-full flex-col border-t  border-b py-12 pl-6   lg:pl-24 lg:pr-12'>
            <h4 className='text-mpurple-700  dark:text-mpurple-500 text-2xl font-semibold lg:text-4xl'>
              Alumni
            </h4>
          </div>
          <PageContentSection>
            <div className=''>
              {people.map((people, i) => (
                <div
                  className='borderLight  flex w-full flex-col border-b  border-r py-12 pl-6 duration-300 last:border-b-0  lg:pl-24 lg:pr-12'
                  key={i}
                >
                  <div className='grid-cols-7 lg:grid'>
                    <div className='col-span-2'>
                      <div className='text-mpurple-700  dark:text-mpurple-500'>
                        <p className='mb-0 text-lg lg:mb-3 lg:text-2xl'>
                          {people.attributes.name}
                        </p>
                      </div>
                    </div>
                    <div className='col-span-7 pr-6 lg:col-span-5 mt-6 lg:mt-0'>
                      <div className='grid grid-cols-7 font-mono text-sm lg:text-base'>
                        <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                          {t('graduationYear')}
                        </span>
                        <span className='col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3'>
                          {people.attributes.graduationYear}
                        </span>

                        <span className='col-span-7 mb-1 text-mpurple-700 dark:text-mpurple-500 lg:col-span-2 lg:mb-0'>
                          {t('workTitle')}
                        </span>

                        {people.attributes.workUrl ? (
                          <Link
                            href={people.attributes.workUrl}
                            target='_blank'
                            className='textHover col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3'
                          >
                            <span>{people.attributes.workTitle}</span>
                          </Link>
                        ) : (
                          <span className='col-span-7 mb-3 ml-0 lg:col-span-5 lg:ml-3'>
                            {people.attributes.workTitle}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PageContentSection>
        </section>
      )}
    </>
  );
};

export default AlumniContent;
