import { clsx } from 'clsx';
import { Props } from 'src/types/PropsInterface';

interface PageNavigationTitle extends Props {
  title: string;
  textColor: string;
}

const PageNavigationTitle = ({ title, textColor }: PageNavigationTitle) => {
  return (
    <h2
      className={clsx(
        'mb-4 mt-0 text-lg underline underline-offset-8 lg:text-xl',
        textColor
      )}
    >
      {title}
    </h2>
  );
};

export default PageNavigationTitle;
