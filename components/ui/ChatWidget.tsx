"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
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

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    "Quali progetti AI hai realizzato?",
    "Come posso automatizzare il mio business?",
    "Quanto costa un chatbot personalizzato?",
    "Raccontami del progetto Prompt Master GPT",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input quando si apre la chat (solo desktop)
  useEffect(() => {
    if (isOpen && window.innerWidth > 768) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent, customMessage?: string) => {
    e.preventDefault();
    const messageText = customMessage || input.trim();
    if (!messageText || isLoading) return;

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
      await new Promise(resolve => setTimeout(resolve, 300));
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
            m.id === assistantId
              ? { ...m, content: assistantMessage }
              : m
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
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow group relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse indicator */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 bottom-20 md:bottom-24 md:right-6 md:left-auto z-50 w-auto md:w-[400px] max-h-[calc(100vh-8rem)] md:max-h-[600px]"
          >
            <div className="bg-background border rounded-lg shadow-2xl overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">Leo - AI Assistant</h3>
                  <p className="text-xs opacity-90">
                    Il tuo assistente personale
                  </p>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                {messages.length === 0 ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Ciao! 👋 Sono Leo, l'assistente AI di Euxhenjo. Posso aiutarti
                      a scoprire progetti, servizi e competenze.
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        Domande suggerite:
                      </p>
                      {suggestedQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            setInput(q);
                            handleSubmit(e, q);
                          }}
                          className="w-full text-left text-xs p-2 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex gap-2",
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm max-w-[85%] prose-sm",
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          )}
                        >
                          {message.role === "assistant" ? (
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                                strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
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
                                ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>,
                                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                                code: ({ children }) => <code className="bg-muted-foreground/20 px-1 py-0.5 rounded text-xs">{children}</code>,
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
                      <div className="flex gap-2 justify-start">
                        <div className="rounded-lg px-4 py-3 text-sm bg-muted">
                          <div className="flex items-center gap-1">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-muted-foreground/60 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-muted-foreground/60 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-muted-foreground/60 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {isLoading && !isTyping && (
                      <div className="flex gap-2 justify-start">
                        <div className="rounded-lg px-3 py-2 text-sm bg-muted">
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ScrollArea>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t bg-background">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Scrivi un messaggio..."
                    disabled={isLoading}
                    className="flex-1 text-sm md:text-base"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !input.trim()}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
