import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { FiCode, FiDatabase, FiMonitor, FiServer, FiCpu } from 'react-icons/fi'
import { VscVscode } from 'react-icons/vsc'
import {
  SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb,
  SiGit, SiGithub, SiPostman, SiVercel, SiIntellijidea, SiRender, SiNetlify, SiSupabase,
} from 'react-icons/si'

export const skillGroups = [
  {
    title: 'Languages',
    description: 'Programming languages',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend',
    description: 'Web interfaces and responsive design',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript (ES6+)', icon: SiJavascript },
      { name: 'React.js', icon: SiReact },
      { name: 'Responsive Web Design', icon: FiMonitor },
    ],
  },
  {
    title: 'Backend',
    description: 'Server-side development and APIs',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FiServer },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    title: 'Database',
    description: 'Relational and document databases',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Development workflow and deployment',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'Postman', icon: SiPostman },
      { name: 'Render', icon: SiRender },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
    ],
  },
  {
    title: 'Core Fundamentals',
    description: 'Computer science foundations',
    items: [
      { name: 'Data Structures & Algorithms', icon: FiCode },
      { name: 'OOPS', icon: FiCode },
      { name: 'DBMS', icon: FiDatabase },
      { name: 'Operating Systems', icon: FiCpu },
    ],
  },
]
