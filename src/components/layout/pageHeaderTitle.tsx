import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';
import { Props } from 'src/types/PropsInterface';

interface PageHeaderTitle extends Props {
  svgBackground?: string;
  textColor?: string;
  description?: string;
}

const PageHeaderTitle = ({
  svgBackground,
  textColor,
  children,
  className,
  description,
}: PageHeaderTitle) => {
  return (
    <section className={clsx('py-12 lg:py-36', svgBackground)}>
      <div
        className={clsx(
          'layout text-4xl font-semibold lg:text-7xl',
          textColor,
          className
        )}
      >
        {children}
      </div>
      <div className='layout mt-3 text-lg lg:mt-6  lg:text-2xl'>
        {description}
      </div>
    </section>
  );
};

export default PageHeaderTitle;
