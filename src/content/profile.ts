import type { Profile } from '@/types/content';

export const profile: Profile = {
  name: 'Varshini Akula',
  title: 'Software Engineer',
  tagline: 'Software engineer working across three disciplines: production software, applied AI and performance engineering.',
  location: 'Tempe, AZ, USA',
  email: 'varshiniakula2003@gmail.com',
  resumeUrl: '/resume.pdf',
  monogram: 'VA',
  bio: {
    recruiter:
      'Software, AI and performance engineer pursuing an M.S. in Computer Science at Arizona State University (4.00 GPA, graduating May 2027). At JPMorgan Chase, across a full-time Software Development Engineer I role and two internships, I built AWS services, Kafka-based integrations and NLP/LLM assistants at scale: 40M+ documents per day and 320+ hours saved per quarter. I build and measure LLM, RAG and agent systems, fine-tune models in PyTorch, and profile CPU performance at the thread and core level. Named SME for NLP and AI; two peer-reviewed publications.',
    explorer:
      'I taught myself C during a summer holiday because I wanted to understand how computers think. That curiosity led me from building chatbots at JPMorgan Chase to researching LLM vulnerabilities at ASU. Today I work as three engineers in one: I build production software, ship AI systems I can actually evaluate, and profile code until I know exactly where the time goes. I turn early prototypes into secure, production-ready systems, lead communities that matter, and believe the best AI is the kind that makes someone\'s Tuesday afternoon easier. When I\'m not shipping code, I\'m reading novels, exploring new cities, or finding the best coffee in town.',
  },
  highlights: [
    {
      label: 'Hours Saved',
      value: '320+',
      unit: 'per quarter',
      context: 'RASA Virtual Assistant at JPMC',
    },
    {
      label: 'Documents',
      value: '40M+',
      unit: 'per day',
      context: 'S3 to MongoDB metadata pipeline at JPMC',
    },
    {
      label: 'Uptime SLA',
      value: '99%',
      unit: 'compliance',
      context: 'Production Systems',
    },
    {
      label: 'Resolution Time',
      value: '60%',
      unit: 'faster',
      context: 'LLM Incident Chatbot',
    },
    {
      label: 'Recall@5',
      value: '0.83',
      unit: 'from 0.65',
      context: 'LongMemEval Benchmark',
    },
    {
      label: 'Detection Accuracy',
      value: '94.5%',
      unit: 'deepfake detection',
      context: 'Fake Face Detection System',
    },
    {
      label: 'GPA',
      value: '4.0',
      unit: 'M.S. CS at ASU',
    },
  ],
};
