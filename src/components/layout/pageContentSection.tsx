import { clsx } from 'clsx';
import { Props } from 'src/types/PropsInterface';

interface PageContentSection extends Props {
  id?: string;
}

const PageContentSection = ({
  children,
  id,
  className,
}: PageContentSection) => {
  return (
    <section className={clsx('', className)} id={id}>
      {children}
    </section>
  );
};

export default PageContentSection;
