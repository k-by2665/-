import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-black text-white mb-6">(주)가치스폰서</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              배달의민족 공식 협력사로서 사장님의 성공적인 매장 운영을 위해<br/>
              입점부터 마케팅, 매출 관리까지 최적의 솔루션을 제공합니다.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span>1688-4913 (평일 09:00 - 18:00)</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span>세종특별자치시 나성로125-10, 708호</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span>dialjb@naver.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Service Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/ads" className="hover:text-primary-400 transition-colors">광고상품안내</a></li>
              <li><a href="#/benefits" className="hover:text-primary-400 transition-colors">입점 혜택</a></li>
              <li><a href="#/franchise" className="hover:text-primary-400 transition-colors">프랜차이즈 전용</a></li>
              <li><a href="#/contact" className="hover:text-primary-400 transition-colors">입점 상담 신청</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Value Sponsor Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="cursor-pointer hover:text-white">개인정보처리방침</span>
            <span className="cursor-pointer hover:text-white">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;