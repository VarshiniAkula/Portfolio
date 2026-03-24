import type { ResearchItem, Publication, Certification, Hackathon } from '@/types/content';

export const research: ResearchItem[] = [
  {
    id: 'conversational-memory',
    title: 'Hybrid Multi-Retriever Orchestration for Long-Term Conversational Memory',
    abstract:
      'Built a RAG orchestration system routing queries across 5 retrievers (BM25, TF-IDF, FAISS, SVM, Time-Weighted) using intent classification and rule-based decision logic. Improved Recall@5 by +18 pts (0.65 to 0.83) on LongMemEval with Qwen2.5-7B and +4 pts on Locomo with LLaMA-3.1-8B.',
    status: 'completed',
    date: 'Sep 2025 – Dec 2025',
    tags: ['RAG', 'Memory', 'Retrieval', 'Qwen2.5-7B'],
  },
  {
    id: 'agentic-workflows',
    title: 'Agentic Workflow Orchestration for Multi-Step Task Automation',
    abstract:
      'Designing and building agentic AI systems that decompose complex tasks into executable sub-goals, leveraging tool-use, planning, and memory modules. Exploring architectures for autonomous agents that can reason, plan, and act across multi-step workflows with minimal human intervention.',
    status: 'in-progress',
    date: 'Jan 2026 – Present',
    tags: ['Agents', 'LLM', 'Orchestration', 'Tool-Use'],
  },
  {
    id: 'star-reasoning-research',
    title: 'STaR: Self-Taught Reasoner for Mathematical Reasoning',
    abstract:
      'Fine-tuned Llama-3.2-3B-Instruct using STaR rationale-bootstrapping on NVIDIA A100 GPUs, achieving 46.2% on GSM8K (+65% relative gain over zero-shot CoT). Generated 3.5K synthetic hint-conditioned training samples via self-improvement loops, outperforming vanilla SFT (39.2%) by 7 absolute points.',
    status: 'completed',
    date: 'Aug 2025 – Oct 2025',
    tags: ['Reasoning', 'Fine-tuning', 'Llama-3.2', 'GSM8K'],
  },
];

export const publications: Publication[] = [
  {
    id: 'pub-deepfake',
    title: 'Evaluating the Performance of Fake Face Detection Methods in Forensics',
    venue: 'IJITCE',
    date: 'Jun 2024',
    authors: ['Varshini Akula'],
    abstract:
      'Developed an ML model using Local Binary Patterns and classification techniques, compared multiple algorithms for fake face detection in forensic applications.',
    url: 'https://ijitce.org/index.php/ijitce/article/view/566',
    certificateImage: '/certs/deepfake-publication.jpg',
  },
  {
    id: 'pub-security',
    title: 'Optimizing Prediction of Security Data Using Feature Selection and Ensembling',
    venue: 'IJITCE',
    date: 'May 2023',
    authors: ['Varshini Akula'],
    abstract:
      'Built a machine learning-based network security model to detect intrusions with improved accuracy using ensemble machine learning algorithms on large datasets.',
    url: 'https://ijitce.org/index.php/ijitce/article/view/498',
  },
];

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Foundational understanding of AWS Cloud services, architecture, pricing, and support. Validated cloud literacy and deployment best practices.',
    credentialId: 'AWS-CCP-2024',
    date: 'Dec 2024',
    verifyUrl: 'https://www.credly.com/badges/c19b8926-f60e-4208-9a3d-7a0c7a77b034/',
  },
  {
    id: 'nptel-dbms',
    title: 'Database Management System (DBMS)',
    description: 'National Programme on Technology Enhanced Learning (NPTEL) certification from Indian Institute of Technology, Kharagpur. Comprehensive coverage of DBMS concepts, SQL, normalization, and transaction management.',
    credentialId: 'NPTEL22CS51S43582362',
    date: 'Mar 2022',
    verifyUrl: '/certs/nptel-dbms.pdf',
  },
  {
    id: 'coding-ninjas-cpp',
    title: 'Introduction to C++ Completion Certificate',
    description: 'Coding Ninjas certification covering C++ fundamentals, object-oriented programming, data structures, and algorithmic problem-solving.',
    credentialId: '1462393dd86c5323cfd272856817319bb0c2c89',
    date: 'May 2021',
    verifyUrl: 'https://files.codingninjas.in/certificate1462393dd86c5323cfd272856817319bb0c2c89.pdf',
  },
];

export const hackathons: Hackathon[] = [
  {
    id: 'code-for-good',
    title: 'JPMorgan Code for Good',
    location: 'National / Remote',
    result: '1ST PLACE',
    resultType: 'winner',
    tags: ['RASA', 'Python', 'NLP'],
    year: 2020,
  },
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Hackathon',
    location: 'Chandigarh, India',
    result: 'FINALIST',
    resultType: 'finalist',
    tags: ['Space Tech', 'Data Viz', 'Python'],
    year: 2019,
  },
  {
    id: 'mun-victory',
    title: 'Model United Nations',
    location: 'Hyderabad, India',
    result: '1ST PLACE',
    resultType: 'winner',
    tags: ['Debate', 'Policy', 'Research'],
    year: 2019,
  },
];
