// 이 파일은 포트폴리오 사이트의 유일한 콘텐츠 소스입니다.
// 컴포넌트에는 텍스트를 하드코딩하지 말고, 새 콘텐츠는 이 파일에 추가하세요.

export interface SiteMeta {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin?: string;
  resumeUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  availabilityBadge: string;
  eyebrow: string;
  headlineLine1: string;
  headlineHighlight: string;
  headlineSuffix: string;
  subheadline: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  videoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  domain: string;
  period: string;
  highlights: string[];
  stack: string[];
}

export type SkillIconKey = "database" | "layout" | "tool" | "award";

export interface SkillCategory {
  category: string;
  icon: SkillIconKey;
  description: string;
  items: string[];
}

export const siteMeta: SiteMeta = {
  name: "윤보감",
  role: "Web & Full-Stack Developer",
  location: "Seoul, South Korea",
  email: "yoonbogam@gmail.com",
  github: "https://github.com/",
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroContent: HeroContent = {
  availabilityBadge: "새로운 기회를 찾고 있습니다",
  eyebrow: "High-Reliability & Defense Domain",
  headlineLine1: "신뢰도 높은 시스템을 만드는",
  headlineHighlight: "3년 차 웹 개발자 윤보감",
  headlineSuffix: "입니다.",
  subheadline:
    "오차 없는 데이터 처리와 성능 최적화, 비즈니스 요구에 유연한 설계를 고민합니다.",
};

export const projects: Project[] = [
  {
    id: "naval-operation-system",
    title: "국방 지휘·운용 지원 웹 시스템 개발 및 유지보수",
    category: "실무 프로젝트",
    period: "2023.07 — 현재",
    summary:
      "폐쇄망 및 고신뢰성 환경에서의 대규모 함정 운용·관리 데이터 처리 및 웹 기능 고도화",
    highlights: [
      "직책 및 보안 등급에 따른 세분화된 접근 제어(RBAC) 및 보안 비즈니스 로직 구현",
      "MSSQL 복잡 쿼리 튜닝 및 인덱스 최적화를 통한 대규모 데이터 조회 지연 해소",
      "ASP.NET 기반의 안정적인 트랜잭션 처리로 데이터 누락 없는 견고한 웹 서비스 구축",
      "제약된 폐쇄망 인프라 환경 내 장애 대응 및 유지보수성 향상을 위한 모듈 구조 개선",
    ],
    stack: ["C#", "ASP.NET", "MSSQL", "JavaScript", "HTML/CSS", "IIS"],
  },
  {
    id: "toeic-lc-smart-player",
    title: "토익 LC 스마트 플레이어 (TOEIC LC Smart Player)",
    category: "개인 프로젝트",
    period: "2026.08 — 2026.09",
    summary:
      "OpenAI Whisper STT 기반 문항 자동 분할 및 실시간 대본 동기화 솔루션",
    highlights: [
      "30분 이상의 토익 LC 통음원을 Whisper STT 모델로 분석하여 문제별 시작·종료 타임스탬프 및 대본 메타데이터 자동 구조화",
      "AI 분석 타임스탬프를 트리(Q1-3, Q4-6 등)로 매핑하여 탐색 딜레이 없는 0초 즉시 재생 및 timeupdate 이벤트 기반 실시간 대본 하이라이트 구현",
      "AI 인식 오차를 보정하기 위한 Human-in-the-loop UI 설계 (±0.5초 정밀 구간 미세 조정 패널 및 인라인 대본 더블클릭 수정/저장)",
      "PDF/전자칠판 병행 학습을 위한 초슬림 플로팅 미니 플레이어(F10 뷰 전환) 및 재생 상태 무중단 동기화",
      "무거운 AI 연산 환경(Python/로컬)과 경량 웹 쇼케이스(GitHub Pages 데모)를 분리 설계하여 브라우저 접근성 최적화",
    ],
    stack: [
      "OpenAI Whisper",
      "Python",
      "JavaScript",
      "HTML5 Audio",
      "Electron",
      "GitHub Pages",
    ],
    videoUrl: "/videos/toeic-player-demo.mp4",
  },
  {
    id: "lookatme",
    title: "LookAtMe - 패밀리 라이프 체크인 앱",
    category: "개인 프로젝트",
    period: "Android / 실사용 운영 중",
    summary:
      "메신저 피로도 해소를 위한 비언어적 탭 체크인 및 Firebase 기반 실시간 가족 돌봄 모바일 플랫폼",
    highlights: [
      "텍스트 답장 부담 없는 1회 탭 안부 확인 및 비언어적 감정 공감 칩 피드 시스템 설계",
      "결정론적 색상 매핑(MemberColorMapper) 알고리즘 도입: 본인 기준점 고정 및 가입일 타임스탬프 정렬로 그룹 내 아바타 색상 중복 0% 달성",
      "Firebase Cloud Functions 백엔드 트리거를 활용한 멤버 탈퇴/내보내기 비동기 트랜잭션 처리 및 데이터 무결성 보장",
      "고령층 대형 시스템 폰트 환경을 고려한 Material ChipGroup 반응형 UI 여백 미세 튜닝으로 레이아웃 깨짐 방지",
      "롱클릭 제스처 햅틱 피드백, 6자리 초대 코드 클립보드 자동 감지 등 실사용자 피드백 기반 모바일 UX 고도화",
    ],
    stack: [
      "Kotlin",
      "Android",
      "Coroutines",
      "MVVM",
      "Firebase",
      "Cloud Functions",
      "FCM",
    ],
    videoUrl: "/videos/lookatme-demo.mp4",
  },
  {
    id: "fin-flow",
    title: "Fin-Flow - 실시간 자동 가계부 & 자산 관리 PWA",
    category: "개인 프로젝트",
    period: "Next.js / 풀스택 PWA",
    summary:
      "Android 알림 웹훅 파이프라인 및 비정형 결제 텍스트 파싱 기반 실시간 자동 가계부 서비스",
    highlights: [
      "Android 금융 알림(SMS/푸시)을 실시간 인입하는 Webhook 엔드포인트 및 보안 토큰 인증(x-inbox-secret) 파이프라인 구축",
      "줄바꿈·특수문자·복합 상호명이 혼재된 비정형 텍스트를 안정적으로 분해·정규화하는 결제 파서 엔진 및 디바운스 방어 로직 설계",
      "클라이언트 렌더링 부하 및 중복 발화를 유발하던 로컬 타이머를 제거하고, Supabase Cron 기반 백엔드 단일 푸시 발송 아키텍처로 개선",
      "Next.js App Router 기반 정적/동적 라우팅 최적화 및 월별 예산 임계치 실시간 계산 대시보드 UI 구현",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Web Push API",
      "Tailwind CSS",
    ],
    videoUrl: "/videos/fin-flow-demo.mp4",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "defense-informatization",
    role: "Web Full-Stack Developer",
    domain: "국방 정보화 시스템 개발 및 운영",
    period: "2023.07 — 현재",
    highlights: [
      "국방 지휘·운용 지원 정보화 시스템 개발 및 기능 개선 담당",
      "군 보안 및 망분리 규정을 준수하는 고신뢰성 웹 서비스 아키텍처 구현",
      "실무 현장 요구사항 분석 기반의 UI/API 기능 추가 및 시스템 안정화 유지보수",
    ],
    stack: ["C#", "ASP.NET", "MSSQL", "IIS"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend & Data",
    icon: "database",
    description:
      "고신뢰성 비즈니스 로직 및 트랜잭션 처리, Java·Python을 아우르는 유연한 개발 역량",
    items: ["C#", "ASP.NET", "MSSQL", "Java", "Python", "IIS"],
  },
  {
    category: "Frontend",
    icon: "layout",
    description: "모던 웹 UI 컴포넌트 설계 및 반응형 인터랙션",
    items: ["JavaScript", "TypeScript", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Environment & Tools",
    icon: "tool",
    description: "보안 망 인프라 대응 및 현대적 CI/CD 배포 워크플로우",
    items: ["Git", "GitHub", "Vercel", "폐쇄망/망분리 환경"],
  },
  {
    category: "Certifications",
    icon: "award",
    description: "공인 소프트웨어 기술 및 데이터 분석 역량 검증",
    items: [
      "정보처리기사 (2026)",
      "SW_L5 (2025)",
      "ADsP (2024)",
      "SQLD (2023)",
    ],
  },
];
