
"use client"

import { Star, StarHalf } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Skill = {
  name: string;
  rating: number;
  image: string;
  description: string;
  color: string;
};

type SkillCardProps = {
  skill: Skill;
};

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    } else if (i - 0.5 === rating) {
      stars.push(<StarHalf key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
    }
  }
  return stars;
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group [perspective:1000px] h-[275px]">
      <div className="relative h-full w-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front face */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-border to-muted p-[1px] shadow-md [backface-visibility:hidden]">
          <Card className="h-full w-full border-0 shadow-none flex flex-col items-center justify-center p-6 bg-white">
            <div className="relative h-20 w-20 mb-4">
              <Image src={skill.image} alt={skill.name} fill className="object-contain" data-ai-hint={skill.name.toLowerCase()} />
            </div>
            <h3 className="font-headline text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="flex items-center">{renderStars(skill.rating)}</div>
          </Card>
        </div>
        {/* Back face */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-border to-muted p-[1px] shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="h-full w-full border-0 shadow-none flex flex-col items-center justify-center p-6 bg-white">
            <h3 className="font-headline text-lg font-semibold mb-3">{skill.name}</h3>
            <p className="text-center text-sm text-muted-foreground">{skill.description}</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
