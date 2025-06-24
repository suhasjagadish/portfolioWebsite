"use client"

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { heroData, socialLinks } from '@/lib/data';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RotatingText } from '@/components/ui/rotating-text';

export default function HeroSection() {
  const { highlightedTitle, card, resumeUrl } = heroData;
  
  return (
    <section id="home" className="pt-24 pb-12 sm:pb-16 overflow-x-clip">
      <div className="container mx-auto px-4">
        
        {/* Relative positioning context for the background and content */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Absolutely positioned background to achieve precise layering */}
          <div className="absolute top-0 left-0 right-0 bottom-20 bg-gray-100 rounded-3xl z-0"></div>

          {/* Content wrapper on a higher z-index */}
          <div className="relative z-10">
            
            {/* Heading and buttons container with top padding to position against background */}
            <div className="text-center pt-0">
                <h1 className="text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[5.5rem] leading-none font-extrabold tracking-tight text-foreground flex flex-col items-center">
                    <span>
                      Turning <span className="font-black text-red-500">Data</span> Into
                    </span>
                    <RotatingText texts={highlightedTitle} className="text-primary block" />
                </h1>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Button size="lg" className="rounded-full shadow-md transition-transform duration-300 hover:scale-105 active:scale-95">
                          View My Work
                          <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Button size="lg" variant="outline" className="rounded-full shadow-md transition-transform duration-300 hover:scale-105 bg-white hover:bg-white hover:text-foreground">
                          <Mail className="mr-2 h-5 w-5" />
                          Get In Touch
                      </Button>
                    </Link>
                </div>
            </div>
            
            {/* Card wrapper with top margin for spacing */}
            <div className="mt-16">
                <Card className="max-w-3xl mx-auto p-6 sm:p-8 rounded-[1.5rem] shadow-lg border bg-white">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                        <div className="flex-shrink-0">
                            <Avatar className="h-24 w-24">
                              <AvatarImage src={card.imageUrl} alt="Suhas J." data-ai-hint="professional headshot" />
                              <AvatarFallback className="bg-primary text-primary-foreground text-5xl font-bold">
                                  S
                              </AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-grow w-full">
                            <div className="text-center sm:text-left">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{card.title}</h2>
                            <p className="text-foreground max-w-xl text-sm sm:text-base">
                                My passion lies in bridging data and decision-making, crafting solutions that unlock business potential and deliver measurable impact with data-driven insights using <strong className="font-bold text-primary">Python</strong>, <strong className="font-bold text-primary">SQL</strong>, <strong className="font-bold text-primary">Analytical</strong> and <strong className="font-bold text-primary">Business Intelligence</strong> tools
                            </p>
                            </div>
                            <div className="mt-8 flex items-center justify-center gap-6">
                            <TooltipProvider delayDuration={0}>
                                <div className="flex items-center gap-4">
                                {socialLinks.map((link) => (
                                    <Tooltip key={link.name}>
                                    <TooltipTrigger asChild>
                                        <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                        >
                                        <div 
                                            className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 border border-input transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-[var(--hover-color)]"
                                            style={{'--hover-color': link.color} as React.CSSProperties}
                                        >
                                            <link.icon className="w-7 h-7 text-[var(--icon-color)] group-hover:text-white transition-colors" style={{'--icon-color': link.color} as React.CSSProperties}/>
                                        </div>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        sideOffset={4}
                                        className="px-1.5 py-0.5"
                                        style={{
                                        '--tooltip-bg': link.color,
                                        '--tooltip-fg': '#ffffff'
                                        } as React.CSSProperties}
                                    >
                                        <p>{link.tooltip}</p>
                                    </TooltipContent>
                                    </Tooltip>
                                ))}
                                </div>
                            </TooltipProvider>
                            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="rounded-full shadow-md transition-transform duration-300 hover:scale-105">
                                <FileText className="mr-2 h-4 w-4" />
                                View Resume
                                </Button>
                            </a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
