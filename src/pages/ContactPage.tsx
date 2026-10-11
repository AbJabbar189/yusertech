import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  requiredService: string;
  budgetRange: string;
  projectDescription: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  requiredService?: string;
  projectDescription?: string;
}

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<FormData>(() => ({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    requiredService: preselectedService || 'Custom POS Systems (All Business Types)',
    budgetRange: 'Under Rs. 50,000 / Starter POS',
    projectDescription: '',
  }));

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionCompleted, setSubmissionCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone or WhatsApp number.';
    }

    if (!formData.requiredService) {
      newErrors.requiredService = 'Please select a required service category.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your business requirements or shop details.';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription =
        'Please provide a bit more detail so we can review your scope.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formattedInquiryText = `YUSERTECH Inquiry:
Name: ${formData.fullName}
Business: ${formData.businessName || 'N/A'}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Service: ${formData.requiredService}
Budget: ${formData.budgetRange}
Requirements:
${formData.projectDescription}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionCompleted(true);
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedInquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppAbdulJabbar = () => {
    const text = encodeURIComponent(formattedInquiryText);
    window.open(`https://wa.me/${siteConfig.founders[1].phoneClean}?text=${text}`, '_blank');
  };

  const handleWhatsAppFayyazKhan = () => {
    const text = encodeURIComponent(formattedInquiryText);
    window.open(`https://wa.me/${siteConfig.founders[0].phoneClean}?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setSubmissionCompleted(false);
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      requiredService: 'Custom POS Systems (All Business Types)',
      budgetRange: 'Under Rs. 50,000 / Starter POS',
      projectDescription: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-[#F8FAF9] py-14 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct Contact"
          title="Discuss Your Software Project With Our Founders"
          subtitle="Speak directly with Abdul Jabbar (Co-Founder) or Fayyaz Khan (Founder). We provide honest scoping, on-site shop visits in Karachi, and clear proposals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-9 shadow-2xs">
            {submissionCompleted ? (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-950">
                    <strong className="block text-emerald-900 font-bold mb-0.5">
                      Inquiry Compiled Successfully
                    </strong>
                    <p className="leading-relaxed">
                      Choose which founder you would like to send your inquiry to directly via WhatsApp:
                    </p>
                  </div>
                </div>

                {/* Pre-formatted message */}
                <div className="bg-[#F8FAF9] p-4 rounded-xl border border-[#E2E8E4]">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E2E8E4]">
                    <span className="text-xs font-bold text-[#123B2A] uppercase">
                      Inquiry Summary
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-xs text-[#123B2A] hover:text-[#C59E3F] flex items-center gap-1 font-semibold"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                    </button>
                  </div>
                  <pre className="text-xs text-[#1A231F] font-mono whitespace-pre-wrap leading-relaxed">
                    {formattedInquiryText}
                  </pre>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsAppAbdulJabbar}
                    className="p-3 rounded-xl bg-[#123B2A] text-white hover:bg-[#0B251A] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C59E3F]" />
                    <span>WhatsApp Abdul Jabbar</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppFayyazKhan}
                    className="p-3 rounded-xl bg-[#C59E3F] text-[#123B2A] hover:bg-[#B38C32] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#123B2A]" />
                    <span>WhatsApp Fayyaz Khan</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-[#5C6760] hover:text-[#1A231F] underline underline-offset-4"
                  >
                    Edit inquiry or submit another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-[#1A231F] mb-1">
                    Project &amp; POS Inquiry Form
                  </h2>
                  <p className="text-xs text-[#5C6760]">
                    Required fields are marked with an asterisk (*).
                  </p>
                </div>

                {/* Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A231F] mb-1.5"
                    >
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F8FAF9] border text-[#1A231F] focus:bg-white transition-colors ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DCE4E0]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A231F] mb-1.5"
                    >
                      Business / Shop / Madrasa Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Al-Madina Fresh Mart"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F8FAF9] border border-[#DCE4E0] text-[#1A231F] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A231F] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F8FAF9] border text-[#1A231F] focus:bg-white transition-colors ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DCE4E0]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A231F] mb-1.5"
                    >
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0346 0000000"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F8FAF9] border text-[#1A231F] focus:bg-white transition-colors ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DCE4E0]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="requiredService"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A231F] mb-1.5"
                    >
                      Required Service *
                    </label>
                    <select
                      id="requiredService"
                      value={formData.requiredService}
                      onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F8FAF9] border border-[#DCE4E0] text-[#1A231F] focus:bg-white transition-colors"
                    >
                      <option value="Custom POS Systems (All Business Types)">Custom POS System (All Business Types)</option>
                      <option value="Business Management Systems & ERP">Business Management Systems &amp; ERP</option>
                      <option value="Workflow & Process Automation">Workflow &amp; Process Automation</option>
                      <option value="Modern Website & Web Application">Modern Website &amp; Web Application</option>
                      <option value="Maintenance, Support & System Upgrades">Maintenance &amp; Support</option>
                      <option value="General Consultation">General Discussion / Advice</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A231F] mb-1.5"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F8FAF9] border border-[#DCE4E0] text-[#1A231F] focus:bg-white transition-colors"
                    >
                      <option value="Under Rs. 50,000 / Starter POS">Under Rs. 50,000 (Starter POS / Basic Site)</option>
                      <option value="Rs. 50,000 – Rs. 150,000">Rs. 50,000 – Rs. 150,000 (Standard Store POS / Management)</option>
                      <option value="Rs. 150,000+ / Custom ERP">Rs. 150,000+ (Full Multi-branch System / Custom ERP)</option>
                      <option value="Discuss during consultation">Discuss during consultation</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1A231F] mb-1.5"
                  >
                    Your Requirements &amp; Shop Details *
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Tell us what type of shop you run, if you already have a thermal printer, or what daily problem you want to solve..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F8FAF9] border text-[#1A231F] focus:bg-white transition-colors ${
                      errors.projectDescription
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#DCE4E0]'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Founders Card */}
            <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-7 shadow-2xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59E3F] block">
                Direct Contact Lines
              </span>
              <h3 className="text-lg font-bold text-[#1A231F]">
                Call or WhatsApp Us Directly
              </h3>

              {/* Abdul Jabbar */}
              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#123B2A] block">
                    Abdul Jabbar (Co-Founder)
                  </span>
                  <a
                    href={`tel:${siteConfig.founders[1].phoneClean}`}
                    className="text-sm font-bold text-[#1A231F] hover:text-[#123B2A] block mt-0.5"
                  >
                    {siteConfig.founders[1].phone}
                  </a>
                </div>
                <a
                  href={siteConfig.founders[1].whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shrink-0"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Fayyaz Khan */}
              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8E4] flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#123B2A] block">
                    Fayyaz Khan (Founder)
                  </span>
                  <a
                    href={`tel:${siteConfig.founders[0].phoneClean}`}
                    className="text-sm font-bold text-[#1A231F] hover:text-[#123B2A] block mt-0.5"
                  >
                    {siteConfig.founders[0].phone}
                  </a>
                </div>
                <a
                  href={siteConfig.founders[0].whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shrink-0"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Location */}
            <div className="bg-white rounded-2xl border border-[#DCE4E0] p-6 sm:p-7 shadow-2xs space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59E3F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1A231F] block">Location</span>
                  <span className="text-[#5C6760]">{siteConfig.contact.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#EEF2F0]">
                <Clock className="w-4 h-4 text-[#C59E3F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1A231F] block">Working Hours</span>
                  <span className="text-[#5C6760] block">{siteConfig.contact.officeHours}</span>
                  <span className="text-rose-700 font-semibold block mt-0.5">{siteConfig.contact.offDays}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#EEF2F0]">
                <Mail className="w-4 h-4 text-[#C59E3F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1A231F] block">Email</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#123B2A] hover:underline font-semibold">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
