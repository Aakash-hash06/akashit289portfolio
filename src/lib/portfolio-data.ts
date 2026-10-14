import { staticAsset } from '@/lib/static-asset';

// Verified content and document URLs live here; no placeholder project links.
export const profile = {
  name: 'AAKASH K', role: 'Full Stack Developer', email: 'aakashit289@gmail.com',
  phone: '7010961039', location: 'Cuddalore, Tamil Nadu',
  github: 'https://github.com/Aakash-hash06', linkedin: 'https://linkedin.com/in/aakash06112005',
  resume: staticAsset('resume.pdf'), portrait: staticAsset('aakash-portrait.jpeg'),
};
export const skills = [
  { title: 'Programming', items: ['Python', 'Java (Basics)'], icon: 'code' },
  { title: 'Web development', items: ['HTML', 'CSS'], icon: 'web' },
  { title: 'Databases', items: ['MySQL', 'SQL'], icon: 'database' },
  { title: 'Tools & workflow', items: ['GitHub', 'VS Code', 'Excel'], icon: 'tools' },
];
export const interests = ['Static Code Analysis', 'AI-powered Code Review', 'Generative AI', 'Backend Development'];
export const projects = [
  {
    id: '01', title: 'AI Code Review & Bug Explanation System', kind: 'Python application',
    description: 'Developed a Python-based code review application that analyzes source code for potential bugs and performance bottlenecks. It provides natural-language explanations and structured review feedback to help developers understand detected issues and improve code quality.',
    technologies: ['Python', 'Static Code Analysis', 'File Handling', 'AI/ML Modeling'],
    features: ['Source-code file processing', 'Static analysis for potential bugs and performance issues', 'Readable explanations of detected code issues', 'Structured review feedback', 'Console-based interface'],
  },
  {
    id: '02', title: 'AI-Driven System for Monitoring Expiry of Agriculture Products', kind: 'Paper presentation',
    description: 'Presented a paper at the 2026 International Conference on Intelligent Computing (IConIC), held on 27–28 March 2026 at Panimalar Engineering College.',
    technologies: ['Academic research', 'IConIC 2026'], image: staticAsset('paper.jpg'),
    features: ['Paper presentation — not a production application', '27–28 March 2026'],
  },
  {
    id: '03', title: 'Attendance Automation Using Face Recognition', kind: 'Project contest participation',
    description: 'Participated in the project contest at PECTEAM ZKZ5, during the 8th International Conference for Phoenixes on Emerging Current Trends in Engineering and Management at Panimalar Engineering College.',
    technologies: ['Academic project', 'PECTEAM ZKZ5'], image: staticAsset('contest.jpg'),
    features: ['Project contest participation', '21–22 March 2025'],
  },
];
export const certificates = [
  { title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional', issuer: 'Oracle University', date: '22 July 2024', image: staticAsset('oracle.jpg'), document: staticAsset('oracle.jpg'), type: 'image', note: 'Printed validity ended 22 July 2026.', expired: true },
  { title: 'Cybersecurity Analysis & Design', issuer: 'NASSCOM', date: '27 June 2024', image: staticAsset('nasscom.jpg'), document: staticAsset('nasscom.pdf'), type: 'pdf', note: 'Gold category · Assessment score: 81.25%', identifier: 'FSP/2024/6/10175723' },
  { title: 'Generative AI Foundations: IT Integration with Generative AI', issuer: 'Infosys Springboard', date: '23 September 2024', image: staticAsset('infosys.jpg'), document: staticAsset('infosys.jpg'), type: 'image', note: 'Course completed 23 September 2024.' },
  { title: 'Introduction to Large Language Models', issuer: 'Simplilearn', date: '28 September 2024', image: staticAsset('simplilearn.jpg'), document: staticAsset('simplilearn.pdf'), type: 'pdf', note: 'Course completion only; not an official Google Cloud Certification.', identifier: '7411949' },
  { title: 'Introduction to Java', issuer: 'SoloLearn', date: '17 September 2024', image: staticAsset('sololearn.jpg'), document: staticAsset('sololearn.pdf'), type: 'pdf', note: 'Course completion certificate.', identifier: 'CC-36MNSIWA' },
];
export type Certificate = typeof certificates[number];

export const learningFocus = [
  { title: 'Readable, useful software', description: 'My code-review project reflects an interest in making technical problems easier to understand. I focus on readable explanations, organized feedback, and a clear path from source files to review results.' },
  { title: 'Backend engineering', description: 'My Java backend internship introduced practical assignments and backend architecture learning. I want to keep developing this foundation through Python applications and structured problem-solving.' },
  { title: 'Practical AI applications', description: 'My learning includes generative AI foundations, large language models, and academic exploration. I am interested in where AI can support useful software rather than adding complexity without purpose.' },
];
export const projectDetails = [
  { purpose: 'Help developers understand potential source-code issues through readable explanations rather than raw error output alone.', contribution: 'Built source-file processing, static-analysis review, natural-language bug explanations, and structured feedback in a Python console application.', scope: 'The supplied resume describes a console-based academic application. A public repository, executable demo, and benchmark results have not been supplied.' },
  { purpose: 'Explore an AI-driven approach to monitoring expiry of agriculture products through an academic paper presentation.', contribution: 'Presented the paper at IConIC 2026, held at Panimalar Engineering College on 27–28 March 2026. The uploaded certificate documents the presentation.', scope: 'This entry represents an academic paper presentation. Implementation architecture, model performance, and production deployment are not documented.' },
  { purpose: 'Explore face recognition as an approach to attendance automation in an academic project contest.', contribution: 'Demonstrated the named project in the PECTEAM ZKZ5 project contest at Panimalar Engineering College on 21–22 March 2025.', scope: 'The supplied certificate verifies participation. No award, accuracy figure, public repository, or deployment is claimed.' },
];
