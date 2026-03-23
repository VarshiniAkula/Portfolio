import type { ProjectMeta } from '@/types/content';

export const projects: ProjectMeta[] = [
  {
    slug: 'rasa-virtual-assistant',
    title: 'Enterprise Virtual Assistant',
    subtitle: 'Conversational AI that eliminated 320+ hours of manual work per quarter',
    description: {
      recruiter:
        'Architected a RASA NLU virtual assistant that collected customer metadata for document-storage onboarding, eliminating 320+ hours of manual data entry per quarter. Built Java and SQL microservices on AWS to automate metadata extraction and container-storage record creation across Consumer & Community Banking, cutting provisioning time by 40%.',
      explorer:
        'The storage team was drowning in manual data entry — hundreds of hours per quarter spent on repetitive metadata extraction. I built a conversational AI system that understood natural language queries, extracted metadata automatically, and created storage records. It went from a proof-of-concept nobody believed in to a production system that changed how the team worked.',
    },
    date: 'Jul 2024 – Aug 2025',
    tags: ['NLP', 'Conversational AI', 'Enterprise', 'Automation'],
    techStack: ['RASA NLU', 'Python', 'Java', 'SQL', 'AWS', 'Kafka', 'React'],
    metrics: [
      { label: 'Hours Saved', value: '320+', unit: 'per quarter' },
      { label: 'Provisioning Time', value: '40%', unit: 'reduction' },
      { label: 'Uptime SLA', value: '99.9%', unit: 'compliance' },
    ],
    role: 'Software Development Engineer I',
    duration: '14 months',
    status: 'completed',
    featured: true,
    category: 'enterprise',
  },
  {
    slug: 'llm-incident-chatbot',
    title: 'LLM Incident Chatbot',
    subtitle: 'Reducing mean incident query resolution time by 60%',
    description: {
      recruiter:
        'Engineered an LLM-powered incident chatbot using OpenAI APIs, Python, and React that summarized tickets, auto-generated severity-based runbooks, and reduced mean incident query resolution time by 60%.',
      explorer:
        'When production incidents hit, every minute counts. Engineers were spending too long searching through runbooks and Slack threads for answers. I built an LLM-powered chatbot that understood incident context, searched historical data, and surfaced relevant solutions instantly. The 60% reduction in resolution time meant fewer late nights and faster recovery.',
    },
    date: 'Jan 2024 – Jun 2024',
    tags: ['LLM', 'Incident Management', 'Enterprise', 'OpenAI'],
    techStack: ['OpenAI API', 'Python', 'React', 'TypeScript', 'PostgreSQL'],
    metrics: [
      { label: 'Resolution Time', value: '60%', unit: 'reduction' },
    ],
    role: 'Software Engineering Program Intern',
    duration: '6 months',
    status: 'completed',
    featured: true,
    category: 'ai',
  },
  {
    slug: 'memory-augmented-llm',
    title: 'Hybrid Multi-Retriever Orchestration',
    subtitle: 'Long-term conversational memory improving Recall@5 from 0.65 to 0.83',
    description: {
      recruiter:
        'Built a RAG orchestration system in Python routing queries across 5 retrievers (BM25, TF-IDF, FAISS, SVM, Time-Weighted) using intent classification and rule-based decision logic. Improved Recall@5 by +18 pts (0.65 to 0.83) on LongMemEval with Qwen2.5-7B.',
      explorer:
        'LLMs have a memory problem — they forget context across long conversations. I designed a multi-retriever orchestration system that routes queries across BM25, TF-IDF, FAISS, SVM, and Time-Weighted retrievers using intent classification. The jump from 0.65 to 0.83 Recall@5 on LongMemEval proved that smarter retrieval architectures can meaningfully improve conversational continuity.',
    },
    date: 'Sep 2025 – Dec 2025',
    tags: ['RAG', 'Memory Systems', 'LLM', 'Benchmarking'],
    techStack: ['Python', 'PyTorch', 'LangChain', 'FAISS', 'Qwen2.5-7B', 'LLaMA-3.1-8B'],
    metrics: [
      { label: 'Recall@5', value: '0.83', unit: 'from 0.65 baseline' },
      { label: 'Improvement', value: '+18 pts', unit: 'on LongMemEval' },
    ],
    role: 'Researcher',
    duration: '4 months',
    status: 'completed',
    featured: true,
    category: 'research',
  },
  {
    slug: 'deepfake-detection',
    title: 'Deepfake Video Detection',
    subtitle: 'Dual InceptionResNet + BiLSTM achieving 94.5% accuracy',
    description: {
      recruiter:
        'Developed a deep learning pipeline for deepfake video detection using PyTorch, OpenCV, and MTCNN on Celeb-DF, achieving 94.5% accuracy. Integrated dual InceptionResNetV1/V2 CNNs with BiLSTM temporal modeling and majority-vote ensembling.',
      explorer:
        'As synthetic media becomes indistinguishable from real content, detection systems become critical. I built a detection pipeline combining dual InceptionResNet CNNs with BiLSTM temporal modeling on the Celeb-DF dataset. Served predictions via Flask REST API with per-frame confidence scoring. The 94.5% accuracy was achieved through careful architecture choices and ensemble methods.',
    },
    date: 'Aug 2025 – Dec 2025',
    tags: ['Computer Vision', 'Security', 'Deep Learning', 'Detection'],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'MTCNN', 'InceptionResNet', 'BiLSTM', 'Flask'],
    metrics: [
      { label: 'Detection Accuracy', value: '94.5%', unit: 'on Celeb-DF' },
    ],
    role: 'Researcher',
    duration: '5 months',
    status: 'completed',
    featured: true,
    category: 'research',
  },
  {
    slug: 'star-reasoning',
    title: 'STaR: Self-Taught Reasoner',
    subtitle: 'Fine-tuned Llama-3.2-3B achieving 46.2% on GSM8K (+65% over zero-shot CoT)',
    description: {
      recruiter:
        'Fine-tuned Llama-3.2-3B-Instruct using STaR rationale-bootstrapping on NVIDIA A100 GPUs, achieving 46.2% on GSM8K (+65% relative gain over zero-shot CoT). Generated 3.5K synthetic hint-conditioned training samples via self-improvement loops.',
      explorer:
        'Can you teach a model to reason better by having it practice reasoning? The STaR approach says yes. I fine-tuned Llama-3.2-3B with iterative self-generated rationales on A100 GPUs, generating 3.5K synthetic training samples. The 46.2% on GSM8K outperformed vanilla SFT (39.2%) by 7 absolute points — proving models can bootstrap their own reasoning abilities.',
    },
    date: 'Aug 2025 – Oct 2025',
    tags: ['Reasoning', 'Fine-tuning', 'LLM', 'GSM8K'],
    techStack: ['Python', 'PyTorch', 'Hugging Face', 'Llama-3.2-3B', 'NVIDIA A100'],
    metrics: [
      { label: 'GSM8K', value: '46.2%', unit: '+65% over zero-shot CoT' },
      { label: 'Synthetic Samples', value: '3.5K', unit: 'generated' },
    ],
    role: 'Researcher',
    duration: '3 months',
    status: 'completed',
    featured: true,
    category: 'research',
  },
  {
    slug: 'kafka-streaming',
    title: 'Real-Time Data Streaming Platform',
    subtitle: 'Lowering cross-system propagation latency for 70+ downstream applications',
    description: {
      recruiter:
        'Developed a real-time data streaming application with Java and Apache Kafka for JPMorgan\'s Global Technology & Innovation team, lowering cross-system propagation latency for 70+ downstream applications.',
      explorer:
        'When data needs to flow across 70+ systems in real-time, every millisecond matters. I built a streaming platform with Java and Kafka that ensured consistent, low-latency data propagation across JPMorgan\'s Global Technology infrastructure.',
    },
    date: 'Jan 2024 – Jun 2024',
    tags: ['Data Streaming', 'Enterprise', 'Real-Time'],
    techStack: ['Java', 'Apache Kafka', 'AWS', 'Docker'],
    metrics: [
      { label: 'Downstream Apps', value: '70+', unit: 'served' },
    ],
    role: 'Software Engineering Program Intern',
    duration: '6 months',
    status: 'completed',
    featured: false,
    category: 'enterprise',
  },
  {
    slug: 'clickless-ai',
    title: 'ClickLess AI',
    subtitle: 'Travel conversational agent that replaces clicks with conversations',
    description: {
      recruiter:
        'Built a multi-source travel planning conversational agent using Playwright browser automation, LLM-based intent parsing, and FastAPI. Aggregates flights, hotels, weather, and cultural data from a single natural language query.',
      explorer:
        'Travel planning is broken — you open 10 tabs, compare prices, check weather, read guides, and still feel uncertain. ClickLess AI replaces that entire workflow with a single conversation. Ask it "Plan a week in Tokyo in April" and it scrapes real-time flights, hotel prices, weather forecasts, and cultural tips, then synthesizes everything into a coherent trip brief.',
    },
    date: '2025',
    tags: ['Conversational AI', 'Web Scraping', 'Travel', 'LLM', 'Playwright'],
    techStack: ['Python', 'FastAPI', 'Playwright', 'OpenAI API', 'spaCy', 'React'],
    metrics: [
      { label: 'Data Sources', value: '5+', unit: 'integrated' },
    ],
    role: 'Lead Developer',
    duration: '6 weeks',
    status: 'completed',
    featured: false,
    category: 'ai',
  },
  {
    slug: 'construction-intelligence',
    title: 'Construction Project Intelligence',
    subtitle: 'AI-powered construction project management with document intelligence',
    description: {
      recruiter:
        'Full-stack construction project management platform with RBAC, AI-powered document search (RAG), RFI intelligence with NLP classification, and analytics dashboards.',
      explorer:
        'Construction projects generate mountains of documents — RFIs, change orders, submittals, schedules. I built an AI assistant that understands construction documents, answers questions with citations, classifies RFIs automatically, and flags risks before they become problems.',
    },
    date: '2026',
    tags: ['Full-Stack', 'RAG', 'NLP', 'Construction Tech'],
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'OpenAI API'],
    metrics: [
      { label: 'RBAC Roles', value: '6', unit: 'role types' },
    ],
    role: 'Full-Stack Developer',
    duration: '4 weeks',
    status: 'completed',
    featured: true,
    category: 'enterprise',
  },
];

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter((p) => p.featured);
}
