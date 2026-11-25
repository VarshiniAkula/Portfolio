'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { promptGroups } from '@/content/prompts';
import { cn } from '@/lib/utils';
import type { ChatLink, PromptChip } from '@/types/content';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  link?: ChatLink;
  followUps?: PromptChip[];
}

function Avatar({ size }: { size: number }) {
  return (
    <Image
      src="/bot-avatar.svg"
      alt=""
      width={size}
      height={size}
      unoptimized
      style={{ width: size, height: size }}
      className="rounded-full ring-1 ring-white/15 shrink-0 self-start"
    />
  );
}

export function AskVarshini() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input only with a mouse: on touch screens focusing opens the
    // keyboard and can zoom the page.
    if (isOpen && window.matchMedia('(hover: hover) and (pointer: fine)').matches) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, loading]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response, link: data.link, followUps: data.followUps },
      ]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    }
    setLoading(false);
  };

  const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant');

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-[max(20px,env(safe-area-inset-bottom))] right-[max(20px,env(safe-area-inset-right))] sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F2FF]',
          isOpen
            ? 'bg-[#141414] border-white/15 px-5 py-3 text-[#fff6e4]'
            : 'bg-[#0d0d0d]/95 backdrop-blur border-[#00F2FF]/30 p-1.5 lg:pr-5 shadow-[0_0_30px_rgba(0,242,255,0.25)] hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:-translate-y-0.5'
        )}
        aria-label={isOpen ? 'Close chat' : 'Ask Varshini Bot about her work'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="text-sm font-semibold">Close chat</span>
        ) : (
          <>
            <Avatar size={52} />
            <span className="hidden lg:block text-left">
              <span className="block text-sm font-semibold text-[#fff6e4]">Ask Varshini Bot</span>
              <span className="block text-xs text-[#fff6e4]/55">Projects, experience, skills</span>
            </span>
          </>
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Varshini Bot"
          className="fixed z-50 right-3 left-3 bottom-[calc(80px+env(safe-area-inset-bottom))] sm:left-auto sm:right-6 sm:bottom-24 sm:w-[460px] rounded-3xl border border-white/10 bg-[#070707] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
          style={{ height: 'min(720px, calc(100dvh - 120px))' }}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/5 bg-[#0e0e0e] flex items-center gap-3">
            <Avatar size={44} />
            <div className="min-w-0">
              <h2 className="font-serif text-lg font-semibold text-[#fff6e4] leading-tight">Varshini Bot</h2>
              <p className="text-xs text-[#fff6e4]/55">Answers from her résumé, projects and story</p>
            </div>
            {messages.length > 0 && (
              <button
                onClick={() => setMessages([])}
                className="ml-auto rounded-full border border-white/10 px-3 py-1 text-xs text-[#fff6e4]/70 hover:text-[#fff6e4] hover:border-white/30"
              >
                Start over
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4" aria-live="polite">
            {messages.length === 0 && (
              <div>
                <p className="text-[15px] text-[#fff6e4]/80 leading-relaxed">
                  Hi! I can answer questions about Varshini&apos;s experience, projects, skills, education and more. Pick a question or type your own.
                </p>
                <div className="mt-5 space-y-5">
                  {promptGroups.map((group) => (
                    <div key={group.title}>
                      <p className="text-[11px] font-label font-semibold uppercase tracking-[0.18em] text-[#fff6e4]/40 mb-2">{group.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.chips.map((chip) => (
                          <button
                            key={chip.label}
                            onClick={() => sendMessage(chip.query)}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-[#fff6e4]/85 hover:border-[#00F2FF]/40 hover:text-[#00F2FF] transition-colors"
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={cn('flex gap-2.5', msg.role === 'user' && 'justify-end')}>
                {msg.role === 'assistant' && <Avatar size={28} />}
                <div
                  className={cn(
                    'rounded-2xl px-4 py-3 text-[15px] leading-relaxed max-w-[88%]',
                    msg.role === 'user'
                      ? 'bg-[#00F2FF] text-black rounded-br-md'
                      : 'bg-[#121212] text-[#fff6e4]/85 border border-white/5 rounded-tl-md'
                  )}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[#00F2FF] hover:underline underline-offset-4"
                    >
                      {msg.link.label} &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5">
                <Avatar size={28} />
                <div className="bg-[#121212] rounded-2xl rounded-tl-md px-4 py-3.5 border border-white/5 flex gap-1">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-bounce" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}

            {!loading && lastAssistant?.followUps && messages[messages.length - 1] === lastAssistant && (
              <div className="flex flex-wrap gap-2 pl-[38px]">
                {lastAssistant.followUps.map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => sendMessage(chip.query)}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#fff6e4]/75 hover:border-[#00F2FF]/40 hover:text-[#00F2FF] transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
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
            className="p-4 border-t border-white/5 bg-[#0e0e0e] flex gap-2"
          >
            <label htmlFor="ask-varshini-input" className="sr-only">
              Ask a question
            </label>
            <input
              id="ask-varshini-input"
              ref={inputRef}
              type="text"
              value={input}
              maxLength={500}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a project, role, skill..."
              className="min-w-0 flex-1 px-4 py-3 rounded-xl bg-black border border-white/10 text-base text-[#fff6e4] placeholder:text-[#fff6e4]/35 focus:outline-none focus:border-[#00F2FF]/40"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 py-3 rounded-xl bg-[#00F2FF] text-black text-sm font-semibold disabled:opacity-40 hover:brightness-110 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
