import { NavItem, AdProduct, BenefitItem, FranchiseService } from './types';
import { Zap, Palette, MessageSquare, TrendingUp, BarChart3, Users, ShieldCheck } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '광고상품안내', path: '/ads' },
  { label: '입점안내 및 혜택', path: '/benefits' },
  { label: '프랜차이즈 전용', path: '/franchise' },
  { label: '문의하기', path: '/contact' },
];

export const AD_PRODUCTS: AdProduct[] = [
  {
    name: '배민1플러스',
    description: '한 번에 한 집 배달, 가장 빠른 고객 만족도.',
    fee: '6.8% (주문중개)',
    target: '편리한 운영을 원하는 사장님',
    features: ['배민이 배달 직접 책임', '주문 접수부터 배달까지 원스톱', '높은 고객 만족도']
  },
  {
    name: '오픈리스트',
    description: '상단 노출을 통한 확실한 홍보 효과.',
    fee: '6.8% (주문중개)',
    target: '자체 배달이 가능한 사장님',
    features: ['앱 최상단 3개 영역 랜덤 노출', '합리적인 수수료', '깃발 꽂기보다 넓은 노출 범위']
  },
  {
    name: '배민포장주문',
    description: '배달비 부담 없이 가까운 고객 잡기.',
    fee: '중개이용료 무료 (프로모션)',
    target: '포장 고객이 많은 매장',
    features: ['배달비 0원', '위치 기반 근거리 고객 타겟팅', '테이크아웃 매출 증대']
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    icon: Zap,
    title: 'Speed Opening',
    description: '전국에서 가장 빠른 입점 처리를 약속드립니다. 복잡한 서류 절차도 전문가가 신속하게 대행합니다.'
  },
  {
    icon: Palette,
    title: 'Premium Design',
    description: '고퀄리티 가게 로고, 메뉴 썸네일 GIF, 리뷰 이벤트 배너 디자인을 무료로 제작해 드립니다.'
  },
  {
    icon: MessageSquare,
    title: 'Review Management',
    description: '바쁜 사장님을 위해 리뷰 답글 서비스를 지원합니다. 고객 관리에 드는 시간을 획기적으로 줄여드려요.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Consulting',
    description: '오픈이 끝이 아닙니다. 지속적인 매출 추이 분석과 깃발 꽂기 전략 등 맞춤 컨설팅을 제공합니다.'
  }
];

export const FRANCHISE_SERVICES: FranchiseService[] = [
  {
    title: '전담 매니저 배정',
    description: '본사 및 가맹점 전담 전문 매니저가 1:1로 밀착 관리하여 소통의 부재를 없앱니다.'
  },
  {
    title: '월간 매출 분석 리포트',
    description: '매월 가맹점별 매출 데이터와 시장 동향을 분석한 인사이트 리포트를 제공합니다.'
  },
  {
    title: 'QSC & 트렌드 관리',
    description: '매장의 품질, 서비스, 청결 상태를 체크하고 최신 배달 트렌드를 반영한 솔루션을 제안합니다.'
  },
  {
    title: '브랜드 디자인 패키지',
    description: '신메뉴 출시 시 포스터, 앱 내 상세페이지 디자인 등 프랜차이즈 톤앤매너에 맞는 디자인을 지원합니다.'
  }
];