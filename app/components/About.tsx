'use client';

import { Building2, Target, Eye, Award, Users, Globe, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Statistic {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const statistics: Statistic[] = [
  {
    value: '3+',
    label: 'Năm kinh nghiệm',
    icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    value: '200+',
    label: 'Quốc gia phục vụ',
    icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    value: '10,000+',
    label: 'Đơn hàng đã vận chuyển',
    icon: <Package className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    value: '500+',
    label: 'Khách hàng tin tưởng',
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
];

function StatisticCard({ statistic, index }: { statistic: Statistic; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg hover:border-[#0891b2]/20 transition-all duration-300 group"
    >
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0891b2]/10 flex items-center justify-center text-[#0891b2] group-hover:bg-[#0891b2] group-hover:text-white transition-all duration-300">
          {statistic.icon}
        </div>
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 font-heading">
        {statistic.value}
      </div>
      <div className="text-gray-500 text-xs sm:text-sm font-medium">{statistic.label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#f9fafb] relative">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0891b2]/5 rounded-full blur-3xl" />
      
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
            Về chúng tôi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Về Ecoline Logistics
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Đối tác tin cậy trong lĩnh vực vận chuyển Epacket và chuyên tuyến quốc tế
          </p>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 lg:mb-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/banner.png"
            alt="Ecoline Logistics - Epacket & Vận chuyển chuyên tuyến toàn cầu"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Company Info */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-gradient-to-br from-[#0891b2] to-[#06b6d4] w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">Sứ Mệnh</h3>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Ecoline Logistics cam kết cung cấp dịch vụ vận chuyển Epacket và chuyên tuyến quốc tế 
              chất lượng cao, đáng tin cậy và hiệu quả. Với kho bãi tại HCM và Hà Nội, đường bay thẳng 
              đến US, UK, EU, AU, chúng tôi mang đến giải pháp logistics toàn diện giúp doanh nghiệp 
              của bạn kết nối với thị trường toàn cầu.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-gradient-to-br from-[#06b6d4] to-[#22d3ee] w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">Tầm Nhìn</h3>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Trở thành đơn vị hàng đầu trong lĩnh vực vận chuyển Epacket và chuyên tuyến tại Việt Nam. 
              Ecoline hướng tới việc xây dựng hệ sinh thái logistics bền vững, ứng dụng công nghệ 
              hiện đại trong tracking và quản lý đơn hàng, đồng thời mở rộng mạng lưới đối tác 
              toàn cầu.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0c4a5e] via-[#0e7490] to-[#0891b2] rounded-2xl p-7 sm:p-10 lg:p-12 text-white">
            {/* Decorative */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-white/15 w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">Tại Sao Chọn Ecoline</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  { title: 'Kho bãi 2 miền', desc: 'Có kho ở cả HCM và Hà Nội, thuận tiện cho khách hàng toàn quốc' },
                  { title: 'Bay thẳng quốc tế', desc: 'Đường bay trực tiếp từ Việt Nam đi US, UK, EU, AU' },
                  { title: 'Thời gian 5-7 ngày', desc: 'Rút ngắn tối đa thời gian vận chuyển so với thị trường' },
                  { title: 'Support 24/24', desc: 'Nhóm hỗ trợ riêng, phản hồi nhanh chóng mọi lúc' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-2 h-2 bg-[#fbbf24] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/90 text-sm sm:text-base">
                      <strong className="text-white">{item.title}:</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {statistics.map((statistic, index) => (
            <StatisticCard key={statistic.label} statistic={statistic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
