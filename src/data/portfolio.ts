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
  headlinePrefix: string;
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
}

export interface ExperienceItem {
  id: string;
  role: string;
  domain: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
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
  headlinePrefix:
    "안정성과 높은 신뢰도가 요구되는 국방 정보화 도메인에서 실무를 다져온 ",
  headlineHighlight: "3년 차 웹 개발자 윤보감",
  headlineSuffix: "입니다.",
  subheadline:
    "오차 없는 데이터 처리와 성능 최적화, 그리고 비즈니스 요구사항에 유연하게 대응하는 설계를 고민합니다.",
};

export const projects: Project[] = [
  {
    id: "naval-operation-system",
    title: "해군 주요 함정 운용 지원 정보화 시스템 개발 및 유지보수",
    category: "실무 프로젝트",
    period: "2023.07 — 현재",
    summary:
      "폐쇄망 및 고신뢰성 환경에서의 대규모 함정 운용·관리 데이터 처리 및 웹 기능 고도화",
    highlights: [
      "직책 및 보안 등급에 따른 세분화된 접근 제어(RBAC) 및 보안 비즈니스 로직 구현",
      "MSSQL 복잡 쿼리 튜닝 및 인덱스 최적화를 통한 대용량 이력·현황 데이터 조회 지연 해소",
      "ASP.NET 기반의 안정적인 트랜잭션 처리로 데이터 누락 없는 견고한 웹 서비스 구축",
      "제약된 폐쇄망 인프라 환경 내 장애 대응 및 유지보수성 향상을 위한 모듈 구조 개선",
    ],
    stack: ["C#", "ASP.NET", "MSSQL", "JavaScript", "HTML/CSS", "IIS"],
  },
  {
    id: "personal-web-project",
    title: "[준비 중] 웹 서비스 프로젝트",
    category: "개인 프로젝트",
    period: "2025 — 진행 중",
    summary: "사용자 경험 중심의 반응형 웹 애플리케이션 (추후 업데이트 예정)",
    highlights: [
      "컴포넌트 기반 아키텍처 및 상태 관리 최적화",
      "RESTful API 연동 및 반응형 UI 구현",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "defense-informatization",
    role: "Web Full-Stack Developer",
    domain: "국방 정보화 시스템 개발 및 운영",
    period: "2023.07 — 현재",
    highlights: [
      "보안 규정 및 까다로운 요구사항을 준수하는 고신뢰성 웹 기능 및 서비스 구축",
      "MSSQL 복잡 쿼리 튜닝 및 대용량 조회 트래픽 최적화를 통한 성능 병목 개선",
      "폐쇄망 및 제약된 인프라 환경에서의 안정적인 비즈니스 로직 설계 및 시스템 유지보수",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    items: ["C#", "ASP.NET", "MSSQL", "IIS"],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "HTML/CSS", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Tooling",
    items: ["Git", "Vercel"],
  },
];

export const certifications: string[] = [
  "정보처리기사",
  "SQLD",
  "ADsP",
  "SW_L5",
];
