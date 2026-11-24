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
          'Building a useful chat assistant still means stitching together prompt files, a vector store, retrieval glue, and a model API, then losing all visibility into why the assistant said what it said. Non-technical people can\'t safely shape behavior, and "test it" usually means poking a black box in production.',
          'I wanted a single visual environment where you can design an assistant as a flow, ground it in your own documents, run it in a simulator with a full execution trace, and publish it as a hosted chat page or embeddable widget - all behind a real login, with your data isolated to your account.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'FlowMind is a full-stack Next.js 15 (App Router, RSC) and React 19 app backed entirely by Supabase. You sign up with an email/password account; protected routes and session auth run through @supabase/ssr, and every assistant, document chunk, and file is isolated per user by Postgres Row-Level Security. There is no separate API service - the backend is Next.js API routes on the Node runtime, same-origin and RLS-guarded.',
          'The builder has three surfaces: a Story Builder that turns a plain-English description into a working flow, a React Flow v12 Canvas of executable nodes (message, input, choice, condition, RAG query, LLM response) that auto-saves, and a Test simulator that runs the whole flow with a live execution trace and variable capture. Shared TypeScript types, node constants, and Zod validators live in a pnpm + Turbo workspace package.',
          'Knowledge grounding is server-side and per-user: upload .txt/.md/.csv/.html, and the file lands in private Supabase Storage, gets parsed and chunked on the server, and is embedded with Gemini gemini-embedding-001 (768-dim) into pgvector. At query time, retrieval runs a cosine match over an HNSW index with a BM25-lite lexical fallback when no key is present, and the retrieval tester shows which path actually ran.',
          'The LLM Response node follows a strict, transparent precedence: a user\'s own Gemini key (BYOK - validated server-side, encrypted in an auto-expiring HttpOnly cookie, never stored in the browser or database), then a small shared Groq demo allowance (openai/gpt-oss-20b, capped atomically per-user and globally in Postgres), then an opt-in platform Gemini key, and finally a clearly-labeled deterministic simulation. The trace always shows which provider and model answered.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Real auth and Row-Level Security from the start, not an afterthought. Because every table is RLS-isolated per user, the same queries that power the dashboard are safe multi-user by construction - each account only ever sees its own assistants, chunks, and files.',
          'Bring-your-own-key first, with graceful degradation. FlowMind stays fully usable with zero configuration: without any key it falls back to a deterministic simulation, so the builder and RAG pipeline are demoable offline, and connecting a Gemini key unlocks real generation without changing anything else.',
          'An offline evaluation harness (RAG + workflow metrics) wired into CI, so retrieval and flow-execution changes are measured rather than eyeballed - unusual for an early prototype, and the thing that keeps the honest status honest.',
        ],
      },
      {
        title: 'Status',
        content: [
          'FlowMind is an honest early-stage prototype, not production-ready. Working today: accounts and login, per-user assistant history, the Story → Canvas → Test builder, knowledge upload with pgvector retrieval, real LLM answers via Gemini BYOK or the Groq demo, and a legacy publish path with hosted chat (/chat/[id]) plus a /widget.js embed script.',
          'Still on the roadmap: organizations (multi-member, invites, roles - today each user gets one personal workspace), PDF/DOCX ingestion (.txt/.md/.csv/.html only for now), and a versioned publish schema with a rate-limited public chat endpoint. Live preview: https://flowmind-nine-tau.vercel.app/ · Code: https://github.com/VarshiniAkula/FlowMind',
        ],
      },
    ],
  },
  'lora-brand-assistant': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'Credible brand outreach needs current research on a company\'s positioning, audience, marketing activity and gaps. Doing it by hand is slow and goes stale as brands change their marketing, and a model working from memory alone uses outdated facts or hallucinates marketing activity.',
          'BrandPilot AI was built for CSE 598 Agentic AI at Arizona State University by Varshini Akula, Thanishka Bolisetty, Thushar Reddy Vemula, Suhas Gajula and YJ Kim, with Amatya Katyayan as stakeholder.',
        ],
      },
      {
        title: 'How the Agent Works',
        content: [
          'Everything runs on a local Apple Silicon laptop with no paid APIs. (1) A research tool searches the public web and returns passages with URLs, abstaining when there is no evidence. Passages go into a numbered, hashed, replayable evidence packet. (2) Code selects 2-3 exact quotes with passage IDs, and a teammate verifies or rejects each fact. (3) Code states one collaborative Instagram opportunity built on a fact, with no weakness language.',
          '(4) The LoRA-tuned Gemma 3 1B (4-bit, served by MLX with a load ledger) writes only a subject and a 100-150 word email. (5) Code matches each sentence to the facts and attaches [P#] citations; new claims get none. (6) Checks cover facts, sender, Instagram-only, promises and length. A failing draft gets at most one revision of its failing sentences, then is withheld and never sent. A human reviewer approves, edits or rejects.',
          'Model: Gemma 3 1B (QAT 4-bit) with LoRA adapter v5 (rank 8), trained on 40 grounded examples from a 148-company dataset split by company 99 / 16 / 33.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Fact-first instead of adaptive re-search. The planned adaptive re-search loop was replaced: verified quotes come before drafting, so the model never has to decide what is true.',
          'Freeze before testing. The workflow was tuned on 3 development companies, frozen with file hashes, then run once on 10 of the 33 held-out companies. Base and LoRA got identical prompts, and every case is reported.',
        ],
      },
      {
        title: 'Results',
        content: [
          'Approved, evidence-backed emails went from 0 at Milestone 2 to 11 on the held-out set. On 10 held-out companies each, LoRA v5 passed all checks and was approved in human review for 8, versus 3 for the base model; 10/10 LoRA drafts hit the 100-150 word target. 20/20 drafts had the correct sender and recipient and stayed Instagram-only, with 0 execution failures in 157 generations.',
          'Example (Away, same facts and prompt): the base model was withheld for crediting third-party articles to Away, merging two collaborations and running to 154 words. LoRA v5 passed and was approved on its first try, using facts from Away\'s own press page, in studio voice, at 126 words.',
          'Future work: a wider dataset, with more verified companies across more categories for training and a larger held-out evaluation.',
        ],
      },
    ],
  },
  'faiss-cpu-benchmark': {
    sections: [
      {
        title: 'The Question',
        content: [
          'On a hybrid Intel i9-14900HX (8 P-cores with SMT, 16 E-cores), which OpenMP thread count gives the best FAISS search latency for single queries and the best throughput for batches of 32? And how much does core type matter?',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'A synthetic IndexFlatL2 of 50,000 x 384-D float32 vectors with 512 seeded held-out queries and k=5. Every (threads, batch, rep) runs in a fresh subprocess with all BLAS and OpenMP thread variables set before import, so no run inherits another run\'s thread pool.',
          'Only index.search() is timed with perf_counter. A separate untimed pass collects top-5 IDs to confirm every configuration returns identical results. The analyser validates manifests, dataset SHA-256 hashes, timing totals and agreement before writing any report.',
          'P-core vs E-core placement used Windows process affinity masks with 10 interleaved repetitions and per-record read-back of the observed affinity (0 mismatches). Intel VTune Hotspots was collected at 1/4/8/16 threads with ITT markers gating the measured region.',
        ],
      },
      {
        title: 'Results',
        content: [
          'Batch-32 throughput: 1,600 qps at 1 thread, peaking at 3,492 qps at 8 threads (2.18x), then dropping to 2,870 qps at 16. Batch-1 p95 latency showed no clear winner across 1, 2 and 4 threads.',
          'Placement: 4 physical P-cores reached 3,283 qps vs 956 qps on 4 E-cores, a 3.43x gap.',
          'VTune showed that at 16 threads, OpenMP barrier and kernel-wait functions account for about 81% of CPU time while the productive OpenBLAS sgemm kernel is about 6%. Per-thread work was balanced, which does not support the "spills onto E-cores" explanation, so that claim was removed.',
        ],
      },
      {
        title: 'Lessons Learned',
        content: [
          'Write down what was not measured. The README separates verified findings from open hypotheses (SMT contention, scheduler placement, KMP_BLOCKTIME tuning) and makes no energy or performance-per-watt claims.',
          'Validation before publishing is what makes a benchmark trustworthy. 47 regression tests reject forged sums, manifest mismatches, incomplete runs and missing references.',
        ],
      },
    ],
  },
  'skillshift': {
    sections: [
      {
        title: 'The Problem',
        content: [
          'An agent that updates its skill from past attempts can treat repeated failures as stronger evidence than they are. If twenty failed attempts all come from one broken workbook, the optimizer reads that as twenty reasons to change the skill, and the new rule can then hurt many other tasks.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'SkillShift adds a feedback selection step before SkillOpt\'s reflection and compares five selectors on 120 SpreadsheetBench Verified tasks (60 dev / 30 validation / 30 test): unfiltered, exact dedup, semantic dedup, source balancing, and source-behavior weighting, which groups records by source family and failure behavior. Executor, optimizer, starting skill, prompts and token budget stay fixed across methods.',
          'My part: resumable attempt collection that never repeats a completed model call, selector-ready record preparation, the pilot runner with pool validation before any model call, and an API cost ledger that enforces the team\'s 350-call allowance. Runs fail loudly if optimizer calls are dropped, and every request times out after 180 seconds so a stalled endpoint cannot hang a run.',
        ],
      },
      {
        title: 'Status',
        content: [
          'In progress. The pilot completed 6 of 6 validation-only runs across two pools (no injected repeats, and 50% repeats) and three selectors; every run produced an edit that the validation gate accepted, and no test tasks were evaluated. Next: the second development pass, semantic selectors and the full comparison grid on the sealed test split.',
          'Team: Vemula Thushar Reddy, Charith Kutikuppala, Venkata Pradeep Reddy Venuthurla, Varshini Akula, Thanishka Bolisetty.',
        ],
      },
    ],
  },
};
