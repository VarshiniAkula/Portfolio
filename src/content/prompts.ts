import type { PromptChip, CuratedResponse } from '@/types/content';

export const promptChips: PromptChip[] = [
  {
    label: 'Strongest production work',
    query: 'Show me her strongest production work',
  },
  {
    label: 'What makes her different?',
    query: 'What makes her different from a typical CS grad?',
  },
  {
    label: 'Best projects for AI roles',
    query: 'Which projects matter most for AI roles?',
  },
  {
    label: 'Leadership experience',
    query: 'How has she shown leadership?',
  },
  {
    label: 'Work at JPMC',
    query: 'What did she work on at JPMorgan Chase?',
  },
  {
    label: 'Research at ASU',
    query: 'What research is she exploring at ASU?',
  },
];

export const curatedResponses: CuratedResponse[] = [
  {
    triggers: ['strongest production', 'best production', 'biggest impact', 'most impactful', 'enterprise work'],
    response:
      'Her strongest production work is the RASA NLU Virtual Assistant at JPMorgan Chase. She took an early proof-of-concept and turned it into a production system that eliminated 320+ hours of manual data entry per quarter, reduced provisioning time by 40%, and achieved 99.9% uptime SLA compliance. She also built an LLM-powered incident chatbot that reduced mean query resolution time by 60%. These weren\'t side projects - they were enterprise systems handling real workloads.',
    section: 'projects',
  },
  {
    triggers: ['different', 'stand out', 'unique', 'special', 'typical cs grad'],
    response:
      'Three things set Varshini apart: First, she bridges the gap between research and production - she doesn\'t just build models, she ships them as enterprise systems (320+ hours saved, 99.9% uptime). Second, she has genuine leadership depth - president of a literature club, chair of a leadership conclave, ACM director - these aren\'t resume padding, they\'re evidence of someone who builds communities. Third, her range is unusual: she goes from RASA chatbots to deepfake detection to LLM reasoning research with equal fluency.',
    section: 'journey',
  },
  {
    triggers: ['ai role', 'ai position', 'ai job', 'ml role', 'machine learning', 'which project'],
    response:
      'For AI/ML roles, her three most relevant projects are: (1) Memory-Augmented Conversational AI - multi-retriever orchestration that improved Recall@5 from 0.65 to 0.83 on LongMemEval, showing deep RAG architecture skills. (2) Deepfake Detection System - 94.5% accuracy using computer vision and deep learning, demonstrating research rigor. (3) STaR Reasoning Model - fine-tuning LLMs with self-generated rationales for improved mathematical reasoning, showing she understands model training at a fundamental level.',
    section: 'projects',
  },
  {
    triggers: ['leadership', 'lead', 'manage', 'team'],
    response:
      'Varshini\'s leadership is multi-dimensional: She was President of Literaria Clava (literature club), growing it from a small group to an active community. She chaired the Women Leadership Conclave, bringing together 200+ attendees. At ASU, she serves as Director of Engagement for ACM. She also mentors as a Graduate Teaching Assistant. The pattern: she doesn\'t just participate - she builds and scales communities.',
    section: 'leadership',
  },
  {
    triggers: ['jpmc', 'jpmorgan', 'jp morgan', 'chase', 'work experience'],
    response:
      'At JPMorgan Chase, Varshini earned the nickname "the chatbot girl" - she took early proof-of-concepts that others had shelved and turned them into production systems. She built a RASA NLU virtual assistant that eliminated 320+ hours of manual data entry per quarter and reduced provisioning time by 40%. She also built Java + SQL microservices on AWS to automate metadata extraction and storage record creation, plus real-time streaming software with Java + Kafka. Her LLM-powered incident chatbot reduced mean query resolution time by 60%.',
    section: 'projects',
  },
  {
    triggers: ['research', 'asu', 'arizona', 'studying', 'grad school', 'master'],
    response:
      'At ASU (4.0 GPA), Varshini is exploring the frontier of AI reliability. Her current research areas include LLM vulnerability analysis (prompt injection, jailbreaking, adversarial attacks), agentic workflow systems, and memory architectures for conversational AI. She\'s also published work on fake face detection and security prediction. Her research is driven by a practical question: how do we make AI systems more reliable, honest, and useful?',
    section: 'research',
  },
  {
    triggers: ['tech stack', 'technologies', 'tools', 'languages', 'skills'],
    response:
      'Varshini works across the full stack: Python, Java, TypeScript for core languages. PyTorch, Hugging Face, LangChain for AI/ML. RASA and OpenAI APIs for conversational AI. AWS, Kafka, PostgreSQL for infrastructure. React for frontend. She\'s comfortable going from model training (LoRA, PEFT fine-tuning) to production deployment (microservices, SLA compliance, observability).',
    section: 'projects',
  },
  {
    triggers: ['contact', 'hire', 'reach', 'connect', 'email', 'available'],
    response:
      'Varshini is open to opportunities in AI engineering, ML research, and product roles. You can reach her via email or connect on LinkedIn and GitHub. Visit the Contact section for details.',
    section: 'contact',
  },
  {
    triggers: ['education', 'school', 'university', 'degree', 'gpa'],
    response:
      'Varshini holds a B.Tech in Computer Science from GNITS, Hyderabad, and is currently pursuing her M.S. in Computer Science at Arizona State University with a perfect 4.0 GPA. She chose ASU specifically to deepen her expertise in NLP and AI research after her production experience at JPMorgan Chase.',
    section: 'journey',
  },
  {
    triggers: ['hackathon', 'competition', 'nasa', 'code for good', 'award'],
    response:
      'Varshini has a strong competitive track record: She won first place at Model United Nations, won NASA Space Apps Hackathon (going to Chandigarh for nationals), and won JPMorgan Chase\'s national Code for Good hackathon in her second year - which led directly to her JPMC internship and career. These wins show she performs under pressure and delivers when stakes are high.',
    section: 'journey',
  },
  {
    triggers: ['hobby', 'hobbies', 'interest', 'fun', 'personal', 'travel', 'book', 'coffee', 'read'],
    response:
      'Beyond engineering, Varshini is an avid reader who loves novels and believes literature shapes how she thinks about systems and people. She loves travel - from Chandigarh for NASA nationals to Tempe for her master\'s - and sees every new city as a lesson in perspective. And yes, there\'s always coffee involved. These aren\'t disconnected hobbies; they feed her curiosity, creativity, and energy.',
    section: 'library',
  },
  {
    triggers: ['deepfake', 'fake face', 'detection', 'computer vision'],
    response:
      'Varshini built a deepfake detection system achieving 94.5% accuracy. The system analyzes facial artifacts, temporal inconsistencies, and frequency-domain signatures to identify synthetic media. She has published research in fake face detection methodologies, comparing different approaches to the growing challenge of synthetic media.',
    section: 'projects',
  },
  {
    triggers: ['memory', 'rag', 'retrieval', 'recall', 'longmemeval', 'conversational memory'],
    response:
      'Her Memory-Augmented Conversational AI project tackled the challenge of LLMs losing context in long conversations. She designed a multi-retriever orchestration system combining semantic search, temporal indexing, and conversation graph traversal. The system improved Recall@5 from 0.65 to 0.83 on the LongMemEval benchmark - a meaningful improvement in conversational continuity.',
    section: 'projects',
  },
  {
    triggers: ['reasoning', 'star', 'gsm8k', 'math', 'fine-tune', 'fine-tuning'],
    response:
      'The STaR (Self-Taught Reasoner) project explored whether models can improve their own reasoning through practice. Varshini fine-tuned a language model using iteratively self-generated rationales, where the model learns from its own correct reasoning chains. The approach showed significant improvement on the GSM8K mathematical reasoning benchmark, demonstrating that structured self-improvement is a viable training strategy.',
    section: 'projects',
  },
  {
    triggers: ['chatbot', 'conversational ai', 'nlp', 'natural language'],
    response:
      'Conversational AI is Varshini\'s signature strength. At JPMC, she became known as "the chatbot girl" for turning proof-of-concepts into production systems. She built both a RASA NLU virtual assistant (320+ hours saved/quarter) and an LLM-powered incident chatbot (60% faster resolution). Her research continues this thread with work on conversational memory systems and agentic workflows.',
    section: 'projects',
  },
];
