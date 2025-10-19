"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const quickActions = [
  "Chi è Euxhenjo?",
  "Quali progetti ha fatto?",
  "Quali servizi offre?",
  "Come posso contattarlo?",
];

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

export default function AIAssistantInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Auto-scroll during streaming (when loading)
  useEffect(() => {
    if (!isLoading) return;

    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 100); // Scroll every 100ms during streaming

    return () => clearInterval(scrollInterval);
  }, [isLoading]);

  // Auto-focus input on mount (desktop only)
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      inputRef.current?.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent, customMessage?: string) => {
    e.preventDefault();
    const messageText = customMessage || input.trim();
    if (!messageText || isLoading) return;

    // Show messages area on first interaction
    if (!showMessages) {
      setShowMessages(true);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";

      const assistantId = (Date.now() + 1).toString();

      // Simula "typing" prima di iniziare lo stream
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      while (true) {
        const { done, value } = (await reader?.read()) || {};
        if (done) break;

        const chunk = decoder.decode(value);
        assistantMessage += chunk;

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: assistantMessage } : m
          )
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Scusa, si è verificato un errore. Riprova tra poco.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto"
    >
      {/* Title - Minimalist */}
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-normal mb-3 text-foreground tracking-tight">
          Chiedimi qualsiasi cosa su Euxhenjo
        </h2>
      </motion.div>

      {/* Messages Area - Fixed Height, Always Visible */}
      <AnimatePresence mode="wait">
        {showMessages && messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <ScrollArea className="h-[300px] md:h-[400px]" ref={scrollRef}>
              <div className="space-y-4 px-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl px-5 py-3 text-sm max-w-[80%]",
                        message.role === "user"
                          ? "bg-muted/80 text-foreground"
                          : "bg-muted/40 text-foreground/90"
                      )}
                    >
                      {message.role === "assistant" ? (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => (
                              <p className="mb-2 last:mb-0 leading-relaxed">
                                {children}
                              </p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-semibold text-foreground">
                                {children}
                              </strong>
                            ),
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:underline font-medium underline-offset-2 underline"
                              >
                                {children}
                              </a>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc ml-4 mb-2 space-y-1">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal ml-4 mb-2 space-y-1">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="leading-relaxed">{children}</li>
                            ),
                            code: ({ children }) => (
                              <code className="bg-muted-foreground/20 px-1 py-0.5 rounded text-xs">
                                {children}
                              </code>
                            ),
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="rounded-2xl px-5 py-3 bg-muted/40">
                      <div className="flex items-center gap-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Field - Always Visible, Fixed Position */}
      <motion.div variants={itemVariants} className="mb-6">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chiedimi cosa vuoi sapere..."
              disabled={isLoading}
              className="w-full h-14 md:h-16 px-6 pr-14 text-base md:text-lg bg-muted/30 backdrop-blur-sm rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-muted-foreground/20 transition-all placeholder:text-muted-foreground/50 text-foreground disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Invia messaggio"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-foreground hover:bg-foreground/90 text-background flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowUp className="h-5 w-5" />
              )}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Quick Action Buttons - Always Visible, Fixed Position */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 gap-3 md:gap-4 mb-12"
      >
        {quickActions.map((question, index) => (
          <button
            key={index}
            onClick={(e) => {
              setInput(question);
              handleSubmit(e, question);
            }}
            disabled={isLoading}
            aria-label={`Domanda rapida: ${question}`}
            className="text-center text-sm md:text-base p-4 md:p-5 rounded-2xl bg-muted/20 hover:bg-muted/30 focus:outline-none focus:ring-2 focus:ring-muted-foreground/20 transition-all duration-300 tap-target-responsive disabled:opacity-50 disabled:cursor-not-allowed font-normal text-foreground/90 hover:text-foreground"
          >
            {question}
          </button>
        ))}
      </motion.div>

      {/* Scroll Hint */}
      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-muted-foreground/60"
      >
        oppure esplora le sezioni{" "}
        <span className="inline-block">↓</span>
      </motion.p>
    </motion.div>
  );
}
