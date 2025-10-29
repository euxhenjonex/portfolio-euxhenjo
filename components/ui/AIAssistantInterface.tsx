"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowUp, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const quickActions = [
  "Chi sei?",
  "Quali progetti hai fatto?",
  "Quali servizi offri?",
  "Come posso contattarti?",
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
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fullTitle = "Ciao! Sono Euxhenjo";

  // Scroll to show messages container on first message
  const scrollToMessagesContainer = () => {
    messagesContainerRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  // Scroll within the ScrollArea to show latest message
  const scrollToLatestMessage = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "nearest"
    });
  };

  // On first message, scroll to container. On subsequent messages, scroll within
  useEffect(() => {
    if (messages.length === 1 && !isTyping) {
      // First message: scroll page to show messages container
      setTimeout(() => {
        scrollToMessagesContainer();
      }, 100);
    } else if (messages.length > 0 || isTyping) {
      // Subsequent messages: scroll within ScrollArea to show latest
      setTimeout(() => {
        scrollToLatestMessage();
      }, 100);
    }
  }, [messages.length, isTyping]);

  // Typing effect for title
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 80; // ms per character

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Keep cursor blinking for 2 more seconds, then hide it
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Blink speed

    return () => clearInterval(cursorInterval);
  }, []);

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
      timestamp: new Date(),
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
        { id: assistantId, role: "assistant", content: "", timestamp: new Date() },
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
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .ai-input:focus,
        .ai-input:focus-visible,
        .ai-input:focus-within {
          outline: none !important;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05) !important;
          --tw-ring-width: 0px !important;
          --tw-ring-offset-width: 0px !important;
          --tw-ring-shadow: 0 0 #0000 !important;
          --tw-ring-offset-shadow: 0 0 #0000 !important;
        }
      `}} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl mx-auto"
      >
      {/* Title - Minimalist with Typing Effect */}
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-normal mb-3 text-foreground tracking-tight min-h-[3rem] md:min-h-[3.5rem]">
          {displayedTitle}
          <span
            className={`inline-block w-0.5 h-8 md:h-10 bg-foreground ml-1 align-middle transition-opacity duration-100 ${
              showCursor && displayedTitle.length < fullTitle.length
                ? "opacity-100"
                : displayedTitle.length === fullTitle.length && showCursor
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        </h2>
      </motion.div>

      {/* Messages Area - Fixed Height, Always Visible */}
      <AnimatePresence mode="wait">
        {showMessages && messages.length > 0 && (
          <motion.div
            ref={messagesContainerRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <ScrollArea 
              className="h-[300px] md:h-[400px]" 
              ref={scrollRef}
            >
                <div className="space-y-4 px-2 pb-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={cn(
                        "flex gap-3",
                        message.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {/* Avatar for assistant */}
                      {message.role === "assistant" && (
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      
                      <div className="flex flex-col max-w-[80%]">
                        <div
                          className={cn(
                            "rounded-2xl px-5 py-3 text-sm",
                            message.role === "user"
                              ? "bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/20%),theme(backgroundColor.white/8%))] backdrop-blur-xl border border-white/25 text-foreground shadow-lg"
                              : "bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/12%),theme(backgroundColor.white/3%))] backdrop-blur-xl border border-white/15 text-foreground/90 shadow-md"
                          )}
                        >
                          {message.role === "assistant" ? (
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ children }) => (
                                  <p className="mb-2 last:mb-0 leading-relaxed text-left">
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
                                    className="text-primary hover:underline font-medium underline-offset-2"
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
                        {/* Timestamp */}
                        <span className={cn(
                          "text-xs text-muted-foreground/50 mt-1 px-2",
                          message.role === "user" ? "text-right" : "text-left"
                        )}>
                          {message.timestamp.toLocaleTimeString('it-IT', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      <div className="rounded-2xl px-5 py-3 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/12%),theme(backgroundColor.white/3%))] backdrop-blur-xl border border-white/15">
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
                  
                  {/* Invisible anchor for auto-scroll */}
                  <div ref={messagesEndRef} />
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
              className="ai-input w-full h-14 md:h-16 px-6 pr-14 text-base md:text-lg bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))] backdrop-blur-xl rounded-3xl border border-white/20 focus:border-white/30 transition-all placeholder:text-muted-foreground/50 text-foreground disabled:opacity-50 shadow-lg"
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
            className="text-center text-sm md:text-base p-4 md:p-5 rounded-3xl bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))] backdrop-blur-xl border border-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 tap-target-responsive disabled:opacity-50 disabled:cursor-not-allowed font-normal text-foreground/90 hover:text-foreground shadow-lg"
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
        Scorri per scoprire di più{" "}
        <span className="inline-block">↓</span>
      </motion.p>
      </motion.div>
    </>
  );
}
