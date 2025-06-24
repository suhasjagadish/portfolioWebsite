
"use client";

import { skills } from '@/lib/data';
import SkillCard from '@/components/ui/skill-card';
import ScrollAnimatedHeading from '@/components/ui/ScrollAnimatedHeading';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const SkillTicker = () => {
  // Duplicate skills for a seamless loop.
  const tickerItems = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="mb-16 py-4 bg-transparent rounded-lg shadow-inner ticker-container">
      <div className="ticker-track">
        {tickerItems.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="ticker-item group">
            <div className="icon-wrapper">
              <Image src={skill.image} alt={skill.name} width={48} height={48} className="ticker-icon" data-ai-hint={skill.name.toLowerCase()} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <>
      <div className="container mx-auto px-4">
        <ScrollAnimatedHeading
          className="text-3xl sm:text-4xl font-headline font-bold text-center mb-4"
        >
          My Syntax & Strategy
        </ScrollAnimatedHeading>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-16">
          Technologies and tools I use to turn raw data into meaningful insights.
        </p>
        
        <SkillTicker />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
