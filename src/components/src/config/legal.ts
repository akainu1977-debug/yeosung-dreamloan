/**
 * 대부업·대부중개업 법정 표시사항 설정
 * ------------------------------------------------------------------
 * ⚠️ 이 파일의 모든 문구는 "초안"입니다.
 * 「대부업 등의 등록 및 금융이용자 보호에 관한 법률」(대부업법) 제9조 및
 * 같은 법 시행령, 관할 기관 안내, 그리고 실제 사업 형태(대부업 / 대부중개업 /
 * 제1금융권 상품 중개 여부 등)에 따라 필요한 항목과 정확한 문구가 달라집니다.
 * 게시 전 반드시 법률 전문가 또는 관할 기관을 통해 확인하세요.
 *
 * - 값이 null 인 항목은 [OO 입력] 자리표시자로 표시됩니다.
 * - 해당되지 않는 항목은 enabled 를 false 로 바꾸면 화면에서 제외됩니다.
 */

import type { Nullable } from './company';

/**
 * 검토용 안내 배지 표시 여부.
 * 법률 검토가 끝나고 실제 정보를 모두 입력한 뒤 false 로 바꾸세요.
 */
export const SHOW_REVIEW_NOTES = true;

export interface LendingTerms {
  /** 회사가 직접 대부(대출)를 하며 대부조건을 표시해야 하는 경우 true */
  enabled: boolean;
  /** 대부이자율 (연 이자율, 연체이자율 포함 여부 등 법령 기준 확인) */
  interestRate: Nullable<string>;
  /** 연체이자율 */
  overdueInterestRate: Nullable<string>;
  /** 이자 외 추가비용 */
  additionalCosts: Nullable<string>;
  /** 조기상환 조건 (중도상환수수료 등) */
  earlyRepaymentTerms: Nullable<string>;
}

export const lendingTerms: LendingTerms = {
  enabled: true,
  interestRate: null,
  overdueInterestRate: null,
  additionalCosts: null,
  earlyRepaymentTerms: null,
};

export const lendingTermPlaceholders: Record<Exclude<keyof LendingTerms, 'enabled'>, string> = {
  interestRate: '대부이자율 입력',
  overdueInterestRate: '연체이자율 입력',
  additionalCosts: '이자 외 추가비용 입력',
  earlyRepaymentTerms: '조기상환 조건 입력',
};

/**
 * 경고·고지 문구 (초안)
 * 실제 의무 문구와 표시 방법(글자 크기·위치 등)은 최신 시행령을 확인한 뒤 확정하세요.
 */
export const warningNotices: { id: string; text: string; enabled: boolean }[] = [
  {
    id: 'brokerage-fee',
    text: '중개수수료를 요구하거나 받는 것은 불법입니다.',
    enabled: true,
  },
  {
    id: 'excessive-debt',
    text: '과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.',
    enabled: true,
  },
  {
    id: 'credit-score',
    text: '대출 시 귀하의 신용평점이 하락할 수 있습니다.',
    enabled: true,
  },
];

/** 회사 성격 고지 — 은행과의 구분 */
export const generalDisclaimers: string[] = [
  '여성드림론은 은행이 아니며, 홈페이지에서 안내하는 제1금융권 대출 상품은 각 금융기관이 직접 제공하는 상품입니다.',
  '대출 승인 여부, 적용 금리, 한도, 심사 기간은 각 금융기관의 심사와 상품 조건에 따라 결정되며, 여성드림론이 이를 보장하지 않습니다.',
  '홈페이지의 금융 정보는 일반적인 안내이며, 구체적인 상품 조건은 각 금융기관의 최신 공식 안내를 기준으로 확인하시기 바랍니다.',
];
