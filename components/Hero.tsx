import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2574&auto=format&fit=crop')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:w-2/3 lg:w-1/2 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-50 backdrop-blur-sm mb-4">
            <span className="text-sm font-bold tracking-wide">배달의민족 공식 협력사</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            배달매출 상승을 위한<br />
            <span className="text-teal-300">첫 번째 선택!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-xl">
            입점부터 운영, 매출 최적화까지.<br className="md:hidden" />
            (주)가치스폰서의 전문가가 사장님과 함께합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-teal-800 font-bold text-lg rounded-full shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all flex items-center justify-center group"
            >
              무료 입점 상담하기
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/ads')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all"
            >
              광고 상품 보기
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;