/**
 * 여성드림론 회사 정보 설정 파일
 * ------------------------------------------------------------------
 * 실제 회사 정보는 이 파일에서만 입력합니다.
 * 값이 null 인 항목은 화면에 [OO 입력] 자리표시자로 표시되며,
 * 임의의 값이 자동으로 채워지지 않습니다.
 *
 * ⚠️ 게시 전 확인
 *  - 모든 null 값을 실제 정보로 교체했는지 확인하세요.
 *  - 대표 전화번호(phone)가 null 이면 전화 연결 버튼은 생성되지 않습니다.
 *  - 등록번호·등록기관은 등록증 원본과 대조해 입력하세요.
 */

export type Nullable<T> = T | null;

export interface CompanyInfo {
  /** 상호 */
  name: string;
  /** 대표자명 */
  ceo: Nullable<string>;
  /** 사업자등록번호 */
  businessRegistrationNumber: Nullable<string>;
  /** 대부업 등록번호 */
  lendingRegistrationNumber: Nullable<string>;
  /** 대부중개업 등록번호 */
  brokerageRegistrationNumber: Nullable<string>;
  /** 등록기관 (관할 시·도 또는 금융위원회 등) */
  registrationAuthority: Nullable<string>;
  /** 사업장 주소 */
  address: Nullable<string>;
  /** 대표 전화번호 — 예: '02-000-0000' 형식으로 입력 */
  phone: Nullable<string>;
  /** 전화 상담 가능 시간 (선택) — 예: '평일 09:00 ~ 18:00' */
  phoneHours: Nullable<string>;
  /** 개인정보 보호책임자 (해당 시) */
  privacyOfficer: Nullable<string>;
  /** 개인정보 처리방침 URL 또는 내부 경로 (예: '/privacy.html') */
  privacyPolicyUrl: Nullable<string>;
  /** 이용약관 URL 또는 내부 경로 */
  termsUrl: Nullable<string>;
}

export const company: CompanyInfo = {
  name: '여성드림론',
  ceo: '조세리',
  businessRegistrationNumber: '719-25-02575',
  lendingRegistrationNumber: null,
  brokerageRegistrationNumber: null,
  registrationAuthority: null,
  address: '서울 강남구 테헤란로 328 동우빌딩12층',
  phone: null,
  phoneHours: null,
  privacyOfficer: '조세리',
  privacyPolicyUrl: null,
  termsUrl: null,
};

/** 화면에 표시될 자리표시자 문구 */
export const placeholders: Record<Exclude<keyof CompanyInfo, 'name'>, string> = {
  ceo: '대표자명 입력',
  businessRegistrationNumber: '사업자등록번호 입력',
  lendingRegistrationNumber: '대부업 등록번호 입력',
  brokerageRegistrationNumber: '대부중개업 등록번호 입력',
  registrationAuthority: '관할 등록기관 입력',
  address: '사업장 주소 입력',
  phone: '대표 전화번호 입력',
  phoneHours: '상담 가능 시간 입력',
  privacyOfficer: '해당 시 입력',
  privacyPolicyUrl: '정책 URL 또는 페이지 연결',
  termsUrl: '정책 URL 또는 페이지 연결',
};

/** 전화번호를 tel: 링크용 문자열로 변환합니다. 숫자가 없으면 null. */
export function toTelHref(phone: Nullable<string>): string | null {
  if (!phone) return null;
  const digits = phone.replace(/[^\d+]/g, '');
  return digits.length >= 7 ? `tel:${digits}` : null;
}
