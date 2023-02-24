import { Props } from 'src/types/PropsInterface';

interface SectionFadeIn extends Props {
  inView: boolean;
  ref: {};
}

const SectionFadeIn = ({ children, inView }: SectionFadeIn) => {
  return (
    <section
      className={`relative ${
        inView
          ? 'translate-y-0 transform opacity-100'
          : 'translate-y-20 transform opacity-0 '
      }    transition-all  duration-700`}
    >
      {children}
    </section>
  );
};

export default SectionFadeIn;
