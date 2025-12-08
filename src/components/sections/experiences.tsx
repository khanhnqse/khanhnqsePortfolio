"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";

const ExperienceCard = ({
  logo,
  logoAlt,
  position,
  startDate,
  endDate,
  currentlyWorkHere,
  summary,
  index,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12"
    >
      {/* Date Section (Sticky on Desktop) */}
      <div className="md:col-span-4">
        <div className="sticky top-24 flex flex-col items-start">
          <Typography variant="h3" className="text-xl font-bold text-gray-900 dark:text-white">
            {new Date(startDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}{" "}
            —{" "}
            {currentlyWorkHere
              ? "Present"
              : new Date(endDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
          </Typography>
          <div className="mt-2 h-1 w-12 rounded-full bg-blue-500"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative md:col-span-8">
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-black hover:shadow-lg dark:border-gray-800 dark:bg-gray-200/50 dark:hover:border-blue-800">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-50 p-2 dark:bg-gray-800">
                <Image
                  src={logo}
                  alt={logoAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <Typography variant="h3" className="text-lg font-bold text-gray-900 dark:text-white">
                  {position}
                </Typography>
                {/* Optional: Company Name if available */}
              </div>
            </div>

            {/* Summary */}
            <ul className="flex list-disc flex-col gap-3 pl-4 text-gray-600 dark:text-white">
              {summary?.map((sentence: string, i: number) => (
                <li key={i} className="leading-relaxed">
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Decorative Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <Container className="py-24">
      <div className="flex flex-col items-center gap-4 mb-20">
        <Tag label="Experience" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          My professional journey and career highlights:
        </Typography>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={index} {...experience} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceSection;
