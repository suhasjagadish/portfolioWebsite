
"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';
import ProjectPopup from '@/components/ui/project-popup';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollAnimatedHeading from '@/components/ui/ScrollAnimatedHeading';
import GithubButton from '@/components/ui/GithubButton';

type Project = (typeof projects)[0];

const ProjectCardWrapper = ({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: () => void; }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <motion.div
            ref={ref}
            className="h-[100vh] sticky"
            style={{
                top: `${5 + index * 0.5}rem`,
                zIndex: index
            }}
        >
            <motion.div style={{ scale, transformOrigin: 'center' }}>
                <Card 
                  className="w-full lg:w-7/12 mx-auto h-[85vh] lg:h-[72vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row border-gray-200"
                >
                  <div className="relative w-full lg:w-5/12 h-1/3 lg:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint="code programming"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 md:p-6">
                    <CardTitle className="font-headline text-xl md:text-2xl font-bold">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed flex-shrink-0">{project.problemStatement}</p>
                    
                    <div className="flex-grow mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        <div>
                            <h4 className="font-headline font-semibold text-base mb-2">Challenges</h4>
                            <ul className="space-y-1.5">
                            {project.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start">
                                <span className="h-2 w-2 mt-1.5 mr-2 rounded-full bg-red-500 flex-shrink-0"></span>
                                <span className="text-muted-foreground text-sm">{challenge}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-headline font-semibold text-base mb-2">Impact</h4>
                            <ul className="space-y-1.5">
                            {project.impact.map((item, i) => (
                                <li key={i} className="flex items-start">
                                <span className="h-2 w-2 mt-1.5 mr-2 rounded-full bg-green-500 flex-shrink-0"></span>
                                <span className="text-muted-foreground text-sm">{item}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-auto pt-4">
                        <div className="mb-4">
                            <h4 className="font-headline font-semibold text-base mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="rounded-md px-3 py-1 text-sm bg-convrt-purple/10 text-convrt-purple border-transparent font-medium">{tech}</Badge>
                                ))}
                            </div>
                        </div>
                        <CardFooter className="p-0 flex items-center justify-between">
                            <Button size="sm" variant="default" className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" onClick={onViewDetails}>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Details
                            </Button>
                            <GithubButton url={project.githubUrl} size="sm" />
                        </CardFooter>
                    </div>
                  </div>
                </Card>
            </motion.div>
        </motion.div>
    );
};


export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <div className="container mx-auto px-4">
        <ScrollAnimatedHeading
          className="text-3xl sm:text-4xl font-headline font-bold text-center mb-4"
        >
          Featured Projects
        </ScrollAnimatedHeading>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Showcasing my drive to unlock insights from data through a blend of strategic thinking and technical expertise
        </p>
        
        <div className="relative h-[calc(4*100vh)] [perspective:1000px]">
          {featuredProjects.map((project, index) => (
             <ProjectCardWrapper 
                key={project.title}
                project={project}
                index={index}
                onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        <div className="text-center pb-8 sm:pb-12">
            <Link href="/projects">
                <Button size="lg" className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
        </div>

      </div>
      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
