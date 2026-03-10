'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Plane, Globe, Clock, Warehouse, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface StatisticProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

function AnimatedStatistic({ value, suffix, label, icon }: StatisticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="flex justify-center mb-3">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
          {icon}
        </div>
      </div>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 font-heading">
        {displayValue}
        {suffix}
      </div>
      <div className="text-white/70 text-xs sm:text-sm lg:text-base font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (href: string) => {
    if (typeof window === 'undefined') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c4a5e] via-[#0e7490] to-[#0891b2] pt-36 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#22d3ee]/20 rounded-full blur-3xl" suppressHydrationWarning />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0891b2]/30 rounded-full blur-3xl" suppressHydrationWarning />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4]/10 rounded-full blur-3xl" suppressHydrationWarning />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          suppressHydrationWarning
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse" />
              Dịch vụ Epacket & Chuyên tuyến Quốc tế
            </span>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-2xl shadow-black/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/LOGO_ECOLINE_TACHNEN-01.png"
                alt="Ecoline Logistics"
                className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-heading leading-tight"
          >
            Ecoline Logistics
            <br />
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
              Vận Chuyển Toàn Cầu
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Bay thẳng từ Việt Nam đi US, UK, EU, AU. 
            <br className="hidden sm:block" />
            Thời gian chỉ <span className="text-[#fbbf24] font-semibold">5-7 ngày</span>. Tracking riêng lẻ.
          </motion.p>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0"
          >
            {[
              'Kho ở 2 khu vực HCM & Hà Nội',
              'Bay thẳng Việt Nam → US, UK, EU, AU',
              'Thời gian rút ngắn 5-7 ngày bay',
              'Tracking riêng lẻ, cập nhật liên tục',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm sm:text-base bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-[#fbbf24] text-base flex-shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-gray-900 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-[#fbbf24]/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              Nhận báo giá miễn phí
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Xem dịch vụ
            </button>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 border-t border-white/10 pt-10 sm:pt-14">
            <AnimatedStatistic
              value={3}
              suffix="+"
              label="Năm kinh nghiệm"
              icon={<Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24]" />}
            />
            <AnimatedStatistic
              value={200}
              suffix="+"
              label="Quốc gia phục vụ"
              icon={<Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24]" />}
            />
            <AnimatedStatistic
              value={2}
              suffix=""
              label="Kho HCM & HN"
              icon={<Warehouse className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24]" />}
            />
            <AnimatedStatistic
              value={5}
              suffix="-7 ngày"
              label="Thời gian bay"
              icon={<Plane className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24]" />}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Khám phá</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  );
}
