'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const testimonials = [
  {
    name: 'রহিম আহমেদ',
    role: 'ব্যবসায়ী',
    content: 'গাজী অনলাইনের সেবা অসাধারণ! বিদ্যুৎ বিল পরিশোধ করতে মাত্র কয়েক মিনিট লাগে।',
    rating: 5,
  },
  {
    name: 'ফাতেমা বেগম',
    role: 'গৃহিণী',
    content: 'মোবাইল রিচার্জ এবং ব্যাংকিং সেবা খুবই নিরাপদ। সবসময় সহায়তা পাই।',
    rating: 5,
  },
  {
    name: 'করিম মিয়া',
    role: 'ছাত্র',
    content: 'ডকুমেন্ট স্ক্যান এবং প্রিন্টিং সেবা খুবই ভালো। দামও reasonable।',
    rating: 5,
  },
  {
    name: 'সেলিনা আক্তার',
    role: 'শিক্ষক',
    content: 'ঋণ সেবার জন্য দারুণ পরামর্শ পেয়েছি। সত্যিই বিশ্বস্ত প্রতিষ্ঠান।',
    rating: 5,
  },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-20 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-green/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-green to-primary-blue flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
