import React, { useState } from 'react';
import { Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shopName: '',
    inquiryType: 'new_entry', // Default value
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mreezzaz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('문의가 성공적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다.');
        setFormData({ name: '', phone: '', shopName: '', inquiryType: 'new_entry', message: '' });
      } else {
        alert('문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Contact Us</h2>
          <h1 className="text-4xl font-black text-gray-900 mb-4">입점 및 제휴 문의</h1>
          <p className="text-gray-600">성공적인 매장 운영을 위한 첫 걸음, 지금 시작하세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info Side */}
          <div className="bg-primary-900 p-10 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">오시는 길</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">고객센터</p>
                    <p className="text-3xl font-black text-primary-300">1688-4913</p>
                    <p className="text-sm text-gray-300 mt-2">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                  </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">본사 위치</p>
                    <p className="text-gray-300 leading-relaxed">
                      세종특별자치시 나성로125-10, 708호<br/>
                      <span className="text-xs opacity-60 mt-1 block">* 방문 상담은 사전 예약제로 운영됩니다.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               {/* Decorative Map Placeholder */}
               <div className="w-full h-48 bg-primary-800 rounded-xl overflow-hidden relative opacity-50 hover:opacity-100 transition-opacity">
                 <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                    alt="Map"
                    className="w-full h-full object-cover mix-blend-luminosity" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white text-primary-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">지도 보기</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">상담 신청서 작성</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">이름 (담당자)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-2">매장명 (예정시 '오픈예정' 기재)</label>
                <input
                  type="text"
                  id="shopName"
                  name="shopName"
                  required
                  value={formData.shopName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="가치식당"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">문의 유형</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="new_entry">신규 입점 상담</option>
                  <option value="ads_consulting">광고/컨설팅 문의</option>
                  <option value="franchise">프랜차이즈 제휴</option>
                  <option value="other">기타 문의</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">문의 내용 (선택)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="궁금하신 내용을 자유롭게 적어주세요."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    전송 중...
                  </>
                ) : (
                  <>
                    상담 신청하기
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                개인정보 수집 및 이용에 동의하는 것으로 간주합니다.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;