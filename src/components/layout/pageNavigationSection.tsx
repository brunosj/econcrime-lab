import { Props } from 'src/types/PropsInterface';
import { ReactNode } from 'react';

import { clsx } from 'clsx';
import PageNavigationTitle from './pageNavigationTitle';

interface PageNavigationSection extends Props {
  pageNavigationTitle: string;
}

const PageNavigationSection = ({
  className,
  children,
  pageNavigationTitle,
}: PageNavigationSection) => {
  return (
    <section
      className={clsx(
        'borderLight over sticky top-16 z-0 hidden h-screen self-start overflow-auto  border-r lg:block',
        className
      )}
    >
      <div className='m-auto mt-12 px-6 lg:px-24 '>
        <PageNavigationTitle title={pageNavigationTitle} textColor='' />
        {children}
      </div>
    </section>
  );
};

export default PageNavigationSection;
