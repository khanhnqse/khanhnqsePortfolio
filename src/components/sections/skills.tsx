"use client";

import { TECHNOLOGIES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TechDetails from "@/components/data-display/tech-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import RevealOnScroll from "../animata/scroll/reveal";
import { motion, useAnimation, useInView } from "framer-motion";

const SkillsSection = () => {
  return (
    <Container>
      <RevealOnScroll threshold={0.2}>
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Skills" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            The skills, tools and technologies I am really good at:
          </Typography>
        </div>
      </RevealOnScroll>{" "}
      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <TechDetails {...technology} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
