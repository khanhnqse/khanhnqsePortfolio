"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import { PROJECTS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";

const ProjectCard = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  index,
}: {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  previewImage: any;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 items-center",
        !isEven && "md:direction-rtl" // We'll handle direction manually to avoid DOM structure issues
      )}
    >
      {/* Image Section */}
      <div className={cn(
        "relative md:col-span-7 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl",
        isEven ? "md:order-1" : "md:order-2"
      )}>
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
          <Image
            src={previewImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
        </div>
      </div>

      {/* Content Section */}
      <div className={cn(
        "flex flex-col gap-6 md:col-span-5",
        isEven ? "md:order-2" : "md:order-1"
      )}>
        <div className="flex flex-col gap-4">
          <Typography variant="h3" className="text-3xl font-bold text-gray-900 dark:text-white">
            {name}
          </Typography>
          <Typography className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </Typography>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:gap-3 dark:bg-white dark:text-black dark:hover:text-white-100"
          >
            View Project <ExternalLink className="h-4 w-4" />
          </a>
          {/* Optional: Add Github link if available in data */}
        </div>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <Container id="work" className="py-20">
      <div className="flex flex-col items-center gap-4 mb-20">
        <Tag label="Work" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      <div className="flex flex-col gap-20 md:gap-32">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default WorkSection;
