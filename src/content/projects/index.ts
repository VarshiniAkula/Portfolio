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
        'The storage team was drowning in manual data entry - hundreds of hours per quarter spent on repetitive metadata extraction. I built a conversational AI system that understood natural language queries, extracted metadata automatically, and created storage records. It went from a proof-of-concept nobody believed in to a production system that changed how the team worked.',
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
    title: 'HyArg',
    subtitle: 'Hybrid multi-retriever orchestration for long-term conversational memory - Recall@5 0.65 → 0.83',
    description: {
      recruiter:
        'HyArg is a hybrid multi-retriever orchestration system in Python that uses an LLM-based selector to dynamically route queries across 5 specialized retrievers (BM25, TF-IDF, FAISS, SVM, Time-Weighted). Evaluated on LongMemEval (500 questions) and Locomo (1538 questions); achieved Recall@5 of 0.83 on LongMemEval with Qwen2.5-7B (+18 pts over the best single retriever) and 0.36 on Locomo with LLaMA 3.1 8B Instruct.',
      explorer:
        'LLMs forget context across long conversations, and no single retriever is good at everything - BM25 nails exact phrases, FAISS handles semantics, time-weighted methods catch recency. HyArg is the system I co-built that uses an LLM orchestrator to read each query, extract signals (temporal cues, quoted phrases, entity mentions, query length), and dynamically route to the best of five retrievers. We tested it on LongMemEval and Locomo across LLaMA 3.1 8B, Mistral 7B, and Qwen2.5 7B, and the jump from 0.65 → 0.83 Recall@5 on LongMemEval validated that dynamic retriever selection beats any fixed single-retriever baseline.',
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
        'Can you teach a model to reason better by having it practice reasoning? The STaR approach says yes. I fine-tuned Llama-3.2-3B with iterative self-generated rationales on A100 GPUs, generating 3.5K synthetic training samples. The 46.2% on GSM8K outperformed vanilla SFT (39.2%) by 7 absolute points - proving models can bootstrap their own reasoning abilities.',
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
        'Travel planning is broken - you open 10 tabs, compare prices, check weather, read guides, and still feel uncertain. ClickLess AI replaces that entire workflow with a single conversation. Ask it "Plan a week in Tokyo in April" and it scrapes real-time flights, hotel prices, weather forecasts, and cultural tips, then synthesizes everything into a coherent trip brief.',
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
        'Full-stack construction project management platform with RBAC, AI-powered document search (RAG), RFI intelligence with NLP classification, and analytics dashboards. Live demo: https://constructionrag.vercel.app/',
      explorer:
        'Construction projects generate mountains of documents - RFIs, change orders, submittals, schedules. I built an AI assistant that understands construction documents, answers questions with citations, classifies RFIs automatically, and flags risks before they become problems. Try the live demo at https://constructionrag.vercel.app/',
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
    links: [
      { label: 'Live Demo', url: 'https://constructionrag.vercel.app/' },
    ],
  },
  {
    slug: 'flowmind',
    title: 'FlowMind',
    subtitle: 'A visual builder for AI chat assistants - design a flow, ground it in your docs, test it, and publish it',
    description: {
      recruiter:
        'Building FlowMind, a visual builder for AI chat assistants: describe an assistant in plain English or drag nodes onto a canvas, ground its answers in your own documents (RAG), test it in a live simulator, and publish it as a hosted chat page or embeddable widget. Full-stack Next.js 15 + Supabase app with account auth and per-user data isolation via Row-Level Security, server-side pgvector retrieval, and a bring-your-own-key LLM layer (Gemini) with a rate-limited Groq demo fallback. Early-stage prototype - live preview: https://flowmind-nine-tau.vercel.app/',
      explorer:
        'FlowMind turns building a chat assistant into something you can see and debug instead of a wall of prompt files. You sign in, then either describe an assistant in plain English (Story Builder) or drag nodes onto a React Flow canvas - message, input, choice, condition, RAG query, LLM response - wire them together, and run the whole thing in a Test simulator with a live execution trace. Upload your own .txt/.md/.csv/.html knowledge and it is stored in private Supabase Storage, parsed and chunked on the server, embedded with Gemini (768-dim) into pgvector, and retrieved per-user by cosine search with a BM25-lite fallback. LLM answers follow a strict precedence: your own Gemini key (BYOK, encrypted in an HttpOnly cookie) → a small shared Groq demo allowance → a clearly-labeled deterministic simulation. Every assistant is private to your account via Postgres Row-Level Security. It is an honest early prototype - accounts, the builder, RAG, hosted chat and a /widget.js embed all work today; organizations, PDF/DOCX ingestion, and a versioned publish schema are still on the roadmap. Preview at https://flowmind-nine-tau.vercel.app/',
    },
    date: '2026 –',
    tags: ['LLM', 'Visual Builder', 'RAG', 'Full-Stack', 'In Progress'],
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'React Flow v12',
      'Zustand',
      'Zod',
      'Supabase',
      'Postgres + RLS',
      'pgvector',
      'Gemini',
      'Groq',
      'Vitest',
      'pnpm + Turbo',
    ],
    metrics: [
      { label: 'Status', value: 'Prototype', unit: 'in active build' },
      { label: 'Node Types', value: '6', unit: 'executable steps' },
      { label: 'Retrieval', value: 'pgvector', unit: 'cosine + BM25 fallback' },
    ],
    role: 'Solo Builder',
    duration: 'Ongoing',
    status: 'ongoing',
    featured: true,
    category: 'ai',
    links: [
      { label: 'Live Preview', url: 'https://flowmind-nine-tau.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/VarshiniAkula/FlowMind' },
    ],
  },
  {
    slug: 'lora-brand-assistant',
    title: 'LoRA Brand Outreach Assistant',
    subtitle: 'Gemma 3 1B + LoRA + RAG for fact-grounded brand outreach, evaluated on a frozen held-out set',
    description: {
      recruiter:
        'Team project: a LoRA + RAG system that researches a company on the public web and drafts a short, cited Instagram collaboration email. I built the inference pipeline and owned Phases 3 to 5: verified LoRA adapter inference on Gemma 3 1B (MLX, 4-bit QAT) with a runtime load ledger, a verification and bounded-repair controller, and a fact-first workflow where code selects exact-quote facts, the model writes only a 100-150 word email, and code attaches citations and runs deterministic checks. Workflow is hash-frozen before a 10-company held-out evaluation; 175 tests pass.',
      explorer:
        'A 1B model cannot reliably write a full analysis-and-claims JSON, so I split the job. Code picks a few company facts as exact quotes with passage IDs, states one Instagram opportunity, and the model writes only a subject and a short email. Code then attaches [P#] citations by stemmed content-word coverage and runs checks for recipient, sender voice, platform, promises, weakness language and unsupported claims, with at most one targeted revision before human review. Every workflow file is SHA-256 frozen and the driver refuses held-out runs on drift. The honest result: the split workflow produces correctly addressed, Instagram-only, promise-free emails in 10/10 cases, a clear step up from Phase 4, but only 5 of 20 held-out drafts passed the checks, and the main failure was the selector accepting text that was not a real company fact. That finding is the most useful thing the project produced.',
    },
    date: '2026',
    tags: ['LLM', 'LoRA', 'RAG', 'Evaluation', 'Fine-tuning'],
    techStack: ['Python', 'Gemma 3 1B', 'MLX-LM', 'LoRA', 'FastAPI', 'pytest'],
    metrics: [
      { label: 'Held-out Set', value: '10', unit: 'companies, frozen workflow' },
      { label: 'Correctly Addressed', value: '10/10', unit: 'Instagram-only, no promises' },
      { label: 'Tests', value: '175', unit: 'passing' },
    ],
    role: 'ML Engineer (team of 4)',
    duration: 'Phases 3-5',
    status: 'completed',
    featured: true,
    category: 'ai',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Amatya27/LoRA-Brand-Assistant/tree/varshini/phase5-short-outreach',
      },
    ],
  },
  {
    slug: 'faiss-cpu-benchmark',
    title: 'FAISS CPU Retrieval Benchmark',
    subtitle: 'Thread scaling, P-core vs E-core placement and VTune profiling on a hybrid Intel CPU',
    description: {
      recruiter:
        'Reproducible FAISS IndexFlatL2 benchmark (50K x 384-D vectors, k=5) on an Intel i9-14900HX. Per-process workers, seeded shuffled reps and manifest validation before any result is published. Batch-32 throughput peaks at 8 threads (3,492 qps, 2.18x over 1 thread) and regresses at 16. 4 P-cores run 3.43x faster than 4 E-cores. Intel VTune Hotspots traced the 16-thread regression to OpenMP spin and kernel-wait time (~81% of CPU time), not E-core spillover. 47 regression tests guard the pipeline.',
      explorer:
        'Vector search is the hot path of every RAG system, so I wanted to know what thread count actually helps on a hybrid laptop CPU. Every (config, rep) runs in a fresh subprocess with thread env vars set before import, only index.search() is timed, and the analyser validates manifests, dataset hashes, timing totals and top-5 agreement before writing a single chart. Throughput climbs to 8 threads then drops 18% at 16. The obvious story was "16 threads spill onto E-cores", but VTune Hotspots showed balanced per-thread work and spin time growing near-linearly with threads, so I removed that claim. The README lists what was measured and, just as clearly, what was not.',
    },
    date: 'Nov 2026',
    tags: ['Performance', 'Benchmarking', 'Vector Search', 'Systems'],
    techStack: ['Python', 'FAISS', 'NumPy', 'OpenMP', 'Intel VTune', 'threadpoolctl', 'Matplotlib'],
    metrics: [
      { label: 'Peak Throughput', value: '3,492', unit: 'qps at 8 threads' },
      { label: 'P vs E Cores', value: '3.43x', unit: 'faster at 4 threads' },
      { label: 'Regression Tests', value: '47', unit: 'passing' },
    ],
    role: 'Solo Builder',
    duration: '1 week',
    status: 'completed',
    featured: true,
    category: 'systems',
    links: [
      { label: 'GitHub', url: 'https://github.com/VarshiniAkula/faiss-cpu-benchmark' },
    ],
  },
  {
    slug: 'skillshift',
    title: 'SkillShift',
    subtitle: 'Source-balanced feedback selection for reliable agent skill evolution',
    description: {
      recruiter:
        'CSE 572 (Data Mining) team research project. When an agent updates its skill from past attempts, twenty failures from one broken input can look like twenty reasons to change. SkillShift adds feedback selection before SkillOpt\'s reflection step and compares five methods (unfiltered, exact dedup, semantic dedup, source balancing, source-behavior weighting) on 120 SpreadsheetBench Verified tasks. I built resumable attempt collection, the pilot runner and the API cost ledger with hard call limits. Pilot: 6 of 6 validation-only runs completed and accepted by the gate. Full evaluation in progress.',
      explorer:
        'Self-improving agents learn from their own attempts, but repeated failures from a single source can masquerade as strong evidence and push the skill in a bad direction. SkillShift groups feedback by source family and failure behavior so that one broken workbook counts once, while the same failure across different tasks still counts strongly. My part was making the experiment trustworthy and affordable: collection that never repeats a completed model call and stops instead of recording fake failures, pool checks before any model call, runs that fail loudly if optimizer calls are dropped, 180-second timeouts for stalled endpoints, and a cost ledger that keeps the team inside a 350-call allowance. Test sets stay sealed until the full grid runs.',
    },
    date: 'Fall 2026 -',
    tags: ['AI Agents', 'Data Mining', 'Research', 'In Progress'],
    techStack: ['Python', 'SkillOpt', 'Sentence Transformers', 'GLM-5.3 Flash (NVIDIA API)', 'openpyxl'],
    metrics: [
      { label: 'Status', value: 'In Progress', unit: 'pilot complete' },
      { label: 'Benchmark', value: '120', unit: 'SpreadsheetBench tasks' },
      { label: 'Methods', value: '5', unit: 'feedback selectors compared' },
    ],
    role: 'Researcher (team of 5)',
    duration: 'Ongoing',
    status: 'ongoing',
    featured: true,
    category: 'research',
    links: [
      { label: 'GitHub', url: 'https://github.com/vemula20262/skillshift' },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter((p) => p.featured);
}
