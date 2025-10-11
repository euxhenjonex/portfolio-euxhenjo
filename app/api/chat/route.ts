import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { personalInfo, projects, services } from '@/lib/data';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// --- RATE LIMITING ---
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  // Reset se il tempo è scaduto
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 }); // 10 minuti
    return { allowed: true, remaining: 9 };
  }

  // Incrementa contatore
  if (limit.count >= 10) {
    return { allowed: false, remaining: 0 };
  }

  limit.count++;
  return { allowed: true, remaining: 10 - limit.count };
}

// --- KNOWLEDGE BASE ---
const portfolioKnowledge = `
# About ${personalInfo.name}
${personalInfo.bio}

${personalInfo.name} è un consulente digitale specializzato in **AI, automazioni e siti web**, con un approccio pratico, chiaro e orientato ai risultati.  
Aiuta aziende e creator a integrare l'intelligenza artificiale nei loro flussi di lavoro, migliorando produttività e performance online.

---

## 🧠 Expertise Principali
- **AI Integration & Automation:** collegare GPT, API e strumenti no-code per automatizzare processi aziendali.  
- **Custom GPT & AI Agent Development:** progettazione di agenti personalizzati basati su OpenAI e RAG con database vettoriali.  
- **Chatbot Development:** chatbot intelligenti per siti, Telegram e WhatsApp con funzioni di booking e supporto clienti.  
- **Workflow Automation (n8n, Make):** creazione di automazioni complesse per lead, notifiche e report.  
- **Performance & SEO Optimization (WordPress / Next.js):** miglioramento di Core Web Vitals, caricamento immagini, caching e SEO tecnico.  
- **No-Code Development:** uso di strumenti moderni come Claude Code, Lovable e Replit per prototipare rapidamente MVP e siti performanti.  

---

## 💼 Servizi Offerti
${services.map(s => `
### ${s.title}
${s.description}
**Esempi:** ${s.examples.join(', ')}  
**Tecnologie:** ${s.tags.join(', ')}
`).join('\n')}

Se il visitatore mostra interesse, suggerisci gentilmente di prenotare una call qui:  
👉 [https://cal.com/euxhenjonex/30min](https://cal.com/euxhenjonex/30min)

---

## 🚀 Progetti in Evidenza
${projects.map(p => `
### ${p.title}
${p.description}
**Stato:** ${p.status}  
**Stack:** ${p.tags.join(', ')}  
${p.link !== '#' ? `🔗 Demo: ${p.link}` : ''}
`).join('\n')}

---

## 🤝 Come Puoi Aiutare il Visitante
- Spiega i servizi in modo semplice e diretto  
- Racconta i progetti e cosa risolvono  
- Guida l'utente alla **call di consulenza** se vuole capire come applicare queste soluzioni al suo caso  
- Se il visitatore è un'agenzia o un freelance, mostra come collabori in white-label o come partner tecnico  

---

## ❓ FAQ Rapide
- **Qual è il prezzo dei tuoi servizi?** → I progetti partono da ~250 € per ottimizzazioni, 500 € per automazioni e da ~1.000 € per siti completi. Ogni proposta è personalizzata.  
- **Posso collaborare con te come agenzia?** → Certo, offro collaborazione white-label per agenzie o freelance.  
- **In che tempi realizzi un progetto?** → Da 1 a 3 settimane in base alla complessità.  
- **Posso vedere dei lavori recenti?** → Certo! Trovi i progetti nella sezione Portfolio o chiedi e ti mostrerò un esempio.  

---

## 📞 Contatti
- **Email:** ${personalInfo.email}  
- **Booking Call:** [https://cal.com/euxhenjonex/30min](https://cal.com/euxhenjonex/30min)  
- **Sito:** https://www.euxhenjonex.com  

---

## 🗣️ Tone & Style Guidelines
- Linguaggio naturale, chiaro e professionale  
- Risposte brevi (max 150 parole)  
- Italiano o inglese in base all'utente  
- Non usare termini troppo tecnici se non richiesti  
- Chiudi spesso con una micro-CTA ("Vuoi che ti spieghi come applicarlo al tuo sito?" oppure "Posso mostrarti un esempio, se vuoi.")
`;

// --- ROUTE HANDLER ---
export async function POST(req: Request) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({ 
        error: 'Troppe richieste. Riprova tra qualche minuto.',
        retryAfter: 600 
      }),
      { 
        status: 429,
        headers: { 
          'Content-Type': 'application/json',
          'Retry-After': '600'
        }
      }
    );
  }

  const { messages } = await req.json();

  // Rilevamento parole chiave legate a prezzo/collaborazione
  const lastMessage = messages?.[messages.length - 1]?.content?.toLowerCase() || '';
  const keywords = ['prezzo', 'costo', 'budget', 'preventivo', 'collaborazione', 'tariffa', 'quanto'];

  const isPricingQuery = keywords.some(k => lastMessage.includes(k));

  // Risposta automatica per domande su prezzi o collaborazioni
  if (isPricingQuery) {
    const reply = `Posso darti un'indicazione generale: i progetti partono da circa **250 € per ottimizzazioni**, da **500 € per automazioni** e da **1.000 € per siti completi**, ma ogni proposta è personalizzata in base alle esigenze.

👉 Ti consiglio di prenotare una **call gratuita** per parlarne meglio: [https://cal.com/euxhenjonex/30min](https://cal.com/euxhenjonex/30min)`;
    
    return new Response(reply, {
      headers: { 
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Rate-Limit-Remaining': rateLimit.remaining.toString()
      }
    });
  }

  // Flusso principale
  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: `You are **Leo**, the friendly and professional AI assistant for ${personalInfo.name}'s portfolio.
    
Your role:
- Help visitors discover services, projects, and expertise
- Be kind, engaging, and concise
- Speak Italian if the user writes in Italian, English otherwise
- Keep responses under 150 words
- Suggest booking a call for detailed or custom requests

You are inspired by ${personalInfo.name}'s approach: practical, clear, and results-oriented.
Always reply in first person as "Leo" (e.g., "Ciao! Sono Leo, l'assistente AI di Euxhenjo.").

Context:
${portfolioKnowledge}
`,
    messages: messages || [],
    temperature: 0.7,
  });

  const response = result.toTextStreamResponse();
  response.headers.set('X-Rate-Limit-Remaining', rateLimit.remaining.toString());
  
  return response;
}
