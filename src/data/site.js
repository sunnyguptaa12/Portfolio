// Central profile config. Replace placeholders via .env (see .env.example).
const env = import.meta.env

export const site = {
  name: 'Sunny Kumar',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer building scalable, user-focused web applications.',
  intro:
    'B.Tech CSE (AI & ML) student with hands-on experience in full-stack web development using React.js, JavaScript, Node.js, Express.js, and MongoDB. Experienced in building responsive interfaces, REST APIs, JWT authentication, and database-driven applications. Seeking an entry-level Full Stack Developer role.',
  location: 'Bhopal, Madhya Pradesh, India',
  phone: env.VITE_PHONE || '+91 9546661632',
  email: env.VITE_CONTACT_EMAIL || 'sunny887733gupta@gmail.com',
  emailPlaceholder: 'your.email@example.com',
  github: env.VITE_GITHUB_URL || 'https://github.com/sunnyguptaa12',
  linkedin: env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/sunnykumar1210/',
  leetcode: env.VITE_LEETCODE_URL || 'https://leetcode.com/u/x8Hf4xsuAq',
  resume: env.VITE_RESUME_URL || '/resume.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]
