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
          'Large language models have a fundamental memory limitation - they lose context across long conversations. As conversations grow, critical information from earlier exchanges gets pushed out of the context window or loses relevance in the attention mechanism. This makes LLMs unreliable for extended interactions where continuity matters.',
          'Existing approaches to conversational memory relied on simple retrieval - storing conversation chunks and retrieving them by semantic similarity. This missed temporal relationships, conversation structure, and the nuanced ways humans reference past context.',
        ],
      },
      {
        title: 'The Approach',
        content: [
          'I designed a multi-retriever orchestration system that combines three complementary retrieval strategies: semantic search (finding conceptually similar past exchanges), temporal indexing (understanding recency and time-based relevance), and conversation graph traversal (following reference chains between dialogue turns).',
          'The orchestrator weighted results from each retriever based on the query type - factual lookups favored semantic search, while continuity questions prioritized temporal and graph-based retrieval. Built with Python, PyTorch, LangChain for the retrieval framework, and FAISS for efficient vector search.',
        ],
      },
      {
        title: 'Results',
        content: [
          'The system improved Recall@5 from 0.65 to 0.83 on the LongMemEval benchmark - a meaningful improvement that demonstrated the value of multi-strategy retrieval over single-retriever approaches. The temporal and graph components each contributed measurable gains, validating the orchestration architecture.',
        ],
      },
      {
        title: 'Lessons Learned',
        content: [
          'Memory in conversational AI isn\'t just about storing information - it\'s about understanding which information matters when. The graph-based retriever was particularly effective at capturing conversational structure that pure semantic search missed.',
          'Benchmark improvements don\'t always translate linearly to perceived quality in real conversations, but the Recall@5 gains correlated strongly with user ratings of conversational coherence in qualitative testing.',
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
          'The platform provides a unified workspace for construction project management with AI-powered document intelligence, reducing the time spent searching for information and proactively identifying risks through RFI analysis and analytics dashboards.',
        ],
      },
    ],
  },
};
