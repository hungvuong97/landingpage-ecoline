'use client';

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  comment: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Nguyễn Minh Tuấn',
    company: 'Shop Online - Gửi hàng đi Mỹ',
    rating: 5,
    comment: 'Ecoline giao hàng đi Mỹ chỉ 6 ngày, nhanh hơn nhiều so với các đơn vị khác tôi từng dùng. Tracking cập nhật liên tục, rất yên tâm. Sẽ tiếp tục hợp tác lâu dài.',
    initials: 'NT',
  },
  {
    name: 'Trần Thị Hương',
    company: 'Amazon Seller - Gửi hàng đi UK',
    rating: 5,
    comment: 'Tôi rất hài lòng với dịch vụ Epacket đi Anh của Ecoline. Giá cước hợp lý, thời gian nhanh, và đặc biệt là nhóm support hỗ trợ 24/24 rất nhiệt tình.',
    initials: 'TH',
  },
  {
    name: 'Lê Văn Đức',
    company: 'Doanh nghiệp XNK - Gửi hàng đi EU',
    rating: 5,
    comment: 'Đã sử dụng dịch vụ chuyên tuyến đi Châu Âu của Ecoline trong nhiều tháng. Chất lượng ổn định, kho bãi chuyên nghiệp ở cả HCM lẫn Hà Nội rất thuận tiện.',
    initials: 'LĐ',
  },
  {
    name: 'Phạm Thị Mai',
    company: 'TMĐT - Gửi hàng đi Úc',
    rating: 5,
    comment: 'Ecoline là đối tác logistics đáng tin cậy nhất. Hàng đi Úc chỉ 5 ngày bay, tracking riêng lẻ từng kiện hàng. Giá cước cũng rất cạnh tranh so với thị trường.',
    initials: 'PM',
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-7 sm:p-9 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col relative"
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-7 sm:left-9">
        <div className="w-9 h-9 bg-gradient-to-br from-[#0891b2] to-[#06b6d4] rounded-lg flex items-center justify-center shadow-lg">
          <Quote className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-0.5 mb-5 mt-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#fbbf24] text-[#fbbf24]" />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-600 mb-7 flex-grow leading-relaxed text-sm sm:text-base">
        &ldquo;{testimonial.comment}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0891b2] to-[#22d3ee] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <div className="font-bold text-gray-900 font-heading text-sm sm:text-base">{testimonial.name}</div>
          <div className="text-xs sm:text-sm text-gray-400">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="section-badge bg-[#0891b2]/10 text-[#0891b2]">
            Đánh giá
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Khách Hàng Nói Gì
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Những phản hồi tích cực từ khách hàng đã tin tưởng sử dụng dịch vụ Ecoline Logistics
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative px-10 sm:px-14 lg:px-16">
            <AnimatePresence mode="wait" initial={false}>
              <TestimonialCard
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 sm:p-3 shadow-lg border border-gray-100 hover:bg-gray-50 hover:border-[#0891b2]/30 transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 sm:p-3 shadow-lg border border-gray-100 hover:bg-gray-50 hover:border-[#0891b2]/30 transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#0891b2] to-[#06b6d4] w-8 h-2.5'
                    : 'bg-gray-200 w-2.5 h-2.5 hover:bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
