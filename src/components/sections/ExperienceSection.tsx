"use client"

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experience, certifications } from '@/lib/data';
import { Briefcase, Calendar, ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import ScrollAnimatedHeading from '@/components/ui/ScrollAnimatedHeading';

export default function ExperienceSection() {
  const [currentCert, setCurrentCert] = useState(0);
  const [useTransition, setUseTransition] = useState(true);

  const nextCert = () => {
    if (!useTransition) setUseTransition(true);

    if (currentCert === certifications.length - 1) {
      setUseTransition(false);
      setCurrentCert(0);
      setTimeout(() => setUseTransition(true), 50);
    } else {
      setCurrentCert((prev) => prev + 1);
    }
  };

  const prevCert = () => {
    if (!useTransition) setUseTransition(true);

    if (currentCert === 0) {
      setUseTransition(false);
      setCurrentCert(certifications.length - 1);
      setTimeout(() => setUseTransition(true), 50);
    } else {
      setCurrentCert((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <ScrollAnimatedHeading
        className="text-3xl sm:text-4xl font-headline font-bold text-center mb-4"
      >
        Career & Accomplishments
      </ScrollAnimatedHeading>
      <p className="text-base sm:text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
        A timeline of my professional growth and key achievements.
      </p>
      <div className="space-y-16">
        {/* Experience Section */}
        <div>
          <ScrollAnimatedHeading
            el="h3"
            className="text-2xl md:text-3xl font-headline font-semibold text-center mb-8"
          >
            Experience
          </ScrollAnimatedHeading>
          <div className="max-w-[700px] mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="shadow-lg p-6 sm:p-8 bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-headline text-xl md:text-2xl font-bold">{exp.role}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-4 sm:mt-0 bg-muted px-3 py-1.5 rounded-full text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <div>
                    <h5 className="font-headline font-semibold text-lg mb-3">Key Responsibilities</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      {exp.keyResponsibilities.map((resp, i) => (
                        <li key={i} className="relative pl-5 text-sm">
                          <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-convrt-dark-blue"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-headline font-semibold text-lg mb-3">Impact Metrics</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      {exp.impactMetrics.map((metric, i) => (
                        <li key={i} className="relative pl-5 text-sm">
                          <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-green-500"></span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Separator className="my-6" />

                <div>
                   <h5 className="font-headline font-semibold text-lg mb-4">Technologies Used</h5>
                   <div className="flex flex-wrap gap-2">
                      {exp.technologiesUsed.map((tech) => (
                         <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1 font-normal">{tech}</Badge>
                      ))}
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Carousel */}
        <div className="w-full max-w-[380px] mx-auto">
           <Card className="shadow-xl p-6 sm:p-8 rounded-2xl bg-white flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <ScrollAnimatedHeading
                        el="h3"
                        className="text-2xl font-headline font-semibold"
                      >
                        Certifications
                      </ScrollAnimatedHeading>
                  </div>
                  <span className="text-gray-500 font-semibold text-md">{currentCert + 1}/{certifications.length}</span>
              </div>
              
              {/* Carousel */}
              <div className="relative overflow-hidden flex-grow">
                  <div
                    className={cn(
                      'flex h-full',
                      useTransition && 'transition-transform duration-500 ease-in-out'
                    )}
                    style={{ transform: `translateX(-${currentCert * 100}%)` }}
                  >
                      {certifications.map((cert, index) => (
                          <div key={index} className="w-full flex-shrink-0 px-1 h-full">
                              <div className="text-center h-full flex flex-col">
                                <div>
                                  <div className="relative w-1/2 mx-auto h-32 rounded-lg overflow-hidden mb-6 bg-gray-100">
                                      <Image src={cert.image} alt={cert.name} fill className="object-cover" data-ai-hint="certificate document" />
                                  </div>

                                  <div className="flex items-center justify-center gap-2">
                                      <Button variant="ghost" size="icon" onClick={prevCert} className="rounded-full h-10 w-10 flex-shrink-0 text-gray-600 hover:bg-gray-200">
                                          <ChevronLeft />
                                      </Button>
                                      <div className="flex-grow">
                                          <h4 className="font-headline font-bold text-lg md:text-xl text-gray-900">{cert.name}</h4>
                                          <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                                          <p className="text-xs text-gray-500 mt-1">Issued: {cert.date} • ID: {cert.id}</p>
                                          <p className="mt-4 text-sm text-gray-700 leading-relaxed">{cert.description}</p>
                                      </div>
                                      <Button variant="ghost" size="icon" onClick={nextCert} className="rounded-full h-10 w-10 flex-shrink-0 text-gray-600 hover:bg-gray-200">
                                          <ChevronRight />
                                      </Button>
                                  </div>
                                </div>
                                  
                                <div className="mt-auto pt-4">
                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" className="rounded-full bg-gray-800 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6">
                                            View Credential
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </a>
                                </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
