"use client";

import { EXPERIENCES } from "@/lib/data";
import ExperienceDetails from "@/components/data-display/experience-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import RevealOnScroll from "../animata/scroll/reveal";

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50 dark:bg-gray-900/50">
      {" "}
      <RevealOnScroll threshold={0.2}>
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Experience" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Here is a quick summary of my most recent experiences:
          </Typography>
        </div>
      </RevealOnScroll>
      {EXPERIENCES?.map((experience, index) => (
        <RevealOnScroll
          key={index}
          threshold={0.1}
          delay={0.3 * index}
          direction="up"
        >
          <ExperienceDetails {...experience} />
        </RevealOnScroll>
      ))}
    </Container>
  );
};

export default ExperienceSection;
