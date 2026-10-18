/**
 * 홈페이지 본문 콘텐츠
 * ------------------------------------------------------------------
 * 문구 수정은 이 파일에서 합니다. 아이콘은 lucide-react 아이콘 이름을 사용합니다.
 *
 * 표현 원칙 (수정 시에도 유지하세요)
 *  - '100% 승인', '누구나 대출 가능', '최저금리 보장', '당일 무조건 승인' 등 보장성 표현 금지
 *  - 확인되지 않은 업력·상담 건수·승인율·만족도·제휴 은행 수 등 수치 사용 금지
 *  - 공식 제휴가 확인되지 않은 은행을 '제휴 은행'으로 표현 금지
 */

import { reviews } from './reviews';

/** 상단·하단 메뉴. '고객 후기'는 후기가 1개 이상 입력된 경우에만 표시됩니다. */
export const navItems: { id: string; label: string }[] = [
  { id: 'services', label: '서비스 안내' },
  { id: 'process', label: '진행 과정' },
  ...(reviews.length > 0 ? [{ id: 'reviews', label: '고객 후기' }] : []),
];

export const hero = {
  eyebrow: '여성드림론 대출 컨설팅',
  title: ['대출이 부결되셨나요?', '저희는 모든 1금융에서 최대 1억, 금리 3%대로 100% 승인됩니다.'],
  lead: '저신용자, 무직자, 개인회생·파산면책 중이신 분도 가능합니다.',
  sub: '',
  topics: ['저신용자 승인', '무직자 승인', '개인회생·파산면책 승인', '대출 부결없이 승인'],
};

export const about = {
  eyebrow: 'About',
  title: '여성드림론을 소개합니다.',
  paragraphs: [
    '여성드림론은 대출이 막막한 분들을 위한 대출 컨설팅 회사입니다.',
    '어려운 금융 용어 대신 쉬운 말로, 내 상황에서 할 수 있는 방법을 알려드립니다.',
  ],
  values: [
    {
      icon: 'BookOpen',
      title: '쉽게 설명합니다.',
      body: '금리, 상환 방법, 필요 서류를 알기 쉽게 알려드립니다.',
    },
    {
      icon: 'UserRound',
      title: '내 상황에 맞춥니다.',
      body: '신용, 소득, 회생·면책 이력까지 함께 살펴봅니다.',
    },
    {
      icon: 'ShieldCheck',
      title: '솔직하게 말씀드립니다.',
      body: '되는 것과 어려운 것을 있는 그대로 안내합니다.',
    },
  ],
} as const;

export const services = {
  eyebrow: 'Services',
  title: '진행 절차',
  intro: '',
  items: [
    {
      no: '01',
      icon: 'Landmark',
      title: '부결 사유 체크',
      body: '부결된 사유를 확인하고, 검토해서 필요한 서류를 보완해 드립니다.',
      points: ['부결 사유확인', '서류 보완', '금융권 확인'],
      tag: '부결 사유',
    },
    {
      no: '02',
      icon: 'UserRound',
      title: '내 상황 점검하기',
      body: '계좌 지급정지 및 압류, 통신사 미납, 스팸 모든 부결 사유 해결해 드립니다.',
      points: ['저신용자', '무직자·프리랜서', '개인회생·파산면책 중인 분'],
      tag: '맞춤 상담',
    },
    {
      no: '03',
      icon: 'ClipboardCheck',
      title: '1금융 승인',
      body: '1금융 한도 1억, 금리 3% 대로 100% 승인 가능합니다.',
      points: ['1금융 가능', '최대한도 1억', '금리 3%'],
      tag: '승인 100%',
    },
  ],
  notes: ['대출 승인과 금리·한도는 금융기관 심사에 따라 결정됩니다.'],
} as const;

export const process = {
  eyebrow: 'Process',
  title: '진행 과정',
  intro: '간단한 3단계로 진행됩니다.',
  /** true 로 바꾸면 '예시 과정' 안내 문구가 함께 표시됩니다. */
  isExample: false,
  exampleNote: '아래 과정은 예시이며, 상담 내용에 따라 달라질 수 있습니다.',
  steps: [
    {
      step: 'STEP 01',
      icon: 'Search',
      title: '상담',
      body: '현재 상황과 거절된 이유를 들어봅니다.',
    },
    {
      step: 'STEP 02',
      icon: 'UserRound',
      title: '상황 점검',
      body: '신용, 소득, 이력을 보고 가능한 방법을 찾습니다.',
    },
    {
      step: 'STEP 03',
      icon: 'ClipboardCheck',
      title: '방법 안내',
      body: '신청해 볼 수 있는 상품과 준비할 서류를 알려드립니다.',
    },
  ],
} as const;

export const principles = {
  eyebrow: 'Principles',
  title: '여성드림론의 약속',
  intro: '어려운 상황일수록 정직하게 안내합니다.',
  items: [
    {
      icon: 'FileText',
      title: '쉬운 설명',
      body: '어려운 말 없이 알기 쉽게 설명합니다.',
    },
    {
      icon: 'Scale',
      title: '꼼꼼한 점검',
      body: '내 상황을 꼼꼼히 살펴보고 안내합니다.',
    },
    {
      icon: 'ShieldCheck',
      title: '정직한 안내',
      body: '확실하지 않은 것을 약속하지 않습니다.',
    },
  ],
  commitment: '대출 승인과 금리·한도는 금융기관이 정합니다. 여성드림론은 이를 보장한다고 말하지 않습니다.',
} as const;
