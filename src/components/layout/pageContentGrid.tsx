import { Props } from 'src/types/PropsInterface';

const PageContentGrid = ({ children }: Props) => {
  return (
    <section className='borderLight border-t'>
      <div className='grid-cols-4 lg:grid'>{children}</div>
    </section>
  );
};

export default PageContentGrid;
