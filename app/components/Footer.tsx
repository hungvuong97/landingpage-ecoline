'use client';

import { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Dịch vụ', href: '#services' },
    { label: 'Tính năng', href: '#features' },
    { label: 'Tuyến vận chuyển', href: '#pricing' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  const services = [
    'Epacket đi Mỹ (US)',
    'Epacket đi Anh (UK)',
    'Epacket đi Châu Âu (EU)',
    'Epacket đi Úc (AU)',
    'Kho bãi & Fulfillment',
  ];

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 relative" suppressHydrationWarning>
        {/* Top gradient line */}
        <div className="h-1 bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#22d3ee]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16" suppressHydrationWarning>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12" suppressHydrationWarning>
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1" suppressHydrationWarning>
              <div className="flex items-center gap-2.5 mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/LOGO_ECOLINE_TACHNEN-01.png"
                  alt="Ecoline Logistics"
                  className="w-11 h-11 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-white font-heading leading-tight">
                    ECOLINE
                  </h3>
                  <span className="text-xs text-[#22d3ee] font-medium tracking-wider">
                    LOGISTICS
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Dịch vụ vận chuyển Epacket và chuyên tuyến quốc tế uy tín. 
                Bay thẳng từ Việt Nam đi US, UK, EU, AU.
              </p>
              <div className="flex space-x-3" suppressHydrationWarning>
                {[
                  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/ecolinelogistichn' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href !== '#' ? '_blank' : undefined}
                      rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#0891b2] transition-all duration-300 hover:scale-110"
                      suppressHydrationWarning
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div suppressHydrationWarning>
              <h4 className="text-white font-bold mb-5 font-heading text-base">Liên kết nhanh</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#22d3ee] transition-colors duration-300 text-sm flex items-center gap-2 group"
                      suppressHydrationWarning
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#22d3ee] transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div suppressHydrationWarning>
              <h4 className="text-white font-bold mb-5 font-heading text-base">Dịch vụ</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-[#22d3ee] transition-colors duration-300 text-sm flex items-center gap-2 group"
                      suppressHydrationWarning
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#22d3ee] transition-colors" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div suppressHydrationWarning>
              <h4 className="text-white font-bold mb-5 font-heading text-base">Liên hệ</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#22d3ee]" />
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    82/71 Hoàng Văn Thái, Khương Trung, Thanh Xuân, Hà Nội
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#22d3ee]" />
                  </div>
                  <a
                    href="tel:0355350886"
                    className="text-gray-400 hover:text-[#22d3ee] transition-colors text-sm"
                    suppressHydrationWarning
                  >
                    0355.350.886
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#22d3ee]" />
                  </div>
                  <a
                    href="mailto:ecolinelogistic2025@gmail.com"
                    className="text-gray-400 hover:text-[#22d3ee] transition-colors text-sm break-all"
                    suppressHydrationWarning
                  >
                    ecolinelogistic2025@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center" suppressHydrationWarning>
            <p className="text-gray-500 text-sm">
              © {currentYear} Ecoline Logistics. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
