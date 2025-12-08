"use client";

import { ExternalLink, Award } from "lucide-react";
import { motion } from "framer-motion";
import { CERTIFICATES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const CertificateCard = ({
  name,
  issuer,
  date,
  url,
  index,
}: {
  name: string;
  issuer: string;
  date: string;
  url: string;
  index: number;
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm transition-all hover:shadow-2xl dark:bg-gray-900/50"
    >
      {/* Animated Gradient Border Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"></div>
      
      {/* Shine Effect */}
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine dark:from-transparent dark:to-white/10" />

      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 text-blue-600 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:group-hover:bg-gray-700">
        <Award className="h-10 w-10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Typography variant="h3" className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
          {name}
        </Typography>
        <Typography className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          {issuer} • {date}
        </Typography>
        
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors group-hover:border-blue-200 group-hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:text-blue-400">
          View Credential <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
};

const CertificateSection = () => {
  return (
    <Container className="py-24">
      <div className="flex flex-col items-center gap-4 mb-16">
        <Tag label="Certificates" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Professional certifications and achievements:
        </Typography>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((cert, index) => (
          <CertificateCard key={index} {...cert} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default CertificateSection;
