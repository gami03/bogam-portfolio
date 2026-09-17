# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code(및 협업 개발자)를 위한 가이드입니다.

## 프로젝트 개요

웹 개발자 이직용 개인 포트폴리오 웹사이트. **Vercel 정적 배포**를 목표로 하며,
별도 백엔드/DB 없이 로컬 데이터 파일만으로 모든 콘텐츠를 관리하는 원페이지
스크롤 사이트입니다.

## 기술 스택

- **Next.js** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS**
- **Framer Motion** — 스크롤/등장 애니메이션, 마이크로 인터랙션
- **lucide-react** — 아이콘
- **clsx** + **tailwind-merge** — 조건부 클래스 병합 (`cn()` 유틸)

## 아키텍처 규칙

1. **콘텐츠는 `src/data/portfolio.ts`에서만 관리한다.**
   - 프로젝트, 경력, 스킬, 소개 문구, 링크(GitHub/이력서 등) 등 모든 텍스트/데이터는
     이 파일에 타입이 정의된 객체·배열로 존재해야 한다.
   - 컴포넌트 안에 콘텐츠 문자열을 하드코딩하지 않는다. 새 콘텐츠가 필요하면
     `portfolio.ts`에 타입과 데이터를 먼저 추가하고 컴포넌트는 이를 import해서 렌더링만 한다.

2. **UI 컴포넌트는 `src/components/`에 도메인/섹션별로 모듈화한다.**
   - 섹션 단위 컴포넌트: `src/components/sections/` (예: `Hero.tsx`, `Projects.tsx`, `Experience.tsx`, `Skills.tsx`)
   - 공용 UI 조각: `src/components/ui/` (예: `Badge.tsx`, `Button.tsx`, `SectionHeading.tsx`)
   - 레이아웃 요소: `src/components/layout/` (예: `Navbar.tsx`, `Footer.tsx`)
   - 하나의 컴포넌트 파일에 여러 도메인의 책임을 섞지 않는다.

3. **엄격한 TypeScript를 유지한다.**
   - `any` 사용을 지양한다. 불가피한 경우 이유를 주석으로 남기고 최소 범위로 좁힌다.
   - `portfolio.ts`의 데이터 구조는 반드시 `interface`/`type`으로 명시하고, 컴포넌트 props도
     명시적 타입을 선언한다.

4. **정적 배포 제약을 지킨다.**
   - 서버 전용 API 라우트, DB 연결, 런타임 시크릿에 의존하는 기능을 추가하지 않는다.
   - 이미지 등 정적 자산은 `public/`에 두고 `next/image`를 사용한다.

## 디자인 가이드

- **무드**: Zinc 기반 다크 테마 (`bg-zinc-950` 배경), 절제된 컬러 포인트, 세련된 타이포그래피.
- **레이아웃**: 원페이지 스크롤, 섹션 앵커(`#hero`, `#projects`, `#experience`, `#skills`, `#contact`)로 이동.
- **섹션 구성**:
  - **Navbar**: 상단 고정 + 블러(backdrop-blur), 섹션 이동 링크, 이력서 다운로드/GitHub 링크 액션.
  - **Hero**: 핵심 강점 한 줄 카피, 이직 준비 상태 뱃지, 주요 CTA 버튼(예: 프로젝트 보기, 연락하기).
  - **Projects**: 각 카드가 **문제 정의 → 기술적 해결/의사결정 → 성과** 흐름을 드러내는 구조.
  - **Experience**: 실무 경험 중심 타임라인.
  - **Skills**: 카테고리별 뱃지/그리드.
  - **Footer**: 연락처, 저작권.
- 애니메이션은 과하지 않게 — 스크롤 인뷰 페이드/슬라이드, 호버 마이크로 인터랙션 위주.

## 커밋 규칙

- **Conventional Commits** 형식을 따른다: `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:` 등.
- 기능을 몰아서 한 번에 커밋하지 않는다. **의미 있는 작업 단위**로 잘게 쪼개어 커밋한다.
  - 예: 데이터 타입 정의 → 데이터 채우기 → 레이아웃 스캐폴딩 → 섹션 컴포넌트 1개씩 → 애니메이션 추가.
- 커밋 메시지 제목은 한 가지 변경 사항만 설명한다.

## 개발 명령어

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 (Vercel 배포 전 확인용)
npm run lint     # ESLint 검사
```
