'use client';

import { Plane, ArrowRight, Clock, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Route {
  destination: string;
  flag: string;
  time: string;
  description: string;
  highlight?: boolean;
}

const routes: Route[] = [
  {
    destination: 'Mỹ (US)',
    flag: '🇺🇸',
    time: '5-7 ngày',
    description: 'Bay thẳng đến New York, Chicago, Los Angeles. Epacket & chuyên tuyến.',
    highlight: true,
  },
  {
    destination: 'Anh (UK)',
    flag: '🇬🇧',
    time: '5-7 ngày',
    description: 'Chuyên tuyến đi Anh Quốc, giao hàng tận nơi qua Royal Mail, DPD.',
  },
  {
    destination: 'Châu Âu (EU)',
    flag: '🇪🇺',
    time: '5-7 ngày',
    description: 'Đức, Pháp, Ý, Tây Ban Nha và các nước EU. Epacket & consolidation.',
  },
  {
    destination: 'Úc (AU)',
    flag: '🇦🇺',
    time: '5-7 ngày',
    description: 'Bay thẳng đến Sydney, Melbourne. Tracking riêng lẻ từng kiện hàng.',
  },
  {
    destination: 'Canada',
    flag: '🇨🇦',
    time: '5-7 ngày',
    description: 'Vận chuyển đến Toronto, Vancouver và các thành phố lớn tại Canada.',
  },
];

function RouteCard({ route, index }: { route: Route; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card-professional p-5 sm:p-6 group ${route.highlight ? 'ring-2 ring-[#0891b2]/20' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl sm:text-5xl leading-none">{route.flag}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading">
              {route.destination}
            </h3>
            {route.highlight && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#fbbf24] text-gray-900 px-2 py-0.5 rounded-full flex-shrink-0">
                Phổ biến
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[#0891b2] text-sm font-semibold mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{route.time}</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            {route.description}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-[#0891b2] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer hover:text-[#0e7490]"
        >
          Nhận báo giá
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#f9fafb] relative">
      {/* Decorative */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#22d3ee]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <span className="section-badge bg-[#0891b2]/10 text-[#0891b2]">
            Tuyến vận chuyển
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Tuyến Vận Chuyển
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Bay thẳng từ Việt Nam đến các thị trường lớn trên thế giới
          </p>
        </motion.div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-14">
          {routes.map((route, index) => (
            <RouteCard key={route.destination} route={route} index={index} />
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0c4a5e] via-[#0e7490] to-[#0891b2] rounded-2xl p-7 sm:p-10 lg:p-12 text-center text-white">
            {/* Decorative orbs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Package className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
                Nhận Báo Giá Miễn Phí
              </h3>
              <p className="text-white/80 mb-8 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Giá cước tùy theo loại hàng, trọng lượng và điểm đến. Liên hệ ngay để được tư vấn chi tiết.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:0355350886"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-gray-900 px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-[#fbbf24]/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  📞 Gọi: 0355.350.886
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Gửi yêu cầu báo giá
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
