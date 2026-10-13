import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Monitor } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ProductItem } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';

export const ProductsPage: React.FC = () => {
  const { isUrdu } = useLanguage();

  return (
    <div className={`bg-[#F8FAFC] py-14 sm:py-20 font-sans ${isUrdu ? 'font-nastaliq' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isUrdu ? 'سافٹ ویئر اور ہارڈ ویئر حل' : 'Software & Hardware Solutions'}
          title={isUrdu ? 'آپ کے کاروبار کے مطابق تیار کردہ کسٹم سافٹ ویئر اور کمپیوٹر سیٹ اپ' : 'Custom Software & PC Setups Engineered for Your Trade'}
          subtitle={
            isUrdu
              ? 'فایجیکس ٹیک ہر قسم کے کاروبار کے لیے کسٹم پی او ایس سافٹ ویئر، مکمل کمپیوٹر کاؤنٹر ہارڈ ویئر، ادارہ جاتی مینجمنٹ اور ورک فلو آٹومیشن ۱۰۰٪ بغیر انٹرنیٹ آف لائن صلاحیت کے ساتھ فراہم کرتی ہے۔'
              : `${siteConfig.brand.name} builds customized POS systems for all trade types, complete PC counter hardware, institutional management systems, and business automation platforms with 100% offline reliability.`
          }
        />

        {/* Products Grid */}
        <div className="space-y-12">
          {siteConfig.products.map((product: ProductItem, index: number) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover-lift"
            >
              <div className="p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Product Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Solution 0{index + 1} • {product.category}
                      </span>
                      <Badge variant={product.status}>{product.status}</Badge>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
                      {product.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {product.fullDescription}
                    </p>

                    {/* Intended Users */}
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0056D2] block mb-2">
                        {isUrdu ? 'موزوں کاروبار:' : 'Target Businesses:'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.targetAudience.map((audience, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700"
                          >
                            {isUrdu
                              ? audience === 'Supermarkets & Grocery Mini-Marts' ? 'سپر مارکیٹس اور گروسری مارٹس'
                                : audience === 'Bakeries, Confectioneries & Pastry Shops' ? 'بیکریاں اور مٹھائی شاپس'
                                : audience === 'Retail Boutiques & Garment Stores' ? 'گارمنٹس اور ریٹیل بوتیک'
                                : audience === 'Pharmacies & Medical Stores' ? 'فارمیسیز اور میڈیکل اسٹورز'
                                : audience === 'Wholesale Godowns & Distribution Counters' ? 'ہول سیل گودام اور ڈسٹری بیوشن'
                                : audience === 'Residential Madaris (Madrasas with Boarding/Hostels)' ? 'رہائشی مدارس و جامعات'
                                : audience === 'Quranic Hifz & Nazira Academies' ? 'قرآنی حفظ و ناظرہ اکیڈمیز'
                                : audience === 'Community Schools & Tuition Centers' ? 'اسکولز اور ٹیوشن سینٹرز'
                                : audience
                              : audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0056D2] block mb-2">
                        {isUrdu ? 'بنیادی فیچرز اور ماڈیولز:' : 'Core Built-in Modules:'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {product.keyFeatures.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-[#0F172A] block text-xs">
                                {isUrdu
                                  ? feat.title === 'Offline Local Engine' ? 'آف لائن لوکل پائتھون انجن'
                                    : feat.title === 'High-Speed Barcode Billing' ? 'تیز رفتار بارکوڈ بلنگ'
                                    : feat.title === 'Thermal Slip & Invoice Printing' ? 'تھرمل پرچی اور انوائس پرنٹنگ'
                                    : feat.title === 'Inventory & Low Stock Warning' ? 'انوینٹری اور کم اسٹاک الرٹ'
                                    : feat.title === 'Shift Reconciliation Report' ? 'کیش کاؤنٹر شفٹ رپورٹ'
                                    : feat.title === 'Trade-Specific Custom Modules' ? 'کاروبار کے مطابق کسٹم ماڈیولز'
                                    : feat.title
                                  : feat.title}
                              </strong>
                              <span className="text-[11px] text-slate-500">
                                {isUrdu
                                  ? feat.title === 'Offline Local Engine' ? 'بغیر انٹرنیٹ کے براہ راست لوکل کمپیوٹر پر بلنگ جاری رہتی ہے۔'
                                    : feat.title === 'High-Speed Barcode Billing' ? 'بارکوڈ اسکینر اور کوئیک ٹچ سے فوری آئٹم تلاش اور بلنگ۔'
                                    : feat.title === 'Thermal Slip & Invoice Printing' ? '۵۸ اور ۸۰ ملی میٹر تھرمل پرنٹر پر اردو/انگریزی دکان کا نام اور لوگو۔'
                                    : feat.title === 'Inventory & Low Stock Warning' ? 'بل مکمل ہوتے ہی خودکار اسٹاک کٹوتی اور کم مال پر پیشگی وارننگ۔'
                                    : feat.title === 'Shift Reconciliation Report' ? 'دن کے اختتام پر کیش دراز اور وصولی کا مکمل شفاف آڈٹ۔'
                                    : feat.title === 'Trade-Specific Custom Modules' ? 'بیکری کے لیے وزنی کانٹا اور ایڈوانس بکنگ، میڈیکل کے لیے ایکسپائری۔'
                                    : feat.description
                                  : feat.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <Button
                      to={`/products/${product.slug}`}
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4 rtl-flip" />}
                    >
                      {isUrdu ? 'مکمل تفصیلات دیکھیں' : 'View Specifications'}
                    </Button>
                    <a
                      href={`https://wa.me/${siteConfig.founders[1].phoneClean}?text=Salam%20Abdul%20Jabbar%20bhai%2C%20mujhe%20${encodeURIComponent(product.name)}%20k%20baare%20mein%20puchna%20hai.`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00B050] hover:bg-[#009644] text-white text-xs font-bold shadow-md transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{isUrdu ? 'واٹس ایپ پر رابطہ کریں' : 'WhatsApp Abdul Jabbar'}</span>
                    </a>
                  </div>
                </div>

                {/* Right: Technical Specs Box */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0056D2]">
                      {isUrdu ? 'ہارڈ ویئر اور سسٹم تفصیلات' : 'Hardware & System Specs'}
                    </h3>
                    <span className="text-[11px] font-mono text-[#00873D] bg-emerald-50 px-2.5 py-0.5 rounded font-bold border border-emerald-200">
                      {isUrdu ? '۱۰۰٪ آف لائن تیار' : 'Offline Ready'}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-500 block text-[11px]">
                        {isUrdu ? 'پلیٹ فارم:' : 'Platform:'}
                      </span>
                      <strong className="text-[#0F172A]">{product.specs.platform}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">
                        {isUrdu ? 'آف لائن پائیداری:' : 'Offline Durability:'}
                      </span>
                      <strong className="text-[#00873D] font-bold">
                        {isUrdu ? 'مکمل آف لائن مقامی سیلز انجن (پائتھون کور)' : product.specs.offlineSupport}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">
                        {isUrdu ? 'ڈیٹا بیس سسٹم:' : 'Database Architecture:'}
                      </span>
                      <strong className="text-[#0F172A]">{product.specs.database}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">
                        {isUrdu ? 'پرچی اور رپورٹس:' : 'Exports & Slips:'}
                      </span>
                      <strong className="text-[#0F172A]">
                        {isUrdu ? 'تھرمل رسیدیں، پی ڈی ایف کھاتہ، ایکسل ایکسپورٹ' : product.specs.dataExport}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">
                        {isUrdu ? 'لائسنس اور ملکیت:' : 'Licensing:'}
                      </span>
                      <strong className="text-[#0F172A]">
                        {isUrdu ? 'ایک بار کی فیس، لائف ٹائم ملکیت (زیرو ماہانہ کرایہ)' : product.specs.licenseModel}
                      </strong>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-[#0056D2] flex items-center gap-1.5">
                      <Monitor className="w-4 h-4 text-[#00B050]" />
                      <span>{isUrdu ? 'کراچی میں دکان پر مکمل فٹنگ:' : 'Turnkey PC & Printer Setup in Karachi:'}</span>
                    </span>
                    <p className="text-[11px] text-slate-600">
                      {isUrdu
                        ? 'عبدالجبار اور فیاض خان خود دکان پر آ کر کمپیوٹر سیٹ اپ، ۵۸ اور ۸۰ ملی میٹر تھرمل پرنٹر، بارکوڈ اسکینر اور کیشیئر کی مکمل ٹریننگ دیتے ہیں۔'
                        : 'Abdul Jabbar and Fayyaz Khan assist on-site in Karachi with desktop PC setup, 58mm/80mm thermal printers, USB barcode scanners, and cashier training.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
