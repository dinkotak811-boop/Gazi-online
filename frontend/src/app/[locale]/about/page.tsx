import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

export default function AboutPage() {
  const t = useTranslations('about');

  const stats = [
    { icon: Users, value: '১০০০+', label: t('stats.customers') },
    { icon: Award, value: '১২+', label: t('stats.services') },
    { icon: Award, value: '৬+', label: t('stats.experience') },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">{t('title')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t('description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <GlassCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-green/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-green" />
                </div>
                <h2 className="text-2xl font-bold">{t('mission.title')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{t('mission.text')}</p>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <GlassCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-blue" />
                </div>
                <h2 className="text-2xl font-bold">{t('vision.title')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{t('vision.text')}</p>
            </GlassCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}>
                <GlassCard className="p-6 text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary-green" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
