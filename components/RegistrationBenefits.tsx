import React from 'react';
import { BENEFITS } from '../constants';
import { ShieldCheck } from 'lucide-react';

const RegistrationBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Verified Partner
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              혼자 고민하지 마세요.<br />
              <span className="text-primary-600">전문가와 함께하면 다릅니다.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              복잡한 입점 절차부터 오픈 초기 마케팅 세팅까지.<br/>
              가치스폰서는 사장님이 오직 '장사'에만 집중하실 수 있도록<br/>
              나머지 모든 과정을 완벽하게 서포트합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-primary-200 transition-colors">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                    <benefit.icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Busy restaurant interior representing success" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-2xl">누적 입점 매장 3,000+</p>
                  <p className="text-sm opacity-80 mt-1">많은 사장님들이 가치스폰서를 선택했습니다.</p>
                </div>
              </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce hidden lg:block">
               <div className="flex items-center space-x-3">
                 <div className="bg-green-100 p-2 rounded-full text-green-600">
                   <ShieldCheck size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-bold">평균 매출 상승률</p>
                   <p className="text-xl font-black text-gray-900">+120%</p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegistrationBenefits;