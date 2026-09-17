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
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface Project {
  id: string;
  title: string;
  period: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  links?: { label: string; href: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const siteMeta: SiteMeta = {
  name: "Bogam Yoon",
  role: "Frontend / Web Developer",
  location: "Seoul, South Korea",
  email: "yoonbogam@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
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
  availabilityBadge: "이직 준비 중 · 즉시 합류 가능",
  headline: "사용자 경험과 안정성을 함께 고민하는 프론트엔드 개발자입니다.",
  subheadline:
    "복잡한 요구사항을 명확한 구조로 정리하고, 성능과 유지보수성을 함께 챙기는 웹 개발자입니다. 문제 정의부터 기술적 의사결정, 성과 측정까지 전 과정에 책임을 갖고 임합니다.",
  primaryCta: { label: "프로젝트 보기", href: "#projects" },
  secondaryCta: { label: "연락하기", href: "#contact" },
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "프로젝트명을 입력하세요",
    period: "2024.01 — 2024.06",
    summary: "한 줄로 프로젝트를 요약하는 카피를 작성하세요.",
    problem:
      "어떤 문제 상황이었는지, 어떤 지표나 사용자 불편이 있었는지 구체적으로 작성하세요.",
    solution:
      "문제를 해결하기 위해 어떤 기술적 선택과 의사결정을 했는지, 왜 그 방법을 택했는지 작성하세요.",
    result:
      "정량적/정성적 성과를 작성하세요. (예: 로딩 시간 40% 단축, 전환율 15% 증가 등)",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
  {
    id: "project-two",
    title: "프로젝트명을 입력하세요",
    period: "2023.06 — 2023.12",
    summary: "한 줄로 프로젝트를 요약하는 카피를 작성하세요.",
    problem: "어떤 문제 상황이었는지 구체적으로 작성하세요.",
    solution: "어떤 기술적 해결/의사결정을 했는지 작성하세요.",
    result: "어떤 성과를 냈는지 작성하세요.",
    stack: ["React", "Node.js", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
  {
    id: "project-three",
    title: "프로젝트명을 입력하세요",
    period: "2023.01 — 2023.05",
    summary: "한 줄로 프로젝트를 요약하는 카피를 작성하세요.",
    problem: "어떤 문제 상황이었는지 구체적으로 작성하세요.",
    solution: "어떤 기술적 해결/의사결정을 했는지 작성하세요.",
    result: "어떤 성과를 냈는지 작성하세요.",
    stack: ["Vue.js", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "experience-one",
    company: "회사명을 입력하세요",
    role: "직무/직책을 입력하세요",
    period: "2022.03 — 재직 중",
    location: "서울",
    highlights: [
      "담당했던 주요 업무와 책임 범위를 작성하세요.",
      "구체적인 성과나 개선 사례를 수치와 함께 작성하세요.",
      "협업 방식이나 기술적 의사결정 경험을 작성하세요.",
    ],
  },
  {
    id: "experience-two",
    company: "회사명을 입력하세요",
    role: "직무/직책을 입력하세요",
    period: "2020.01 — 2022.02",
    location: "서울",
    highlights: [
      "담당했던 주요 업무와 책임 범위를 작성하세요.",
      "구체적인 성과나 개선 사례를 수치와 함께 작성하세요.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "REST API"],
  },
  {
    category: "Tooling / DevOps",
    items: ["Git", "Vercel", "Docker", "GitHub Actions"],
  },
  {
    category: "Collaboration",
    items: ["Figma", "Notion", "Jira", "Agile/Scrum"],
  },
];
