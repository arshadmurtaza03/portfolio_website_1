// Portfolio Data - ALL exports needed by components

export const portfolioData = {
  personalDetails: {
    name: 'Arshad Murtaza',
    title: 'Full-Stack Developer | AI Engineer',
    email: 'arshadmurtaza2016@gmail.com',
    location: 'Delhi, India',
    phone: '+91-XXXXXXXXXX',
    linkedin: 'https://linkedin.com/in/arshadmurtaza03',
    github: 'https://github.com/arshadmurtaza03',
    aboutSummary: 'Self-taught developer passionate about building full-stack web applications and AI solutions.',
    careerObjective: 'To work as an AI Engineer and build innovative solutions using cutting-edge technologies.',
  },
  skillCategories: [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL'],
    },
    {
      name: 'AI/ML',
      icon: '🤖',
      skills: ['LangChain', 'RAG', 'OpenAI', 'Hugging Face'],
    },
    {
      name: 'DevOps',
      icon: '🚀',
      skills: ['Docker', 'Git', 'GitHub Actions', 'AWS'],
    },
  ],
  projects: [
    {
      title: 'Document Intelligence Platform',
      description: 'AI-powered document processing with RAG',
      tech: ['Next.js', 'FastAPI', 'LangChain', 'Pinecone'],
    },
    {
      title: 'Movie Recommender System',
      description: 'ML-based personalized movie recommendations',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with Docker deployment',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Docker'],
    },
  ],
  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      achievements: [
        'Built 10+ web applications for clients',
        'Implemented CI/CD pipelines with Docker',
        'Created technical YouTube tutorials',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'University Name',
      year: '2020 - 2024',
      gpa: '8.5/10',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      url: 'https://aws.amazon.com',
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
      url: 'https://cloud.google.com',
    },
  ],
  social: {
    github: 'https://github.com/arshadmurtaza03',
    linkedin: 'https://linkedin.com/in/arshadmurtaza03',
    twitter: 'https://twitter.com/arshadmurtaza03',
  },
}

// Export everything individually for component imports
export const personalDetails = portfolioData.personalDetails
export const skillCategories = portfolioData.skillCategories
export const projects = portfolioData.projects
export const experience = portfolioData.experience
export const education = portfolioData.education
export const educationItems = portfolioData.education
export const certifications = portfolioData.certifications
export const social = portfolioData.social
