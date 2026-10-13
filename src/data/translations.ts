export interface ContentDictionary {
  // Top Strip & Brand
  tagline: string;
  topLocation: string;
  topTimings: string;
  callUs: string;
  whatsappUs: string;

  // Nav Items
  navHome: string;
  navProducts: string;
  navPortfolio: string;
  navAbout: string;
  navFaq: string;
  navContact: string;

  // Hero Section
  heroBadge: string;
  heroTitleLead: string;
  heroTitleHighlight: string;
  heroTitleEnd: string;
  heroDescription: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroFreeConsult: string;
  heroOfflineGuarantee: string;
  heroLocalHardware: string;

  // Metrics Bar
  metric1Label: string;
  metric1Sub: string;
  metric2Label: string;
  metric2Sub: string;
  metric3Label: string;
  metric3Sub: string;
  metric4Label: string;
  metric4Sub: string;

  // Problem / Reality Section
  problemBadge: string;
  problemTitle: string;
  problemSubtitle: string;
  p1Title: string;
  p1Desc: string;
  p2Title: string;
  p2Desc: string;
  p3Title: string;
  p3Desc: string;

  // Services / Solutions Section
  servicesBadge: string;
  servicesTitle: string;
  servicesSubtitle: string;

  // Process / 3 Steps (Nanosoft Style)
  processBadge: string;
  processTitle: string;
  processSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  // Industries Section
  industriesBadge: string;
  industriesTitle: string;
  industriesSubtitle: string;

  // Gallery & Founders Section
  galleryBadge: string;
  galleryTitle: string;
  gallerySubtitle: string;
  founder1Role: string;
  founder1Bio: string;
  founder2Role: string;
  founder2Bio: string;

  // Why Choose Us (Nanosoft Futuristic Section)
  whyBadge: string;
  whyTitle: string;
  whySubtitle: string;
  whyCta: string;

  // Testimonials
  testimonialsBadge: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  // Bottom Banner
  bannerTitle: string;
  bannerDesc: string;
  bannerPrimaryCta: string;
  bannerSecondaryCta: string;
  bannerOfficeNote: string;

  // Footer
  footerAbout: string;
  footerQuickLinks: string;
  footerContact: string;
  footerTimings: string;
  footerRights: string;
}

export const translations: Record<'en-ur' | 'ur', ContentDictionary> = {
  // English + Roman Urdu Mode (Friendly Pakistani Market Blend)
  'en-ur': {
    tagline: 'Your Ideas. Our Technology.',
    topLocation: 'Orangi Town, Karachi (All Karachi Service)',
    topTimings: 'Mon–Thu & Sat: 9:00 AM – 5:00 PM (Jumma aur Itwar Off)',
    callUs: 'Call Helpline',
    whatsappUs: 'WhatsApp Par Rabta Karein',

    navHome: 'Home',
    navProducts: 'POS & Software Products',
    navPortfolio: 'Portfolio & Kaam',
    navAbout: 'About & Founders',
    navFaq: 'Sawaal Jawab (FAQ)',
    navContact: 'Rabta Karein (Contact)',

    heroBadge: 'Karachi Ka Apna Reliable Tech Partner',
    heroTitleLead: 'Aap Ka Business Idea.',
    heroTitleHighlight: 'Hamari Mazboot Technology.',
    heroTitleEnd: 'Karachi k Market k Mutabiq.',
    heroDescription:
      'Retail marts, super stores, bakeries, pharmacies aur wholesale shops k liye mukammal POS Software, PC Billing Counters, Inventory Management aur Automation — 100% Offline chalne wala, baghair kisi monthly fees k.',
    heroPrimaryCta: 'Billing Setup Lagwayen',
    heroSecondaryCta: 'WhatsApp Helpline (0348 9133738)',
    heroFreeConsult: 'Free Counter Setup Mashwara',
    heroOfflineGuarantee: '100% Offline Kaam Karega (No Internet Needed)',
    heroLocalHardware: 'Thermal Printer, Scanner aur Cash Drawer Ready',

    metric1Label: '100% Offline',
    metric1Sub: 'Internet band ho tab bhi billing nahi rukegi',
    metric2Label: 'Zero Monthly Fee',
    metric2Sub: 'Ek dafa lagwayen, lifetime apka apna',
    metric3Label: '500+ Items/Sec',
    metric3Sub: 'Tez-tareen barcode scanning aur receipt print',
    metric4Label: 'Karachi Support',
    metric4Sub: 'On-site installation aur live helpline madad',

    problemBadge: 'Pakistani Market Ki Asal Mushkilaat',
    problemTitle: 'Purane Tareeqon Se Business Me Nuqsan Kyun Hota Hai?',
    problemSubtitle: 'Hath se parchi banana, Excel sheets ya mehnge monthly software apke karobar ko aage barhne se rokte hain:',
    p1Title: 'Hisaab Kitaab Aur Stock Ki Chori',
    p1Desc: 'Register me ghalat hisaab aur stock ka pta na chalna dukan me barha nuqsan karwata hai.',
    p2Title: 'Internet Band Tou Kaam Thapp',
    p2Desc: 'Cloud software me jab net ya light jati hai tou counter par customer ki lambi line lag jati hai.',
    p3Title: 'Har Mahine Mehangi Subscriptions',
    p3Desc: 'Mehangai k daur me software walon ko har mahine hazaron rupay dena chote karobar par bojh hai.',

    servicesBadge: 'Hum Kya Khidmat Dete Hain',
    servicesTitle: 'Har Tarah Ka POS, Management Aur Automation System',
    servicesSubtitle: 'Aapki dukan, factory ya office k mutabiq tailor-made software aur PC counter hardware setup:',

    processBadge: 'Aasan 3 Marhala Process',
    processTitle: 'Aap Ka System Lagwana Bilkul Asaan Hai',
    processSubtitle: 'Call karein, requirement batayein aur 48 ghante me counter par live software payen:',
    step1Title: '1. Free Mashwara & Scoping',
    step1Desc: 'Humein call ya WhatsApp karein. Fayyaz Khan aur Abdul Jabbar apke business ka jaiza le kar behtareen solution batayenge.',
    step2Title: '2. Software Customization & Testing',
    step2Desc: 'Aapki dukan k rate list, item names, Urdu/English receipt aur discount policy k mutabiq software set kiya jata hai.',
    step3Title: '3. PC Setup, Printer & Counter Training',
    step3Desc: 'Aapke counter par PC, thermal receipt printer, barcode scanner connect kar k staff ko asan training di jati hai.',

    industriesBadge: 'Karachi Ke Karobar',
    industriesTitle: 'Har Field Aur Har Dukan K Liye Behtareen POS',
    industriesSubtitle: 'Chahe general store ho, pharmacy ho ya restaurant — har karobar ka mukammal hisaab:',

    galleryBadge: 'Asal Deployments Aur Team',
    galleryTitle: 'Real Counters, Asal Hardware Aur Hamari Leadership',
    gallerySubtitle: 'FAYJEXTECH k live counter setups, touch POS terminals aur founders Fayyaz Khan & Abdul Jabbar:',
    founder1Role: 'Founder & Business Strategist',
    founder1Bio: 'Client strategy, business analysis, counter planning aur client relationships.',
    founder2Role: 'Co-Founder & Lead Systems Engineer',
    founder2Bio: 'POS software development, PC hardware setup, networking aur workflow automation.',

    whyBadge: 'FAYJEXTECH Kyun Chunein?',
    whyTitle: 'Pakistani Dukan-daaron Ka Bharosemand Sathi',
    whySubtitle: 'Hum bekar ki English aur mushkil terms k bajaye seedha kaam karke dete hain jo counter par chale:',
    whyCta: 'Abhi Call Ya WhatsApp Karein',

    testimonialsBadge: 'Dukan-daaron Ki Rai',
    testimonialsTitle: 'Karachi K Karobari Bhai Kya Kehte Hain',
    testimonialsSubtitle: 'Hamare retail software aur PC hardware lagwane wale clients k tajarbaat:',

    bannerTitle: 'Apne Karobar Ko Modern Banayein!',
    bannerDesc: 'Orangi Town, Nazimabad, Saddar ya kisi b ilaqe me hon — FAYJEXTECH apke counter ko digital banane k liye tayar hai.',
    bannerPrimaryCta: 'Abhi Rabta Karein (Free Consultation)',
    bannerSecondaryCta: 'WhatsApp Helpline: 0348 9133738',
    bannerOfficeNote: 'Based in Orangi Town, Karachi • 9:00 AM – 5:00 PM (Monday–Thursday & Saturday • Jumma & Itwar Off)',

    footerAbout: 'FAYJEXTECH Karachi me custom POS software, inventory systems aur automation fraham karta hai. Founded by Fayyaz Khan & Abdul Jabbar.',
    footerQuickLinks: 'Zaroori Links',
    footerContact: 'Helpline & Dukan Rabta',
    footerTimings: 'Daftar Timings (9am - 5pm, Jumma/Itwar Off)',
    footerRights: 'Tamam Huqooq Mehfooz Hain.',
  },

  // Pure Nastaleeq Urdu Mode (خالص اردو نستعلیق رسم الخط)
  'ur': {
    tagline: 'آپ کا آئیڈیا۔ ہماری ٹیکنالوجی۔',
    topLocation: 'اورنگی ٹاؤن، کراچی (پورے کراچی میں سروس دستیاب ہے)',
    topTimings: 'پیر تا جمعرات اور ہفتہ: صبح ۹ بجے تا شام ۵ بجے (جمعہ اور اتوار چھٹی)',
    callUs: 'کال ہیلپ لائن',
    whatsappUs: 'واٹس ایپ پر رابطہ کریں',

    navHome: 'صفحۂ اول',
    navProducts: 'پی او ایس اور سافٹ ویئر',
    navPortfolio: 'ہمارا کام اور پراجیکٹس',
    navAbout: 'بانیان اور تعارف',
    navFaq: 'عام سوالات و جوابات',
    navContact: 'رابطہ کریں',

    heroBadge: 'کراچی کا اپنا قابل اعتماد ٹیکنالوجی پارٹنر',
    heroTitleLead: 'آپ کا کاروباری آئیڈیا۔',
    heroTitleHighlight: 'ہماری مضبوط ٹیکنالوجی۔',
    heroTitleEnd: 'پاکستانی مارکیٹ کے عین مطابق۔',
    heroDescription:
      'ریٹیل مارٹس، بیکریوں، میڈیکل اسٹورز، اور ہول سیل دکانوں کے لیے مکمل پی او ایس (POS) سافٹ ویئر، کمپیوٹر بلنگ کاؤنٹرز، انوینٹری مینجمنٹ اور آٹومیشن — ۱۰۰٪ بغیر انٹرنیٹ (آف لائن) چلنے والا، بغیر کسی ماہانہ فیس کے۔',
    heroPrimaryCta: 'بلنگ سسٹم لگوائیں',
    heroSecondaryCta: 'واٹس ایپ ہیلپ لائن (0348 9133738)',
    heroFreeConsult: 'مفت کاؤنٹر مشورہ اور رہنمائی',
    heroOfflineGuarantee: '۱۰۰٪ آف لائن کام کرے گا (انٹرنیٹ بند ہونے پر بھی بلنگ جاری)',
    heroLocalHardware: 'تھرمل پرنٹر، بارکوڈ اسکینر اور کیش ڈراور کی مکمل سیٹنگ',

    metric1Label: '۱۰۰٪ آف لائن',
    metric1Sub: 'انٹرنیٹ یا لائٹ نہ ہو تب بھی بلنگ نہیں رکے گی',
    metric2Label: 'صفر ماہانہ فیس',
    metric2Sub: 'ایک بار لگوائیں، ہمیشہ کے لیے آپ کی ملکیت',
    metric3Label: '۵۰۰+ آئٹمز فی سیکنڈ',
    metric3Sub: 'تیز ترین بارکوڈ اسکیننگ اور رسید پرنٹنگ',
    metric4Label: 'کراچی لوکل سپورٹ',
    metric4Sub: 'دکان پر آ کر انسٹالیشن اور مکمل رہنمائی',

    problemBadge: 'پاکستانی مارکیٹ کی اصل مشکلات',
    problemTitle: 'پرانے طریقوں سے کاروبار میں نقصان کیوں ہوتا ہے؟',
    problemSubtitle: 'ہاتھ سے کچی پرچیاں بنانا، کھاتوں کی الجھنیں اور مہنگے ماہانہ سافٹ ویئر آپ کے کاروبار کو آگے بڑھنے نہیں دیتے:',
    p1Title: 'حساب کتاب کی غلطیاں اور اسٹاک غائب ہونا',
    p1Desc: 'رجسٹر میں غلط اندراج اور گودام کے اسٹاک کا پتا نہ چلنا دکان میں بھاری مالی نقصان کرواتا ہے۔',
    p2Title: 'انٹرنیٹ بند تو کاؤنٹر پر کام ٹھپ',
    p2Desc: 'کلاؤڈ سافٹ ویئر میں جب انٹرنیٹ جاتا ہے تو کسٹمرز کی لمبی قطار لگ جاتی ہے اور گاہک ناراض ہو جاتا ہے۔',
    p3Title: 'ہر مہینے مہنگی فیسوں کا بوجھ',
    p3Desc: 'مہنگائی کے دور میں سافٹ ویئر کمپنیوں کو ہر مہینے ہزاروں روپے سبسکرپشن دینا دکاندار کے لیے بوجھ ہے۔',

    servicesBadge: 'ہماری خدمات',
    servicesTitle: 'ہر قسم کا پی او ایس، مینجمنٹ اور آٹومیشن سسٹم',
    servicesSubtitle: 'آپ کی دکان، گودام یا ادارے کے مطابق تیار کردہ جدید سافٹ ویئر اور کاؤنٹر ہارڈ ویئر سیٹ اپ:',

    processBadge: 'آسان ۳ مرحلہ وار طریقہ',
    processTitle: 'آپ کی دکان پر سسٹم لگوانا اب نہایت آسان ہے',
    processSubtitle: 'کال کریں، اپنی ضرورت بتائیں اور ۴۸ گھنٹوں میں کاؤنٹر پر کمپیوٹر اور سافٹ ویئر تیار پائیں:',
    step1Title: '۱. مفت مشورہ اور ضروریات کا جائزہ',
    step1Desc: 'ہمیں کال یا واٹس ایپ کریں۔ فیاض خان اور عبدالجبار آپ کے کاروبار کو سمجھ کر بہترین حل تجویز کریں گے۔',
    step2Title: '۲. سافٹ ویئر کی سیٹنگ اور ٹیسٹنگ',
    step2Desc: 'آپ کے اشیاء کے نام، ریٹ لسٹ، اردو/انگریزی بل فارمیٹ اور ڈسکاؤنٹ کے مطابق سافٹ ویئر تیار کیا جاتا ہے۔',
    step3Title: '۳. کمپیوٹر، پرنٹر فٹنگ اور اسٹاف ٹریننگ',
    step3Desc: 'کاؤنٹر پر پی سی، تھرمل رسید پرنٹر، اسکینر لگا کر آپ کے کیشیئر کو نہایت آسان اردو زبان میں ٹریننگ دی جاتی ہے۔',

    industriesBadge: 'تمام کاروباروں کے لیے',
    industriesTitle: 'ہر شعبے اور دکان کے لیے خاص تیار کردہ سسٹم',
    industriesSubtitle: 'جنرل اسٹور، بیکری، فارمیسی یا ہول سیل دکان — ہر کاروبار کا مکمل اور شفاف حساب:',

    galleryBadge: 'حقیقی انسٹالیشنز اور بانیان',
    galleryTitle: 'حقیقی کاؤنٹرز، اصل ہارڈ ویئر اور پرعزم قیادت',
    gallerySubtitle: 'فایجیکس ٹیک کے کاؤنٹر سیٹ اپس، ٹچ اسکرین ٹرمینلز اور بانیان فیاض خان اور عبدالجبار:',
    founder1Role: 'بانی اور بزنس اسٹریٹجسٹ (Founder)',
    founder1Bio: 'کاروباری منصوبہ بندی، کلائنٹ اسٹریٹجی، سسٹم اسکوپنگ اور تجارتی رہنمائی۔',
    founder2Role: 'شریک بانی اور لیڈ سسٹمز انجینئر (Co-Founder)',
    founder2Bio: 'پی او ایس سافٹ ویئر ڈیولپمنٹ، کمپیوٹر ہارڈ ویئر سیٹ اپ، نیٹ ورکنگ اور ورک فلو آٹومیشن۔',

    whyBadge: 'فایجیکس ٹیک کا انتخاب کیوں؟',
    whyTitle: 'پاکستانی دکانداروں کا مخلص اور بااعتماد ساتھی',
    whySubtitle: 'ہم مشکل انگریزی اصطلاحات کے بجائے وہ حل دیتے ہیں جو آپ کے کاؤنٹر پر بغیر رکاوٹ چلے:',
    whyCta: 'ابھی کال یا واٹس ایپ پر رابطہ کریں',

    testimonialsBadge: 'کسٹمرز کے تاثرات',
    testimonialsTitle: 'کراچی کے دکاندار اور تاجر بھائی کیا کہتے ہیں',
    testimonialsSubtitle: 'ہمارے تیار کردہ بلنگ سافٹ ویئر اور کاؤنٹر ہارڈ ویئر کے بارے میں صارفین کی رائے:',

    bannerTitle: 'اپنے کاروبار کو جدید اور ڈیجیٹل بنائیں!',
    bannerDesc: 'اورنگی ٹاؤن، ناظم آباد، صدر یا کراچی کے کسی بھی علاقے میں ہوں — فایجیکس ٹیک آپ کی خدمت کے لیے حاضر ہے۔',
    bannerPrimaryCta: 'ابھی مفت مشورہ حاصل کریں',
    bannerSecondaryCta: 'واٹس ایپ ہیلپ لائن: 0348 9133738',
    bannerOfficeNote: 'مقام: اورنگی ٹاؤن، کراچی • دفتری اوقات: صبح ۹ بجے تا شام ۵ بجے (پیر تا جمعرات و ہفتہ • جمعہ اور اتوار چھٹی)',

    footerAbout: 'فایجیکس ٹیک کراچی میں دکانوں کے لیے کسٹم پی او ایس سافٹ ویئر، انوینٹری سسٹم اور آٹومیشن فراہم کرتا ہے۔ بانیان: فیاض خان اور عبدالجبار۔',
    footerQuickLinks: 'اہم لنکس',
    footerContact: 'ہیلپ لائن اور رابطہ',
    footerTimings: 'اوقات کار (صبح ۹ تا شام ۵، جمعہ و اتوار چھٹی)',
    footerRights: 'جملہ حقوق فایجیکس ٹیک کے پاس محفوظ ہیں۔',
  },
};
