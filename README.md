# Next.js 프로덕션 스타터킷

최신 **Next.js 16**과 **React 19** 기반의 프로덕션 레벨 스타터 템플릿입니다. ShadcnUI 컴포넌트 시스템과 완성도 높은 레이아웃을 제공하여 빠른 프로젝트 시작이 가능합니다.

## 주요 특징

- **최신 기술 스택**: Next.js 16.1.6, React 19.2.3, TypeScript 5
- **프로덕션 레벨 UI**: ShadcnUI 기반 21개 UI 컴포넌트 + 7개 레이아웃/섹션 컴포넌트 (총 28개)
- **폼 관리 시스템**: React Hook Form + Zod 스키마 검증
- **반응형 디자인**: 모바일/데스크톱 완벽 지원
- **다크모드**: next-themes 기반 다크모드 전환
- **완성된 레이아웃**: Header, Footer, 반응형 네비게이션 구현
- **예제 페이지**: 컴포넌트 쇼케이스 및 폼 검증 데모

## 기술 스택

### 코어
- **Next.js** 16.1.6 (App Router)
- **React** 19.2.3
- **TypeScript** ^5

### UI & 스타일링
- **TailwindCSS** ^4
- **ShadcnUI** (Radix UI 기반)
- **next-themes** 0.4.6 (다크모드)
- **lucide-react** 0.563.0 (아이콘)
- **class-variance-authority** 0.7.1 (CVA 유틸리티)

### 폼 관리
- **React Hook Form** 7.71.1
- **Zod** 4.3.6 (스키마 검증)
- **@hookform/resolvers** 5.2.2

### 유틸리티
- **sonner** 2.0.7 (토스트 알림)
- **clsx** 2.1.1 + **tailwind-merge** 3.4.0 (클래스 유틸리티)
- **usehooks-ts** 3.1.1 (React hooks 라이브러리)
- **tw-animate-css** 1.4.0 (TailwindCSS 애니메이션)

## 프로젝트 구조

```
claude-nextjs-starters/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃 (Header, Footer)
│   ├── page.tsx             # 메인 페이지
│   ├── globals.css          # 글로벌 스타일 및 TailwindCSS 설정
│   └── examples/            # 예제 페이지
│       ├── components/      # ShadcnUI 컴포넌트 쇼케이스
│       └── forms/          # 폼 검증 예제
├── components/              # 재사용 가능한 컴포넌트
│   ├── ui/                 # ShadcnUI 컴포넌트 (21개)
│   ├── layout/             # 레이아웃 컴포넌트 (4개)
│   └── sections/           # 섹션 컴포넌트 (3개)
├── types/                   # TypeScript 타입 정의
│   └── index.ts            # 공통 타입 인터페이스
├── lib/                     # 유틸리티 함수
│   └── utils.ts            # clsx + tailwind-merge 유틸리티
└── components.json          # ShadcnUI 설정 파일
```

## 사용 가능한 컴포넌트

### UI 컴포넌트 (21개)
- **Accordion**: 아코디언 패널
- **Alert**: 알림 메시지
- **Avatar**: 프로필 이미지
- **Badge**: 상태 표시 뱃지
- **Button**: 다양한 variant 지원 (default, destructive, outline 등)
- **Card**: Header, Content, Footer 구조
- **Checkbox**: 체크박스
- **Dialog**: 모달 다이얼로그
- **Input**: 폼 입력 필드
- **Label**: 폼 라벨
- **Navigation Menu**: 반응형 네비게이션 메뉴
- **Progress**: 진행 상태 표시줄
- **Radio Group**: 라디오 버튼 그룹
- **Select**: 드롭다운 선택
- **Separator**: 구분선
- **Sheet**: 사이드 시트 (모바일 메뉴)
- **Skeleton**: 로딩 스켈레톤
- **Sonner**: Toast 알림 시스템
- **Switch**: 토글 스위치
- **Tabs**: 탭 네비게이션
- **Textarea**: 여러 줄 입력

### 레이아웃 컴포넌트 (4개)
- **Header**: 반응형 헤더 (Desktop: 가로 메뉴, Mobile: Sheet 사이드바)
  - Sticky 헤더 (blur 효과)
  - 다크모드 토글 버튼 통합
  - 예제 페이지 링크
- **Footer**: 3개 링크 그룹 (프로젝트, 기술 스택, 리소스)
  - 연도 자동 표시
  - 외부 링크 처리 (target="_blank")
- **Container**: 콘텐츠 컨테이너
- **ThemeToggle**: 다크모드 전환 버튼

### 섹션 컴포넌트 (3개)
- **Hero**: 히어로 섹션 (메인 헤드라인, CTA 버튼)
- **Features**: 기능 소개 섹션 (아이콘, 제목, 설명)
- **TechStack**: 기술 스택 섹션 (기술별 뱃지)

## 예제 페이지

### 컴포넌트 쇼케이스
`/examples/components` - 21개 UI 컴포넌트의 실제 동작을 확인할 수 있는 인터랙티브 페이지
- 모든 컴포넌트의 다양한 variant 및 속성 예제
- 실시간 상호작용 가능
- 다크모드 지원

### 폼 검증 데모
`/examples/forms` - React Hook Form + Zod 스키마 검증 실습
- **로그인 폼**: 이메일, 비밀번호 검증
- **회원가입 폼**: 이름, 이메일, 비밀번호, 비밀번호 확인
- **검색 폼**: 실시간 검색어 검증

## 타입 정의

`types/index.ts`에 정의된 주요 인터페이스:

```typescript
// 네비게이션 아이템
interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

// 기능 카드
interface FeatureCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

// 푸터 링크 그룹
interface LinkGroup {
  title: string;
  links: { title: string; href: string; external?: boolean; }[];
}

// CTA 버튼
interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
}
```

## 시작하기

### 저장소 복제

```bash
git clone https://github.com/Lee3026/claude-nextjs-starters.git
cd claude-nextjs-starters
```

### 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm run start
```

## 추가 명령어

### 코드 린트
```bash
npm run lint
```

### ShadcnUI 컴포넌트 추가
```bash
npx shadcn@latest add [component-name]
```

사용 가능한 컴포넌트 목록: https://ui.shadcn.com/docs/components


## 폰트 최적화

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용하여 Vercel의 [Geist](https://vercel.com/font) 폰트를 자동으로 최적화하고 로드합니다.

## GitHub 저장소

- **저장소**: https://github.com/Lee3026/claude-nextjs-starters
- **최근 커밋**: "Next.js 프로덕션 스타터킷 구축" (2026-01-29)
- **브랜치**: master

## 참고 자료

### 공식 문서
- [Next.js 문서](https://nextjs.org/docs) - Next.js 16 App Router
- [React 문서](https://react.dev) - React 19
- [TypeScript 문서](https://www.typescriptlang.org/docs)

### UI & 스타일링
- [ShadcnUI 문서](https://ui.shadcn.com) - 컴포넌트 시스템
- [Radix UI 문서](https://www.radix-ui.com) - Headless UI 컴포넌트
- [TailwindCSS 문서](https://tailwindcss.com) - 유틸리티 CSS 프레임워크
- [Lucide Icons](https://lucide.dev) - 아이콘 라이브러리

### 폼 & 검증
- [React Hook Form 문서](https://react-hook-form.com) - 폼 관리
- [Zod 문서](https://zod.dev) - 스키마 검증

## 배포

### Vercel 배포 (권장)

Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel 플랫폼](https://vercel.com/new)을 사용하는 것입니다.

1. GitHub 저장소를 Vercel에 연결
2. 자동으로 빌드 및 배포
3. 각 커밋마다 자동 프리뷰 생성

### 기타 플랫폼

- **Netlify**: `npm run build` 후 `.next` 폴더 배포
- **Docker**: Dockerfile을 사용한 컨테이너 배포

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 확인하세요.

## 라이선스

MIT

## 기여

이슈 및 풀 리퀘스트는 언제나 환영합니다!
