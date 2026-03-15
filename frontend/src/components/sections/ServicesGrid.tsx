'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Zap, Smartphone, Wallet, CreditCard, 
  Image, Scan, Copy, Globe, 
  Landmark, Banknote, PiggyBank, HandCoins 
} from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

const services = [
  { id: 'electricBill', icon: Zap, category: 'digital' },
  { id: 'mobileRecharge', icon: Smartphone, category: 'digital' },
  { id: 'phonepe', icon: Wallet, category: 'digital' },
  { id: 'gpay', icon: CreditCard, category: 'digital' },
  { id: 'photoPrint', icon: Image, category: 'digital' },
  { id: 'documentScan', icon: Scan, category: 'digital' },
  { id: 'xerox', icon: Copy, category: 'digital' },
  { id: 'internet', icon: Globe, category: 'internet' },
  { id: 'accountOpen', icon: Landmark, category: 'banking' },
  { id: 'cashWithdrawal', icon: Banknote, category: 'banking' },
  { id: 'cashDeposit', icon: PiggyBank, category: 'banking' },
  { id: 'loan', icon: HandCoins, category: 'banking' },
];

export default function ServicesGrid() {
  const t = useTranslations('services');

  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover glow className="h-full p-6 group">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-green/20 to-primary-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary-green" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
                      {t(`items.${service.id}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {t(`items.${service.id}.desc`)}
                    </p>
                    <GlassButton href={`/contact?service=${service.id}`} variant="outline" size="sm" className="w-full">
                      {t('getIt')}
                    </GlassButton>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
