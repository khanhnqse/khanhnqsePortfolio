"use client";

import { TECHNOLOGIES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "@/components/animata/container/marquee";

import { StaticImageData } from "next/image";

const SkillCard = ({ logo, label }: { logo: string | StaticImageData; label: string }) => {
  return (
    <div className="flex w-40 flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-blue-800 dark:hover:bg-gray-900">
      <div className="relative h-12 w-12">
        <Image src={logo} alt={label} fill className="object-contain" />
      </div>
      <Typography variant="body3" className="font-medium text-gray-600 dark:text-gray-300">
        {label}
      </Typography>
    </div>
  );
};

const SkillsSection = () => {
  const firstRow = TECHNOLOGIES.slice(0, Math.ceil(TECHNOLOGIES.length / 2));
  const secondRow = TECHNOLOGIES.slice(Math.ceil(TECHNOLOGIES.length / 2));

  return (
    <Container className="py-20">
      <div className="flex flex-col items-center gap-4 mb-16">
        <Tag label="Skills" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background   md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((tech, index) => (
            <SkillCard key={index} logo={tech.logo} label={tech.label} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
          {secondRow.map((tech, index) => (
            <SkillCard key={index} logo={tech.logo} label={tech.label} />
          ))}
        </Marquee>
        
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </Container>
  );
};

export default SkillsSection;
