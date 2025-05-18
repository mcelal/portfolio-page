import type { ProjectProps } from "@/components/project-card";

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Scrum Batak - Planning Poker",
    description:
      "Real-time planning poker application for agile teams. Helps teams estimate work items collaboratively during sprint planning.",
    technologies: [
      "Vue.js",
      "Supabase",
      "Socket.io",
      "Tailwind CSS",
      "Node.js",
    ],
    image: "/images/ss-ScrumBatak.png",
    github: "https://github.com/mcelal/planning-batak",
    demo: "https://batak.mcelal.dev",
    features: [
      "Real-time collaboration",
      "Scrum-based estimation",
      "Custom card decks",
      "Session management",
      "Voting statistics",
      "Mobile-friendly interface",
    ],
    category: "Developer Tools",
  },
  {
    id: 2,
    title: "E-Commerce Accounting System",
    description:
      "Comprehensive pre-accounting application with e-commerce platform integrations. Streamlines financial operations for online businesses.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "REST API", "Docker"],
    image: "/images/ss-muhasebe.png",
    features: [
      "Invoice management",
      "Warehouse & inventory tracking",
      "E-commerce platform integration",
      "Automated financial reporting",
      "Multi-store support",
      "Real-time stock monitoring",
    ],
    category: "Business Tools",
  },
  {
    id: 3,
    title: "Multi-Tenant CRM",
    description:
      "Laravel-based multi-tenancy boilerplate with Filament admin panel. Designed for creating custom CRM solutions with isolated client environments.",
    technologies: ["PHP", "Laravel", "Filament", "MySQL", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/mcelal/crm",
    features: [
      "Multi-tenancy architecture",
      "Filament admin panel integration",
      "User role management",
      "Client isolation",
      "Customizable modules",
      "Responsive dashboard",
    ],
    category: "Web Applications",
  },
  {
    id: 4,
    title: "LyricCMS",
    description:
      "Basic lyrics management system built with CodeIgniter. Allows users to create, manage, and share song lyrics.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    image: "/images/ss-sarki.png",
    github: "https://github.com/mcelal/lyricCMS",
    demo: "https://sarki.mcelal.com",
    features: [
      "Lyrics database",
      "Artist management",
      "Album organization",
      "Search functionality",
      "User contributions",
      "Responsive design",
    ],
    category: "Web Applications",
  },
  {
    id: 5,
    title: "Hackintosh Clover Config",
    description:
      "Collection of Clover configuration files for various Hackintosh systems. Helps users set up macOS on non-Apple hardware.",
    technologies: [
      "Clover Bootloader",
      "macOS",
      "Shell",
      "Hardware Configuration",
    ],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/mcelal/Hackintosh-Clover-Config",
    features: [
      "Pre-configured EFI settings",
      "Hardware compatibility profiles",
      "Boot flag recommendations",
      "ACPI patches",
      "Kext collections",
      "Installation guides",
    ],
    category: "System Tools",
  },
  {
    id: 6,
    title: "TeklifApp",
    description:
      "Simple quote preparation system developed with Laravel and Vue.js. Helps businesses create and manage client quotes efficiently.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/mcelal/TeklifApp",
    features: [
      "Quote generation",
      "Client management",
      "Product/service catalog",
      "PDF export",
      "Quote tracking",
      "Email integration",
    ],
    category: "Business Tools",
  },
];

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category)),
);
