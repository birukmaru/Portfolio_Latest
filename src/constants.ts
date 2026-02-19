import {
  Code2,
  Brain,
  Database,
  Terminal,
  Github,
  Linkedin,
} from "lucide-react";
import type {
  SkillCategory,
  ExperienceItem,
  Project,
  SocialLink,
} from "./types";

import aiAutomationImg from "./assets/ai_automation.png";
import ashamLoleImg from "./assets/asham_lole.png";
import epaImg from "./assets/gazette_plus.png";

export const HERO_CONTENT = {
  name: "Biruk Maru",
  role: "Software Developer & AI Engineer",
  headline:
    "Results-driven AI & Software Engineer — 4+ years delivering scalable applications.",
  subheadline:
    "Specialized in AI-powered architectures (LangChain, RAG, agentic workflows) and full-stack web (React, Next.js, Node.js) & Mobile development (Flutter).",
  email: "birukmaru12@gmail.com",
  location: "Addis Ababa, Ethiopia",
};

export const ABOUT_CONTENT = {
  description1:
    "Results-driven AI & Software Engineer with 4+ years of experience building scalable, production-grade systems. I specialize in AI and machine learning architectures including LangChain implementations, RAG pipelines, autonomous agent workflows, and ML pipeline development that transform static applications into adaptive, reasoning systems. In addition to Ethiopia, I have been working in USA-based companies.",
  description2:
    "Skilled in full-stack web development (React, Next.js, Node.js/NestJS) and cross-platform mobile development (Flutter), with experience delivering end-to-end solutions from documentation and design to deployment. My mobile development expertise includes work on national-level projects. I collaborate across cross-functional teams to deliver solutions that drive real business impact.",
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      "Python",
      "LangChain",
      "RAG Pipelines",
      "Agentic Workflows",
      "PyTorch",
      "NLP",
      "Computer Vision",
    ],
    icon: Brain,
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    icon: Code2,
  },
  {
    category: "Backend & Architecture",
    skills: [
      "Node.js",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
      "Docker",
      "Microservices",
    ],
    icon: Database,
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "CI/CD",
      "n8n (Automation)",
      "Firebase",
      "Vector Databases",
    ],
    icon: Terminal,
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp1",
    role: "AI Developer",
    company: "Ingenious Digital LLC",
    period: "09/2025 - Present",
    location: "Fort Lauderdale, USA",
    description:
      "Designed and implemented AI automation workflows and intelligent agents to enhance product capabilities. Served as a Flutter mobile developer and launched multiple apps from scratch.",
    achievements: [
      "Built n8n-based automation pipelines for multi-step workflows.",
      "Integrated agentic LLM workflows to augment product features.",
      "Developed and shipped 3+ cross-platform Flutter applications.",
    ],
  },
  {
    id: "exp2",
    role: "Flutter Developer",
    company: "Ethiopian Press Agency",
    period: "01/2025 - 02/2026",
    location: "Addis Ababa, Ethiopia",
    description:
      "Led end-to-end development of bilingual (English/Amharic) digital content modules for the EPA Integrated News Management System.",
    achievements: [
      "Delivered bilingual content modules and deployed to production.",
      "Collaborated with cross-functional teams for documentation, testing, and maintenance.",
    ],
  },
  {
    id: "exp3",
    role: "Web Developer",
    company: "Asham Lole Delivery Service",
    period: "02/2024 - 05/2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Designed and implemented delivery management systems to streamline operations and track deliveries.",
    achievements: [
      "Built end-to-end delivery tracking and order management applications.",
      "Improved operational workflows and reduced manual dispatch overhead.",
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj1",
    title: "EPA Integrated News Management System",
    description:
      "Bilingual (English/Amharic) content modules and a scalable news management platform developed for the Ethiopian Press Agency.",
    techStack: ["Flutter", "Orchard CMS", "PostgreSQL"],
    imageUrl: epaImg,
    isFeatured: true,
    playStoreUrl: "",
  },
  {
    id: "proj2",
    title: "Asham Lole Delivery Management",
    description:
      "A suite of delivery and order-management applications built to optimize dispatch, tracking, and delivery workflows.",
    techStack: ["React", "Node.js", "Firebase"],
    imageUrl: ashamLoleImg,
    siteUrl: "",
    githubUrl: "",
  },
  {
    id: "proj3",
    title: "AI Automation & Mobile Apps (Ingenious Digital)",
    description:
      "Automation pipelines, intelligent agents, and cross-platform Flutter apps developed for client projects — includes n8n automation and LLM integrations.",
    techStack: ["n8n", "LangChain", "Flutter", "React", "Node.js"],
    imageUrl: aiAutomationImg,
    githubUrl: "",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/birukmaru",
    icon: Github,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/biruk-maru/",
    icon: Linkedin,
  },
];
