
"use client";

import { aboutData } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollAnimatedHeading from '@/components/ui/ScrollAnimatedHeading';
import { cn } from '@/lib/utils';
import React from 'react';

// Helper to parse and render text with <strong> tags
const renderParagraph = (text: string) => {
    const parts = text.split(/<strong>(.*?)<\/strong>/g);
    return (
        <p>
        {parts.map((part, index) =>
            index % 2 === 1 ? <strong key={index} className="font-bold text-foreground">{part}</strong> : <React.Fragment key={index}>{part}</React.Fragment>
        )}
        </p>
    );
};

const tagColorClasses: { [key: string]: string } = {
  blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-transparent',
  green: 'bg-green-100 text-green-800 hover:bg-green-200 border-transparent',
  purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200 border-transparent',
  orange: 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-transparent',
};

const cardColorClasses: { [key: string]: { iconContainer: string; icon: string } } = {
    blue: {
        iconContainer: 'bg-blue-500',
        icon: 'text-white',
    },
    green: {
        iconContainer: 'bg-green-500',
        icon: 'text-white',
    },
    red: {
        iconContainer: 'bg-red-500',
        icon: 'text-white',
    },
    purple: {
        iconContainer: 'bg-purple-500',
        icon: 'text-white',
    },
}

export default function AboutSection() {
  const { title, subtitle, paragraphs, tags, cards } = aboutData;

  return (
    <div className="container mx-auto px-4">
      <ScrollAnimatedHeading className="text-3xl sm:text-4xl font-headline font-bold text-center mb-4">
        {title}
      </ScrollAnimatedHeading>
      <p className="text-base sm:text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
        {/* Left Column */}
        <Card className="lg:col-span-3 p-6 sm:p-8 rounded-2xl shadow-md">
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
            {paragraphs.map((p, i) => (
                <React.Fragment key={i}>{renderParagraph(p)}</React.Fragment>
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
                {tags.map((tag) => (
                <Badge key={tag.text} variant="outline" className={cn("text-sm font-medium px-4 py-1.5 rounded-full transition-colors cursor-default", tagColorClasses[tag.color])}>
                    {tag.text}
                </Badge>
                ))}
            </div>
            </div>
        </Card>

        {/* Right Column */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6">
          {cards.map((card) => {
            const colors = cardColorClasses[card.color];
            return (
              <Card key={card.title} className={cn("p-6 text-left shadow-md hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 rounded-2xl", card.bgColorClass)}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("inline-block p-2 rounded-lg", colors.iconContainer)}>
                    <card.icon className={cn("w-4 h-4", colors.icon)} />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-foreground">{card.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
