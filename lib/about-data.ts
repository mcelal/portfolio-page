export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[]; // Added technologies array
}

export interface Skill {
  name: string;
  level: number; // Value between 1-5
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface AboutData {
  name: string;
  title: string;
  bio: string[];
  photo?: string;
  location: string;
  email: string;
  website: string;
  education: Education[];
  experience: Experience[];
  skillCategories: SkillCategory[];
  interests: string[];
  socialLinks: SocialLink[];
}

export const aboutData: AboutData = {
  name: "Mehmet Celal Kara",
  title: "Back-End Developer",
  bio: [
    "I'm a backend-focused software developer. I build API-driven systems using Laravel, with a strong emphasis on clean code and testing.",
    "I enjoy creating side projects that solve real-world problems.",
  ],
  photo: "/images/profile.jpeg",
  location: "İstanbul, Turkey",
  email: "info@mcelal.com",
  website: "https://mcelal.com",
  education: [
    {
      institution: "AFYON KOCATEPE UNIVERSITY",
      degree: "Healthcare Management",
      period: "2010-2014",
    },
  ],
  experience: [
    {
      company: "Macellan",
      position: "Senior Back-End Developer",
      period: "2021-Present",
      description:
        "Developing and maintaining web applications using Laravel and Vue.js. Leading a team of developers and implementing best practices for scalable applications.",
      technologies: [
        "Laravel",
        "Vue",
        "MySQL",
        "Redis",
        "Docker",
        "Google Cloud",
        "Git",
        "CI/CD",
      ],
    },
    {
      company: "ESC Teknoloji",
      position: "Back-End Developer",
      period: "2017-2021",
      description:
        "Worked on various web projects using PHP and Laravel. Implemented RESTful APIs, database optimizations, and integrated third-party services.",
      technologies: [
        "PHP",
        "Laravel",
        "Codeigniter",
        "JavaScript",
        "MySQL",
        "REST API",
        "Vue",
        "RabbitMQ",
        "React Native",
      ],
    },
    {
      company: "Abanoz Medya",
      position: "Fullstack Developer",
      period: "2016-2017",
      description:
        "Started as a junior developer working on web applications. Gained experience in PHP, HTML, CSS, and JavaScript. Assisted in building and maintaining client websites.",
      technologies: [
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "CodeIgniter",
        "MySQL",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Languages",
      skills: [
        { name: "PHP", level: 5 },
        { name: "JavaScript", level: 4 },
        { name: "HTML/CSS", level: 5 },
        { name: "SQL", level: 4 },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        { name: "Laravel", level: 5 },
        { name: "Vue.js", level: 4 },
        { name: "Bootstrap", level: 4 },
        { name: "Tailwind CSS", level: 3 },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", level: 4 },
        { name: "Docker", level: 3 },
        { name: "MySQL", level: 4 },
        { name: "Redis", level: 3 },
      ],
    },
  ],
  interests: [
    "Web Development",
    "Open Source",
    "Software Architecture",
    "Database Optimization",
    "DevOps",
    "Continuous Learning",
    "Self Hosting",
    "IoT",
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/mcelal",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/mcelal",
    },
    {
      platform: "X",
      url: "https://x.com/mCelal",
    },
  ],
};
