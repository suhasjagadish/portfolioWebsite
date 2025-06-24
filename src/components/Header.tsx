"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('scrollToProjects') === 'true') {
      document.getElementById('projects')?.scrollIntoView();
      sessionStorage.removeItem('scrollToProjects');
    }
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    let newActiveId = '';

    // Special case for the bottom of the page
    if (window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight) {
      newActiveId = navLinks[navLinks.length - 1].id;
    } else {
      // Find the first section that fits the criteria from the top
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            newActiveId = link.id;
            break; // Found the active section, no need to check further
          }
        }
      }
    }
    
    setActiveId(newActiveId || (window.scrollY < 200 ? 'home' : activeId));
  }, [activeId]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleLinkClick = (id: string) => {
    setIsMenuOpen(false);
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-white/50 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4">
        <div className="[perspective:800px]">
          <Link href="/" className="font-headline text-3xl font-bold text-foreground block transition-transform duration-300 [transform-style:preserve-3d] hover:[transform:rotateY(15deg)_rotateX(5deg)]">
            Suhas
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-card/50 backdrop-blur-sm p-1 rounded-full shadow-lg">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                size="sm"
                onClick={() => handleLinkClick(link.id)}
                className={cn(
                  "rounded-full px-4 transition-colors duration-300 flex items-center gap-2",
                  activeId === link.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-4 right-4 bg-white/50 backdrop-blur-sm shadow-lg p-4 rounded-xl border">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => handleLinkClick(link.id)}
                className={cn(
                  "justify-start text-base py-3 px-4 rounded-md",
                  activeId === link.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600'
                )}
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.title}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
