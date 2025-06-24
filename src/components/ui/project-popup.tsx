
"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Separator } from './separator';
import { projects } from '@/lib/data';
import GithubButton from './GithubButton';

type Project = typeof projects[0];

type ProjectPopupProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectPopup({ project, isOpen, onClose }: ProjectPopupProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[95vh] p-0 flex flex-col">
        <div className="p-0 overflow-y-auto">
            <DialogHeader className="sr-only">
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>

            <div className="relative h-44 sm:h-56 w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint="technology abstract"
                />
            </div>

            <div className="p-6">
                <h2 className="font-bold font-headline text-2xl md:text-3xl mb-6 text-foreground">
                    {project.title}
                </h2>

                <div className="grid gap-8">
                    <div>
                        <h3 className="font-bold font-headline text-xl md:text-2xl mb-3 text-primary">Problem Statement</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
                    </div>
                    
                    <Separator />

                    <div>
                        <h3 className="font-bold font-headline text-xl md:text-2xl mb-3 text-primary">Solution Approach</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.solutionApproach}</p>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold font-headline text-xl md:text-2xl mb-3 text-primary">Results & Impact</h3>
                            <ul className="space-y-2">
                                {project.impact.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-muted-foreground">
                                    <span className="h-2 w-2 mt-1.5 mr-3 rounded-full bg-green-500 flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold font-headline text-xl md:text-2xl mb-3 text-primary">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="px-3 py-1 text-sm bg-convrt-purple/10 text-convrt-purple border-transparent font-medium">{tech}</Badge>
                            ))}
                            </div>
                        </div>
                    </div>
                    
                    <Separator />

                    <div className="flex justify-center items-center gap-4">
                        <GithubButton url={project.githubUrl} />
                        {project.demoUrl && (
                             <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" className="border transition-transform duration-300 hover:scale-105">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
