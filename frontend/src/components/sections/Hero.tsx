'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Zap } from 'lucide-react';
import GlassButton from '@/components/ui/GlassButton';
import { getWhatsAppLink } from '@/lib/utils';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Zap className="w-4 h-4 text-primary-green" />
              <span className="text-sm font-medium">২৪/৭ সেবা উপলব্ধ</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                {t('subtitle')}
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-100">{t('title')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t('description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <GlassButton href="https://maps.app.goo.gl/jzgezYgWLWD9NGj26" size="lg">
                <MapPin className="w-5 h-5" />
                {t('visitShop')}
              </GlassButton>
              <GlassButton
                href={getWhatsAppLink('স্বাগতম! আমি গাজী অনলাইন থেকে যোগাযোগ করছি।')}
                variant="secondary"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t('contactWhatsApp')}
              </GlassButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-green/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-dashed border-primary-blue/30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-3xl p-8 text-center max-w-xs">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-green to-primary-blue flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">দ্রুত সেবা</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">সকল ডিজিটাল সেবা একই ছাদের নিচে</p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">অনলাইন</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary-green">১০০০+</span>
                  <span className="text-sm">সন্তুষ্ট গ্রাহক</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
