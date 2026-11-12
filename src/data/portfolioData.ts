export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  src: string;
  tag: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "System Software" | "Web Application";
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  screenshots?: ProjectScreenshot[];
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  result: string;
  period: string;
  project: string;
  description: string;
  highlights: string[];
}

export interface AIToolItem {
  name: string;
  role: string;
  useCase: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Naman Kumar",
  title: "Full Stack Developer",
  subtitle: "Computer Science Undergraduate",
  tagline: "Building resilient digital experiences through clean architecture and secure code.",
  location: "Jaipur, Rajasthan, India",
  university: "Birla Institute of Technology, Mesra – Jaipur Campus",
  degree: "B.Tech in Computer Science & Engineering",
  graduationYear: "2028",
  email: "mrnaman.68@gmail.com",
  phone: "+91 8825254012",
  github: "https://github.com/Namansingh68",
  linkedin: "https://www.linkedin.com/in/naman-singh-bab34b319/",
  status: "Available for Internships & Projects",
  bio: [
    "I am a Computer Science undergraduate at Birla Institute of Technology, Mesra (Jaipur Campus) with a deep passion for building robust full-stack software and distributed backend architectures.",
    "My engineering approach centers on writing clean, scalable, and maintainable code. From architecting secure enterprise-grade systems like CloudVault with Spring Boot and PostgreSQL, to optimizing frontend interactivity in React, I focus on end-to-end reliability and performance.",
    "Driven by curiosity and systematic problem-solving, I continuously explore modern paradigms, AI-assisted development workflows, and low-level computer systems.",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, and application engineering.",
    skills: [
      { name: "Java (17+)", highlight: true },
      { name: "C", highlight: true },
      { name: "C++" },
      { name: "JavaScript (ES6+)", highlight: true },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 & CSS3" },
      { name: "Vite" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Enterprise backend development, REST APIs, and microservice patterns.",
    skills: [
      { name: "Spring Boot", highlight: true },
      { name: "Java 17", highlight: true },
      { name: "Spring Security (JWT)", highlight: true },
      { name: "RESTful APIs", highlight: true },
      { name: "Spring Data JPA" },
      { name: "Hibernate" },
    ],
  },
  {
    title: "Database & Storage",
    description: "Relational modeling, indexing, and transactional persistence.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "H2 Database" },
      { name: "SQL Schema Design" },
      { name: "Data Persistence" },
    ],
  },
  {
    title: "DevOps, Cloud & Tools",
    description: "Version control, containerization, API documentation, and hosting.",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Docker" },
      { name: "Maven" },
      { name: "Swagger / OpenAPI" },
      { name: "Axios" },
      { name: "Vercel & Render" },
      { name: "Supabase" },
    ],
  },
];

export const AI_TOOLKIT: AIToolItem[] = [
  {
    name: "ChatGPT",
    role: "System Design & Edge Case Analysis",
    useCase:
      "Formulating software requirement specifications (SRS), brainstorming database schemas, and validating cryptographic/authentication edge cases.",
    tags: ["SRS Design", "Architecture Planning", "Troubleshooting"],
  },
  {
    name: "Claude",
    role: "Deep Code Review & Refactoring",
    useCase:
      "Deep static analysis, identifying potential concurrency race conditions, and drafting comprehensive API documentation.",
    tags: ["Deep Analysis", "Code Quality", "Documentation"],
  },
  {
    name: "GitHub Copilot",
    role: "Pair Programming & Scaffolding",
    useCase:
      "Accelerating boilerplate code generation, writing exhaustive unit test cases, and speeding up repetitive typing workflows.",
    tags: ["Autocomplete", "Unit Tests Scaffolding", "Efficiency"],
  },
];

export const CLOUDVAULT_SCREENSHOTS: ProjectScreenshot[] = [
  {
    id: "dashboard",
    title: "Interactive Cloud Workspace & File Grid",
    caption:
      "Clean file explorer interface showcasing hierarchical folders, files categorized by MIME type, search functionality, view toggling, and storage tracking.",
    src: "/projects/cloudvault/cloudvault-dashboard.png",
    tag: "Primary Workspace",
  },
  {
    id: "file-menu",
    title: "File Context Actions (SRS FR-05 to FR-17)",
    caption:
      "Granular file operations menu including secure preview, one-click download, time-bound share links, atomic renaming, and move to trash.",
    src: "/projects/cloudvault/cloudvault-file-menu.png",
    tag: "File Operations",
  },
  {
    id: "actions",
    title: "Contextual Action Dropdown",
    caption:
      "Modal trigger for uploading files (up to 50MB per SRS specification) and creating new nested directories with validation.",
    src: "/projects/cloudvault/cloudvault-actions.png",
    tag: "Upload & Directory Creation",
  },
  {
    id: "quota",
    title: "Storage Quota Gauge & Department Attribution",
    caption:
      "Real-time storage consumption meter (2% / 7.9MB of 500MB used) with BIT Mesra Dept. of Computer Science & Engineering project attribution.",
    src: "/projects/cloudvault/cloudvault-storage-quota.png",
    tag: "Quota Management",
  },
  {
    id: "folder-menu",
    title: "Folder Context Management",
    caption:
      "Directory control options allowing safe folder renaming and atomic cascading deletion to the recovery trash bin.",
    src: "/projects/cloudvault/cloudvault-folder-menu.png",
    tag: "Folder Controls",
  },
  {
    id: "header",
    title: "Top Navigation & User Session",
    caption:
      "Top bar with grid/list switch, real-time system pulse indicator, dark mode toggle, and authenticated user session (Naman Kumar, BIT Mesra).",
    src: "/projects/cloudvault/cloudvault-profile-header.png",
    tag: "User Profile & Settings",
  },
  {
    id: "brand",
    title: "CloudVault SRS V1.0 System Identity",
    caption:
      "Official project brand header representing version 1.0 of the Secure Document Management System.",
    src: "/projects/cloudvault/cloudvault-brand.png",
    tag: "System Identity",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "cloudvault",
    title: "CloudVault",
    tagline: "Secure Cloud-Based File Storage & Document Management System",
    category: "Full Stack",
    role: "Sole Creator & Full Stack Architect",
    isFeatured: true,
    description:
      "An enterprise-grade document management and cloud storage platform engineered to provide end-to-end secure file operations, granular role-based permissions, and intuitive folder hierarchy. Built with a React + Tailwind frontend and a high-performance Java Spring Boot backend backed by PostgreSQL.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Hibernate",
      "BCrypt",
    ],
    features: [
      "Stateless JWT Authentication with secure BCrypt credential hashing",
      "Role-Based Access Control (RBAC) protecting sensitive REST endpoints",
      "Multi-part file upload with real-time progress and 50MB payload limits",
      "Hierarchical folder tree system with recursive navigation",
      "Secure expirable file sharing links with tokenized access",
      "Dynamic storage quota tracking with visual usage meters",
      "Comprehensive system audit and activity logging",
      "Soft-delete Trash & Recycle system with one-click restoration",
      "In-browser file preview for PDFs, code files, and images",
    ],
    metrics: [
      { label: "Max File Limit", value: "50 MB" },
      { label: "Storage Quota", value: "500 MB / User" },
      { label: "Auth Paradigm", value: "JWT + BCrypt" },
      { label: "Architecture", value: "Decoupled REST" },
    ],
    liveUrl: "https://namansingh68.github.io/cloud-based-file-storage-system/",
    githubUrl: "https://github.com/Namansingh68/cloud-based-file-storage-system",
    screenshots: CLOUDVAULT_SCREENSHOTS,
  },
  {
    id: "online-voting-system",
    title: "Online Voting System",
    tagline: "Secure Low-Level CLI Voting Mechanism & Integrity Verification",
    category: "System Software",
    role: "Lead Systems Programmer",
    isFeatured: false,
    description:
      "A security-focused, terminal-based electronic voting platform built entirely in C. Features strict voter identity authentication, encrypted record keeping, election administrator controls, candidate tally algorithms, and tamper-evident audit logs.",
    technologies: ["C", "Low-Level I/O", "Data Structures", "File Processing", "Cryptographic Hashing"],
    features: [
      "Strict voter ID validation preventing duplicate voting attempts",
      "Role-based privilege separation between Election Admin and Voters",
      "Encrypted file-based persistence for ballot confidentiality",
      "Real-time tamper-evident candidate tallying algorithms",
      "Comprehensive audit trail logs for post-election verification",
      "Optimized memory usage with safe C memory allocation practices",
    ],
    metrics: [
      { label: "Language", value: "Pure C" },
      { label: "Interface", value: "CLI / Terminal" },
      { label: "Security", value: "ID Hash & Auth" },
      { label: "Storage", value: "File-Based DB" },
    ],
    githubUrl: "https://github.com/Namansingh68",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "LaunchED Global",
    period: "June 2025 – July 2025",
    type: "Internship",
    location: "Remote / Hybrid",
    description: [
      "Engineered and maintained responsive, accessible web pages using modern frontend standards and modular component architectures.",
      "Collaborated closely with cross-functional design and backend teams to integrate RESTful API endpoints and elevate user experience.",
      "Contributed to code reviews, frontend performance optimization, and cross-browser testing to guarantee fluid rendering on desktop and mobile devices.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Git Workflow"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Hackathon 2024 Finalist (4th Place)",
    event: "Inter-College Innovation Hackathon 2024",
    result: "Ranked 4th among 35 participating engineering teams",
    period: "2024",
    project: "Real-Time Water Body Monitoring System (Delhi Flood Prevention)",
    description:
      "Spearheaded development of a real-time IoT and telemetry monitoring prototype designed to track river and water body levels in Delhi, providing early warning signals to help civic authorities avoid catastrophic flooding and river overflow.",
    highlights: [
      "Ranked #4 out of 35 competitive university engineering teams",
      "Designed real-time telemetry threshold triggers for flood risk detection",
      "Built clean dashboard visualizations for environmental sensor readings",
      "Presented technical architecture and emergency intervention models to judging panel",
    ],
  },
];

