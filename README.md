# 여성드림론 공식 홈페이지 (원페이지)

개인대출 컨설팅 회사 **여성드림론**의 회사 소개용 원페이지 홈페이지입니다.
상담 신청 폼, 개인정보 입력·수집 기능, 팝업, 채팅창은 포함하지 않습니다.

- 기술 스택: React 18 · TypeScript · Vite 6 · Tailwind CSS v4 · lucide-react
- 폰트: Pretendard (CDN, OFL 라이선스)

---

## 1. 실행 방법

Node.js 18.18 이상 (권장 20 LTS 이상)

```bash
npm install        # 의존성 설치
npm run dev        # 개발 서버 → http://localhost:5173
npm run build      # 타입 검사 + 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 미리보기
```

## 2. 디렉터리 구조

```
yeosung-dreamloan/
├─ index.html                 # 페이지 제목·메타 설명·Open Graph·폰트
├─ public/
│  ├─ favicon.svg
│  ├─ og-image.png            # 소셜 공유 미리보기 이미지 (1200×630)
│  └─ robots.txt
├─ src/
│  ├─ config/
│  │  ├─ company.ts           # ★ 회사 정보 (대표자·등록번호·주소·전화번호 등)
│  │  └─ legal.ts             # ★ 법정 표시사항·경고문구·이자율·검토 배지 설정
│  ├─ content/
│  │  └─ siteContent.ts       # 메뉴·히어로·소개·서비스·절차·원칙·FAQ 문구
│  ├─ components/
│  │  ├─ Header.tsx           # 고정 헤더, 섹션 이동 메뉴, 모바일 메뉴
│  │  ├─ Hero.tsx / HeroVisual.tsx
│  │  ├─ About.tsx            # 회사 소개 + 3가지 가치
│  │  ├─ Services.tsx         # 주요 서비스 3종
│  │  ├─ Process.tsx          # 컨설팅 진행 과정 3단계
│  │  ├─ Principles.tsx       # 서비스 원칙
│  │  ├─ Faq.tsx              # 접근성 지원 아코디언
│  │  ├─ CompanyInfo.tsx      # 기업 정보 + 등록·법정 표시 영역(분리)
│  │  ├─ Footer.tsx           # 정책 링크·일반 고지·저작권
│  │  ├─ Logo.tsx, icons.ts, ui.tsx
│  ├─ App.tsx, main.tsx, index.css
├─ netlify.toml               # Netlify 빌드·헤더 설정
├─ package.json, tsconfig.json, vite.config.ts
```

문구 수정은 `src/content/siteContent.ts`, 회사 정보는 `src/config/company.ts`,
법정 표시사항은 `src/config/legal.ts` 한 곳에서만 하면 됩니다.

## 3. 실제 회사 정보로 교체해야 하는 항목

`null` 인 값은 화면에 `[OO 입력]` 형태의 점선 자리표시자로 보입니다. **모두 교체되기 전에는 게시하지 마세요.**

| 파일 | 항목 | 비고 |
|---|---|---|
| `config/company.ts` | `ceo` 대표자명 | |
| | `businessRegistrationNumber` 사업자등록번호 | |
| | `lendingRegistrationNumber` 대부업 등록번호 | 등록증 원본과 대조 |
| | `brokerageRegistrationNumber` 대부중개업 등록번호 | 등록증 원본과 대조 |
| | `registrationAuthority` 등록기관 | 관할 시·도 또는 금융위원회 |
| | `address` 사업장 주소 | |
| | `phone` 대표 전화번호 | 입력 시에만 헤더·회사정보에 `tel:` 링크 자동 생성 |
| | `phoneHours` 상담 가능 시간 | 선택 |
| | `privacyOfficer` 개인정보 보호책임자 | 해당 시 |
| | `privacyPolicyUrl`, `termsUrl` | 실제 페이지가 있을 때만 링크로 표시 |
| `config/legal.ts` | `lendingTerms` 대부이자율·연체이자율·추가비용·조기상환 조건 | 해당되지 않으면 `enabled: false` |
| | `warningNotices` 경고문구 | **초안** — 법정 문구 확인 후 확정 |
| | `SHOW_REVIEW_NOTES` | 법률 검토 완료 후 `false` 로 변경 |
| `content/siteContent.ts` | `process.isExample` | 실제 운영 절차 확정 시 `false` |
| `index.html` | canonical, `og:url`, `og:image` 절대 URL | 도메인 확정 후 |
| `components/Logo.tsx` | 텍스트 워드마크 | 공식 로고 이미지가 있으면 교체 |

자리표시자가 남아 있는지 확인: 브라우저 콘솔에서 `document.querySelectorAll('[data-placeholder]').length` → `0` 이어야 합니다.

## 4. 등록 및 법적 표시사항 확인 체크리스트

> 아래 항목은 법률 자문이 아닌 **확인 목록**입니다. 실제 의무 여부와 문구는 최신 법령과 관할 기관 안내, 법률 전문가 검토로 확정하세요.

**사업 형태 확인 (가장 먼저)**
- [ ] 홈페이지가 「대부업법」상 대부조건 등에 관한 '광고'에 해당하는지 판단 (단순 기업 소개 vs. 광고)
- [ ] 회사가 직접 대부를 하는지, 대부중개만 하는지에 따라 표시 항목 구분 (`lendingTerms.enabled`)
- [ ] 제1금융권(은행) 대출 상품을 **중개·모집**하는 행위가 포함되는지 확인 — 은행 대출 중개는 대부중개업 등록과 별개로 「금융소비자 보호에 관한 법률」상 대출성 상품 판매대리·중개업자(대출모집인) 등록과 금융기관과의 위탁계약이 필요할 수 있음
- [ ] 유료 '컨설팅(자문)'을 제공하는 경우 금융소비자보호법상 금융상품자문업 등록 대상인지 확인
- [ ] 위 결과에 따라 '제1금융권 대출 관련 컨설팅' 표현의 허용 범위 확정

**등록 정보 표시**
- [ ] 상호·대표자·등록번호·등록기관·주소·전화번호가 등록증과 일치
- [ ] 대부업·대부중개업 등록 유효기간 확인 (갱신 여부)
- [ ] 금융감독원 '등록대부업체 통합조회'(파인)에서 조회되는지 확인

**광고 표시사항 (광고에 해당하는 경우)**
- [ ] 대부이자율(연 환산), 연체이자율, 이자 외 추가비용, 조기상환 조건 표시 필요 여부와 정확한 값
- [ ] 중개수수료 관련 문구, 과도한 차입 경고문구, 신용평점 하락 가능성 문구의 **법정 문구 원문** 확인 (`legal.ts` 문구는 초안)
- [ ] 경고문구의 글자 크기·위치 등 표시 방법 기준 확인 (현재 본문 크기 16px, 굵게 표시)
- [ ] 대부중개업자의 경우 중개 대상 대부업자 정보 등 추가 표시사항 여부 확인
- [ ] 광고 금지 시간·매체 규정 등 홈페이지 외 광고 매체 사용 시 별도 확인

**표현 점검** (현재 코드 기준 적용 완료, 수정 시 재확인)
- [x] 승인·금리·한도·심사기간 보장 표현 없음
- [x] 확인되지 않은 실적·후기·승인 사례·통계 수치 없음
- [x] '제휴 은행' 표현 및 은행 로고 미사용
- [x] 은행이 아님을 밝히는 고지 (푸터 `generalDisclaimers`)
- [x] 중개수수료를 고객에게 청구하는 것으로 오해될 표현 없음
- [ ] 은행과의 제휴·위탁 관계가 실제로 있다면 증빙 확인 후에만 표시

**개인정보**
- [ ] 입력 폼은 없지만 접속 로그·쿠키·분석 도구(GA 등) 사용 시 개인정보 처리방침 게시 필요 여부 확인
- [ ] 전화 상담 시 수집하는 정보에 대한 처리방침 마련
- [ ] 개인정보 보호책임자 지정·표시

## 5. Netlify 배포 안내

`netlify.toml` 에 빌드 설정(빌드 명령 `npm run build`, 게시 폴더 `dist`, Node 20, 캐시·보안 헤더)이 들어 있어 Netlify 화면에서 따로 입력할 값이 없습니다.

### 방법 A. GitHub 연결 (권장 — 수정할 때마다 자동 재배포)
1. GitHub 에서 새 저장소를 만들고 이 폴더 전체를 업로드합니다. (`node_modules`, `dist` 는 올리지 않음)
2. https://app.netlify.com → **Add new site → Import an existing project → GitHub** → 저장소 선택
3. 설정 값이 자동으로 채워진 것을 확인하고 **Deploy** 를 누릅니다.
4. 1~2분 뒤 `https://○○○.netlify.app` 주소가 생깁니다. 이후 GitHub 에 파일을 수정해 올리면 자동으로 다시 배포됩니다.

### 방법 B. 내 컴퓨터에서 빌드 후 끌어다 놓기
1. 이 폴더에서 `npm install` → `npm run build`
2. https://app.netlify.com/drop 에 생성된 `dist` 폴더를 끌어다 놓습니다.
   (이 방법은 빌드할 때 사이트 주소를 모르므로 og:image 가 상대경로로 남습니다. 필요하면 `SITE_URL=https://주소 npm run build` 로 빌드하세요.)

### 방법 C. Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init        # 새 사이트 생성 또는 기존 사이트 연결
netlify deploy --build --prod
```

### 사이트 주소와 공유 미리보기
- 빌드할 때 Netlify 가 넣어주는 사이트 주소(`URL`)로 canonical·`og:url`·`og:image` 가 자동 설정됩니다.
- 커스텀 도메인을 연결하면 다음 배포부터 그 도메인이 적용됩니다. 직접 지정하려면 **Site configuration → Environment variables** 에 `SITE_URL` 을 추가하세요.

### 커스텀 도메인 연결
**Domain management → Add a domain** → 도메인 입력 → 안내되는 DNS 값을 도메인 구입처(가비아·후이즈 등)에 등록 → HTTPS 인증서는 Netlify 가 자동 발급합니다.

### 배포 전 확인
1. 3번 표의 자리표시자를 모두 실제 정보로 교체
2. 4번 체크리스트의 법률 검토 완료 → `src/config/legal.ts` 의 `SHOW_REVIEW_NOTES = false`
3. 네이버 서치어드바이저·Google Search Console 소유 확인 메타태그는 `index.html` `<head>` 에 추가
4. Pretendard 폰트는 jsdelivr CDN 에서 불러옵니다.
