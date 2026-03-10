'use client';

import { MapPin, Shield, HeadphonesIcon, DollarSign, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Tracking riêng lẻ',
    description: 'Hệ thống theo dõi riêng từng đơn hàng, cập nhật vị trí và trạng thái vận chuyển liên tục trong ngày.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 border-cyan-100',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Bay thẳng 5-7 ngày',
    description: 'Đường bay trực tiếp từ Việt Nam đến US, UK, EU, AU. Thời gian rút ngắn tối đa.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 border-amber-100',
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: 'Support 24/24',
    description: 'Nhóm support riêng, hỗ trợ nhiệt tình 24/24. Giải đáp mọi thắc mắc nhanh chóng.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-100',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Giá cước cạnh tranh',
    description: 'Báo giá rõ ràng, minh bạch. Cam kết giá tốt nhất thị trường cho dịch vụ Epacket.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Bảo hiểm toàn diện',
    description: 'Bảo hiểm hàng hóa đầy đủ trong suốt quá trình vận chuyển quốc tế.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 border-rose-100',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Kho bãi 2 miền',
    description: 'Hệ thống kho bãi chuyên nghiệp tại HCM và Hà Nội, thuận tiện cho khách hàng toàn quốc.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 border-indigo-100',
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex gap-4 sm:gap-5 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
    >
      <div className={`${feature.bgColor} ${feature.color} border w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        {feature.icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 font-heading">
          {feature.title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <span className="section-badge bg-[#0891b2]/10 text-[#0891b2]">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Tại Sao Chọn Ecoline?
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Những lý do khiến Ecoline Logistics trở thành đối tác tin cậy trong vận chuyển quốc tế
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
