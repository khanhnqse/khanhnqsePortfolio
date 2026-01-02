"use client";

import { ExternalLink, Award, Building2 } from "lucide-react";
import { CERTIFICATES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

const CertificateSection = () => {
  // Sort certificates by date (newest first)
  // Assuming date format is "YYYY" or similar that sorts string-wise correctly, 
  // or we rely on the order in data.tsx.
  
  const timelineData = CERTIFICATES.map((cert) => ({
    title: cert.date, // Use Year/Date as the timeline marker
    content: (
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Image/Thumbnail */}
            <div className="relative w-full md:w-48 h-32 md:h-32 shrink-0 rounded-lg overflow-hidden border border-neutral-100 dark:border-neutral-800">
               {/* Use the placeholder image if available, or a fallback gradient */}
               {cert.image ? (
                 <Image 
                   src={cert.image} 
                   alt={cert.name} 
                   fill 
                   className="object-cover" 
                 />
               ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-500/50" />
                </div>
               )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-2">
                <Typography variant="h3" className="text-xl font-bold leading-tight">
                    {cert.name}
                </Typography>
                
                <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                    <Building2 className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                </div>

                <div className="mt-4">
                    <Link 
                        href={cert.url} 
                        target="_blank" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                    >
                        Verify Credential <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    ),
  }));

  return (
    <Container className="py-24">
      <div className="mb-8 flex flex-col items-center gap-4">
        <Tag label="Certificates" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          My professional journey and achievements over the years.
        </Typography>
      </div>

      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
    </Container>
  );
};

export default CertificateSection;
