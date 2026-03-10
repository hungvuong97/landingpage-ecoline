'use client';

import { useState } from 'react';
import { Search, Package, Truck, MapPin, CheckCircle, Clock, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

interface TrackingStatus {
  status: string;
  location: string;
  timestamp: string;
  icon: React.ReactNode;
}

const mockTrackingData: Record<string, TrackingStatus[]> = {
  'ECO12345': [
    { status: 'Đã nhận hàng', location: 'Kho Ecoline HCM', timestamp: '2025-03-01 08:00', icon: <Package className="w-5 h-5" /> },
    { status: 'Đang xử lý tại kho', location: 'Kho Ecoline HCM', timestamp: '2025-03-01 14:30', icon: <Package className="w-5 h-5" /> },
    { status: 'Đã giao hãng bay', location: 'Sân bay Tân Sơn Nhất', timestamp: '2025-03-02 06:00', icon: <Plane className="w-5 h-5" /> },
    { status: 'Đang vận chuyển', location: 'Trên đường bay → US', timestamp: '2025-03-02 22:00', icon: <Truck className="w-5 h-5" /> },
    { status: 'Đã đến nước đích', location: 'Los Angeles, US', timestamp: '2025-03-05 10:00', icon: <MapPin className="w-5 h-5" /> },
    { status: 'Đã giao thành công', location: 'Người nhận - California', timestamp: '2025-03-07 15:00', icon: <CheckCircle className="w-5 h-5" /> },
  ],
};

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingStatus[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!trackingNumber.trim()) {
      setError('Vui lòng nhập mã vận đơn');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[trackingNumber.toUpperCase()];
      if (data) {
        setTrackingData(data);
      } else {
        setError('Không tìm thấy thông tin vận đơn. Vui lòng kiểm tra lại mã vận đơn.');
        setTrackingData(null);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section id="tracking" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Tra Cứu Vận Đơn
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Nhập mã vận đơn Ecoline để theo dõi tình trạng vận chuyển hàng hóa của bạn
          </p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập mã vận đơn (VD: ECO12345)"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-gray-300 focus:border-[#0891b2] focus:outline-none text-base sm:text-lg"
            />
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-[#0891b2] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#06b6d4] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {isLoading ? (
                <>
                  <Clock className="w-5 h-5 animate-spin" />
                  <span>Đang tìm...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Tra cứu</span>
                </>
              )}
            </button>
          </div>
          {error && (
            <p className="text-red-600 mt-2 text-sm">{error}</p>
          )}
        </motion.div>

        {/* Tracking Timeline */}
        {trackingData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 font-heading">
                Thông tin vận đơn: {trackingNumber.toUpperCase()}
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

                {/* Timeline Items */}
                <div className="space-y-6">
                  {trackingData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex gap-3 sm:gap-4"
                    >
                      {/* Icon */}
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        index === trackingData.length - 1
                          ? 'bg-green-100 text-green-600'
                          : 'bg-[#0891b2]/10 text-[#0891b2]'
                      }`}>
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1 min-w-0">
                        <div className="font-semibold text-gray-900 mb-1 font-heading text-sm sm:text-base">
                          {item.status}
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm mb-1">
                          {item.location}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {item.timestamp}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Demo Note */}
        {!trackingData && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            <p>Thử với mã vận đơn mẫu: <span className="font-mono font-semibold text-[#0891b2]">ECO12345</span></p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
