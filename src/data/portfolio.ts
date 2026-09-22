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
      "폐쇄망 및 고신뢰성 환경에서의 대규모 함정 운용·관리 데이터 처리, 사용자 중심 웹 UI 개편 및 신규 기능 고도화",
    highlights: [
      "문제: 노후화된 업무 화면으로 인한 사용자 작업 동선 비효율 및 폐쇄망 환경 내 대규모 함정 운용·정비 데이터 누적에 따른 조회 지연",
      "해결: 사용자 중심의 직관적인 웹 UI 개편 및 업무 편의 기능 추가 개발, MSSQL 복합 인덱스 최적화 및 C#/ASP.NET 백엔드 트랜잭션 튜닝",
      "성과: 직책별 접근 제어(RBAC)를 통한 보안성 강화와 무결함 데이터 트랜잭션을 달성하여 현업 운용 효율성 대폭 향상",
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
      "문제: 30분 이상 긴 통음원에서 특정 문제 지문을 찾기 위한 수동 타임라인 탐색 비효율 및 학습 흐름 단절",
      "해결: OpenAI Whisper STT 기반 문항 자동 타임스탬프 추출 파이프라인 구축 및 Web Audio API 기반 0.1초 정밀 제어·실시간 대본 싱크 구현",
      "성과: 지문 탐색 딜레이 0초 달성 및 AI 인식 오차를 즉시 교정하는 Human-in-the-loop(±0.5초 보정) 인터페이스로 사용성 극대화",
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
      "문제: 메신저 답장의 심리적 피로감 및 고령층 대형 폰트 시 UI 깨짐, 소그룹 내 단색 아바타로 인한 구성원 식별 혼선",
      "해결: 1회 탭 체크인 피드 설계, 결정론적 가입순 정렬 색상 매핑(MemberColorMapper) 알고리즘 도입, Firebase Cloud Functions 비동기 트랜잭션 구축",
      "성과: 그룹 내 아바타 색상 중복 0% 달성 및 실사용자 피드백 기반 모바일 UI 안정화로 가족 간 데일리 안부 확인 루틴 안착",
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
      "문제: 가계부 수동 입력의 번거로움, 비정형 금융 푸시의 줄바꿈·특수문자로 인한 파싱 오류(422) 및 클라이언트 타이머 중복 발화 버그",
      "해결: Android 알림 웹훅 파이프라인 및 정규식 결제 파서 엔진 구축, 발송 책임을 Supabase Cron 백엔드로 일원화한 PWA 아키텍처 재설계",
      "성과: 결제 텍스트 파싱 정합성 대폭 개선 및 클라이언트 렌더링 부하·푸시 중복 발화를 원천 차단한 실시간 자산 관리 자동화 구현",
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
