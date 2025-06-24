"use client";

import { contactData } from '@/lib/data';
import { Card } from '@/components/ui/card';
import ScrollAnimatedHeading from '@/components/ui/ScrollAnimatedHeading';

export default function ContactSection() {
  const { title, subtitle, cards, closing } = contactData;

  return (
    <div className="container mx-auto px-4 text-center">
      <ScrollAnimatedHeading
        className="text-3xl sm:text-4xl font-headline font-bold mb-4"
      >
        {title}
      </ScrollAnimatedHeading>
      <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        {subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {cards.map((card) => (
          <a
            key={card.name}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div
              className="h-full flex flex-col text-center p-6 md:p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ backgroundColor: card.color }}
            >
              <div className="mx-auto mb-6 bg-white/20 p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-bold mb-4">{card.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <card.statIcon className="w-5 h-5" />
                <p>{card.stat}</p>
              </div>
              <p className="text-white/80 mt-auto whitespace-pre-line">{card.cta}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="[perspective:1000px]">
        <Card className="max-w-2xl mx-auto p-6 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-2xl [transform-style:preserve-3d] hover:[transform:rotateX(5deg)]">
            <closing.icon className="w-10 h-10 text-primary flex-shrink-0" />
            <div className="text-center sm:text-left">
                <h4 className="font-headline text-lg md:text-xl font-bold">{closing.title}</h4>
                <p className="text-muted-foreground">{closing.subtitle}</p>
            </div>
        </Card>
      </div>
    </div>
  );
}
