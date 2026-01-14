import React from 'react';
import { FRANCHISE_SERVICES } from '../constants';
import { Users, BarChart3, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Franchise: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute right-0 top-0 w-96 h-96 bg-primary-500 rounded-full blur-[120px]" />
         <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-2 block">For Franchise HQ</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">프랜차이즈 본사 전용 솔루션</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            이미 100여 개의 프랜차이즈 본사가 가치스폰서와 파트너십을 맺고 있습니다.<br/>
            가맹점 관리부터 브랜드 성장까지, 차원이 다른 솔루션을 경험하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FRANCHISE_SERVICES.map((service, idx) => (
            <div key={idx} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 border border-gray-700 hover:border-primary-500 transition-all group">
              <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform origin-left">
                {idx === 0 ? <Users className="w-10 h-10 text-primary-400" /> : 
                 idx === 1 ? <BarChart3 className="w-10 h-10 text-blue-400" /> :
                 idx === 2 ? <TrendingUp className="w-10 h-10 text-purple-400" /> :
                             <Palette className="w-10 h-10 text-pink-400" />
                }
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trust Bar */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-2xl font-bold mb-1">제휴 문의 및 컨설팅</h4>
            <p className="text-gray-400 text-sm">프랜차이즈 전용 혜택에 대해 상세히 안내해 드립니다.</p>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors flex items-center"
          >
            본사 제휴 문의하기
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
};

// Import necessary icons for local usage inside the map if needed, 
// though mapped by index above.
import { TrendingUp, Palette } from 'lucide-react';

export default Franchise;