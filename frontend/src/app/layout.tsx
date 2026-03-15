import type { Metadata } from 'next';
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoBengali = Noto_Sans_Bengali({ subsets: ['bengali'], variable: '--font-bengali', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'গাজী অনলাইন - ডিজিটাল সেবা কেন্দ্র',
  description: 'আপনার স্থানীয় ডিজিটাল এবং ব্যাংকিং সেবা কেন্দ্র। বিদ্যুৎ বিল, মোবাইল রিচার্জ, ব্যাংকিং সেবা এবং আরও অনেক কিছু।',
  keywords: ['ডিজিটাল সেবা', 'ব্যাংকিং', 'বিদ্যুৎ বিল', 'মোবাইল রিচার্জ', 'গাজী অনলাইন'],
  authors: [{ name: 'Gazi Online' }],
  openGraph: {
    title: 'গাজী অনলাইন - ডিজিটাল সেবা কেন্দ্র',
    description: 'আপনার স্থানীয় ডিজিটাল এবং ব্যাংকিং সেবা কেন্দ্র',
    type: 'website',
    locale: 'bn_BD',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoBengali.variable} font-bengali`}>{children}</body>
    </html>
  );
}
