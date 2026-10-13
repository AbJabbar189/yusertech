import React from 'react';
import {
  CheckCircle2,
  Phone,
  Clock,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { isUrdu } = useLanguage();

  return (
    <div className={`bg-[#F8FAFC] py-14 sm:py-20 font-sans ${isUrdu ? 'font-nastaliq' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isUrdu ? `تعارف فایجیکس ٹیک` : `About ${siteConfig.brand.name}`}
          title={isUrdu ? 'حقیقی کاروباری ضروریات کے مطابق تیار کردہ مضبوط ٹیکنالوجی' : 'Practical Software Built for Ground-Level Business Realities'}
          subtitle={
            isUrdu
              ? `بانیان: فیاض خان اور عبدالجبار، مقام: اورنگی ٹاؤن، کراچی۔ ہم کسٹم پوائنٹ آف سیل (POS) سافٹ ویئر، مکمل کمپیوٹر بلنگ کاؤنٹرز، ادارہ جاتی مینجمنٹ اور ورک فلو آٹومیشن ۱۰۰٪ بغیر انٹرنیٹ آف لائن فراہم کرتے ہیں۔`
              : `Founded by Fayyaz Khan & Abdul Jabbar in Orangi Town, Karachi. Tagline: "${siteConfig.brand.tagline}" We design and install custom point-of-sale systems, complete PC setups, institutional management tools, and workflow automation.`
          }
        />

        {/* FOUNDERS SHOWCASE */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#0056D2] uppercase tracking-wider bg-[#EEF4FF] px-3.5 py-1.5 rounded-full border border-blue-200">
              {isUrdu ? 'کمپنی کی قیادت' : 'Company Leadership'}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2 ${isUrdu ? 'font-nastaliq' : ''}`}>
              {isUrdu ? 'بانیان سے ملیں' : 'Meet the Founders'}
            </h2>
            <p className={`text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-1 ${isUrdu ? 'font-nastaliq' : ''}`}>
              {isUrdu
                ? 'جب آپ فایجیکس ٹیک کے ساتھ کام کرتے ہیں، تو آپ براہ راست کمپنی کے بانیوں سے رابطہ میں رہتے ہیں۔ بغیر کسی درمیانی ایجنٹ یا کال سینٹر کے۔'
                : `When you hire ${siteConfig.brand.name}, you collaborate directly with the company founders. No middlemen or support queues.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fayyaz Khan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover-lift">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="relative">
                    <img
                      src="./images/fayyaz_khan.jpg"
                      alt="Fayyaz Khan Founder FAYJEXTECH"
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0056D2] shadow-md"
                    />
                    <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0056D2] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                      ✓
                    </span>
                  </div>
                  <Badge variant="primary">{isUrdu ? 'بانی (Founder)' : 'Founder'}</Badge>
                </div>
                <h3 className={`text-xl font-bold text-[#0F172A] ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {isUrdu ? 'فیاض خان' : 'Fayyaz Khan'}
                </h3>
                <span className={`text-xs text-[#0056D2] font-bold block mb-3 ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {isUrdu ? 'بانی اور بزنس اسٹریٹجسٹ' : 'Founder & Business Strategist'}
                </span>
                <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {isUrdu
                    ? 'فیاض خان بزنس اسٹریٹجی، کلائنٹ کی ضروریات کا جائزہ، پراجیکٹ منصوبہ بندی اور شفاف تجارتی رہنمائی کی نگرانی کرتے ہیں۔ وہ یقینی بناتے ہیں کہ ہر دکاندار اور ادارے کو مارکیٹ کے مطابق شفاف حل ملے۔'
                    : `${siteConfig.founders[0].bio} Fayyaz oversees business strategy, client requirements analysis, project roadmaps, and ensures every client gets an honest, transparent engagement tailored for the local market.`}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <span className="text-slate-400">{isUrdu ? 'ای میل:' : 'Email:'}</span>
                  <a href="mailto:Fyyz2238@gmail.com" className="text-[#0056D2] hover:underline font-bold">
                    Fyyz2238@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]" dir="ltr">
                  <Phone className="w-3.5 h-3.5 text-[#0056D2]" />
                  <span>{isUrdu ? 'ہیلپ لائن: 0348 9133738' : `Helpline: ${siteConfig.contact.phone}`}</span>
                </div>
              </div>
            </div>

            {/* Abdul Jabbar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover-lift">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="relative">
                    <img
                      src="./images/abdul_jabbar.jpg"
                      alt="Abdul Jabbar Co-Founder FAYJEXTECH"
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-[#00B050] shadow-md"
                    />
                    <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#00B050] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                      ✓
                    </span>
                  </div>
                  <Badge variant="accent">{isUrdu ? 'شریک بانی (Co-Founder)' : 'Co-Founder'}</Badge>
                </div>
                <h3 className={`text-xl font-bold text-[#0F172A] ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {isUrdu ? 'عبدالجبار' : 'Abdul Jabbar'}
                </h3>
                <span className={`text-xs text-[#00873D] font-bold block mb-3 ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {isUrdu ? 'شریک بانی اور لیڈ سسٹمز انجینئر' : 'Co-Founder & Lead Systems Engineer'}
                </span>
                <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 ${isUrdu ? 'font-nastaliq' : ''}`}>
                  {isUrdu
                    ? 'عبدالجبار پائتھون سافٹ ویئر ڈیولپمنٹ، آف لائن ڈیٹا بیس سنکرونائزیشن، ہارڈ ویئر تھرمل پرنٹر ڈرائیورز، مکمل کمپیوٹر کاؤنٹر فٹنگ اور ورک فلو آٹومیشن کے ہیڈ ہیں۔'
                    : `${siteConfig.founders[1].bio} Abdul Jabbar leads full-stack software development, offline database synchronization, hardware thermal printer drivers, complete PC setups, and custom workflow scripts.`}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <span className="text-slate-400">{isUrdu ? 'ای میل:' : 'Email:'}</span>
                  <a href="mailto:abduljabbarlala189@gmail.com" className="text-[#0056D2] hover:underline font-bold">
                    abduljabbarlala189@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]" dir="ltr">
                  <Phone className="w-3.5 h-3.5 text-[#00B050]" />
                  <span>{isUrdu ? 'ہیلپ لائن: 0348 9133738' : `Helpline: ${siteConfig.contact.phone}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Working Hours Notice */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 hover-lift">
          <div className="flex items-center gap-2.5 mb-3">
            <MapPin className="w-5 h-5 text-[#0056D2]" />
            <h3 className={`text-base font-bold text-[#0F172A] ${isUrdu ? 'font-nastaliq' : ''}`}>
              {isUrdu ? 'مرکز: اورنگی ٹاؤن، کراچی' : 'Based in Orangi Town, Karachi'}
            </h3>
          </div>
          <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 ${isUrdu ? 'font-nastaliq' : ''}`}>
            {isUrdu
              ? 'ہم اورنگی ٹاؤن، کراچی سے فخریہ خدمات فراہم کر رہے ہیں۔ ہماری ٹیم پورے کراچی میں دکانوں پر وزٹ، ہارڈ ویئر سیٹ اپ اور ریموٹ سافٹ ویئر سروس مہیا کرتی ہے۔ فزیکل کمرشل آفس سہولت پر کام جاری ہے۔'
              : 'We operate proudly from Orangi Town, Karachi. Our team provides direct on-site client consultations, shop visits, hardware setup, and remote software delivery across Karachi. Commercial office facilities are currently in development.'}
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-[#0056D2] shrink-0" />
              <span>
                <strong>{isUrdu ? 'دفتری اوقات:' : 'Office Hours:'}</strong>{' '}
                {isUrdu ? 'پیر تا جمعرات اور ہفتہ: صبح ۹ بجے تا شام ۵ بجے' : 'Monday – Thursday & Saturday: 9:00 AM – 5:00 PM (PKT)'}
              </span>
            </div>
            <span className="font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-md border border-rose-200">
              {isUrdu ? 'جمعہ اور اتوار: چھٹی (بند)' : 'Friday & Sunday: Closed (Jumma & Itwar Off)'}
            </span>
          </div>
        </div>

        {/* Mission & Approach with Hardware Integration */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 hover-lift space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B050]" />
            <span className={`text-xs font-bold uppercase tracking-wider text-[#0056D2] ${isUrdu ? 'font-nastaliq' : ''}`}>
              {isUrdu ? 'ہمارا مشن: آپ کا آئیڈیا۔ ہماری ٹیکنالوجی۔' : 'Our Mission: Your Ideas. Our Technology.'}
            </span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-bold text-[#0F172A] ${isUrdu ? 'font-nastaliq' : ''}`}>
            {isUrdu
              ? 'فایجیکس ٹیک آپ کے آئیڈیاز کو جدید ٹیکنالوجی میں ڈھالتی ہے: کسٹم پی او ایس سافٹ ویئر، بزنس مینجمنٹ سسٹم، ورک فلو آٹومیشن اور تیز رفتار ویب سائٹس جو پاکستانی مارکیٹ کے لیے تیار کی گئی ہیں۔'
              : siteConfig.brand.missionStatement}
          </h2>
          <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>
            {isUrdu
              ? 'پاکستانی دکاندار اور کاروباری مالکان اکثر کمزور کلاؤڈ سافٹ ویئر کی وجہ سے پریشان ہوتے ہیں جو انٹرنیٹ جاتے ہی بند ہو جاتا ہے۔ فایجیکس ٹیک مکمل حل فراہم کرتی ہے: کسٹم پائتھون سافٹ ویئر + کمپیوٹر کاؤنٹر ہارڈ ویئر (ڈیسک ٹاپ پی سی، تھرمل پرنٹر، بارکوڈ اسکینر، کیش دراز) جو ۱۰۰٪ بغیر انٹرنیٹ آف لائن کام کرتا ہے۔'
              : `Pakistani shopkeepers and business owners frequently suffer from fragile cloud software that halts transactions when the internet flickers or power cuts occur. ${siteConfig.brand.name} delivers complete solutions: custom software + PC counter hardware (desktops, thermal printers, barcode scanners, cash drawers) built to run offline 100% of the time.`}
          </p>
        </div>

        {/* Who We Serve */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 hover-lift">
          <h3 className={`text-lg font-bold text-[#0F172A] mb-4 ${isUrdu ? 'font-nastaliq' : ''}`}>
            {isUrdu ? 'ہم کراچی اور دیگر شہروں میں کن کاروباروں کو خدمات دیتے ہیں' : `Who ${siteConfig.brand.name} Serves in Karachi & Beyond`}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: isUrdu ? 'ریٹیل تاجر اور سپر مارٹس' : 'Retail Merchants & Super Marts',
                desc: isUrdu ? 'بلنگ کمپیوٹر اور کاؤنٹر سیٹ اپ جو انٹرنیٹ بند ہونے یا لوڈ شیڈنگ میں بھی بلاتعطل چلتے رہیں۔' : 'Billing terminals and PC setups that keep running smoothly without crashing during local internet blackouts or load shedding.',
              },
              {
                title: isUrdu ? 'بیکریاں، کیفے اور مٹھائی شاپس' : 'Bakeries, Cafes & Confectioneries',
                desc: isUrdu ? 'الیکٹرانک وزنی کانٹے سے کنکشن، خراب ہونے والے سامان کا الرٹ اور پیشگی کیک بکنگ۔' : 'Electronic weighing scale integration, perishable stock alert, and rapid advance cake bookings.',
              },
              {
                title: isUrdu ? 'فارمیسیز اور میڈیکل اسٹورز' : 'Pharmacies & Medical Stores',
                desc: isUrdu ? 'میڈیسن بیچ نمبر اور ایکسپائری کنٹرول، فارمولا تلاش اور فوری کاؤنٹر بلنگ۔' : 'Batch number expiry control, generic formula searches, and rapid counter checkout.',
              },
              {
                title: isUrdu ? 'ہول سیلرز، ڈسٹری بیوٹرز اور کھاتہ' : 'Wholesalers, Distributors & Ledgers',
                desc: isUrdu ? 'کسٹمر کریڈٹ کھاتہ، گودام اسٹاک مانیٹرنگ اور خودکار پی ڈی ایف رسیدیں۔' : 'Customer credit ledgers (Khata), godown inventory tracking, and automated PDF invoicing.',
              },
            ].map((aud, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0" />
                  <h4 className={`text-xs font-bold text-[#0F172A] ${isUrdu ? 'font-nastaliq' : ''}`}>{aud.title}</h4>
                </div>
                <p className={`text-[11px] text-slate-600 pl-6 leading-relaxed ${isUrdu ? 'font-nastaliq' : ''}`}>{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[#002B66] text-white text-center shadow-lg relative overflow-hidden">
          <h2 className={`text-xl sm:text-2xl font-bold text-white mb-2 ${isUrdu ? 'font-nastaliq' : ''}`}>
            {isUrdu ? 'آئیے اپنے کاروبار کے سافٹ ویئر اور کمپیوٹر سیٹ اپ پر بات کریں' : 'Let’s Discuss Your Business Software & PC Setup Needs'}
          </h2>
          <p className={`text-xs sm:text-sm text-slate-200 max-w-lg mx-auto mb-6 ${isUrdu ? 'font-nastaliq' : ''}`}>
            {isUrdu ? 'فوری رہنمائی اور لائیو ڈیمو کے لیے فیاض خان یا عبدالجبار سے براہ راست رابطہ کریں۔' : 'Call or message Fayyaz Khan or Abdul Jabbar directly for honest guidance and live demonstrations.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.founders[1].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white font-bold text-xs shadow-md transition-all"
            >
              {isUrdu ? 'واٹس ایپ: عبدالجبار' : 'WhatsApp Abdul Jabbar'}
            </a>
            <a
              href={`https://wa.me/${siteConfig.founders[0].phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
            >
              {isUrdu ? 'واٹس ایپ: فیاض خان' : 'WhatsApp Fayyaz Khan'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
