'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(typeof window !== 'undefined' && window.scrollY > 20);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Dịch vụ', href: '#services' },
    { label: 'Tính năng', href: '#features' },
    { label: 'Tuyến vận chuyển', href: '#pricing' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  const scrollToSection = useCallback((href: string) => {
    if (typeof window === 'undefined') return;
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#0e7490] text-white text-xs sm:text-sm transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`} suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex flex-wrap items-center justify-between gap-2" suppressHydrationWarning>
          <div className="flex items-center gap-4 sm:gap-6" suppressHydrationWarning>
            <a href="tel:0355350886" className="flex items-center gap-1.5 hover:text-[#fbbf24] transition-colors" suppressHydrationWarning>
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>0355.350.886</span>
            </a>
            <a href="mailto:ecolinelogistic2025@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-[#fbbf24] transition-colors" suppressHydrationWarning>
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>ecolinelogistic2025@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/80" suppressHydrationWarning>
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>T2 - T7 | 8:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-0 bg-white shadow-lg'
            : 'top-8 sm:top-9 bg-white/95 backdrop-blur-md'
        }`}
        suppressHydrationWarning
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" suppressHydrationWarning>
          <div className="flex items-center justify-between h-16 lg:h-20" suppressHydrationWarning>
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-2.5 flex-shrink-0 group"
              suppressHydrationWarning
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/LOGO_ECOLINE_TACHNEN-01.png"
                alt="Ecoline Logistics"
                className="w-11 h-11 sm:w-14 sm:h-14 object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col" suppressHydrationWarning>
                <span className="text-xl sm:text-2xl font-bold text-[#0e7490] font-heading leading-tight">
                  ECOLINE
                </span>
                <span className="text-[10px] sm:text-xs text-[#0891b2] font-semibold tracking-[0.15em] -mt-0.5">
                  LOGISTICS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" suppressHydrationWarning>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-gray-600 hover:text-[#0891b2] transition-all font-medium px-3 py-2 rounded-lg hover:bg-[#0891b2]/5 text-sm xl:text-base"
                  suppressHydrationWarning
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block" suppressHydrationWarning>
              <a
                href="tel:0355350886"
                className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white px-5 xl:px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-[#0891b2]/25 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 text-sm xl:text-base"
                suppressHydrationWarning
              >
                <Phone className="w-4 h-4" />
                0355.350.886
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-gray-600 hover:text-[#0891b2] hover:bg-[#0891b2]/5 transition-all active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
              suppressHydrationWarning
            >
              <div className="border-t border-gray-100 bg-white shadow-xl" suppressHydrationWarning>
                <div className="px-4 py-4 space-y-1" suppressHydrationWarning>
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 + index * 0.04 }}
                      className="flex items-center justify-between text-gray-600 hover:text-[#0891b2] hover:bg-[#0891b2]/5 transition-all font-medium py-3.5 px-4 rounded-xl text-[15px] group"
                      suppressHydrationWarning
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0891b2] group-hover:translate-x-0.5 transition-all" />
                    </motion.a>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="pt-3 pb-1"
                    suppressHydrationWarning
                  >
                    <a
                      href="tel:0355350886"
                      className="block bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white py-3.5 rounded-xl font-semibold transition-all text-center text-[15px] shadow-lg shadow-[#0891b2]/20 active:scale-[0.98]"
                      suppressHydrationWarning
                    >
                      <span className="inline-flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Gọi ngay: 0355.350.886
                      </span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            suppressHydrationWarning
          />
        )}
      </AnimatePresence>
    </>
  );
}
