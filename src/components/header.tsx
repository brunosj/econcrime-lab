import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Bars4Icon } from '@heroicons/react/24/outline';
import ThemeSwitch from './ui/ThemeSwitch';
import Image from 'next/image';
import { LogoCoin } from '@/assets/logo';
import { MenuType } from 'src/types/MenuInterface';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const menu: MenuType = t('menu', { returnObjects: true });

  return (
    <header className='borderLight sticky top-0 z-50'>
      <div className='layout bg-mgray-300 py-3  opacity-90 dark:bg-mblack-700 '>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className='textHover font-mono text-sm lg:text-base'
            aria-label='logo'
          >
            <div className='w-8'>
              <LogoCoin />
            </div>
          </Link>

          <div className='flex items-center'>
            <Link
              href={router.asPath}
              locale={router.locale === 'en' ? 'fr-CA' : 'en'}
              className='textHover text-sm lg:text-base'
            >
              <button aria-label='change language'>EN / FR</button>
            </Link>
            <ThemeSwitch />
            <nav className='ml-3 flex items-center lg:ml-4'>
              <button
                type='button'
                aria-label='change theme'
                className='textHover'
                onClick={() => setOpen(true)}
              >
                <Bars4Icon className='h-6 w-6 lg:h-8 lg:w-8' />
              </button>
            </nav>
          </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as='div' className='relative z-40' onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-0'
              leaveFrom='opacity-100'
              leaveTo='opacity-50'
            >
              <div className='fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-hidden'>
              <div className='absolute inset-0 overflow-hidden'>
                <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                  <Transition.Child
                    as={Fragment}
                    enter='transform transition ease-in-out duration-500 sm:duration-700'
                    enterFrom='translate-x-full'
                    enterTo='translate-x-0'
                    leave='transform transition ease-in-out duration-100 sm:duration-300'
                    leaveFrom='translate-x-0'
                    leaveTo='translate-x-full'
                  >
                    <Dialog.Panel className='lg;max-w-lg pointer-events-auto w-screen max-w-md xl:max-w-xl'>
                      <div className='flex h-full flex-col  bg-mgray-300 py-3 shadow-xl dark:bg-mblack-700'>
                        <div className='px-6 lg:px-24'>
                          <div className='flex'>
                            <div className='ml-auto flex h-7 items-center'>
                              <button
                                type='button'
                                className='textHover'
                                onClick={() => setOpen(false)}
                              >
                                <span className='sr-only'>Close panel</span>
                                <XMarkIcon
                                  className='h-8 w-8'
                                  aria-hidden='true'
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='relative mx-auto mt-6 flex flex-1 items-center'>
                          <div className='space-y-3 lg:space-y-6'>
                            {menu.map((item, i) => (
                              <Link
                                key={i}
                                href={item.path}
                                className='textHover block cursor-pointer text-2xl duration-300 md:text-3xl xl:text-5xl'
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
      <div className='relative h-[0.3vh] w-full opacity-90'>
        <Image
          src='/home_gradient.svg'
          fill
          priority
          alt='econ crime lab'
          className=' object-cover'
        />
      </div>
    </header>
  );
};

export default Header;
