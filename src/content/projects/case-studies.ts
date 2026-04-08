interface CaseStudySection {
  title: string;
  content: string[];
}

interface CaseStudy {
  sections: CaseStudySection[];
}

export const caseStudyContent: Record<string, CaseStudy> = {
  'rasa-virtual-assistant': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'The storage management team at JPMorgan Chase spent over 320 hours every quarter on manual data entry - extracting metadata from incoming requests, validating storage configurations, and creating records in provisioning systems. This repetitive work pulled senior engineers away from architectural decisions and system optimization.',
          'Previous automation attempts had stalled at the proof-of-concept stage. The workflows were complex, involving natural language understanding of varied request formats, integration with multiple backend systems, and strict compliance requirements inherent to financial services.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'I designed a conversational AI system using RASA NLU as the core natural language understanding engine. The assistant could interpret user queries in natural language, extract relevant metadata (storage type, capacity, environment, team), and automatically create records in downstream provisioning systems.',
          'The architecture involved a RASA NLU pipeline for intent classification and entity extraction, Java microservices for business logic and validation, SQL databases for record storage, and AWS infrastructure for deployment and scaling. I built a React frontend that gave users a familiar chat interface while the backend handled complex multi-step workflows.',
          'Integration with Kafka enabled real-time streaming of events between the assistant and existing enterprise systems, ensuring data consistency and auditability - non-negotiable requirements in financial services.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Choosing RASA over cloud NLU services was deliberate - JPMorgan Chase required on-premise deployment for data sensitivity. RASA\'s open-source nature allowed full control over the model training pipeline and deployment infrastructure.',
          'I implemented a hybrid approach for entity extraction: rule-based patterns for structured fields (like storage sizes and environment names) combined with ML-based extraction for free-form descriptions. This gave us high precision on known formats while gracefully handling novel inputs.',
          'The microservices architecture was designed for independent scaling - the NLU pipeline could scale separately from the record creation service, allowing us to handle burst traffic during quarterly provisioning cycles.',
        ],
      },
      {
        title: 'Impact',
        content: [
          'The system eliminated 320+ hours of manual data entry per quarter, reduced storage provisioning time by 40%, and achieved 99.9% uptime SLA compliance. Beyond the metrics, the assistant changed the team\'s workflow - senior engineers could focus on architecture and optimization instead of data entry.',
          'The success of this project established a pattern for conversational AI adoption across adjacent teams, and the architecture became a reference implementation for other chatbot initiatives at JPMC.',
        ],
      },
      {
        title: 'Lessons Learned',
        content: [
          'Production NLU systems need graceful degradation - when the model isn\'t confident, the system should ask clarifying questions rather than guess. I implemented a confidence threshold system that routed low-confidence queries to a human review queue.',
          'Enterprise chatbot adoption is as much about change management as technology. Working closely with end users during development - not just at launch - was essential for building trust in the system.',
        ],
      },
    ],
  },
  'llm-incident-chatbot': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'When production incidents occurred, engineers spent significant time searching through runbooks, Slack threads, and documentation to find relevant solutions. Mean query resolution time was high, and institutional knowledge was scattered across multiple systems.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'I designed an LLM-powered chatbot using OpenAI APIs that understood incident context and searched historical incident data to surface relevant solutions. The system combined semantic search over past incidents with LLM-generated summaries and recommendations.',
          'Built with Python for the backend inference pipeline, React and TypeScript for the frontend interface, and PostgreSQL for storing and indexing historical incident data. The architecture allowed for real-time streaming of responses, giving engineers immediate feedback while the system searched through historical records.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Using OpenAI APIs for the LLM layer allowed rapid iteration on prompt engineering while maintaining high response quality. The system prompt was carefully crafted to prioritize accuracy and cite specific past incidents rather than generate speculative solutions.',
          'I implemented a retrieval-augmented generation (RAG) pattern - the LLM always grounded its responses in actual historical incident data, reducing hallucination risk in a high-stakes operational context.',
        ],
      },
      {
        title: 'Impact',
        content: [
          'The chatbot reduced mean incident query resolution time by 60%. Engineers could get relevant context and suggested solutions within seconds instead of manually searching through multiple systems. The tool became a standard part of the incident response workflow.',
        ],
      },
    ],
  },
  'memory-augmented-llm': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'Large language model conversational systems degrade sharply on long conversation histories - accuracy can drop 30–60% on conversations spanning ~115k tokens. The root cause isn\'t just context window size; it\'s that no single retriever is good at every kind of question. BM25 nails exact phrase and entity lookups. Dense retrievers like FAISS capture semantic similarity but miss lexical matches. Time-weighted methods optimize for recency but mishandle non-temporal queries. Conversational memory queries cut across all of these - information extraction, temporal reasoning, multi-session aggregation, and knowledge updates - so any fixed single-retriever baseline leaves recall on the table.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'HyArg is a hybrid multi-retriever orchestration system built around an LLM-based selector. The pipeline starts with a Signal Extractor that pulls features from each query - temporal cues ("recent", "yesterday", "last"), quoted phrases, entity mentions, query length, and structural patterns. A Prompt Builder then assembles those signals together with an orchestrator guide (decision rubric, tie-breakers, anti-patterns, and few-shot examples) and asks the LLM to choose which retriever should handle this specific query.',
          'The Retriever Pool has five specialized retrievers - BM25 (sparse lexical, k1=1.5, b=0.75), TF-IDF (sparse statistical), FAISS (dense neural with sentence-transformers/MiniLM-L6-v2), SVM (linear-kernel semantic), and Time-Weighted BM25 with exponential decay. The selector outputs structured JSON of the form {retriever, CoT reasoning}, the router dispatches accordingly, and the chosen retriever pulls the top-k documents from session-based indexes.',
          'The data pipeline deliberately preserves session boundaries and temporal metadata instead of consolidating dialogue into a single bag - that\'s what makes time-weighted retrieval and true cross-session synthesis possible.',
        ],
      },
      {
        title: 'Results',
        content: [
          'We evaluated HyArg on two benchmarks: LongMemEval (500 questions across 7 categories) and Locomo (1538 questions across 5 categories), using LLaMA 3.1 8B Instruct, Mistral 7B Instruct, and Qwen2.5 7B Instruct as base models.',
          'On LongMemEval, HyArg with Qwen2.5 7B reached Recall@5 of 0.83 - an absolute gain of +18 percentage points over the best single retriever (0.65 → 0.83). On Locomo, HyArg with LLaMA 3.1 8B Instruct reached Recall@5 of 0.36 (+4 points over the best single-retriever baseline at 0.32). Both results validate the central thesis: dynamic retriever selection based on query characteristics outperforms any fixed retriever across diverse conversational memory tasks.',
        ],
      },
      {
        title: 'Lessons Learned',
        content: [
          'Memory in conversational AI isn\'t just about storing information - it\'s about routing the right kind of question to the right kind of retriever. The orchestrator guide (rules + few-shot examples) ended up being as important as the retrievers themselves: most of the gains came from getting the routing right.',
          'Preserving session boundaries and temporal metadata instead of pre-consolidating dialogue mattered more than expected - it\'s what unlocked the time-weighted and multi-session aggregation paths in the first place.',
        ],
      },
    ],
  },
  'deepfake-detection': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'Synthetic media generation has advanced rapidly, making deepfakes increasingly difficult to distinguish from authentic content. This poses risks for misinformation, identity fraud, and trust in digital media. Reliable detection systems are becoming critical infrastructure for content verification.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'I developed a multi-modal detection pipeline that analyzes facial artifacts at multiple levels: spatial-domain analysis for visual inconsistencies, frequency-domain analysis for GAN fingerprints, and temporal consistency checks for video content.',
          'The system used a ResNet-based backbone fine-tuned on a diverse dataset of both genuine and synthetically generated faces. Built with Python, PyTorch, OpenCV for image processing, and FFmpeg for video analysis. Adversarial training improved robustness against newer generation techniques.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'The frequency-domain analysis proved particularly valuable - GAN-generated images leave subtle spectral artifacts that are invisible to human observers but detectable through Fourier analysis. Combining spatial and frequency features gave the model complementary detection signals.',
          'I implemented an adversarial training loop where the detector was continuously challenged with increasingly sophisticated synthetic samples, preventing overfitting to specific generation methods.',
        ],
      },
      {
        title: 'Impact',
        content: [
          'The system achieved 94.5% detection accuracy across multiple deepfake generation methods. The research findings were published, contributing to the broader effort to develop reliable synthetic media detection.',
        ],
      },
    ],
  },
  'star-reasoning': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'Language models often struggle with multi-step reasoning tasks, particularly mathematical problem-solving. While scaling model size improves performance, a more efficient approach is teaching models to reason more carefully through self-improvement - learning from their own correct reasoning chains.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'I implemented the Self-Taught Reasoner (STaR) methodology: the model generates rationales for training problems, filters for rationales that lead to correct answers, and then fine-tunes on those successful reasoning chains. This iterative process allows the model to bootstrap its own reasoning abilities.',
          'Built with PyTorch, Hugging Face Transformers, and parameter-efficient fine-tuning (PEFT/LoRA) to make the iterative training feasible. The training loop involved multiple rounds of rationale generation, filtering, and fine-tuning.',
        ],
      },
      {
        title: 'Results',
        content: [
          'The fine-tuned model showed significant improvement on the GSM8K mathematical reasoning benchmark compared to the base model. The iterative self-improvement approach proved effective at teaching more structured reasoning without requiring human-authored rationales.',
        ],
      },
    ],
  },
  'clickless-ai': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'Travel planning is a fragmented, click-intensive process. Users manually navigate multiple platforms - comparing flights on one site, checking hotels on another, reading cultural guides, and consulting weather forecasts separately. Despite advances in conversational AI, no existing system automated this end-to-end research workflow from a single natural language utterance.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'ClickLess AI uses Playwright-based browser automation to scrape real-time data from flights, hotels, weather, and cultural sources. An LLM backbone handles multi-turn dialogue management, structured intent extraction, and response synthesis. The system uses a two-track data acquisition strategy: live scraping at query time and pre-cached knowledge bases for demo destinations.',
          'The architecture includes a FastAPI backend with async parallel scraper orchestration, spaCy NER for deterministic entity detection (dates, currencies, locations), and LLM-based semantic extraction for unstructured content like cultural guides.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Using Playwright over simple HTTP scraping was essential for handling JavaScript-rendered pages and bot detection layers on modern travel sites. The parallel scraping architecture minimizes end-to-end response time while maintaining stable element detection through explicit waits.',
          'Comparing classical NLP baselines (spaCy + TF-IDF) against LLM-based extraction allowed us to identify where each approach excels - deterministic parsing for structured data, LLM for unstructured narrative content.',
        ],
      },
      {
        title: 'Impact',
        content: [
          'The system aggregates data from 5+ sources into a coherent trip brief in under 30 seconds. It eliminates the multi-tab, multi-click workflow that typically takes 30-60 minutes of manual research, reducing travel planning to a single conversational interaction.',
        ],
      },
    ],
  },
  'construction-intelligence': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'Construction projects generate vast amounts of documentation - RFIs, change orders, submittals, schedules, and budgets. Finding the right information at the right time is critical, but teams often rely on manual searching through unstructured document repositories, leading to delays and missed risks.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'Built a full-stack construction project intelligence platform with multi-project workspaces, role-based access control (6 role types), and an AI assistant using RAG-style document search with citations. The system includes RFI intelligence with NLP-based classification and entity extraction, plus analytics dashboards for risk indicators.',
          'The backend uses FastAPI with PostgreSQL, featuring document upload with versioning, TF-IDF semantic search, and optional OpenAI embedding upgrades. The React frontend provides an intuitive interface for project managers, architects, and engineers.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Designing for role-based access from day one ensured that sensitive project information is properly scoped. The vector store integration allows the AI assistant to retrieve relevant document snippets and answer questions with source citations.',
          'Docker containerization ensures consistent deployment across development and production environments, with the architecture designed to be extensible for future BIM integration and real-time updates.',
        ],
      },
      {
        title: 'Impact',
        content: [
          'The platform provides a unified workspace for construction project management with AI-powered document intelligence, reducing the time spent searching for information and proactively identifying risks through RFI analysis and analytics dashboards. Try the live demo at https://constructionrag.vercel.app/',
        ],
      },
    ],
  },
  'flowmind': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'Building production-grade conversational AI is still painful. Teams stitch together prompt files, vector stores, function-calling tools, and a fragile mess of glue code, then lose visibility into why the assistant said what it said. Non-technical stakeholders can\'t safely shape behavior, regressions sneak in silently, and "deploy" usually means redeploying an entire app for a single prompt tweak.',
          'I wanted a single visual environment where you can design a conversational assistant as a graph, ground it in your own websites and documents, simulate it with a full execution trace, run regression tests, and one-click deploy it as an embeddable widget - without juggling six different tools.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'FlowMind is a visual AI assistant platform built around its own graph runtime. The editor is a React Flow v12 canvas where each node is a strongly-typed step (message, input, choice, condition, RAG query, LLM response, HTTP action, transform, validator, structured extract, tool router, human handoff, loop, subflow, end). The runtime executes that graph node-by-node, streams trace events into a debugger panel, and persists every conversation, message, and trace in Postgres.',
          'Knowledge grounding is first-class: paste a website or upload PDFs and DOCX, and a background pipeline (Inngest jobs) crawls, parses, chunks, and embeds the content into pgvector on Supabase. Retrieval at query time fuses semantic search (Gemini text-embedding-004) with lexical search (Postgres full-text), then cites the source documents back into the assistant\'s reply.',
          'The model layer is a gateway that routes between Google Gemini 2.5 Flash (primary, free tier) and Groq Llama 3.3 70B (fallback), with prompt-hash caching in Upstash Redis to stay inside free tiers. Auth, RLS, storage, and realtime are all Supabase. The whole thing is a Turborepo monorepo with shared TypeScript types and Zod validators between the Next.js 15 web app and the Hono API.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Storing nodes and edges as JSONB inside graph_versions instead of normalized rows. Graphs are read and written atomically, version history is trivial, and Supabase row counts stay lean enough to live inside the free tier.',
          'Treating the runtime as a real interpreter - not a chain of LLM calls. Every node emits a trace event with input, output, latency, tokens, and cost. That means the simulator is also a debugger, and analytics, regression tests, and observability all read from the same source of truth.',
          'Designing for $0/month from day one. Every service in the stack (Supabase, Vercel, Inngest, Upstash, Gemini, Groq) has a real free tier, and the architecture is shaped around those quotas - aggressive prompt caching, batched embeddings, JSONB graphs, and Inngest for retries and cron instead of long-running workers.',
        ],
      },
      {
        title: 'Status',
        content: [
          'FlowMind is currently in active build - not finished. The graph schema, runtime, knowledge ingestion pipeline, and editor shell are coming online; the simulator, test harness, and one-click deploy flow are next. Early preview lives at https://flowmind-nine-tau.vercel.app/.',
        ],
      },
    ],
  },
};
