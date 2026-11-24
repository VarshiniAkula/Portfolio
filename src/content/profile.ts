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
      'I build across three disciplines. As a software engineer, I shipped Java and AWS microservices and Kafka pipelines at JPMorgan Chase with 99.9% uptime. As an AI engineer, I build RAG systems, LoRA fine-tunes and agent feedback loops that are evaluated on held-out data. As a software performance engineer, I benchmark and profile down to the CPU core so every speed-up has evidence behind it. M.S. Computer Science at ASU, 4.0 GPA.',
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
      label: 'Provisioning Time',
      value: '40%',
      unit: 'reduction',
      context: 'AWS Microservices Automation',
    },
    {
      label: 'Uptime SLA',
      value: '99.9%',
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
