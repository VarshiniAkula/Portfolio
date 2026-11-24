import type { CuratedResponse, PromptGroup } from '@/types/content';

/**
 * Starter questions shown when the chat opens, grouped by topic.
 * Every query here is answered by a curated response below.
 */
export const promptGroups: PromptGroup[] = [
  {
    title: 'Quick overview',
    chips: [
      { label: 'Who is Varshini?', query: 'Tell me about Varshini' },
      { label: 'Roles she fits', query: 'What roles is she looking for?' },
      { label: 'Why hire her?', query: 'Why should we hire her?' },
      { label: 'When can she start?', query: 'When does she graduate and when is she available?' },
    ],
  },
  {
    title: 'Experience',
    chips: [
      { label: 'JPMorgan Chase', query: 'What did she do at JPMorgan Chase?' },
      { label: 'Internships', query: 'What did she build in her JPMorgan internships?' },
      { label: 'Education', query: 'What is her education and GPA?' },
      { label: 'Skills', query: 'What is her tech stack and skills?' },
    ],
  },
  {
    title: 'Projects',
    chips: [
      { label: 'Project overview', query: 'What projects has she built?' },
      { label: 'BrandPilot AI', query: 'Tell me about BrandPilot AI' },
      { label: 'FAISS benchmark', query: 'Tell me about the FAISS benchmark' },
      { label: 'FlowMind', query: 'Tell me about FlowMind' },
      { label: 'SkillShift', query: 'Tell me about SkillShift' },
      { label: 'Rate limiter', query: 'Tell me about the distributed rate limiter' },
    ],
  },
  {
    title: 'Beyond code',
    chips: [
      { label: 'Publications', query: 'What has she published?' },
      { label: 'Leadership & teaching', query: 'What leadership and teaching has she done?' },
      { label: 'Awards', query: 'What awards and hackathons has she won?' },
      { label: 'Contact & résumé', query: 'How can I contact her or get her resume?' },
    ],
  },
];

const P = (label: string, query: string) => ({ label, query });

export const curatedResponses: CuratedResponse[] = [
  // ── Overview ────────────────────────────────────────────
  {
    id: 'about',
    triggers: ['tell me about varshini', 'about varshini', 'who is', 'who are you', 'introduce', 'summary', 'overview of her', 'about her', 'background', 'doing now', 'currently', 'right now', 'these days'],
    response:
      'Varshini Akula is a software engineer (backend and AI systems) and a software performance engineer.\n\nShe is pursuing an M.S. in Computer Science at Arizona State University (4.00 GPA, graduating May 2027). Before that she spent a full-time Software Development Engineer I role and two internships at JPMorgan Chase, building AWS services, Kafka integrations and NLP/LLM assistants at scale: 40M+ documents per day and 320+ hours saved per quarter.\n\nToday she builds and measures LLM, RAG and agent systems, fine-tunes models in PyTorch, and profiles CPU performance at the thread and core level. She was named SME for NLP and AI at JPMC and has two peer-reviewed publications.',
    link: { href: '/software#about', label: 'Open her portfolio' },
    followUps: [P('Roles she fits', 'What roles is she looking for?'), P('JPMorgan Chase', 'What did she do at JPMorgan Chase?'), P('Projects', 'What projects has she built?')],
  },
  {
    id: 'roles',
    triggers: ['roles', 'role', 'looking for', 'open to', 'position', 'job', 'disciplines', 'software engineer', 'ai engineer', 'performance engineer', 'fit'],
    response:
      'She is open to full-time roles from May 2027, and her portfolio is split in two:\n\n• Software Engineer (backend, full-stack and AI): AWS microservices, a 40M+ documents/day pipeline and Kafka integrations at JPMC with a 99% uptime SLA, plus LLM, RAG and agent systems such as BrandPilot AI (8/10 held-out companies approved) and HyArg (Recall@5 0.65 → 0.83).\n• Software Performance Engineer: benchmarking and profiling, e.g. the FAISS benchmark (Intel VTune, thread scaling, P-core vs E-core) and a rate limiter benchmarked at 1M+ checks/sec.',
    link: { href: '/software#contact', label: 'Get in touch' },
    followUps: [P('Why hire her?', 'Why should we hire her?'), P('When can she start?', 'When does she graduate and when is she available?')],
  },
  {
    id: 'why-hire',
    triggers: ['why hire', 'why should', 'stand out', 'different', 'unique', 'strength', 'strongest', 'best at', 'what makes her'],
    response:
      'Three things stand out:\n\n1. Production experience at scale. At JPMorgan Chase she took a 3-service Rasa NLU platform to production in under 6 months (320+ hours saved per quarter), built a pipeline handling 40M+ documents per day, and was named team SME for NLP and AI.\n2. Honest measurement. Her AI work uses frozen held-out evaluations (BrandPilot AI: 8/10 vs 3/10 for the base model), and her performance work separates what was measured from what is only a hypothesis (FAISS + Intel VTune).\n3. Range. She moves between Java/AWS services, LLM fine-tuning in PyTorch, a C++ compiler and CPU profiling, and she leads communities too (ACM at ASU, 4,700+ members).',
    followUps: [P('JPMorgan Chase', 'What did she do at JPMorgan Chase?'), P('BrandPilot AI', 'Tell me about BrandPilot AI')],
  },
  {
    id: 'availability',
    triggers: ['graduate', 'graduation', 'graduating', 'available', 'availability', 'start date', 'when can she start', 'full-time', 'full time', 'visa', 'sponsor', 'sponsorship', 'relocate', 'relocation', 'location', 'where is she', 'based'],
    response:
      'She graduates with her M.S. in Computer Science from Arizona State University in May 2027 and is open to full-time roles from then. She is based in Tempe, Arizona.\n\nFor questions about start dates, relocation or work authorization, please reach out to her directly; she will answer quickly.',
    link: { href: '/software#contact', label: 'Contact Varshini' },
  },

  // ── Experience ──────────────────────────────────────────
  {
    id: 'jpmc',
    triggers: ['jpmorgan', 'jp morgan', 'jpmc', 'chase', 'sde', 'software development engineer', 'work experience', 'experience', 'worked', 'industry', 'documents', 'documents per day', 'pipeline', 'mongodb', 's3', 'uptime', 'sme'],
    response:
      'She spent three roles at JPMorgan Chase in Hyderabad:\n\n• Software Development Engineer I (Jul 2024 – Aug 2025): architected a 3-service AWS platform (Rasa NLU, Python action service, TypeScript front end) that replaced manual onboarding calls, saving 320+ hours per quarter, and took it to production in under 6 months. Built a metadata pipeline processing 40M+ documents per day from Amazon S3 to MongoDB through CRUD APIs. Developed Java and AWS microservices and CI/CD with structured logging, tracing and health checks to hold a 99% uptime SLA. Named team SME for NLP and AI.\n• Program Attachment Intern (Jan – Jun 2024): an LLM incident console that cut resolution time by 60%, plus a RAG onboarding assistant.\n• Databus Intern (May – Jul 2023): a virtual assistant on a Kafka platform serving 70+ applications; this led to her full-time offer.',
    link: { href: '/projects/rasa-virtual-assistant', label: 'See the Rasa platform' },
    followUps: [P('Internships', 'What did she build in her JPMorgan internships?'), P('Skills', 'What is her tech stack and skills?')],
  },
  {
    id: 'internships',
    triggers: ['intern', 'internship', 'internships', 'databus', 'program attachment', 'jpmorgan', 'jpmc', 'chase'],
    response:
      'She did two internships at JPMorgan Chase before joining full-time:\n\n• Software Engineering Program Attachment Intern (Jan – Jun 2024): built a React/TypeScript incident console with an LLM chatbot (OpenAI API, Python) over historical incident data, cutting mean incident query resolution time by 60%. Also built a retrieval-augmented onboarding assistant over document embeddings and vector search with a rule-based fallback, and migrated a .NET test suite to Java.\n• Software Engineering Intern, Databus (May – Jul 2023): integrated a virtual assistant into an Apache Kafka publisher/consumer platform serving 70+ downstream applications, and delivered Java/Spring Boot upgrades with JUnit and Mockito coverage. The internship led to a full-time offer.',
    link: { href: '/projects/llm-incident-chatbot', label: 'See the incident chatbot' },
  },
  {
    id: 'education',
    triggers: ['education', 'degree', 'gpa', 'university', 'asu', 'arizona state', 'jntu', 'gnits', 'master', 'masters', 'bachelor', 'b.tech', 'btech', 'college', 'coursework', 'studying', 'study', 'studied', 'undergrad', 'undergraduate'],
    response:
      '• M.S. in Computer Science, Arizona State University, Tempe (Aug 2025 – May 2027), GPA 4.00/4.00.\n• B.Tech in Computer Science and Engineering (Data Science), Jawaharlal Nehru Technological University via G. Narayanamma Institute of Technology and Science, Hyderabad (Dec 2020 – May 2024), 9.49/10 CGPA, First Class with Distinction.\n\nAt ASU she also works as a course grader (Graduate Distributed Systems, CSE 598 Advanced Software Analysis and Design, CIS 310).',
    link: { href: '/software#experience', label: 'See her experience' },
  },
  {
    id: 'skills',
    triggers: ['skills', 'skill', 'tech stack', 'stack', 'technologies', 'languages', 'tools', 'frameworks', 'programming', 'java', 'python', 'typescript', 'react', 'aws', 'cloud', 'docker', 'kubernetes'],
    response:
      '• Languages: Python, Java, TypeScript, JavaScript, SQL, C, C++ (coursework), Bash.\n• Web & backend: React, Next.js, Angular, Tailwind CSS, FastAPI, Spring Boot, Flask, REST APIs, microservices, Kafka.\n• Data: PostgreSQL, Supabase, MongoDB, Redis, pgvector, FAISS, Amazon S3.\n• AI & ML: LLM APIs (OpenAI, Gemini, Groq), RAG, agents, tool calling, embeddings, evaluation, fine-tuning (LoRA, SFT), PyTorch, Hugging Face, scikit-learn, MLX-LM, LangChain, OpenCV, Rasa.\n• Performance & systems: Intel VTune profiling, OpenMP thread scaling, benchmarking, concurrency, distributed systems.\n• Cloud, DevOps & testing: AWS, Docker, Kubernetes, CI/CD, Vercel, Git, Linux, pytest, JUnit, Mockito, Playwright. She uses Claude Code, Cursor and Copilot daily.',
    followUps: [P('Projects', 'What projects has she built?'), P('Certifications', 'What certifications does she have?')],
  },
  {
    id: 'certifications',
    triggers: ['certification', 'certifications', 'certified', 'certificate', 'nptel', 'aws certified'],
    response:
      '• AWS Certified Cloud Practitioner (2024).\n• Database Management Systems, NPTEL, IIT Kharagpur.',
    link: { href: '/software#skills', label: 'See skills' },
  },

  // ── Projects ────────────────────────────────────────────
  {
    id: 'projects',
    triggers: ['projects', 'project', 'built', 'portfolio', 'side projects', 'what has she made', 'work samples'],
    response:
      'Highlights, grouped by discipline:\n\n• AI: BrandPilot AI (LoRA-tuned Gemma 3 1B agent, 8/10 held-out approvals), HyArg (Recall@5 0.65 → 0.83), STaR (46.2% on GSM8K), SkillShift (agent skill evolution, in progress), Deepfake Detection (94.5% on Celeb-DF), ClickLess AI.\n• Software: FlowMind (visual AI assistant builder, in progress), Construction Project Intelligence / BuildDocs AI (95% less manual lookup), Compiler and IR Generator in C++, and her JPMC platforms.\n• Performance: FAISS CPU Retrieval Benchmark (3,492 qps, VTune) and a Distributed Rate Limiter (1M+ checks/sec).\n\nAsk about any of them by name.',
    link: { href: '/software#projects', label: 'Browse projects' },
    followUps: [P('BrandPilot AI', 'Tell me about BrandPilot AI'), P('FAISS benchmark', 'Tell me about the FAISS benchmark'), P('FlowMind', 'Tell me about FlowMind')],
  },
  {
    id: 'ai-work',
    triggers: ['ai projects', 'ai work', 'llm', 'llms', 'machine learning', 'ml', 'rag', 'agent', 'agents', 'agentic', 'nlp', 'genai', 'generative'],
    response:
      'Her AI work covers the full loop from data to evaluation:\n\n• Agents: BrandPilot AI, a local research-to-outreach agent with a LoRA-tuned Gemma 3 1B, verified facts and [P#] citations (8/10 held-out approvals vs 3/10 base). SkillShift, research on feedback selection for agent skill evolution.\n• RAG and retrieval: HyArg, LLM-routed retrieval across 5 retrievers (Recall@5 0.65 → 0.83 on LongMemEval). RAG in FlowMind and BuildDocs AI.\n• Fine-tuning: STaR on Llama-3.2-3B (46.2% on GSM8K, +65% over zero-shot CoT).\n• Production NLP: a Rasa NLU platform and an LLM incident chatbot at JPMorgan Chase.',
    link: { href: '/software#projects', label: 'See AI projects' },
  },
  {
    id: 'performance',
    triggers: ['performance', 'profiling', 'profile', 'optimization', 'optimisation', 'latency', 'throughput', 'benchmark', 'benchmarking', 'vtune', 'concurrency'],
    response:
      'Performance engineering has its own portfolio on this site:\n\n• FAISS CPU Retrieval Benchmark: thread scaling and P-core vs E-core placement on an Intel i9-14900HX. Throughput peaks at 3,492 qps at 8 threads (2.18x) and regresses at 16; Intel VTune traced ~81% of CPU time to OpenMP barrier/wait vs 6% in sgemm. P-cores were 3.43x faster than E-cores. 47 regression tests keep results reproducible.\n• Distributed Rate Limiter: a thread-safe core and a Redis/Lua distributed token bucket, benchmarked at 1M+ checks/sec.\n• At JPMC: observability work (logging, tracing, health checks) holding a 99% uptime SLA.',
    link: { href: '/performance#benchmarks', label: 'Open the performance portfolio' },
  },
  {
    id: 'backend',
    triggers: ['backend', 'back end', 'distributed', 'system design', 'microservice', 'microservices', 'api', 'apis', 'database', 'full stack', 'full-stack'],
    response:
      'On the backend and systems side:\n\n• JPMC: Java and AWS microservices with CI/CD, a 3-service Rasa platform, a 40M+ documents/day S3 → MongoDB pipeline through CRUD APIs, and Kafka integrations serving 70+ applications.\n• FlowMind: Next.js + Supabase with multi-tenant Postgres Row-Level Security, encrypted BYOK keys and atomic inference quotas.\n• Distributed Rate Limiter: four algorithms, Redis-backed shared limits via an atomic Lua script.\n• Compiler and IR Generator: recursive-descent compiler in C++ with a graph IR.',
    link: { href: '/software#projects', label: 'Browse projects' },
  },
  {
    id: 'brandpilot',
    priority: 2,
    triggers: ['brandpilot', 'brand pilot', 'brand assistant', 'brand', 'outreach', 'lora', 'gemma', 'mlx', 'cse 598'],
    response:
      'BrandPilot AI (CSE 598 Agentic AI, team of 5, Fall 2026) is a local agent that researches a brand and drafts an Instagram collaboration email, running on Apple Silicon with no paid APIs.\n\nVarshini built the inference pipeline, verification and the fact-first workflow. A LoRA-tuned Gemma 3 1B (4-bit, MLX-LM) writes only from verified facts; code maps sentences to [P#] citations, checks scope and length, and withholds failing drafts before human review.\n\nThe workflow was frozen with file hashes before testing: 8/10 held-out companies approved vs 3/10 for the base model, with 0 execution failures in 157 generations.',
    link: { href: '/projects/lora-brand-assistant', label: 'Read the case study' },
  },
  {
    id: 'faiss',
    priority: 2,
    triggers: ['faiss', 'vector search', 'thread', 'threads', 'p-core', 'e-core', 'openmp', 'i9', 'retrieval benchmark'],
    response:
      'FAISS CPU Retrieval Benchmark (Nov 2026): she benchmarked FAISS IndexFlatL2 search (50K x 384-D) on a hybrid Intel i9-14900HX, sweeping OpenMP thread counts and P-core vs E-core placement with process affinity masks.\n\nBatch-32 throughput peaks at 3,492 qps at 8 threads (2.18x) and regresses at 16. Intel VTune Hotspots traced about 81% of CPU time to OpenMP barrier/wait vs 6% in the sgemm kernel. P-cores were 3.43x faster than E-cores. Results are reproducible with per-run subprocess isolation, SHA-256 dataset manifests, result-agreement checks and 47 regression tests.',
    link: { href: '/projects/faiss-cpu-benchmark', label: 'Read the case study' },
  },
  {
    id: 'flowmind',
    priority: 2,
    triggers: ['flowmind', 'flow mind', 'assistant builder', 'visual builder', 'supabase', 'row-level security', 'byok'],
    response:
      'FlowMind (Spring 2026 – present, early-stage) is a visual AI assistant builder in Next.js, React, TypeScript and Supabase. Users design chat flows on a canvas, ground answers in their own documents, test in a live simulator and publish a hosted chat page.\n\nShe built a typed node-graph runtime with per-node execution traces, RAG with Gemini embeddings (768-dim) and pgvector/HNSW cosine retrieval plus a BM25 fallback, and inference via Gemini and Groq. Security: multi-tenant Postgres Row-Level Security with an automated cross-tenant test suite, encrypted BYOK keys, atomic inference quotas, and an offline RAG/eval harness in CI.',
    link: { href: '/projects/flowmind', label: 'Read the case study' },
  },
  {
    id: 'skillshift',
    priority: 2,
    triggers: ['skillshift', 'skill shift', 'skillopt', 'spreadsheetbench', 'skill evolution', 'feedback selection', 'cse 572', 'data mining'],
    response:
      'SkillShift (CSE 572 Data Mining, team research, Fall 2026 – present) studies source-balanced feedback selection ahead of SkillOpt reflection, so repeated failures from one broken input do not over-steer agent skill updates. The team compares 5 selectors on 120 SpreadsheetBench Verified tasks.\n\nVarshini built the experiment infrastructure: resumable attempt collection, pool validation, fail-loud checks, 180-second request timeouts and an API cost ledger enforcing a 350-call budget. The pilot is complete (6/6 validation runs); the full evaluation is in progress.',
    link: { href: '/projects/skillshift', label: 'Read more' },
  },
  {
    id: 'rate-limiter',
    priority: 2,
    triggers: ['rate limiter', 'rate limiting', 'rate-limit', 'token bucket', 'sliding window', 'redis', 'lua'],
    response:
      'Distributed Rate Limiter (2026): a Python library with four algorithms (token bucket, fixed window, sliding window log, sliding window counter) behind one interface, with per-key isolation and a thread-safe core on monotonic timing.\n\nShe added a Redis-backed distributed token bucket using an atomic Lua script, so many servers share one limit. Tested with pytest and benchmarked at 1M+ checks per second.',
    link: { href: '/projects/distributed-rate-limiter', label: 'Read more' },
  },
  {
    id: 'compiler',
    priority: 2,
    triggers: ['compiler', 'ir generator', 'intermediate representation', 'recursive descent', 'recursive-descent', 'c++', 'interpreter'],
    response:
      'Compiler and IR Generator for a C-like language (C++ course project, Spring 2026): a recursive-descent compiler that emits a graph-based IR executed by an interpreter, lowering while/for/switch into jumps (switch without an equality primitive). She designed the symbol-to-memory table and constant pool, and it passed all hidden test suites.',
    link: { href: '/projects/compiler-ir', label: 'Read more' },
  },
  {
    id: 'construction',
    priority: 2,
    triggers: ['construction', 'builddocs', 'build docs', 'rfi', 'rbac'],
    response:
      'Construction Project Intelligence / BuildDocs AI (Spring 2026): a role-aware construction document platform (Next.js, React, TypeScript, FastAPI, Supabase PostgreSQL) with RBAC across 6 role types, document parsing, indexing, RFI classification and dashboards, cutting manual lookup by 95%. Chat answers are grounded in project documents with citations, using Groq-hosted Llama 3.1 8B and a TF-IDF extractive fallback; deployed on Vercel.',
    link: { href: '/projects/construction-intelligence', label: 'Read the case study' },
  },
  {
    id: 'clickless',
    priority: 2,
    triggers: ['clickless', 'click less', 'travel agent', 'travel planning', 'playwright'],
    response:
      'ClickLess AI (Spring 2026): a travel conversational agent that replaces click-through flows with chat, using OpenAI API intent handling and Playwright browser tool use behind FastAPI, integrating 5+ services.',
    link: { href: '/projects/clickless-ai', label: 'Read more' },
  },
  {
    id: 'hyarg',
    priority: 2,
    triggers: ['hyarg', 'memory', 'retriever', 'retrievers', 'retrieval', 'longmemeval', 'locomo', 'recall', 'bm25'],
    response:
      'HyArg: Hybrid Multi-Retriever Orchestration (research, Fall 2025) orchestrates BM25, TF-IDF, FAISS, SVM and time-weighted retrievers for long-term conversational memory with Qwen2.5-7B (Python, PyTorch, LangChain). An LLM selector routes each query to the right retriever. It improved Recall@5 from 0.65 to 0.83 on LongMemEval and gained +4 points on LoCoMo.',
    link: { href: '/projects/memory-augmented-llm', label: 'Read the case study' },
  },
  {
    id: 'star',
    priority: 2,
    triggers: ['star', 'self-taught', 'self taught', 'gsm8k', 'reasoning', 'fine-tune', 'fine-tuning', 'fine tuning', 'a100', 'llama'],
    response:
      'STaR: Self-Taught Reasoner (Fall 2025): she implemented the STaR rationale-generation and rationalization loop and fine-tuned Llama-3.2-3B in PyTorch/Hugging Face on an NVIDIA A100 with 3.5K synthetic samples, benchmarked against zero-shot CoT and vanilla SFT. It reached 46.2% on GSM8K, a 65% gain over zero-shot chain-of-thought.',
    link: { href: '/projects/star-reasoning', label: 'Read the case study' },
  },
  {
    id: 'deepfake',
    priority: 2,
    triggers: ['deepfake', 'deep fake', 'fake face', 'celeb-df', 'computer vision', 'inceptionresnet', 'bilstm', 'video detection'],
    response:
      'Deepfake Video Detection (research, Aug – Dec 2025): a detector combining dual InceptionResNet CNNs with BiLSTM temporal modeling and majority-vote ensembling, using MTCNN face detection, OpenCV, and spatial and frequency-domain analysis. It reached 94.5% accuracy on Celeb-DF and serves per-frame confidence scores through a Flask REST API.',
    link: { href: '/projects/deepfake-detection', label: 'Read the case study' },
  },
  {
    id: 'rasa',
    priority: 2,
    triggers: ['rasa', 'virtual assistant', 'onboarding', 'chatbot girl', '320'],
    response:
      'At JPMorgan Chase she architected a 3-service AWS platform (Rasa NLU, a Python action service and a TypeScript front end) that replaced manual onboarding calls, saving 320+ hours per quarter, and took it to production in under 6 months. She was named team SME for NLP and AI.',
    link: { href: '/projects/rasa-virtual-assistant', label: 'Read the case study' },
  },
  {
    id: 'incident',
    priority: 2,
    triggers: ['incident', 'incident chatbot', 'resolution time', 'openai'],
    response:
      'During her 2024 JPMC internship she built a React/TypeScript incident console with an LLM chatbot (OpenAI API, Python) over historical incident data, cutting mean incident query resolution time by 60%.',
    link: { href: '/projects/llm-incident-chatbot', label: 'Read the case study' },
  },
  {
    id: 'kafka',
    priority: 2,
    triggers: ['kafka', 'streaming', 'spring boot', 'junit', 'mockito', '70+'],
    response:
      'In her 2023 Databus internship at JPMorgan Chase she integrated a virtual assistant into an Apache Kafka publisher/consumer platform serving 70+ downstream applications, and delivered Java/Spring Boot upgrades with JUnit and Mockito coverage. It led to her full-time offer.',
    link: { href: '/projects/kafka-streaming', label: 'Read more' },
  },

  // ── Beyond code ─────────────────────────────────────────
  {
    id: 'publications',
    triggers: ['publication', 'publications', 'paper', 'papers', 'published', 'ijitce', 'journal'],
    response:
      'She has two peer-reviewed publications in IJITCE:\n\n• Optimizing Prediction of Security Data Using Feature Selection and Ensembling (May 2023).\n• Evaluating the Performance of Fake Face Detection Methods in Forensics (Jun 2024).',
    link: { href: '/software#leadership', label: 'See publications' },
  },
  {
    id: 'research',
    triggers: ['research', 'researching', 'academic'],
    response:
      'Her research centres on making AI systems reliable and measurable: HyArg (multi-retriever memory, Recall@5 0.65 → 0.83), STaR (self-taught reasoning, 46.2% on GSM8K), Deepfake Video Detection (94.5% on Celeb-DF), SkillShift (feedback selection for agent skill evolution, in progress) and BrandPilot AI (grounded outreach agent). She also has two IJITCE publications.',
    link: { href: '/software#leadership', label: 'See publications' },
  },
  {
    id: 'leadership',
    triggers: ['leadership', 'leadership experience', 'lead', 'leader', 'acm', 'conclave', 'women', 'literaria', 'community', 'teaching', 'teach', 'grader', 'ta', 'mentor'],
    response:
      '• Engagement Manager, ACM at ASU (4,700+ members, 2025-26).\n• Student Chair, Women\'s Leadership Conclave 2024, GNITS.\n• President, Literaria Clava, her college literature club.\n• Teaching: Grader for CSE 598 Advanced Software Analysis and Design and CIS 310 (Fall 2026), and Course Grader for Graduate Distributed Systems (Spring 2026) at ASU.\n• At JPMorgan Chase she was named team SME for NLP and AI.',
    link: { href: '/software#leadership', label: 'See leadership' },
  },
  {
    id: 'awards',
    triggers: ['award', 'awards', 'hackathon', 'hackathons', 'code for good', 'nasa', 'space apps', 'competition', 'won', 'win', 'mun'],
    response:
      '• JPMorgan Code for Good: 1st place. The win led to her JPMorgan Chase internships and career.\n• NASA Space Apps Hackathon: Finalist, competing at nationals in Chandigarh.\n• Model United Nations: 1st place.',
    link: { href: '/software#experience', label: 'See her experience' },
  },
  {
    id: 'contact',
    triggers: ['contact', 'email', 'reach', 'hire her', 'connect', 'linkedin', 'github', 'resume', 'cv', 'get in touch', 'phone', 'call'],
    response:
      'You can email her at varshiniakula2003@gmail.com, or connect on LinkedIn and GitHub (links on the Contact page). Her résumé is one click away: use the Résumé button in the top navigation to download the PDF.',
    link: { href: '/software#contact', label: 'Open contact' },
  },
  {
    id: 'hobbies',
    triggers: ['hobby', 'hobbies', 'interests', 'fun', 'personal', 'travel', 'book', 'books', 'reading', 'coffee', 'outside work'],
    response:
      'Outside engineering she reads a lot of novels, travels (from the Western Ghats to the Rocky Mountains) and is always looking for the best coffee in town.',
  },
  {
    id: 'ai-tools',
    triggers: ['claude code', 'cursor', 'copilot', 'ai tools', 'coding assistant'],
    response: 'She uses Claude Code, Cursor and Copilot daily as part of her development workflow.',
  },
];
