import { getTranslations } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <ContactForm />
    </>
  );
}
