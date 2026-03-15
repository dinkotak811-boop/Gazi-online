import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['bn', 'en'],
  defaultLocale: 'bn',
  pathnames: {
    '/': '/',
    '/about': { bn: '/amader-somporki', en: '/about' },
    '/services': { bn: '/seba-somuho', en: '/services' },
    '/contact': { bn: '/jogajog', en: '/contact' },
    '/admin': { bn: '/admin', en: '/admin' }
  }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
