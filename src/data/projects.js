// Add real `github` / `live` URLs per project. Leave `live` empty to show a disabled demo button.
export const projects = [
  {
    id: 'interviewpath-ai',
    title: 'InterviewPath AI - AI-powered personalized interview platform',
    description:
      'A full-stack AI-powered interview platform designed to help candidates prepare for job interviews through customized question generation and feedback.',
    features: [
      'AI-generated personalized interview questions', 'Role and domain-specific question creation',
      'Candidate skill-based evaluation', 'AI-driven interview feedback', 'REST APIs and secure authentication',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AI Integration'],
    image: '/images/projects/interviewpath.png',
    github: 'https://github.com/sunnyguptaa12/AI-Powered-Interview-Preparation-Platform.git', live: 'https://interviewai-zeta-two.vercel.app', gradient: ['#5b8cff', '#7c3aed'], variant: 'dashboard',
  },
  {
    id: 'expenseflow',
    title: 'ExpenseFlow - Personal Finance Manager',
    description:
      'A full-stack personal finance application for managing income, expenses, budgets, recurring payments, and transaction summaries.',
    features: [
      'Income and expense tracking', 'Budget management', 'Recurring payments and transaction history',
      'Expense analytics and summaries', 'JWT-based secure authentication',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    image: '/images/projects/expenseflow.png',
    github: 'https://github.com/sunnyguptaa12/expenseflow.git', live: 'https://expenseflow-inky.vercel.app/login', gradient: ['#22d3ee', '#6366f1'], variant: 'form',
  },
  {
    id: 'digital-seva-kendra',
    title: 'Digital Seva Kendra Portal',
    description:
      'A digital cyber cafe portal focused on secure online service requests, document submission, payment verification, and user support workflows.',
    features: [
      'Online document and payment receipt submission', 'Admin dashboard for request verification',
      'WhatsApp communication support', 'Responsive UI for better accessibility',
    ],
    tech: ['React.js', 'Supabase', 'Tailwind CSS'],
    image: '/images/projects/digital-seva-kendra.png',
    github: 'https://github.com/sunnyguptaa12/Digital-seva-kendra.git', live: 'https://sunnyguptaa12.github.io/Digital-seva-kendra/', gradient: ['#a78bfa', '#ec4899'], variant: 'list',
  },
]
