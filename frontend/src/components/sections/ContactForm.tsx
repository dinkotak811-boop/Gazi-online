'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                  {t('title')}
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">{t('subtitle')}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/30 focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20 transition-all"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/30 focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20 transition-all"
                    placeholder="০১XXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.service')}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/30 focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20 transition-all"
                  >
                    <option value="">সেবা নির্বাচন করুন</option>
                    <option value="electric">বিদ্যুৎ বিল</option>
                    <option value="recharge">মোবাইল রিচার্জ</option>
                    <option value="banking">ব্যাংকিং সেবা</option>
                    <option value="print">প্রিন্ট/স্ক্যান</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/30 focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20 transition-all resize-none"
                    placeholder="আপনার বার্তা লিখুন..."
                  />
                </div>

                <GlassButton type="submit" className="w-full" size="lg">
                  {status === 'loading' ? <span className="animate-spin">⌛</span> : <><Send className="w-5 h-5" />{t('form.submit')}</>}
                </GlassButton>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5" />{t('form.success')}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-600 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                    {t('form.error')}
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold mb-6">{t('info.address')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">দোকানের ঠিকানা</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">আপনার পূর্ণ ঠিকানা এখানে লিখুন</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('info.phone')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+৮৮০ ১XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('info.email')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">info@gazionline.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('info.hours')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">প্রতিদিন সকাল ৯টা - রাত ৯টা</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0!2d90.0!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA5MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale dark:invert-[0.9]"
              />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
