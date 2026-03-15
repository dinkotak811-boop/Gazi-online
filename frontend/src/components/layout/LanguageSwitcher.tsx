'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'bn' ? 'en' : 'bn';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{currentLocale}</span>
    </motion.button>
  );
}
