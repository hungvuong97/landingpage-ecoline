'use client';

import { motion } from 'framer-motion';
import { Truck, Plane, Package, Globe2, Ship, Warehouse } from 'lucide-react';

const partners = [
  { name: 'USPS', icon: Package, bg: 'bg-blue-50', iconColor: 'text-blue-500', borderHover: 'hover:border-blue-200' },
  { name: 'Royal Mail', icon: Truck, bg: 'bg-red-50', iconColor: 'text-red-500', borderHover: 'hover:border-red-200' },
  { name: 'DPD', icon: Globe2, bg: 'bg-rose-50', iconColor: 'text-rose-500', borderHover: 'hover:border-rose-200' },
  { name: 'Australia Post', icon: Plane, bg: 'bg-amber-50', iconColor: 'text-amber-500', borderHover: 'hover:border-amber-200' },
  { name: 'DHL', icon: Ship, bg: 'bg-yellow-50', iconColor: 'text-yellow-600', borderHover: 'hover:border-yellow-200' },
  { name: 'FedEx', icon: Warehouse, bg: 'bg-purple-50', iconColor: 'text-purple-500', borderHover: 'hover:border-purple-200' },
];

// Duplicate for infinite scroll
const scrollPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white relative overflow-hidden">
      {/* Header - constrained */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="section-badge bg-[#0891b2]/10 text-[#0891b2]">
            Đối tác
          </span>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 font-heading">
            Đối Tác Vận Chuyển Đáng Tin Cậy
          </h3>
        </motion.div>
      </div>

      {/* Marquee - full width, not constrained by container */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-3 sm:gap-4 lg:gap-6 animate-marquee w-max">
            {scrollPartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex-shrink-0 w-28 sm:w-36 lg:w-44 bg-white rounded-xl sm:rounded-2xl border border-gray-100 ${partner.borderHover} hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 cursor-default group p-3 sm:p-4 lg:p-5`}
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 ${partner.bg} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${partner.iconColor}`} />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-700 group-hover:text-gray-900 transition-colors font-heading text-center leading-tight">
                      {partner.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust badges - constrained */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 mt-6 sm:mt-8 lg:mt-10 pt-5 sm:pt-6 lg:pt-8 border-t border-gray-100"
        >
          {[
            { number: '6+', text: 'Đối tác quốc tế' },
            { number: '200+', text: 'Quốc gia phủ sóng' },
            { number: '99.5%', text: 'Giao thành công' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 text-center">
              <span className="text-base sm:text-lg lg:text-xl font-bold text-[#0891b2] font-heading">{item.number}</span>
              <span className="text-[10px] sm:text-xs lg:text-sm text-gray-500 leading-tight">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
