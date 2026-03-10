'use client';

import { Plane, Truck, Package, Shield, Warehouse, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  lightBg: string;
  accent: string;
}

const services: Service[] = [
  {
    icon: <Plane className="w-6 h-6" />,
    title: 'Epacket Quốc Tế',
    description: 'Bay thẳng từ Việt Nam đi US, UK, EU, AU với thời gian chỉ 5-7 ngày bay.',
    gradient: 'from-cyan-500 to-blue-500',
    lightBg: 'bg-cyan-50',
    accent: 'text-cyan-600',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Gửi Hàng Đi Mỹ',
    description: 'Bay thẳng đến New York, Chicago, LA. Tracking riêng lẻ, cập nhật liên tục.',
    gradient: 'from-teal-500 to-cyan-500',
    lightBg: 'bg-teal-50',
    accent: 'text-teal-600',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Gửi Hàng Đi UK & EU',
    description: 'Chuyên tuyến đi Anh, Đức, Pháp, Ý, Tây Ban Nha với giá cước cạnh tranh.',
    gradient: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Bảo Hiểm Hàng Hóa',
    description: 'Bảo hiểm toàn diện cho mọi lô hàng. Cam kết bồi thường khi có sự cố.',
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50',
    accent: 'text-amber-600',
  },
  {
    icon: <Warehouse className="w-6 h-6" />,
    title: 'Kho Bãi & Fulfillment',
    description: 'Kho bãi tại HCM và Hà Nội. Hỗ trợ lưu trữ, đóng gói và phân phối.',
    gradient: 'from-violet-500 to-purple-500',
    lightBg: 'bg-violet-50',
    accent: 'text-violet-600',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 h-full flex flex-col border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 cursor-default overflow-hidden"
    >
      {/* Hover gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />

      {/* Icon */}
      <div className="relative mb-5">
        <div className={`${service.lightBg} w-14 h-14 rounded-xl flex items-center justify-center ${service.accent} group-hover:scale-105 transition-all duration-300`}>
          {service.icon}
        </div>
        {/* Decorative dot */}
        <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-0`} />
      </div>

      {/* Content */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-heading group-hover:text-gray-800 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 flex-grow leading-relaxed text-sm group-hover:text-gray-500 transition-colors">
        {service.description}
      </p>

      {/* Bottom link */}
      <div className="mt-5 pt-4 border-t border-gray-50 group-hover:border-gray-100 transition-colors">
        <span className={`${service.accent} text-sm font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
          Tìm hiểu thêm
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-[#f9fafb] to-white relative overflow-hidden">
      {/* Soft decorative blobs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] translate-x-1/3" />
      
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
            Dịch vụ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Giải pháp vận chuyển toàn diện, đáp ứng mọi nhu cầu gửi hàng quốc tế
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
