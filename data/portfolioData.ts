export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'GenAI & RAG' | 'Deep Learning' | 'Machine Learning' | 'Data Analytics' | 'Backend';
  featured: boolean;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  date: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  type: 'Work' | 'Project' | 'Research';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  skills: string[];
}

export const personalDetails = {
  name: 'Arshad Murtaza',
  title: 'AI Engineer | Machine Learning & Generative AI Specialist',
  shortBio: 'Aspiring AI Engineer specializing in production-grade RAG pipelines, LLM applications, Deep Learning, and end-to-end MLOps workflows deployed on cloud infrastructure.',
  aboutSummary: `I am a graduate from **IIT Delhi** with a strong passion for building production-ready AI systems. My expertise spans building conversational RAG (Retrieval-Augmented Generation) applications with LangChain, FAISS, and LLMs, training custom Computer Vision CNNs, building predictive ML pipelines, and deploying containerized microservices to AWS via automated CI/CD workflows.`,
  careerObjective: 'Seeking to contribute to innovative AI engineering teams by designing and scaling real-world intelligent systems that bridge cutting-edge research with production deployment.',
  location: 'New Delhi, India',
  email: 'arshadmurtaza2016@gmail.com',
  phone: '+91 9717707424',
  github: 'https://github.com/arshadmurtaza03',
  linkedin: 'https://www.linkedin.com/in/arshadmurtaza',
  avatarUrl: '/my_pic2.png',
  resumeUrl: '/Arshad_Murtaza_Resume.pdf',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Generative AI & RAG',
    iconName: 'Sparkles',
    skills: [
      { name: 'LangChain' },
      { name: 'RAG Pipelines' },
      { name: 'FAISS Vector DB' },
      { name: 'Groq & Gemini APIs' },
      { name: 'Prompt Engineering' },
      { name: 'Document Summarization' },
    ],
  },
  {
    title: 'Machine Learning',
    iconName: 'Brain',
    skills: [
      { name: 'Scikit-Learn' },
      { name: 'XGBoost' },
      { name: 'Random Forest' },
      { name: 'Logistic Regression' },
      { name: 'K-Means Clustering' },
      { name: 'SMOTE Oversampling' },
      { name: 'Time-Series Analysis' },
      { name: 'RFM Analytics' },
    ],
  },
  {
    title: 'Deep Learning & CV',
    iconName: 'Cpu',
    skills: [
      { name: 'TensorFlow / Keras' },
      { name: 'Convolutional NNs (CNN)' },
      { name: 'Neural Network Architectures' },
      { name: 'NLP & Transformers' },
    ],
  },
  {
    title: 'MLOps & Cloud Infrastructure',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker Containerization' },
      { name: 'AWS ECS Fargate' },
      { name: 'AWS ECR' },
      { name: 'GitHub Actions (CI/CD)' },
      { name: 'AWS CloudFormation' },
      { name: 'AWS Secrets Manager' },
      { name: 'LLMOps' },
    ],
  },
  {
    title: 'Backend & Data APIs',
    iconName: 'Server',
    skills: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'SQL & Database Queries' },
      { name: 'RESTful API Architecture' },
    ],
  },
  {
    title: 'Analytics & Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Power BI' },
      { name: 'Streamlit' },
      { name: 'Jupyter Notebooks' },
      { name: 'Exploratory Data Analysis (EDA)' },
      { name: 'Excel / Data Wrangling' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'document-portal',
    title: 'Production-Grade AI Document Portal',
    description: 'Multi-mode analysis and RAG-powered document chat using FastAPI, LangChain, FAISS, deployed via automated CI/CD on AWS ECS Fargate.',
    longDescription: 'Built an end-to-end AI Document Portal incorporating conversational RAG querying, automated PDF summarization, and side-by-side document comparison. Designed for high availability with automated zero-downtime deployment pipelines.',
    category: 'GenAI & RAG',
    featured: true,
    technologies: ['FastAPI', 'LangChain', 'FAISS', 'Groq/Gemini LLM', 'Docker', 'AWS ECS', 'GitHub Actions'],
    githubUrl: 'https://github.com/arshadmurtaza03/document_portal',
    highlights: [
      'Integrated Groq and Gemini LLMs for PDF summarization and natural-language Q&A using vector search.',
      'Architected end-to-end MLOps pipeline containerized with Docker and deployed to AWS ECS Fargate + ECR.',
      'Automated zero-downtime CI/CD via GitHub Actions with credentials secured in AWS Secrets Manager.',
    ],
    date: 'Mar 2026',
  },
  {
    id: 'plant-disease-classification',
    title: 'Plant Disease Classification using CNN',
    description: 'Automated plant leaf disease detection classifying 38 disease categories from scratch using TensorFlow/Keras and Streamlit.',
    longDescription: 'Developed a custom Convolutional Neural Network (CNN) architecture trained on T4 GPU via Google Colab. Achieved 88% accuracy across 38 distinct crop disease classes.',
    category: 'Deep Learning',
    featured: true,
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Streamlit', 'OpenCV', 'Google Colab'],
    githubUrl: 'https://github.com/arshadmurtaza03/plant-disease-classification',
    highlights: [
      'Engineered CNN model from scratch evaluating 38 distinct plant disease classes.',
      'Achieved 88% classification accuracy trained on Google Colab T4 GPU instance.',
      'Deployed interactive Streamlit web dashboard for real-time leaf image upload & inference.',
    ],
    date: 'Nov 2025',
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation using K-Means Clustering',
    description: 'Unsupervised ML customer segmentation pipeline using RFM feature engineering on UCI Online Retail data with PCA visualization.',
    longDescription: 'Performed end-to-end customer behavioral profiling using RFM (Recency, Frequency, Monetary) metrics. Derived 4 actionable customer segments to optimize targeted marketing campaigns.',
    category: 'Machine Learning',
    featured: true,
    technologies: ['Python', 'Scikit-Learn', 'K-Means', 'PCA', 'RFM Analysis', 'Streamlit'],
    githubUrl: 'https://github.com/arshadmurtaza03/customer-segmentation',
    highlights: [
      'Engineered RFM metrics on UCI Online Retail dataset to identify 4 distinct behavioral segments.',
      'Utilized Elbow Method & Silhouette Score for optimal cluster determination and PCA for 85.8% variance retention.',
      'Built interactive Streamlit web app for real-time cluster visualization and business insights.',
    ],
    date: 'Oct 2025',
  },
  {
    id: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection Pipeline',
    description: 'Fraud detection system analyzing highly imbalanced credit card transactions with SMOTE oversampling and XGBoost.',
    longDescription: 'Engineered a highly sensitive financial fraud detection model. Solved extreme dataset class imbalance using SMOTE oversampling while maximizing precision and recall metrics.',
    category: 'Machine Learning',
    featured: true,
    technologies: ['Python', 'XGBoost', 'Random Forest', 'Logistic Regression', 'SMOTE', 'Scikit-Learn'],
    githubUrl: 'https://github.com/arshadmurtaza03/credit-card-fraud-detection',
    highlights: [
      'Analyzed Kaggle imbalanced transaction dataset using Logistic Regression, Random Forest, and XGBoost.',
      'Achieved 87.1% Precision and 82.7% Recall with Random Forest after SMOTE oversampling.',
      'Minimized false positives to prepare the pipeline for real-world transaction monitoring.',
    ],
    date: 'Oct 2025',
  },
  {
    id: 'breast-cancer-classification-nn',
    title: 'Breast Cancer Neural Network Classifier',
    description: 'Binary classification neural network predicting tumor malignancy with 94.74% accuracy on Wisconsin Diagnostic Dataset.',
    longDescription: 'Trained a multi-layer deep neural network to accurately categorize breast tumors as malignant or benign based on 30 diagnostic feature variables.',
    category: 'Deep Learning',
    featured: false,
    technologies: ['Python', 'TensorFlow', 'Keras', 'Neural Networks', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/arshadmurtaza03/breast-cancer-classification-nn',
    highlights: [
      'Evaluated 30 medical diagnostic features on Wisconsin Diagnostic Breast Cancer dataset.',
      'Achieved 94.74% test accuracy with optimized hyperparameter tuning in Keras.',
    ],
    date: 'Nov 2025',
  },
  {
    id: 'customer-trends-data-analysis',
    title: 'Retail Customer Shopping Trends Analytics',
    description: 'Data analytics portfolio project executing SQL queries, Python EDA, and Power BI interactive dashboards for retail trends.',
    longDescription: 'End-to-end data analytics workflow translating raw customer transaction records into executive Power BI visual dashboards.',
    category: 'Data Analytics',
    featured: false,
    technologies: ['SQL (MySQL)', 'Python', 'Power BI', 'EDA', 'Pandas'],
    githubUrl: 'https://github.com/arshadmurtaza03/customer-trends-data-analysis-SQL-Python-PowerBI',
    highlights: [
      'Executed complex SQL queries to clean, transform, and aggregate customer purchasing records.',
      'Constructed interactive Power BI visual dashboards uncovering key demographic sales patterns.',
    ],
    date: 'Dec 2025',
  },
  {
    id: 'advanced-url-shortener',
    title: 'Advanced URL Shortener Backend API',
    description: 'Scalable backend API project featuring custom short URL generation and analytics using Python & Flask.',
    longDescription: 'Lightweight RESTful API implementation demonstrating clean software design principles, routing, and database persistence.',
    category: 'Backend',
    featured: false,
    technologies: ['Python', 'Flask', 'SQLite', 'REST APIs'],
    githubUrl: 'https://github.com/arshadmurtaza03/advanced-url-shortener',
    highlights: [
      'Designed RESTful endpoints for link encoding, instant redirection, and click metrics tracking.',
    ],
    date: 'Jan 2026',
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'ai-mlops-engineer',
    role: 'AI & MLOps Engineer (Projects & Systems)',
    company: 'Independent AI Engineering',
    period: '2025 - Present',
    location: 'New Delhi, India',
    description: [
      'Architected end-to-end Generative AI and RAG applications leveraging LangChain, FAISS, and Groq/Gemini LLM APIs.',
      'Built automated CI/CD pipelines deploying Docker containers to AWS ECS Fargate and ECR with zero-downtime strategy.',
      'Trained and deployed specialized Machine Learning & Computer Vision models (CNN, K-Means, XGBoost) with Streamlit frontends.',
    ],
    skills: ['Generative AI', 'LangChain', 'FastAPI', 'AWS ECS', 'Docker', 'GitHub Actions', 'TensorFlow'],
    type: 'Project',
  },
  {
    id: 'academic-projects-iitd',
    role: 'Graduate & Computational Analytics Researcher',
    company: 'Indian Institute of Technology (IIT) Delhi',
    period: '2019 - 2023',
    location: 'New Delhi, India',
    description: [
      'Graduated with B.Tech degree from IIT Delhi, developing strong analytical, mathematical, and algorithmic fundamentals.',
      'Executed rigorous data modeling, mathematical optimization, and engineering problem-solving projects.',
    ],
    skills: ['Python', 'Mathematical Modeling', 'Data Analysis', 'Problem Solving', 'SQL'],
    type: 'Research',
  },
];

export const educationItems: EducationItem[] = [
  {
    id: 'iit-delhi',
    institution: 'Indian Institute of Technology (IIT) Delhi',
    degree: 'B.Tech in Civil Engineering',
    period: 'Aug 2019 - Jun 2023',
    location: 'New Delhi, India',
    highlights: [
      'Strong foundation in quantitative problem solving, computing, linear algebra, and data modeling.',
      'Active involvement in tech projects, computational tools, and algorithmic workflows.',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'genai-ds-ml',
    title: 'Data Science and Machine Learning with GenAI',
    issuer: 'Professional Certification Program',
    skills: ['Generative AI', 'Machine Learning', 'Deep Learning', 'Python', 'LangChain', 'LLM Integration'],
  },
];
