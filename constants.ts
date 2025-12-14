import { Project, Experience, Education, SkillCategory } from './types';
import { 
  Code, 
  Smartphone, 
  Database, 
  Terminal, 
  Globe, 
  Cpu,
  Layout,
  Server,
  CheckCircle2
} from 'lucide-react';

export const PERSONAL_DETAILS = {
  name: "Shivam Yadav",
  location: "Mau, Uttar Pradesh (275305)",
  phone: "+91-7897063398",
  email: "yadavshivam6925@gmail.com",
  headline: "Full Stack & Android Developer",
  bio: "I am a high-achieving BCA student and passionate developer with a strong foundation in modern web and mobile technologies. With a 9.2 CGPA and hands-on experience in building scalable applications, I bridge the gap between complex backend logic and intuitive frontend design. My goal is to contribute to innovative projects that solve real-world challenges.",
  objective: "High-achieving BCA student (9.2 CGPA) with a strong foundation in Java, MERN stack, and Android app development. Passionate about building scalable, user-friendly web and mobile applications, and eager to contribute to innovative projects while enhancing technical expertise.",
  socials: {
    linkedin: "https://www.linkedin.com/in/shivamyadav7897/", // Placeholder
    github: "https://github.com/YSHIVAM7897",   // Placeholder
    portfolio: "#" // Placeholder
  }
};

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance web applications using React.js, Node.js, and modern CSS frameworks.",
    icon: Layout
  },
  {
    title: "Android Development",
    description: "Creating native Android applications with Java/Kotlin, focusing on material design and smooth performance.",
    icon: Smartphone
  },
  {
    title: "Backend Systems",
    description: "Designing robust RESTful APIs and database schemas with Node.js, Express, MongoDB, and Firebase.",
    icon: Server
  },
  {
    title: "QA & Automation",
    description: "Ensuring software quality through automated testing scripts using Selenium, Appium, and Katalon Studio.",
    icon: CheckCircle2
  }
];

export const PROJECTS: Project[] = [
  {
    title: "RentZilla",
    role: "Android Project",
    period: "Dec 2024 – Present",
    description: "A comprehensive Expense Tracking Android App designed to help users manage personal and shared finances. Features AI-driven insights, PDF reports, and community expense splitting.",
    details: [
      "Developed a user-friendly Android app for monitoring monthly expenditures.",
      "Created customizable categories called 'rent-spaces' (Home, Office, Travel).",
      "Implemented PDF report generation and expense tracking features.",
      "Integrated secure login with phone number and OTP verification via Firebase.",
    ],
    techStack: ["Java", "XML", "Firebase", "FCM", "Android Studio"],
    challenges: [
      "Handling secure user authentication and data privacy for sensitive financial information.",
      "Generating PDF reports dynamically on mobile devices with proper formatting.",
      "Synchronizing data in real-time between the local device and Firebase cloud."
    ],
    solutions: [
      "Integrated Firebase Authentication for robust and secure phone number login.",
      "Used a specialized Android library for PDF generation and file handling.",
      "Implemented Firebase Realtime Database listeners for instant data updates across devices."
    ],
    learnings: [
      "Mastered Android's Activity lifecycle and Fragment management.",
      "Learned implementation of background services for notifications (FCM).",
      "Enhanced skills in integrating third-party backend services like Firebase."
    ],
    // IMPORTANT: Replace these URLs with your local file paths (e.g. "/images/rentzilla/dashboard.jpg")
    images: [
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251214-225819.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251214-230025.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003622.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003630.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003633.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003637.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003639.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003643.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003645.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003649.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003654.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003659.Expense%20Manager.png",
      "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot_20251215-003710.Expense%20Manager.png"
    ]
  },
  {
    title: "Learn Code",
    role: "Web Project",
    period: "Mar 2025 – Present",
    description: "Interactive Coding Learning Platform",
    details: [
      "Developed a full-stack interactive e-learning platform that helps users understand coding fundamentals.",
      "Frontend built using React.js and Bootstrap for a responsive UI.",
      "Backend powered by Node.js and Express.js managing RESTful APIs.",
      "MongoDB integrated to securely store user data, lessons, and progress.",
      "Features dynamic course rendering, quiz modules, and smooth navigation."
    ],
    techStack: ["React.js", "Node.js", "Bootstrap", "MongoDB", "Express.js"],
    challenges: [
      "Designing a scalable database schema for users, lessons, and progress tracking.",
      "Ensuring real-time responsiveness for the interactive coding environment.",
      "Managing state effectively across multiple complex components."
    ],
    solutions: [
      "Implemented a normalized MongoDB schema with referencing for efficient data retrieval.",
      "Utilized React Context API for global state management to handle user progress and auth status.",
      "Optimized API endpoints to reduce latency during lesson loading."
    ],
    learnings: [
      "Deepened understanding of RESTful API design principles and middleware integration.",
      "Gained proficiency in managing complex state in React applications.",
      "Learned best practices for secure user authentication and data storage."
    ],
    images: [
        "https://placehold.co/1200x800/4f46e5/ffffff?text=LearnCode",
        "https://github.com/YSHIVAM7897/project/raw/main/portfoli_data/Screenshot%202025-12-15%20010935.png"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "ThoughCoders",
    role: "Android Development & Automation Intern",
    location: "Bangalore, India",
    period: "Jan 2024 – Aug 2024",
    description: "Collaborated with the development team to implement new features and optimize app performance.",
    achievements: [
      "Gained hands-on experience in Automation Testing using Selenium and Appium.",
      "Participated in testing and debugging web and mobile applications.",
      "Contributed to project 'Feliz', developing user-friendly Android applications using Java and Kotlin.",
      "Focused on smooth UI/UX and reliable functionality."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "BCA",
    institution: "Galgotias University",
    location: "Greater Noida, Uttar Pradesh",
    period: "Aug 2023 – Aug 2026",
    score: "9.2 CGPA",
    scoreValue: 92,
    details: "Activities: Member (HOG Club) | Sports Club"
  },
  {
    degree: "Class XII",
    institution: "Ram Janam Inter college",
    location: "Mau, Uttar Pradesh",
    period: "Mar 2023",
    score: "77.33%",
    scoreValue: 77.33,
    details: "Ranked 2nd in district-level math competition."
  },
  {
    degree: "Class X",
    institution: "Ram Janam Inter college",
    location: "Mau, Uttar Pradesh",
    period: "Mar 2021",
    score: "82.33%",
    scoreValue: 82.33
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "JavaScript"],
    level: 90
  },
  {
    name: "Frameworks/Libs",
    skills: ["React", "Node.js", "Express", "Android (Java/Kotlin)"],
    level: 85
  },
  {
    name: "Database",
    skills: ["MongoDB", "Firebase"],
    level: 80
  },
  {
    name: "Testing",
    skills: ["Selenium", "Appium", "Katalon Studio"],
    level: 75
  },
  {
    name: "Tools",
    skills: ["Git", "VS Code", "Android Studio"],
    level: 88
  }
];

export const ACTIVITIES = [
  "Travel",
  "Coding",
  "Exploring new things"
];

export const ICONS_MAP = {
  Languages: Code,
  "Frameworks/Libs": Globe,
  Database: Database,
  Testing: Cpu,
  Tools: Terminal
};
