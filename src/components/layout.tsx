import { Props } from 'src/types/PropsInterface';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
}
