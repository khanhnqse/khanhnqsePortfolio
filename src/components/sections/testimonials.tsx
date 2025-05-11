"use client";

import { TESTIMONIALS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TestimonialDetails from "@/components/data-display/testimonial-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import RevealOnScroll from "@/components/animata/scroll/reveal";

const TestimonialsSection = () => {
  return (
    <Container
      id="testimonials"
      className="relative overflow-hidden bg-gray-50"
    >
      <RevealOnScroll threshold={0.2}>
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Testimonials" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Nice things people have said about me:
          </Typography>
        </div>
      </RevealOnScroll>

      <div className="mt-8 flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {TESTIMONIALS?.map((testimonial, index) => (
          <RevealOnScroll
            key={index}
            threshold={0.1}
            delay={0.2 * index}
            direction="up"
          >
            <TestimonialDetails key={`testimonial-${index}`} {...testimonial} />
          </RevealOnScroll>
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
