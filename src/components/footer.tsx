import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import ThemeSwitch from './ui/ThemeSwitch';
import { LogoWhite, LogoBlack } from '@/assets/logo';
import { useTheme } from 'next-themes';
import { MenuType } from 'src/types/MenuInterface';

const Footer = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();
  const menu = t('menu', { returnObjects: true }) as MenuType;

  return (
    <footer className='borderLight layout bottom-0 w-full border-t bg-mgray-400 py-6 dark:bg-mblack-600  '>
      <div className='grid grid-cols-4'>
        <div className='col-span-1 flex flex-col'>
          <Link href='/' className='font-mono text-sm  lg:text-lg'>
            <button className='w-32 lg:w-36' aria-label='logo'>
              {theme === 'light' ? <LogoBlack /> : <LogoWhite />}
            </button>
          </Link>
          <p className='mt-2 hidden font-mono text-xs xl:block'>
            {t('siteDescription')}
          </p>
        </div>
        <div className='col-span-2 hidden grid-cols-2 justify-items-end xl:grid'>
          <div>
            {menu.slice(0, 5).map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className='textHover mb-2 block cursor-pointer text-sm active:text-mgray-700'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            {menu.slice(5).map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className='textHover mb-2 block cursor-pointer text-sm active:text-mgray-700'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='col-span-2 col-start-3 ml-auto flex flex-col xl:col-span-1 xl:hidden'>
          <p className='block font-mono text-xs'>{t('siteDescription')}</p>
        </div>
        <div className='-mt-1 flex items-start'>
          <div className='ml-auto hidden items-center xl:flex'>
            <Link
              href={router.asPath}
              locale={router.locale === 'en' ? 'fr-CA' : 'en'}
              className='textHover text-sm lg:text-base'
            >
              <button aria-label='change language'>EN / FR</button>
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
