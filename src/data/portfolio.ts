import type {
  Project,
  Skill,
  Testimonial,
  Experience,
  Education,
} from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Sidekick: Multi-Agent Personal Assistant",
    description:
      "Created an autonomous multi-agent system designed to execute complex, multi-step tasks. Employs a self-evaluation system with Worker and Evaluator agents. Agents can browse the web using Playwright, execute Python scripts, manage files, and perform web searches.",
    image: "/assets/Aimultiagent.png",
    technologies: ["LangGraph", "LangChain", "Playwright", "Python"],
    githubUrl: "https://github.com/onkarrajput",
    metrics: [
      { label: "Period", value: "Sep - Oct 2025" },
      { label: "Type", value: "Self Learning" },
      { label: "Agents", value: "Multi-Agent" },
    ],
  },
  {
    id: 2,
    title: "AI Trading Floor: Multi-Model Stock Trading Simulation",
    description:
      "Provides a real-time portfolio tracking system with a visually appealing Gradio-based dashboard. Uses Model Context Protocol (MCP) server architecture to manage account and market data. Enables detailed analytics for tracking profit and loss metrics effectively.",
    image: "/assets/aiAgentTrading.png",
    technologies: ["MCP", "LLM", "Agentic AI", "Gradio", "Python"],
    githubUrl: "https://github.com/onkarrajput",
    metrics: [
      { label: "Date", value: "October 2025" },
      { label: "Type", value: "Self Learning" },
      { label: "Architecture", value: "MCP Server" },
    ],
  },
  {
    id: 3,
    title: "Distributed Agent Network: Self-Replicating AI System",
    description:
      "Breaks new ground by creating a self-replicating AI system where agents autonomously generate other agents with unique personalities. Application scope includes multi-perspective brainstorming, emergent behavior research, and scalable agent networks with parallel processing techniques.",
    image: "/assets/multiagent.png",
    technologies: ["Autogen", "Python", "Distributed Systems"],
    githubUrl: "https://github.com/onkarrajput",
    metrics: [
      { label: "Period", value: "Sep - Oct 2025" },
      { label: "Type", value: "Self Learning" },
      { label: "Focus", value: "AI Research" },
    ],
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Developed a comprehensive weather app with all essential features including location updates and weather predictions. Implemented smooth navigation and an interactive UI for enhanced visibility and user-friendly experience.",
    image: "/assets/weather.png",
    technologies: ["SwiftUI", "CoreLocation", "WeatherAPI"],
    githubUrl: "https://github.com/onkarrajput",
    metrics: [
      { label: "Date", value: "May 2025" },
      { label: "Platform", value: "iOS" },
      { label: "Framework", value: "SwiftUI" },
    ],
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "Built a full-stack e-commerce platform with user authentication using JWT and OAuth, role-based access control for customers and admins. Implemented search, filters, and personalized recommendations with a responsive UI using Tailwind CSS and Material-UI.",
    image: "/assets/e-commerce.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Material-UI",
    ],
    githubUrl: "https://github.com/onkarrajput",
    metrics: [
      { label: "Period", value: "May 25 - Jul 1, 2024" },
      { label: "Auth", value: "JWT + OAuth" },
      { label: "Stack", value: "MERN" },
    ],
  },
  {
    id: 6,
    title: "Online Voting System",
    description:
      "Designed and developed a voting system for people living outside their hometown with OTP-based authentication, officer dashboard to track real-time voting progress, and voter dashboard where voters can see candidates in their constituency.",
    image: "/assets/votingsystem.png",
    technologies: [
      "React.js",
      "Django",
      "TypeScript",
      "PostgreSQL",
      "Material-UI",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/onkarrajput",
    metrics: [
      { label: "Period", value: "Jan 15 - Jan 31, 2025" },
      { label: "Auth", value: "OTP-based" },
      { label: "Database", value: "PostgreSQL" },
    ],
  },
];

export const skills: Skill[] = [
  // MOST IMPORTANT SKILLS FIRST (for "All Skills" view - First 12 shown initially)

  // Frontend - iOS (Current Work at Ixigo)
  { name: "SwiftUI", level: 90, category: "frontend" },
  { name: "UIKit", level: 85, category: "frontend" },

  // Frontend - Web (Core Expertise)
  { name: "React.js", level: 88, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },

  // Backend - Primary Languages & Frameworks
  { name: "Python", level: 92, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Django", level: 82, category: "backend" },

  // AI & Machine Learning (Core Expertise)
  { name: "Agentic AI", level: 90, category: "AI and Machine Learning" },
  { name: "LangChain", level: 88, category: "AI and Machine Learning" },
  { name: "LangGraph", level: 88, category: "AI and Machine Learning" },

  // Tools & DevOps (Essential)
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },

  // IMPORTANT SKILLS (Shown after first 12)

  // Frontend - Additional Web
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },

  // AI & ML - Additional Core
  { name: "Autogen", level: 85, category: "AI and Machine Learning" },
  { name: "Machine Learning", level: 85, category: "AI and Machine Learning" },
  { name: "Deep Learning", level: 80, category: "AI and Machine Learning" },

  // Backend - Additional
  { name: "Swift", level: 90, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "SQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },

  // Tools - Additional
  { name: "VSCode", level: 88, category: "tools" },

  // REMAINING SKILLS (shown after "Show More")

  // Frontend - Additional
  { name: "HTML/CSS", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  { name: "Material-UI", level: 85, category: "frontend" },

  // AI & ML - Data Science Libraries
  { name: "Pandas", level: 85, category: "AI and Machine Learning" },
  { name: "NumPy", level: 82, category: "AI and Machine Learning" },
  { name: "scikit-learn", level: 80, category: "AI and Machine Learning" },
  { name: "OpenCV", level: 75, category: "AI and Machine Learning" },

  // Backend - Databases & Secondary Languages
  { name: "MongoDB", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "Firestore", level: 85, category: "backend" },
  { name: "C++", level: 85, category: "backend" },
  { name: "C", level: 80, category: "backend" },

  // Tools - Additional
  { name: "Power BI", level: 70, category: "tools" },
  { name: "AutoCAD", level: 70, category: "tools" },

  // Soft Skills
  { name: "Problem Solving", level: 92, category: "soft" },
  { name: "Teamwork", level: 90, category: "soft" },
  { name: "Leadership", level: 88, category: "soft" },
  { name: "Management", level: 85, category: "soft" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Team Member",
    role: "Kabaddi Club",
    company: "IIT Jodhpur",
    rating: 5,
    text: "As Secretary of Kabaddi Club, Onkar demonstrated excellent leadership and management skills, organizing events and building team spirit throughout the year.",
  },
  {
    id: 2,
    name: "Colleague",
    role: "iOS Development Team",
    company: "Ixigo",
    rating: 5,
    text: "Onkar's work on the comprehensive Rewards SDK for our Flights, Trains, Bus, and Hotel platforms has been exceptional. His UI Automation project and reusable Onboarding System significantly enhanced our development workflow.",
  },
  {
    id: 3,
    name: "Project Lead",
    role: "Development Team",
    company: "KbCloudtech",
    rating: 5,
    text: "The Mandir Management System developed by Onkar showcased his ability to handle complex requirements. His implementation of Firestore and role-based access control was excellent.",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Ixigo, Gurugram (On-site)",
    period: "June 2025 - Present",
    description: [
      "Developed a comprehensive Rewards SDK for the Flights, Trains, Bus, and Hotel platforms at Ixigo, marking it as a significant project achievement",
      "Implemented a UI Automation project for the FTP feature in the Ixigo Flights app, enhancing testing efficiency and accuracy",
      "Created a reusable Onboarding System for the FTP feature of the Flights app, streamlining user orientation and engagement",
      "Technologies: SwiftUI, UIKit",
    ],
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "KbCloudtech (Remote)",
    period: "May 2024 - July 2024",
    description: [
      "Designed and developed a Mandir Management System to streamline temple operations, including event management, donation tracking, and volunteer coordination",
      "Integrated Firestore for real-time database management, ensuring efficient data handling",
      "Implemented authentication, role-based access control, and optimized API calls for better scalability",
      "Technologies: React.js, Next.js, TypeScript, Firestore, Material-UI, Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "Secretary",
    company: "Kabaddi Club, IIT Jodhpur",
    period: "September 2022 - April 2023",
    description: [
      "Led the club operations and organized multiple sports events",
      "Managed team coordination and event logistics",
      "Demonstrated leadership and management skills",
      "Built team spirit and increased club participation",
    ],
  },
  {
    id: 4,
    title: "Intra Societal Secretary",
    company: "Frame-X (Film & Video Making Society), IIT Jodhpur",
    period: "September 2022 - April 2023",
    description: [
      "Coordinated film and video making activities within the society",
      "Organized workshops and creative sessions",
      "Managed society events and inter-society collaborations",
    ],
  },
  {
    id: 5,
    title: "Assistant Head",
    company: "Varchas Event, IIT Jodhpur",
    period: "Winter 2022",
    description: [
      "Assisted in organizing Varchas, the annual sports fest of IIT Jodhpur",
      "Coordinated with multiple teams for event execution",
      "Managed logistics and participant coordination",
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Bioscience and Bioengineering",
    institution: "Indian Institute of Technology Jodhpur",
    period: "2021 - 2025",
    description:
      "Coursework: AI, Machine Learning, Deep Learning, Data Structures & Algorithms, Probability, Statistics, and Stochastic Process, Signals and Systems, Bioimaging. Areas of Interest: Agentic AI and Data Science",
  },
  {
    id: 2,
    degree: "Board of Intermediate Examination",
    institution:
      "Onkareswar Saraswati Vidya Niketan, Jawahar Nagar, Kanpur Nagar (U.P. Board)",
    period: "2020",
    description: "Completed Higher Secondary Education",
  },
  {
    id: 3,
    degree: "Agentic AI Certification",
    institution: "Udemy",
    period: "July 25, 2023",
    description:
      "Completed comprehensive certification in Agentic AI, covering autonomous agent systems, multi-agent architectures, and AI coordination patterns",
  },
  {
    id: 4,
    degree: "Responsive Web Design Certification",
    institution: "freeCodeCamp",
    period: "2023",
    description:
      "Completed comprehensive web design certification covering HTML, CSS, responsive design principles, CSS flexbox, CSS grid, and accessibility best practices",
  },
  {
    id: 5,
    degree:
      "International Conference in Brain Science - Participation Certificate",
    institution: "Conference Participation",
    period: "January 23-26, 2023",
    description:
      "Participated in the International Conference on Brain Science, gaining insights into latest research and developments in neuroscience and bioimaging",
  },
];
