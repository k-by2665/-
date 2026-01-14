import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AdsGuide from './components/AdsGuide';
import RegistrationBenefits from './components/RegistrationBenefits';
import Franchise from './components/Franchise';
import Contact from './components/Contact';

// Scroll to top component to handle scroll behavior on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="benefits-preview">
        <RegistrationBenefits />
      </div>
      <div className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-6 text-gray-900">지금 바로 성공의 파트너를 만나보세요</h2>
          <p className="text-gray-600 mb-8">
            가치스폰서는 사장님의 성공을 위해 항상 준비되어 있습니다.
          </p>
          <a href="#/contact" className="inline-block px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
            무료 상담 신청하기
          </a>
        </div>
      </div>
    </>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ads" element={<AdsGuide />} />
            <Route path="/benefits" element={<RegistrationBenefits />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;