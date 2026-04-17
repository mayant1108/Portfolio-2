import profilePhoto from "../assets/profile-photo-optimized.jpg";
import employeeImage from "../assets/project-employee.jpg";
import batchImage from "../assets/project-batch.jpg";
import productImage from "../assets/project-product.jpg";

export const profile = {
  name: "Mayant Khanna",
  initials: "MK",
  headline: "Full-Stack Web Developer",
  location: "Alwar, Rajasthan",
  phone: "+91-8440031328",
  email: "mayant.tipsgalwar@gmail.com",
  linkedin: "https://linkedin.com/in/mayant-khanna",
  github: "https://github.com/mayant1108",
  resume: "/resume.txt",
  image: profilePhoto,
  intro:
    "Entry-level Full Stack Developer with hands-on experience in React.js, Node.js, Express.js, and MongoDB. Strong understanding of web development, REST APIs, problem solving, and competitive programming.",
  roles: ["Full-Stack Developer", "React Developer", "Frontend Designer"],
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "3+", label: "Projects" },
  { value: "5+", label: "Technologies" },
  { value: "Fast", label: "Learner" },
  { value: "Problem", label: "Solver" },
];

export const aboutHighlights = [
  {
    icon: "graduation",
    title: "Education",
    text: "Bachelor of Computer Application at Manipal University Jaipur, 2024 - 2027.",
  },
  {
    icon: "code",
    title: "Development Focus",
    text: "Passionate about building modern web applications across frontend and backend.",
  },
  {
    icon: "target",
    title: "Career Direction",
    text: "Focused on growing as a full-stack developer with strong REST API and problem-solving skills.",
  },
];

export const education = {
  degree: "Bachelor of Computer Application",
  university: "Manipal University Jaipur",
  year: "2024 - 2027",
};

export const skillCategories = [
  {
    title: "Frontend",
    icon: "device",
    gradient: "from-teal-300 to-cyan-500",
    skills: ["HTML", "CSS", "Tailwind", "Bootstrap", "React"],
  },
  {
    title: "Backend Knowledge",
    icon: "server",
    gradient: "from-orange-300 to-rose-500",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Tools",
    icon: "tool",
    gradient: "from-emerald-300 to-lime-500",
    skills: ["VS Code", "Git", "GitHub", "Postman"],
  },
  {
    title: "Languages",
    icon: "code",
    gradient: "from-amber-300 to-orange-500",
    skills: ["JavaScript", "C++"],
  },
];

export const projects = [
  {
    title: "Employee Management System",
    image: employeeImage,
    description:
      "A full-stack employee management application for organizing employee records with fast search and CRUD workflows.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["CRUD operations", "REST APIs", "Search employees", "MongoDB storage"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/mayant1108",
  },
  {
    title: "Batch Management System",
    image: batchImage,
    description:
      "A backend-focused batch management system structured around Mongoose models and clean REST endpoints.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    features: [
      "Create, update, delete, view batches",
      "Mongoose schema",
      "Start/end date & time",
      "REST API architecture",
    ],
    liveUrl: "#contact",
    githubUrl: "https://github.com/mayant1108",
  },
  {
    title: "Product Search Web App",
    image: productImage,
    description:
      "A React and Node.js product search app with dynamic querying, API integration, and database-backed CRUD operations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios"],
    features: [
      "Dynamic product search",
      "React frontend",
      "API integration using Axios",
      "CRUD operations",
    ],
    liveUrl: "#contact",
    githubUrl: "https://github.com/mayant1108",
  },
];

export const contactMethods = [
  {
    label: "Phone",
    value: "+91-8440031328",
    url: "tel:+918440031328",
    icon: "phone",
  },
  {
    label: "Email",
    value: "mayant.tipsgalwar@gmail.com",
    url: "mailto:mayant.tipsgalwar@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mayant-khanna",
    url: "https://linkedin.com/in/mayant-khanna",
    icon: "linkedin",
  },
];

export const socials = [
  { label: "GitHub", icon: "github", url: "https://github.com/mayant1108" },
  { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/mayant-khanna" },
  { label: "Email", icon: "mail", url: "mailto:mayant.tipsgalwar@gmail.com" },
];
