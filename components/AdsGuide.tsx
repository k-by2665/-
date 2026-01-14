import React from 'react';
import { AD_PRODUCTS } from '../constants';
import { CheckCircle2, Star, TrendingUp, Info } from 'lucide-react';

const AdsGuide: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Service Guide</h2>
          <h1 className="text-4xl font-black text-gray-900 mb-6">배달의민족 광고상품 안내</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            사장님의 매장 상황에 꼭 맞는 광고 상품을 선택하세요.<br/>
            효율적인 비용으로 최대의 매출 효과를 만들어드립니다.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {AD_PRODUCTS.map((product, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                ${idx === 0 ? 'border-primary-500 shadow-xl ring-2 ring-primary-500 ring-opacity-10' : 'border-gray-200 shadow-sm'}
              `}
            >
              {idx === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{product.description}</p>
              
              <div className="mb-8">
                <span className="text-3xl font-bold text-gray-900">{product.fee.split(' ')[0]}</span>
                <span className="text-gray-500 ml-2 text-sm">{product.fee.split(' ').slice(1).join(' ')}</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">추천 대상</div>
                <div className="flex items-start text-gray-600 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  {product.target}
                </div>
              </div>

              <ul className="space-y-3">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-gray-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* New Store Benefits */}
        <div className="bg-primary-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center text-white">
              <div className="inline-flex items-center mb-6 space-x-2">
                <span className="bg-yellow-400 text-primary-900 text-xs font-bold px-3 py-1 rounded-full">New!</span>
                <span className="font-bold text-primary-200">신규 입점 사장님 한정 혜택</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-8 leading-tight">
                지금 시작하시면<br/>
                <span className="text-primary-300">최대 20만원 혜택</span>과<br/>
                수수료 페이백까지!
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <TrendingUp className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">중개이용료 100% 페이백</h4>
                    <p className="text-gray-300 text-sm">가입 후 14일간 발생한 배달 중개 수수료 전액 환급 (최대 한도 내)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">우리가게클릭 광고비 지원</h4>
                    <p className="text-gray-300 text-sm">최대 20만원까지 광고비용 페이백 지원으로 부담 없는 마케팅 시작</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Info className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">90일간 신규 뱃지 노출</h4>
                    <p className="text-gray-300 text-sm">고객들의 눈길을 끄는 '신규' 뱃지 부착 및 즉시 할인 쿠폰 혜택 제공</p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-xs text-gray-500 border-t border-gray-700 pt-4">
                * 위 혜택은 배민 본사 정책에 따라 변경될 수 있습니다. 자세한 내용은 상담 시 안내드립니다.
              </p>
            </div>
            
            <div className="relative h-64 lg:h-auto">
               <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop')"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-primary-900"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdsGuide;