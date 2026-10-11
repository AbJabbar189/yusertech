import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
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
    requiredService: preselectedService || 'Website Development',
    budgetRange: 'Under $1,000 / Starter Project',
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
      newErrors.email = 'Please enter a valid email address (e.g., name@business.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone or WhatsApp number.';
    }

    if (!formData.requiredService) {
      newErrors.requiredService = 'Please select a required service category.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project or operational requirements.';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription =
        'Please provide a bit more detail (at least 15 characters) so we can review your scope.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formattedInquiryText = `YUSERTECH Project Inquiry:
Name: ${formData.fullName}
Business: ${formData.businessName || 'N/A'}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Service: ${formData.requiredService}
Budget: ${formData.budgetRange}
Project Details:
${formData.projectDescription}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // If no backend endpoint is configured, simulate verification and provide explicit handoff options
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionCompleted(true);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedInquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.requiredService} — ${formData.fullName}`);
    const body = encodeURIComponent(formattedInquiryText);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(formattedInquiryText);
    const cleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setSubmissionCompleted(false);
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      requiredService: 'Website Development',
      budgetRange: 'Under $1,000 / Starter Project',
      projectDescription: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-[#F7F5EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct Contact"
          title="Discuss Your Project or Request a Quote"
          subtitle="Tell us about your business goals, required software features, or timeline. We respond with a thoughtful, itemized proposal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E3E0D5] p-6 sm:p-10 shadow-xs">
            {submissionCompleted ? (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-950">
                    <strong className="block text-emerald-900 font-bold mb-1">
                      Inquiry Compiled Successfully
                    </strong>
                    <p className="leading-relaxed">
                      Your inquiry details have been verified and structured. Since no external automated mail server is attached in this preview environment, choose your preferred direct communication channel below to transmit your inquiry directly to our team:
                    </p>
                  </div>
                </div>

                {/* Pre-formatted message preview */}
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E3E0D5]">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E3E0D5]">
                    <span className="text-xs font-bold text-[#123B2A] uppercase">
                      Compiled Inquiry Data
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-xs text-[#123B2A] hover:text-[#D6B46A] flex items-center gap-1 font-semibold"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                    </button>
                  </div>
                  <pre className="text-xs text-[#202722] font-mono whitespace-pre-wrap leading-relaxed">
                    {formattedInquiryText}
                  </pre>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <Button
                    onClick={handleMailto}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    leftIcon={<Mail className="w-4 h-4" />}
                  >
                    Open in Email Client
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="gold"
                    size="md"
                    className="w-full justify-center"
                    leftIcon={<MessageSquare className="w-4 h-4" />}
                  >
                    Send via WhatsApp
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-[#6B746E] hover:text-[#202722] underline underline-offset-4"
                  >
                    Edit inquiry or start new inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#202722] mb-1">
                    Project Specification Form
                  </h2>
                  <p className="text-xs text-[#6B746E]">
                    Fields marked with an asterisk (*) are required.
                  </p>
                </div>

                {/* Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#202722] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border text-[#202722] focus:bg-white transition-colors ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E3E0D5]'
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
                      className="block text-xs font-bold uppercase tracking-wider text-[#202722] mb-1.5"
                    >
                      Business / Organization Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Al-Madina Fresh Bakery"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border border-[#E3E0D5] text-[#202722] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#202722] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border text-[#202722] focus:bg-white transition-colors ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E3E0D5]'
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
                      className="block text-xs font-bold uppercase tracking-wider text-[#202722] mb-1.5"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border text-[#202722] focus:bg-white transition-colors ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E3E0D5]'
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

                {/* Service Selection & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="requiredService"
                      className="block text-xs font-bold uppercase tracking-wider text-[#202722] mb-1.5"
                    >
                      Required Service / Product *
                    </label>
                    <select
                      id="requiredService"
                      name="requiredService"
                      value={formData.requiredService}
                      onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border border-[#E3E0D5] text-[#202722] focus:bg-white transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Retail POS Solutions">Retail POS Solutions</option>
                      <option value="Bakery POS Solutions">Bakery POS Solutions</option>
                      <option value="Madrasa Management System">Madrasa Management System</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Maintenance and Support">Maintenance and Support</option>
                      <option value="General Consultation">General Technical Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-xs font-bold uppercase tracking-wider text-[#202722] mb-1.5"
                    >
                      Estimated Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border border-[#E3E0D5] text-[#202722] focus:bg-white transition-colors"
                    >
                      <option value="Under $1,000 / Starter Project">Under $1,000 (Starter Website)</option>
                      <option value="$1,000 – $3,000">$1,000 – $3,000 (Standard Business Portal / POS)</option>
                      <option value="$3,000 – $7,500">$3,000 – $7,500 (Custom Application)</option>
                      <option value="$7,500+ / Multi-Stage Enterprise">$7,500+ (Comprehensive System)</option>
                      <option value="Undetermined / Need Technical Guidance">To Be Determined During Discovery</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-xs font-bold uppercase tracking-wider text-[#202722] mb-1.5"
                  >
                    Project Description & Requirements *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Tell us what you are looking to build, current challenges you face, or specific hardware/offline needs..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border text-[#202722] focus:bg-white transition-colors ${
                      errors.projectDescription
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#E3E0D5]'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Project Inquiry
                  </Button>
                  <p className="text-[11px] text-[#6B746E] text-center mt-2.5">
                    Your details are handled strictly for business correspondence. No spam or third-party sharing.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Info & Engagement Process */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#123B2A] text-white rounded-2xl p-6 sm:p-8 border border-[#224E3A]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D6B46A] mb-3">
                Direct Channels
              </h3>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Reach Us Directly
              </h2>
              <p className="text-xs sm:text-sm text-[#EFECE3]/80 leading-relaxed mb-6">
                Prefer direct communication? You can contact us via email or WhatsApp during business hours.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-[#EFECE3]/90">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D6B46A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-[#EFECE3]/60 uppercase font-mono">Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium hover:text-white underline underline-offset-2 break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D6B46A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-[#EFECE3]/60 uppercase font-mono">Telephone</span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-medium hover:text-white underline underline-offset-2"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D6B46A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-[#EFECE3]/60 uppercase font-mono">Office Hours</span>
                    <span>{siteConfig.contact.officeHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D6B46A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-[#EFECE3]/60 uppercase font-mono">Location</span>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Box */}
            <div className="bg-white rounded-2xl p-6 border border-[#E3E0D5]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-3">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-xs text-[#202722]">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#123B2A] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </span>
                  <span>We review your requirements within 1 business day.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#123B2A] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </span>
                  <span>We schedule a 20-minute scoping call to clarify technical boundaries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#123B2A] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </span>
                  <span>You receive a transparent, itemized proposal with clear milestone pricing.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
