import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent mb-4">
              গাজী অনলাইন
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{t('tagline')}</p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h4 className="font-semibold mb-4">দ্রুত লিংক</h4>
            <div className="flex flex-col gap-2">
              <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary-green transition-colors">
                সেবাসমূহ
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-green transition-colors">
                আমাদের সম্পর্কে
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-green transition-colors">
                যোগাযোগ
              </Link>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h4 className="font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-primary-green" />
                <span>আপনার ঠিকানা, শহর</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 text-primary-green" />
                <span>+৮৮০ ১XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5 text-primary-green" />
                <span>সকাল ৯টা - রাত ৯টা</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} গাজী অনলাইন। {t('rights')}।</p>
        </div>
      </div>
    </footer>
  );
}
