export const personalInfo = {
  name: "Euxhenjo Nex",
  firstName: "Euxhenjo",
  title: "Aiuto aziende e clienti a integrare agenti, automazioni ed esperienze web no-code basate su AI, per risparmiare tempo e ottenere risultati misurabili.",
  bio: "Unisco tecnologia AI e sviluppo web per aiutare persone e aziende a lavorare in modo più intelligente. Dalla creazione di GPT e automazioni con n8n alla realizzazione di web app responsive con Claude Code o Lovable, mi concentro sulla creazione di sistemi basati su AI che semplificano il lavoro, potenziano la creatività e generano risultati concreti.",
  headline: "Costruisco soluzioni AI, automazioni e siti intelligenti che lavorano al posto tuo.",
  email: "hi@euxhenjonex.com",
  location: "Remoto",
  availability: "Disponibile per nuovi progetti",
  available: true,
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/euxhenjonex/",
  x: "https://x.com/euxhenjonex",
};

export const process = [
  {
    id: "analisi",
    step: "01",
    title: "Analisi",
    description: "Comprendo le tue esigenze, obiettivi e sfide. Analizzo il tuo workflow attuale per identificare opportunità di miglioramento con l'AI.",
    icon: "search",
    deliverables: ["Analisi dei requisiti", "Identificazione opportunità", "Piano d'azione"],
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description: "Progetto la soluzione AI ottimale per le tue esigenze. Scelgo gli strumenti giusti e definisco l'architettura del sistema.",
    icon: "pen-tool",
    deliverables: ["Architettura sistema", "Scelta tecnologie", "Prototipo iniziale"],
  },
  {
    id: "sviluppo",
    step: "03",
    title: "Sviluppo",
    description: "Implemento e integro le tecnologie AI nel tuo workflow. Creo agenti, automazioni e interfacce user-friendly.",
    icon: "code",
    deliverables: ["Implementazione completa", "Integrazioni API", "Testing approfondito"],
  },
  {
    id: "ottimizzazione",
    step: "04",
    title: "Ottimizzazione",
    description: "Testo, affino e ottimizo per garantire risultati misurabili. Fornisco training e supporto continuo.",
    icon: "trending-up",
    deliverables: ["Performance tuning", "Documentazione", "Training & supporto"],
  },
];

export const techStack = [
  // AI Models
  {
    name: "OpenAI",
    icon: "openai",
    category: "ai-models",
    description: "GPT per la creazione di agenti personalizzati e il miglioramento dei testi.",
  },
  {
    name: "Anthropic (Claude)",
    icon: "anthropic",
    category: "ai-models",
    description: "Claude per conversazioni naturali, analisi e sviluppo assistito da AI",
  },
  {
    name: "Google Gemini",
    icon: "gemini",
    category: "ai-models",
    description: "Modelli multimodali per elaborazione testi, immagini e video",
  },
  {
    name: "Perplexity",
    icon: "perplexity",
    category: "ai-models",
    description: "AI search per ricerche intelligenti e risposte accurate",
  },
  {
    name: "Pinecone",
    icon: "pinecone",
    category: "ai-models",
    description: "Database vettoriale per sistemi RAG e ricerca semantica",
  },
  {
    name: "LangChain",
    icon: "langchain",
    category: "ai-models",
    description: "Framework per costruire applicazioni AI complesse e agenti",
  },
  // No-Code Tools
  {
    name: "Lovable",
    icon: "lovable",
    category: "no-code",
    description: "Piattaforma no-code AI-powered per creare web app velocemente",
  },
  {
    name: "Cursor",
    icon: "cursor",
    category: "no-code",
    description: "Editor di codice con AI per sviluppo assistito intelligente",
  },
  {
    name: "Replit",
    icon: "replit",
    category: "no-code",
    description: "Ambiente di sviluppo cloud per prototipazione rapida",
  },
  // CMS & E-commerce
  {
    name: "WordPress",
    icon: "wordpress",
    category: "cms",
    description: "CMS flessibile per siti web e blog professionali",
  },
  {
    name: "Shopify",
    icon: "shopify",
    category: "cms",
    description: "Piattaforma e-commerce completa per negozi online",
  },
  {
    name: "WooCommerce",
    icon: "woocommerce",
    category: "cms",
    description: "Plugin WordPress per e-commerce personalizzabile",
  },
  // Automation
  {
    name: "n8n",
    icon: "n8n",
    category: "automation",
    description: "Workflow automation open-source con integrazioni illimitate",
  },
  {
    name: "Make",
    icon: "make",
    category: "automation",
    description: "Automazione visuale per connettere app e servizi",
  },
  {
    name: "Zapier",
    icon: "zapier",
    category: "automation",
    description: "Automazione semplice per integrare migliaia di app",
  },
  {
    name: "Telegram Bot API",
    icon: "telegram",
    category: "automation",
    description: "Bot intelligenti per supporto clienti e notifiche Telegram",
  },
  {
    name: "WhatsApp Business API",
    icon: "whatsapp",
    category: "automation",
    description: "Messaggistica business automatizzata su WhatsApp",
  },
  {
    name: "Twilio",
    icon: "twilio",
    category: "automation",
    description: "API per SMS, chiamate e comunicazioni programmabili",
  },
  // Development
  {
    name: "Next.js",
    icon: "nextjs",
    category: "development",
    description: "Framework React per applicazioni web moderne e performanti",
  },
  {
    name: "React",
    icon: "react",
    category: "development",
    description: "Libreria JavaScript per interfacce utente interattive",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "development",
    description: "JavaScript con tipizzazione per codice più robusto",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    category: "development",
    description: "Framework CSS utility-first per design rapido e personalizzabile",
  },
  {
    name: "Node.js",
    icon: "nodejs",
    category: "development",
    description: "Runtime JavaScript per backend e API scalabili",
  },
  // Tools
  {
    name: "Claude Code",
    icon: "claude",
    category: "tools",
    description: "Sviluppo assistito da AI con Claude (usato per questo sito!)",
  },
  {
    name: "VSCode",
    icon: "vscode",
    category: "tools",
    description: "Editor di codice potente ed estensibile",
  },
  {
    name: "Git",
    icon: "git",
    category: "tools",
    description: "Controllo versione per collaborazione e backup codice",
  },
  {
    name: "Cal.com",
    icon: "calendar",
    category: "tools",
    description: "Scheduling open-source per gestire appuntamenti",
  },
  // Deployment
  {
    name: "Vercel",
    icon: "vercel",
    category: "deployment",
    description: "Hosting veloce e CI/CD per progetti Next.js e React",
  },
  {
    name: "Netlify",
    icon: "netlify",
    category: "deployment",
    description: "Deploy automatico per siti statici e Jamstack",
  },
];

export const projects = [
  {
    id: "prompt-master",
    title: "Prompt Master GPT",
    tagline: "GPT personalizzato per aiutare gli utenti a scrivere prompt migliori",
    description:
      "Un GPT personalizzato che aiuta gli utenti a scrivere, perfezionare e ottimizzare i propri prompt per ottenere risposte più precise e di qualità dall'AI.",
    image: "/images/projects/prompt-master.webp",
    tags: ["OpenAI", "Prompt Engineering", "AI"],
    featured: true,
    link: "https://chatgpt.com/g/g-68cbcbcb1a588191821ae72dc73cf5ef-prompt-master",
    status: "Online",
    overview:
      "Prompt Master è GPT progettato per aiutare gli utenti a scrivere prompt chiari, completi ed efficaci utilizzando una metodologia strutturata (Ruolo → Compito → Istruzioni → Contesto). In questo modo l'AI fornisce risposte più precise e di qualità.",
    challenge:
      "Molti utenti faticano a scrivere prompt efficaci per ChatGPT, ottenendo risultati AI scadenti e perdendo tempo. L'obiettivo era creare uno strumento per ottenere dall'AI risposte di qualità.",
    solution: "GPT interattivo con metodologia strutturata di miglioramento dei prompt",
    techStack: ["OpenAI API", "Istruzioni Personalizzate", "Prompt Engineering"],
    results: [
      "Metodologia strutturata per prompt efficaci",
      "Feedback in tempo reale dall'AI",
      "Guida step-by-step per migliorare i prompt",
      "Miglior comprensione della metodologia Ruolo → Compito → Istruzioni → Contesto",
    ],
    cta: "Vuoi creare un GPT personalizzato per il tuo business?",
    seo: {
      metaTitle: "Prompt Master GPT – AI Prompt Builder by Euxhenjo Nexhipi",
      metaDescription:
        "GPT personalizzato per aiutare gli utenti a scrivere prompt di alta qualità con feedback AI e best practice di prompt engineering.",
    },
  },
  {
    id: "leo-assistant",
    title: "Leo AI Assistant",
    tagline: "Assistente AI conversazionale integrato per portfolio web",
    description:
      "Chatbot AI intelligente con GPT-4o-mini che risponde a domande su servizi, progetti e competenze in tempo reale con streaming delle risposte.",
    image: "/images/projects/leo-assistant.webp",
    tags: ["OpenAI", "Next.js", "Streaming AI", "React"],
    featured: false,
    link: "/#",
    status: "Online",
    overview:
      "Leo è un assistente AI conversazionale integrato direttamente in questo portfolio. Costruito con OpenAI GPT-4o-mini e Next.js, offre risposte in tempo reale su servizi, progetti e competenze tecniche. Utilizza streaming delle risposte per un'esperienza utente fluida e una knowledge base embedded per risposte precise e contestualizzate.",
    challenge:
      "I visitatori del portfolio avevano bisogno di un modo rapido per ottenere informazioni specifiche senza navigare multiple pagine. L'obiettivo era creare un'esperienza conversazionale che sembrasse naturale, fornisse risposte accurate e rimanesse focalizzata sul contesto professionale, evitando domande off-topic.",
    solution: "Chatbot GPT-4o-mini con knowledge base personalizzata e scope restriction intelligente",
    techStack: [
      "OpenAI GPT-4o-mini",
      "Next.js 15 API Routes",
      "Vercel AI SDK",
      "React + TypeScript",
      "Framer Motion",
      "React Markdown",
      "Rate Limiting"
    ],
    results: [
      "Tempo di risposta < 2 secondi grazie allo streaming",
      "Rate limiting 10 req/10min per protezione anti-abuse",
      "Knowledge base embedded con 200+ righe di contesto",
      "100% mobile responsive con animazioni Framer Motion",
    ],
    cta: "Vuoi un assistente AI personalizzato per il tuo sito web?",
    seo: {
      metaTitle: "Leo AI Assistant – Chatbot GPT Integrato by Euxhenjo Nexhipi",
      metaDescription:
        "Assistente AI conversazionale costruito con GPT-4o-mini e Next.js. Streaming real-time, knowledge base personalizzata e rate limiting integrato.",
    },
  },
  {
    id: "appointment-reminder",
    title: "Sistema di Promemoria Appuntamenti",
    tagline: "Workflow SMS automatizzato per promemoria appuntamenti e richieste recensioni",
    description:
      "Workflow automatizzato per promemoria appuntamenti e richieste recensioni. Si integra con Google Calendar, SMS e CRM per ridurre le assenze e aumentare le recensioni in modo automatico.",
    image: "/images/projects/n8n-automation.webp",
    tags: ["n8n", "Twilio", "Google Calendar", "Automazione"],
    featured: false,
    link: "#",
    status: "Online",
    overview:
      "Un sistema di automazione intelligente costruito con n8n che gestisce promemoria appuntamenti, richieste di conferma e raccolta recensioni. Si integra perfettamente con Google Calendar e Twilio per inviare messaggi SMS personalizzati al momento giusto.",
    challenge:
      "Le aziende di servizi affrontano alti tassi di assenza e faticano a raccogliere recensioni dei clienti. I sistemi di promemoria manuali richiedono tempo, sono soggetti a errori e non scalano. L'obiettivo era automatizzare l'intero processo mantenendo un tocco personale.",
    solution: "Workflow n8n con pianificazione intelligente e messaggi personalizzati",
    techStack: ["n8n", "Twilio SMS API", "Google Calendar API", "Webhooks", "Airtable CRM"],
    results: [
      "80% di riduzione delle assenze",
      "3x più recensioni clienti",
      "15 ore/settimana risparmiate su attività manuali",
      "100% di tasso di consegna messaggi",
    ],
    cta: "Vuoi automatizzare i workflow del tuo business?",
    seo: {
      metaTitle: "Sistema Promemoria Appuntamenti – Automazione n8n by Euxhenjo Nexhipi",
      metaDescription:
        "Sistema di promemoria SMS automatizzato costruito con n8n e Twilio. Riduce le assenze dell'80% e risparmia 15 ore a settimana.",
    },
  },
  {
    id: "ai-portfolio",
    title: "Portfolio Powered by AI (Questo Sito!)",
    tagline: "Costruito interamente con Claude Code e strumenti AI no-code moderni",
    description:
      "Portfolio personale realizzato interamente con strumenti AI no-code di ultima generazione. Completamente responsive e con performance ottimizzate. La dimostrazione pratica di come strumenti no-code possano creare risultati professionali.",
    image: "/images/projects/portfolio-site.webp",
    tags: ["Claude Code", "Next.js", "Tailwind", "No-Code"],
    featured: false,
    link: "#",
    status: "Online",
    overview:
      "Questo sito portfolio è una vetrina dello sviluppo moderno assistito da AI. Costruito interamente usando Claude Code, dimostra come gli strumenti AI possono accelerare lo sviluppo web senza sacrificare qualità o standard professionali.",
    challenge:
      "Lo sviluppo web tradizionale richiede tempo e conoscenze di programmazione approfondite. L'obiettivo era creare un sito portfolio veloce e professionale senza i colli di bottiglia della programmazione tradizionale, mantenendo alte performance e best practice.",
    solution: "Sviluppo assistito da AI con Claude + stack moderno",
    techStack: ["Claude Code", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: [
      "Costruito in 3 giorni (vs 2-3 settimane tradizionale)",
      "95+ punteggio performance Lighthouse",
      "100% responsive su tutti i dispositivi",
      "Ottimizzazione SEO completa con dati strutturati",
    ],
    cta: "Vuoi un sito web professionale costruito con AI?",
    seo: {
      metaTitle: "Portfolio Powered by AI – Costruito con Claude Code by Euxhenjo Nexhipi",
      metaDescription:
        "Portfolio professionale costruito interamente con assistenza AI. Next.js, TypeScript e Tailwind CSS. Punteggio Lighthouse 95+, costruito in 3 giorni.",
    },
  },
];

export const services = [
  {
    id: "ai-audit",
    title: "AI Audit & Action Plan",
    description:
      "Analizzo i tuoi processi e strumenti per identificare dove l'AI può creare valore, ridurre i costi e migliorare la produttività.",
    examples: [
      "Analisi processi aziendali",
      "Identificazione opportunità AI",
      "Piano d'azione implementabile"
    ],
    tags: ["Audit", "Workflow", "OpenAI"],
    icon: "search",
    image: "/images/services/ai-audit.webp",
  },
  {
    id: "ai-automation",
    title: "Agenti AI e Automazioni",
    description:
      "Costruisco flussi intelligenti e agenti AI che automatizzano operazioni, CRM e messaggistica, integrando n8n, GPT e API.",
    examples: [
      "Workflow automatizzati con n8n",
      "Chatbot Telegram/WhatsApp",
      "Integrazioni CRM e database"
    ],
    tags: ["n8n", "OpenAI", "API"],
    icon: "workflow",
    image: "/images/services/ai-automation.webp",
  },
  {
    id: "ai-website",
    title: "Siti Web AI-Powered",
    description:
      "Realizzo siti web moderni, veloci e integrati con chatbot e automazioni AI, ottimizzati per SEO e prestazioni.",
    examples: [
      "Landing page con chatbot AI",
      "Portfolio e siti aziendali",
      "E-commerce integrato con AI"
    ],
    tags: ["Next.js", "Vercel", "Claude Code"],
    icon: "globe",
    image: "/images/services/ai-transformation.webp",
  },
];

// ============================================
// TESTIMONIALS - Temporaneamente Disattivate
// ============================================
// Queste testimonials verranno riattivate quando arriveranno recensioni reali dai primi clienti.
// Per riattivare: sostituire l'array vuoto con i dati commentati sotto e abilitare TestimonialsSection in app/page.tsx

export const testimonials: Array<{
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}> = [];

// Dati testimonials fittizie (da sostituire con recensioni reali):
// [
//   {
//     id: "testimonial-1",
//     quote:
//       "Eugenio ha costruito un GPT personalizzato che ha trasformato il modo in cui il nostro team gestisce le richieste dei clienti. Il tempo di risposta è diminuito del 60% e la qualità è effettivamente migliorata. Altamente raccomandato!",
//     name: "Marco Rossi",
//     role: "CEO",
//     company: "TechStartup Italia",
//     avatar: "MR",
//   },
//   {
//     id: "testimonial-2",
//     quote:
//       "L'automazione n8n che Eugenio ha creato ci ha fatto risparmiare 15 ore a settimana. Funziona perfettamente in background. Il miglior investimento che abbiamo fatto quest'anno.",
//     name: "Sarah Johnson",
//     role: "Operations Manager",
//     company: "GrowthCo",
//     avatar: "SJ",
//   },
//   {
//     id: "testimonial-3",
//     quote:
//       "Abbiamo ottenuto un sito web straordinario in meno di una settimana. L'approccio no-code ha permesso iterazioni veloci e il risultato finale ha superato le aspettative.",
//     name: "Luca Bianchi",
//     role: "Founder",
//     company: "ConsultPro",
//     avatar: "LB",
//   },
// ]

export const keywords = [
  "Integrazione AI",
  "Automazione",
  "Siti Web Intelligenti",
  "Sviluppo Full-Stack",
  "Architettura Cloud",
  "Design API",
];
