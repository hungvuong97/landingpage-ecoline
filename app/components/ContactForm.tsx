'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const serviceOptions = [
  'Epacket đi Mỹ (US)',
  'Epacket đi Anh (UK)',
  'Epacket đi Châu Âu (EU)',
  'Epacket đi Úc (AU)',
  'Epacket đi Canada',
  'Kho bãi & Fulfillment',
  'Khác',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Điện thoại',
    value: '0355.350.886',
    href: 'tel:0355350886',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ecolinelogistic2025@gmail.com',
    href: 'mailto:ecolinelogistic2025@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: '82/71 Hoàng Văn Thái, Khương Trung, Thanh Xuân, Hà Nội',
    href: null,
  },
  {
    icon: Clock,
    label: 'Giờ làm việc',
    value: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
    href: null,
  },
];

function CustomDropdown({ 
  options, value, onChange, placeholder, hasError 
}: { 
  options: string[]; value: string; onChange: (val: string) => void; placeholder: string; hasError: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-left text-sm transition-all duration-200 flex items-center justify-between gap-2 ${
          isOpen 
            ? 'border-[#0891b2] ring-2 ring-[#0891b2]/10' 
            : hasError 
              ? 'border-red-400' 
              : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute z-50 mt-2 w-full bg-white rounded-xl border border-gray-100 shadow-xl shadow-gray-200/50 py-1.5 max-h-60 overflow-auto"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => { onChange(option); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 flex items-center justify-between gap-2 ${
                  value === option
                    ? 'bg-[#0891b2]/5 text-[#0891b2] font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span>{option}</span>
                {value === option && <Check className="w-4 h-4 text-[#0891b2] flex-shrink-0" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="section-badge bg-[#0891b2]/10 text-[#0891b2]">
            Liên hệ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Liên Hệ & Báo Giá
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Điền thông tin bên dưới để nhận báo giá miễn phí. Ecoline sẽ liên hệ lại trong thời gian sớm nhất.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0c4a5e] via-[#0e7490] to-[#0891b2] rounded-2xl p-7 sm:p-8 text-white h-full">
              {/* Decorative */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
                  Thông tin liên hệ
                </h3>
                <p className="text-white/70 text-sm mb-8">
                  Liên hệ trực tiếp hoặc điền form bên cạnh
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-white/50 font-medium uppercase tracking-wider mb-0.5">
                            {info.label}
                          </div>
                          <div className="text-white/90 text-sm sm:text-base font-medium">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    );
                    
                    return info.href ? (
                      <a key={index} href={info.href} className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-8" />

                {/* Social */}
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3">Theo dõi chúng tôi</p>
                  <div className="flex gap-3">
                    <a href="https://www.facebook.com/ecolinelogistichn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Zalo">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.18-.416-.404-.694-.672-.834-.268-.14-.618-.21-1.05-.21h-2.07v-.99c0-.22-.066-.39-.198-.51-.132-.12-.33-.18-.594-.18-.264 0-.462.06-.594.18-.132.12-.198.29-.198.51v.99H9.768c-.432 0-.782.07-1.05.21-.268.14-.492.418-.672.834L6.6 11.46c-.168.384-.252.756-.252 1.116 0 .36.084.666.252.918.168.252.396.438.684.558.288.12.618.18.99.18h7.452c.372 0 .702-.06.99-.18.288-.12.516-.306.684-.558.168-.252.252-.558.252-.918 0-.36-.084-.732-.252-1.116L15.954 8.16zM8.4 17.04c0 .22.066.39.198.51.132.12.33.18.594.18.264 0 .462-.06.594-.18.132-.12.198-.29.198-.51v-2.88h3.432v2.88c0 .22.066.39.198.51.132.12.33.18.594.18.264 0 .462-.06.594-.18.132-.12.198-.29.198-.51v-2.88h1.2c.12 0 .174-.06.162-.18l-.972-2.34c-.048-.12-.15-.18-.306-.18H8.916c-.156 0-.258.06-.306.18l-.972 2.34c-.012.12.042.18.162.18h1.2v2.88h-.6z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f9fafb] rounded-2xl p-6 sm:p-8 border border-gray-100">
              {/* Name */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Vui lòng nhập họ và tên' })}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 text-sm transition-all ${
                    errors.name ? 'border-red-400' : 'border-gray-200'
                  }`}
                  placeholder="Nguyễn Văn A"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Vui lòng nhập email',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email không hợp lệ',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 text-sm transition-all ${
                      errors.email ? 'border-red-400' : 'border-gray-200'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required: 'Vui lòng nhập số điện thoại',
                      pattern: {
                        value: /^[0-9]{10,11}$/,
                        message: 'Số điện thoại không hợp lệ',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 text-sm transition-all ${
                      errors.phone ? 'border-red-400' : 'border-gray-200'
                    }`}
                    placeholder="0355350886"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Service Type - Custom Dropdown */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Dịch vụ quan tâm <span className="text-red-500">*</span>
                </label>
                {/* Hidden input for react-hook-form */}
                <input type="hidden" {...register('service', { required: 'Vui lòng chọn dịch vụ' })} />
                <CustomDropdown
                  options={serviceOptions}
                  value={watch('service')}
                  onChange={(val) => setValue('service', val, { shouldValidate: true })}
                  placeholder="Chọn dịch vụ quan tâm"
                  hasError={!!errors.service}
                />
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Nội dung / Yêu cầu <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Vui lòng nhập nội dung' })}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 resize-none text-sm transition-all ${
                    errors.message ? 'border-red-400' : 'border-gray-200'
                  }`}
                  placeholder="Mô tả chi tiết yêu cầu vận chuyển (loại hàng, số lượng, điểm đến...)"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-5 p-4 rounded-xl flex items-center gap-3 text-sm ${
                    submitStatus === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Cảm ơn bạn! Ecoline sẽ liên hệ lại sớm nhất có thể.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Đã có lỗi xảy ra. Vui lòng thử lại sau.</span>
                    </>
                  )}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-[#0891b2]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02] text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Gửi yêu cầu báo giá
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
