import type { Profile } from '@/types/content';

export const profile: Profile = {
  name: 'Varshini Akula',
  title: 'AI & Software Developer',
  tagline: 'Building intelligent systems from prototype to production.',
  location: 'Tempe, AZ, USA',
  email: 'varshiniakula2003@gmail.com',
  resumeUrl: '/resume.pdf',
  monogram: 'VA',
  bio: {
    recruiter:
      'M.S. Computer Science student at ASU and former SDE at JPMorgan Chase with production experience building AI-powered assistants, cloud-native Java/AWS microservices, and data streaming pipelines. Designs end-to-end solutions that automate workflows, reduce manual effort, and strengthen reliability across large-scale enterprise systems.',
    explorer:
      'I taught myself C during a summer holiday because I wanted to understand how computers think. That curiosity led me from building chatbots at JPMorgan Chase to researching LLM vulnerabilities at ASU. I turn early prototypes into production systems, lead communities that matter, and believe the best AI is the kind that makes someone\'s Tuesday afternoon easier. When I\'m not shipping code, I\'m reading novels, exploring new cities, or finding the best coffee in town.',
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
