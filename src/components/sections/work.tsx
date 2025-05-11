"use client";

import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import RevealOnScroll from "../animata/scroll/reveal";
import BlurryBlob from "../animata/background/blurry-blob";

const WorkSection = () => {
  return (
    <Container id="work" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <BlurryBlob
          firstBlobColor="bg-purple-200"
          secondBlobColor="bg-blue-200"
        />
      </div>

      <RevealOnScroll threshold={0.2}>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Work" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Some of the noteworthy projects I have built:
          </Typography>
        </div>
      </RevealOnScroll>

      {PROJECTS?.map((project, index) => (
        <RevealOnScroll key={index} threshold={0.1} delay={0.2 * index}>
          <ProjectDetails
            key={index}
            {...project}
            layoutType={index % 2 === 0 ? "default" : "reverse"}
          />
        </RevealOnScroll>
      ))}
    </Container>
  );
};

export default WorkSection;
