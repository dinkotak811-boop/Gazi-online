import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">{t('title')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </motion.div>
        <ServicesGrid />
      </div>
    </div>
  );
}
