# Next.js 프로덕션 스타터킷

최신 Next.js 16과 React 19 기반의 프로덕션 레벨 스타터 템플릿입니다. ShadcnUI 컴포넌트 시스템과 완성도 높은 레이아웃을 제공하여 빠른 프로젝트 시작이 가능합니다.

## 주요 특징

- **최신 기술 스택**: Next.js 16.1.6, React 19.2.3, TypeScript 5
- **프로덕션 레벨 UI**: ShadcnUI 기반 18개 컴포넌트 포함
- **폼 관리 시스템**: React Hook Form + Zod 스키마 검증
- **반응형 디자인**: 모바일/데스크톱 완벽 지원
- **다크모드**: next-themes 기반 다크모드 전환
- **완성된 레이아웃**: Header, Footer, 반응형 네비게이션 구현
- **예제 페이지**: 컴포넌트 쇼케이스 및 폼 검증 데모

## 기술 스택

### 코어
- **Next.js** 16.1.6 (App Router)
- **React** 19.2.3
- **TypeScript** 5.7.3

### UI & 스타일링
- **TailwindCSS** 4.0.0
- **ShadcnUI** (Radix UI 기반)
- **next-themes** 0.4.6 (다크모드)
- **lucide-react** 0.469.0 (아이콘)

### 폼 관리
- **React Hook Form** 7.54.2
- **Zod** 3.24.1 (스키마 검증)
- **@hookform/resolvers** 3.9.2

### 기타
- **sonner** 1.7.3 (토스트 알림)
- **clsx** + **tailwind-merge** (클래스 유틸리티)

## 프로젝트 구조

```
claude-nextjs-starters/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃 (Header, Footer)
│   ├── page.tsx             # 메인 페이지
│   └── examples/            # 예제 페이지
│       ├── components/      # ShadcnUI 컴포넌트 쇼케이스
│       └── forms/          # 폼 검증 예제
├── components/              # 재사용 가능한 컴포넌트
│   ├── ui/                 # ShadcnUI 컴포넌트 (18개)
│   ├── layout/             # 레이아웃 컴포넌트
│   └── sections/           # 섹션 컴포넌트
├── types/                   # TypeScript 타입 정의
└── lib/                     # 유틸리티 함수
```

## 사용 가능한 컴포넌트

### UI 컴포넌트 (18개)
- **Button**: 다양한 variant 지원 (default, destructive, outline 등)
- **Card**: Header, Content, Footer 구조
- **Input**: 폼 입력 필드
- **Label**: 폼 라벨
- **Separator**: 구분선
- **Badge**: 상태 표시 뱃지
- **Alert**: 알림 메시지
- **Avatar**: 프로필 이미지
- **Switch**: 토글 스위치
- **Checkbox**: 체크박스
- **Select**: 드롭다운 선택
- **Textarea**: 여러 줄 입력
- **RadioGroup**: 라디오 버튼 그룹
- **Tabs**: 탭 네비게이션
- **Dialog**: 모달 다이얼로그
- **Dropdown Menu**: 드롭다운 메뉴
- **Sheet**: 사이드 시트
- **Skeleton**: 로딩 스켈레톤

### 레이아웃 컴포넌트
- **Header**: 반응형 헤더 (모바일 메뉴 포함)
- **Footer**: 푸터
- **Container**: 콘텐츠 컨테이너
- **ThemeToggle**: 다크모드 전환 버튼

### 섹션 컴포넌트
- **Hero**: 히어로 섹션
- **Features**: 기능 소개 섹션
- **TechStack**: 기술 스택 섹션

## 예제 페이지

### 컴포넌트 쇼케이스
`/examples/components` - 모든 ShadcnUI 컴포넌트를 실제로 확인할 수 있는 인터랙티브 페이지

### 폼 검증 데모
`/examples/forms` - React Hook Form + Zod를 활용한 폼 검증 예제

## 설치 및 실행

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

## 시작하기

1. `app/page.tsx` 파일을 수정하여 메인 페이지 편집
2. `components/` 폴더에서 필요한 컴포넌트 재사용
3. `app/examples/` 폴더의 예제 코드 참고
4. 새로운 페이지는 `app/` 폴더에 추가

파일을 편집하면 페이지가 자동으로 업데이트됩니다.

## 폰트 최적화

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용하여 Vercel의 [Geist](https://vercel.com/font) 폰트를 자동으로 최적화하고 로드합니다.

## 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [ShadcnUI 문서](https://ui.shadcn.com)
- [React Hook Form 문서](https://react-hook-form.com)
- [Zod 문서](https://zod.dev)
- [TailwindCSS 문서](https://tailwindcss.com)

## 배포

Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel 플랫폼](https://vercel.com/new)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 확인하세요.
