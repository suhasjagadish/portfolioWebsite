
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import { projects } from '@/lib/data';
import ProjectPopup from '@/components/ui/project-popup';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import GithubButton from '@/components/ui/GithubButton';

type Project = typeof projects[0];
const categories = ['All', 'Analysis (EDA)', 'Dashboarding', 'Machine Learning'];

const ProjectGridCard = ({ project, onCardClick }: { project: Project, onCardClick: (project: Project) => void }) => (
    <Card className="group flex flex-col h-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card">
        <CardHeader className="p-0">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="technology abstract"
                />
            </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow flex flex-col">
            <CardTitle className="font-headline text-lg md:text-xl mb-4">{project.title}</CardTitle>
            
            <div className="space-y-4 text-sm text-muted-foreground flex-grow">
                <div>
                    <h4 className="font-headline font-semibold text-foreground mb-1">Problem Statement</h4>
                    <p className="whitespace-pre-wrap">{project.problemStatement}</p>
                </div>
                 <div>
                    <h4 className="font-headline font-semibold text-foreground mb-1">Results &amp; Impact</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {project.impact.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-foreground mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="rounded-md px-3 py-1 text-sm bg-convrt-purple/10 text-convrt-purple border-transparent font-medium">{tech}</Badge>
                    ))}
                  </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <Button variant="default" onClick={() => onCardClick(project)} className="transition-transform duration-300 hover:scale-105">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                </Button>
                <GithubButton url={project.githubUrl} />
            </div>
        </CardContent>
    </Card>
);


export default function AllProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const router = useRouter();

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);
    
    const handleBackToPortfolio = () => {
        sessionStorage.setItem('scrollToProjects', 'true');
        router.push('/');
    };
    
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1 pt-20">
                <div className="container mx-auto px-4 pt-8 pb-16">
                    <div className="flex flex-col md:flex-row md:items-start md:relative mb-12">
                        <div className="md:absolute md:left-0 md:top-0 w-full md:w-auto mb-8 md:mb-0">
                            <Button variant="outline" onClick={handleBackToPortfolio} className="group w-full md:w-auto bg-card transition-transform duration-300 hover:scale-105">
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Portfolio
                            </Button>
                        </div>
                        <header className="text-center w-full">
                            <h1 className="text-3xl sm:text-4xl font-headline font-bold mb-2">My Projects</h1>
                            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                                A collection of my work in data analytics, machine learning, and dashboarding.
                            </p>
                        </header>
                    </div>

                    <div className="flex justify-center flex-wrap gap-3 mb-12">
                        {categories.map(category => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? 'default' : 'outline'}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "rounded-full px-5 transition-all",
                                    activeCategory === category ? "border-2 border-primary-foreground/50" : "bg-card"
                                )}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectGridCard key={index} project={project} onCardClick={setSelectedProject} />
                        ))}
                    </div>

                </div>
            </main>
            {selectedProject && (
                <ProjectPopup
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}
