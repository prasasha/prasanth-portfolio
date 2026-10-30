/**
 * Central portfolio data — customized for Prasanth's resume.
 * Portfolio content is centralized here so the site sections share the same data.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Prasanth',
  displayName: 'Prasanth',
  firstName: 'PRASANTH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PRASANTH ORIGINAL',
  role: 'Python Developer | Backend Developer',
  tagline: ['Python Developer', 'Backend Developer', 'AI Integration'],
  intro:
    'Computer Science and Engineering graduate building backend applications with Python, FastAPI, REST APIs, SQL and SQLAlchemy. Built and deployed a full-stack AI-integrated workforce management platform with a React dashboard.',
  location: 'Chennai, Tamil Nadu',
   email: 'prasasha2226@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/prasanth-prasa2226/',
    github: 'https://github.com/prasasha',
  },
   resumePdf: '/Prasanth_Resume_Python_Backend_Developer%20(ori)%20(1)%20(1).pdf',
portrait: {
  src: '/assets/prasanth-photo.png',
  srcSet: '/assets/prasanth-photo.png',
  alt: 'Portrait of Prasanth',
},
  interests: ['Backend Development', 'REST API Design', 'AI Integration'],
};

export const education = [
  {
    school: 'Alpha College of Engineering, Anna University',
    place: 'Chennai, Tamil Nadu',
    degree: 'Bachelor of Engineering (B.E.) — Computer Science and Engineering',
    period: '2026',
    score: 'CGPA 8.2/10',
  },
];

export const experience = [
  {
    company: 'Oasis Infobyte (AICTE OIB-SIP)',
    role: 'Python Programming Intern',
    place: 'Remote',
    period: 'September 2026 – October 2026',
    points: [
      'Built a Python BMI Calculator with input validation, category classification, and exception handling.',
      'Created a Password Generator with configurable length, letters, digits, symbols, and input validation.',
      'Built a Weather Application using Open-Meteo and Geocoding REST APIs with JSON handling, network-error handling, and timeouts.',
      'Used Git and GitHub for version control and published repositories with README documentation.',
    ],
  },
  {
    company: 'PH Online Ventures Private Limited',
    role: 'UI/UX Designer Intern',
    place: 'India',
    period: 'July 2025 – August 2025',
    points: [
      'Designed wireframes, screens, and interface components in Figma for an e-commerce application.',
      'Iterated on designs with the team using feedback and usability considerations.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-employee-workforce-platform',
    title: 'AI Employee Workforce Platform',
    year: '2026',
    genre: 'AI • Full-Stack • Backend',
    logline: 'An AI-powered workforce management platform for employee, task, and performance workflows.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'React', 'Google Gemini AI'],
    build: [
      'Built and documented 23 REST API endpoints in Python and FastAPI, including CRUD operations for employee, task, and performance modules and AI endpoints.',
      'Designed relational employee, task, and performance models with a foreign-key relationship from tasks to employees, using SQLAlchemy and SQLite.',
      'Developed an interactive React dashboard and integrated Google Gemini AI for workforce insights, employee analysis, and assistant features with fallback handling.',
      'Validated API workflows through Swagger/OpenAPI and deployed the application using Render and Vercel.',
    ],
    features: [
      'Employee, task, and performance management',
      '23 documented REST API endpoints',
      'SQLAlchemy and SQLite persistence',
      'Gemini AI insights and assistant with fallback mode',
      'React dashboard and deployed application',
    ],
    metrics: [
      { value: '23', label: 'REST API endpoints' },
      { value: '3', label: 'relational data models' },
      { value: '8', label: 'AI endpoints' },
      { value: 'Live', label: 'deployed application' },
    ],
    github: 'https://github.com/prasasha',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'online-attendance-system',
    title: 'Online Attendance System Using Facial Recognition',
    year: 'Academic Project',
    genre: 'Machine Learning • Computer Vision',
    logline: 'A team academic project for student registration, attendance tracking, and reports using facial recognition.',
    stack: ['HTML', 'CSS', 'Python', 'OpenCV', 'Machine Learning'],
    build: [
 'Built responsive frontend screens for student registration, attendance tracking, and reports.',
      'Worked with teammates to integrate the frontend with the facial-recognition backend and tested UI responsiveness.',
    ],
    features: [
      'Student registration screens',
      'Attendance tracking interface',
      'Reports interface',
      'Facial-recognition backend integration',
    ],
    metrics: [
      { value: '3', label: 'main interface areas' },
      { value: 'Team', label: 'academic project' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'workforce-platform',
    title: 'AI Employee Workforce Platform',
    org: 'Personal Project',
    detail: 'Built a full-stack workforce management platform with 23 FastAPI REST endpoints, relational models, a React dashboard, and Gemini AI integration.',
    laurel: 'Featured Project',
    link: 'https://ai-employee-workforce-platform.onrender.com',
  },
  {
    id: 'python-internship',
    title: 'Python Programming Intern',
    org: 'Oasis Infobyte (AICTE OIB-SIP)',
    detail: 'Created Python applications including a BMI Calculator, Password Generator, and Weather Application using REST APIs.',
    laurel: 'Internship',
  },
  {
    id: 'uiux-internship',
    title: 'UI/UX Designer Intern',
    org: 'PH Online Ventures Private Limited',
    detail: 'Designed e-commerce wireframes and interface components in Figma, incorporating usability feedback.',
    laurel: 'Internship',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'GUVI', name: 'Python Programming', link: 'https://www.guvi.in/' },
  { issuer: 'Novi Tech R&D Pvt Ltd', name: 'Full Stack Web Development', link: 'https://novitechrd.com/' },
  { issuer: 'Naan Mudhalvan', name: 'Java with Spring Boot', link: 'https://naanmudhalvan.tn.gov.in/' },
  { issuer: 'HP LIFE', name: 'Data Science & Analytics', link: 'https://www.life-global.org/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interactive web interfaces',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'Recharts', mono: 'Rc' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
subtitle: 'APIs and server-side development',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'CRUD Operations', mono: 'Cr' },
      { name: 'Pydantic', mono: 'Py' },
      { name: 'SQLAlchemy', mono: 'Sa' },
      { name: 'Requests', mono: 'Rq' },
      { name: 'JSON', mono: 'Js' },
    ],
  },
  {
    id: 'infra',
    title: 'Tools & Deployment',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Swagger/OpenAPI', mono: 'Sw' },
      { name: 'Uvicorn', mono: 'Uv' },
      { name: 'Render', mono: 'Rn' },
      { name: 'Vercel', mono: 'Ve' },
      { name: 'Figma', mono: 'Fg' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational data and persistence',
    skills: [
      { name: 'SQLite', mono: 'Sq' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'SQLAlchemy', mono: 'Sa' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Computer Vision',
    subtitle: 'Integration and fundamentals',
    skills: [
      { name: 'Google Gemini AI', mono: 'Ge' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Employee Workforce Platform', 'Oasis Infobyte Internship'],
  FastAPI: ['AI Employee Workforce Platform'],
  'REST APIs': ['23 endpoints in AI Employee Workforce Platform', 'Weather Application'],
  SQL: ['SQLAlchemy', 'SQLite'],
  SQLAlchemy: ['AI Employee Workforce Platform'],
  SQLite: ['AI Employee Workforce Platform'],
  React: ['AI Employee Workforce Platform'],
  Java: ['Skills listed on resume', 'Naan Mudhalvan Java with Spring Boot'],
  JavaScript: ['React / Vite frontend'],
  'Git / GitHub': ['Python internship projects'],
  'Google Gemini AI': ['AI Employee Workforce Platform'],
  OpenCV: ['Online Attendance System Using Facial Recognition'],
  'Machine Learning': ['Online Attendance System Using Facial Recognition'],
  HTML: ['Online Attendance System Using Facial Recognition'],
  CSS: ['Online Attendance System Using Facial Recognition'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};
export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Through 2026',
    synopsis: 'Computer Science and Engineering studies at Alpha College of Engineering, Anna University.',
    episodes: [
      { code: 'S01 E01', title: 'The Engineer', description: 'B.E. in Computer Science and Engineering with CGPA 8.2/10.', tags: ['B.E.', 'CSE', 'CGPA 8.2/10'], runtime: '2026', palette: amber },
    ],
  },
  {
    number: 2,
    title: 'Python & Backend',
    period: '2025 – 2026',
    synopsis: 'Building backend applications, API integrations, and practical Python projects.',
    episodes: [
      { code: 'S02 E01', title: 'The Python Developer', description: 'Created a BMI Calculator, Password Generator, and Weather Application using Python.', tags: ['Python', 'Validation', 'REST APIs'], runtime: 'Sep – Oct 2026', palette: violet },
      { code: 'S02 E02', title: 'The API Builder', description: 'Built and documented 23 REST endpoints with FastAPI, Pydantic, SQLAlchemy, and SQLite.', tags: ['FastAPI', 'REST', 'SQLAlchemy'], runtime: '2026', palette: crimson },
    ],
  },
  {
    number: 3,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'A workforce management platform combining a React dashboard, FastAPI backend, and Gemini AI.',
    episodes: [
      { code: 'S03 E01', title: 'The AI Builder', description: 'Integrated Google Gemini AI for workforce insights, employee analysis, and assistant features with fallback handling.', tags: ['Gemini AI', 'FastAPI', 'React'], runtime: '2026', palette: ocean },
      { code: 'S03 E02', title: 'The Deployer', description: 'Deployed the workforce platform using Render and Vercel.', tags: ['Render', 'Vercel', 'Deployment'], runtime: '2026', palette: jade },
    ],
  },
  {
    number: 4,
    title: 'The Next Chapter',
    period: 'Now streaming',
    synopsis: 'Seeking an entry-level Python Backend Developer or Software Developer role.',
    episodes: [
      { code: 'S04 E01', title: 'Ready to Build', description: 'Focused on Python, backend development, REST APIs, SQL, and AI integration.', tags: ['Python', 'Backend', 'Software Development'], runtime: 'Next', palette: violet },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Main project', title: 'AI Employee Workforce Platform', detail: 'Full-stack • AI-powered workforce management', palette: crimson },
  { label: 'Backend framework', title: 'FastAPI', detail: '23 REST API endpoints', palette: ocean },
  { label: 'Primary language', title: 'Python', detail: 'Backend applications and API integrations', palette: amber },
  { label: 'AI integration', title: 'Google Gemini AI', detail: 'Workforce insights and assistant features', palette: violet },
  { label: 'Database', title: 'SQLAlchemy + SQLite', detail: 'Relational models and persistence', palette: jade },
  { label: 'Frontend', title: 'React', detail: 'Interactive workforce dashboard', palette: ocean },
  { label: 'Deployment', title: 'Render & Vercel', detail: 'Deployed full-stack application', palette: amber },
  { label: 'Internship', title: 'Python Programming', detail: 'Oasis Infobyte', palette: jade },
  { label: 'Academic project', title: 'Facial Recognition Attendance', detail: 'OpenCV and Machine Learning', palette: crimson },
  { label: 'Career goal', title: 'Backend Developer', detail: 'Seeking an entry-level opportunity', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · Computer Science',
    lines: ['Alpha College of Engineering, Anna University', 'Graduation year: 2026'],
    chips: ['CGPA 8.2/10'],
     },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['FastAPI · REST APIs · Pydantic · SQLAlchemy', 'React · SQL · SQLite · Git / GitHub'],
    chips: ['Python', 'FastAPI', 'REST APIs', 'SQLAlchemy'],
  },
  {
    kicker: 'Experience',
    title: 'Learning by Building',
    lines: ['Python Programming Intern · Oasis Infobyte', 'UI/UX Designer Intern · PH Online Ventures'],
  },
  {
    kicker: 'Projects',
    title: 'From APIs to AI',
    lines: ['AI Employee Workforce Platform — 23 REST endpoints', 'Gemini AI integration with a React dashboard', 'Facial Recognition Attendance System'],
  },
  {
    kicker: 'Certified',
    title: 'Continuous Learning',
    lines: ['Python Programming — GUVI', 'Full Stack Web Development — Novi Tech', 'Java with Spring Boot — Naan Mudhalvan'],
  },
  {
    kicker: 'Current mission',
    title: 'Now looking for',
    lines: ['Entry-level Python Backend Developer or Software Developer role'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
 
  {
    id: 'sushmita',
    name: 'Prasanth',
    blurb: 'My personal portfolio',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Explore my professional experience',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Explore my development projects',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Explore my creative side',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Highlights', card: 'My Highlights', meta: 'Achievements & certifications', palette: amber },
  story: { nav: 'My Story', card: 'My Story', meta: 'Career goals & aspirations', palette: violet },
};