'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/journey', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/library', label: 'Library' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 nav-blur">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif italic font-bold text-2xl text-[#fff6e4] tracking-tighter hover:text-[#00F2FF] transition-colors"
          aria-label="Home"
        >
          Varshini Akula
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-serif tracking-tight text-lg transition-colors duration-300',
                pathname === link.href
                  ? 'text-[#00F2FF] font-bold border-b-2 border-[#00F2FF] pb-1'
                  : 'text-[#fff6e4]/70 hover:text-[#00F2FF]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn('block h-0.5 w-5 bg-[#fff6e4] transition-all duration-200', mobileOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block h-0.5 w-5 bg-[#fff6e4] transition-all duration-200', mobileOpen && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 bg-[#fff6e4] transition-all duration-200', mobileOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden glass-panel mx-4 mb-4 rounded-xl py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block px-6 py-3 text-lg font-serif transition-colors',
                pathname === link.href
                  ? 'text-[#00F2FF] font-bold'
                  : 'text-[#fff6e4]/70 hover:text-[#00F2FF]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-[width] duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00F2FF, #00dbe7)',
        }}
      />
    </header>
  );
}
