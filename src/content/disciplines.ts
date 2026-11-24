import type { Discipline } from '@/types/content';

export const disciplines: Discipline[] = [
  {
    id: 'software',
    label: 'Software Engineer',
    short: 'Software',
    headline: 'Production services that teams can trust.',
    summary:
      'Nearly two years at JPMorgan Chase building Java and AWS microservices, Kafka streaming pipelines and CI/CD for systems with real users and strict uptime targets. I care about clean contracts, access control and the boring reliability work that keeps things running.',
    capabilities: [
      'Cloud-native microservices on AWS',
      'Real-time data streaming with Kafka',
      'Full-stack apps with auth and Row-Level Security',
      'CI/CD hardening and observability',
    ],
    tools: ['Java', 'Python', 'TypeScript', 'AWS', 'Kafka', 'PostgreSQL', 'Next.js', 'Docker'],
    proof: { label: 'Uptime SLA', value: '99.9%', unit: 'on production services' },
    projectSlugs: ['rasa-virtual-assistant', 'kafka-streaming', 'construction-intelligence', 'flowmind'],
  },
  {
    id: 'ai',
    label: 'AI Engineer',
    short: 'AI',
    headline: 'LLM systems grounded in evidence, not vibes.',
    summary:
      'I build RAG pipelines, fine-tune small models with LoRA, design agent feedback loops and, most importantly, evaluate them honestly with frozen held-out sets. From an enterprise incident chatbot to research on retrieval orchestration and self-improving agents.',
    capabilities: [
      'RAG and multi-retriever orchestration',
      'LoRA fine-tuning and reasoning bootstrapping',
      'Agent skill evolution and feedback selection',
      'Reproducible LLM evaluation',
    ],
    tools: ['PyTorch', 'Hugging Face', 'MLX-LM', 'LangChain', 'FAISS', 'pgvector', 'OpenAI', 'Gemini'],
    proof: { label: 'Recall@5', value: '0.83', unit: 'up from 0.65 on LongMemEval' },
    projectSlugs: ['memory-augmented-llm', 'lora-brand-assistant', 'skillshift', 'llm-incident-chatbot', 'star-reasoning'],
  },
  {
    id: 'performance',
    label: 'Software Performance Engineer',
    short: 'Performance',
    headline: 'Measure first. Explain with evidence.',
    summary:
      'I profile and benchmark systems down to the CPU core: thread scaling, P-core versus E-core placement and VTune hotspots, with validated, reproducible runs. I separate what was measured from what is only a hypothesis, and I cut latency where it actually matters.',
    capabilities: [
      'Benchmark design with reproducible protocols',
      'CPU profiling with Intel VTune',
      'Thread scaling and hybrid-core analysis',
      'Latency and throughput optimisation',
    ],
    tools: ['Intel VTune', 'FAISS', 'OpenMP', 'NumPy', 'threadpoolctl', 'perf_counter', 'Kafka'],
    proof: { label: 'Throughput', value: '2.18x', unit: 'peak scaling, diagnosed past 8 threads' },
    projectSlugs: ['faiss-cpu-benchmark', 'kafka-streaming', 'rasa-virtual-assistant'],
  },
];

export const disciplineAccent: Record<Discipline['id'], { text: string; bg: string; border: string; glow: string; hoverGlow: string; soft: string; hex: string }> = {
  software: {
    text: 'text-[#00F2FF]',
    bg: 'bg-[#00F2FF]',
    border: 'border-[#00F2FF]/40',
    glow: 'shadow-[0_0_40px_rgba(0,242,255,0.25)]',
    hoverGlow: 'hover:shadow-[0_0_24px_rgba(0,242,255,0.25)]',
    soft: 'bg-[#00F2FF]/10',
    hex: '#00F2FF',
  },
  ai: {
    text: 'text-[#B79CFF]',
    bg: 'bg-[#B79CFF]',
    border: 'border-[#B79CFF]/40',
    glow: 'shadow-[0_0_40px_rgba(183,156,255,0.25)]',
    hoverGlow: 'hover:shadow-[0_0_24px_rgba(183,156,255,0.25)]',
    soft: 'bg-[#B79CFF]/10',
    hex: '#B79CFF',
  },
  performance: {
    text: 'text-[#FFB950]',
    bg: 'bg-[#FFB950]',
    border: 'border-[#FFB950]/40',
    glow: 'shadow-[0_0_40px_rgba(255,185,80,0.25)]',
    hoverGlow: 'hover:shadow-[0_0_24px_rgba(255,185,80,0.25)]',
    soft: 'bg-[#FFB950]/10',
    hex: '#FFB950',
  },
};

export function getDisciplinesForProject(slug: string): Discipline['id'][] {
  return disciplines.filter((d) => d.projectSlugs.includes(slug)).map((d) => d.id);
}
