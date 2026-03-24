'use client';

import { useState, useRef, useEffect } from 'react';
import { promptChips } from '@/content/prompts';
import { cn } from '@/lib/utils';
import { VarshiniBotAvatar } from './VarshiniBotAvatar';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  section?: string;
}

export function AskVarshini() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const assistantMsg: Message = {
        role: 'assistant',
        content: data.response,
        section: data.section,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating bot avatar button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50 group transition-all duration-300',
          isOpen
            ? 'rounded-full bg-[#141414] text-[#fff6e4] px-4 py-3 shadow-lg'
            : 'rounded-full shadow-lg hover:shadow-xl hover:scale-110'
        )}
        aria-label={isOpen ? 'Close AI assistant' : 'Ask Varshini - AI assistant'}
      >
        {isOpen ? (
          <span className="text-sm font-medium">Close</span>
        ) : (
          <VarshiniBotAvatar size="md" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl border border-white/10 bg-black shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: 'min(560px, calc(100vh - 140px))' }}>
          {/* Header with avatar */}
          <div className="px-4 py-3 border-b border-white/5 bg-[#111111] flex items-center gap-3">
            <VarshiniBotAvatar size="sm" speaking={loading} />
            <div>
              <h2 className="font-serif text-base font-semibold text-[#fff6e4]">
                Varshini Bot
              </h2>
              <p className="text-xs text-[#fff6e4]/60">
                AI-powered guide to my work &amp; experience
              </p>
            </div>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-[#00F2FF]/10 text-[#00F2FF] text-[10px] font-mono">
              ONLINE
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: '200px' }}>
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="flex justify-center py-2">
                  <VarshiniBotAvatar size="lg" />
                </div>
                <p className="text-sm text-[#fff6e4]/60 text-center">
                  Hey! I&apos;m Varshini Bot. Ask me anything about projects, research, or experience!
                </p>
                {/* Prompt chips */}
                <div className="flex flex-wrap gap-1.5">
                  {promptChips.map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => sendMessage(chip.query)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#111111] border border-white/5 text-xs text-[#fff6e4] hover:border-[#00F2FF]/20 hover:text-[#00F2FF] transition-colors text-left"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'rounded-xl px-3 py-2.5 text-sm leading-relaxed max-w-[90%]',
                  msg.role === 'user'
                    ? 'bg-[#141414] text-[#fff6e4] ml-auto'
                    : 'bg-[#111111] text-[#fff6e4]/80 border border-white/5'
                )}
              >
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-1.5 mb-1">
                    <VarshiniBotAvatar size="sm" speaking={false} className="scale-50 origin-left" />
                  </div>
                )}
                <p className="whitespace-pre-wrap">{msg.content}</p>
                {msg.section && (
                  <a
                    href={`/${msg.section}`}
                    className="inline-block mt-2 text-xs text-[#00F2FF] hover:text-[#fff6e4] transition-colors"
                  >
                    View {msg.section} section &rarr;
                  </a>
                )}
              </div>
            ))}

            {loading && (
              <div className="bg-[#111111] rounded-xl px-3 py-2.5 max-w-[90%] border border-white/5">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="p-3 border-t border-white/5 bg-[#111111] flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, research, skills..."
              className="flex-1 px-3 py-2 rounded-lg bg-black border border-white/10 text-sm text-[#fff6e4] placeholder:text-[#fff6e4]/40 focus:outline-none focus:border-[#00F2FF]/30"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-3 py-2 rounded-lg bg-[#141414] text-[#fff6e4] text-sm font-medium disabled:opacity-50 hover:bg-[#00F2FF] hover:text-black transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
