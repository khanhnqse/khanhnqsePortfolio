"use client";

import Image from "next/image";

import KhanhFullPose from "/public/images/khanhFull1.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";
import BlurryBlob from "../animata/background/blurry-blob";
import RevealOnScroll from "../animata/scroll/reveal";

const AboutMeSection = () => {
  return (
    <Container
      className="relative overflow-hidden bg-gray-50 transition-colors duration-500 dark:bg-gray-900/50"
      id="about"
    >
      <BlurryBlob
        firstBlobColor="bg-blue-200 dark:bg-blue-500"
        secondBlobColor="bg-purple-200 dark:bg-purple-700"
      />

      <div className="relative z-10 self-center">
        <Tag label="About me" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
        {/* Image */}
        <RevealOnScroll direction="right" threshold={0.2}>
          <div className="flex w-full justify-center md:w-auto md:justify-end">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-200/60 via-purple-200/60 to-pink-200/60 p-1 shadow-xl dark:from-blue-500/20 dark:via-purple-700/20 dark:to-pink-400/20">
              <div className="overflow-hidden rounded-2xl bg-white dark:bg-gray-800">
                <Image
                  src={KhanhFullPose}
                  alt="Fullpose of Sagar"
                  className="h-[320px] w-[260px] object-cover transition-transform duration-500 group-hover:scale-105 md:h-[400px] md:w-[320px] lg:h-[440px] lg:w-[360px]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Content */}
        <RevealOnScroll direction="up" threshold={0.2} delay={0.2}>
          <div className="animate-fade-in-up flex w-full max-w-xl flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 md:p-12">
            {/* Accent bar */}
            <div className="mb-2 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500" />
            <Typography variant="h3" className="text-gray-900 dark:text-white">
              Curious about me? Here you have it:
            </Typography>
            {/* <Typography>
            I&apos;m Frontend Developer passionate about creating modern,
            high-performance web applications with a strong focus on UI/UX. I
            constantly seek innovative ways to enhance user experience by
            integrating cutting-edge technologies and thoughtful design
            principles.
          </Typography> */}
            <Typography>
              Since starting FPT university in 2021, I’ve actively worked on
              various personal and academic projects, constantly pushing myself
              to learn more — from mastering Tailwind CSS and TypeScript to
              exploring full stack tools like Next.js.
            </Typography>
            <Typography>
              I love crafting clean, responsive, and user-focused interfaces.
              For me, good design is not just about how things look, but also
              how they work. That’s why I focus on building digital products
              that are both visually appealing and technically sound.
            </Typography>
            <Typography>
              If you&apos;d like to connect, chat about tech, or check out some
              of the projects I&apos;m working on, feel free to visit my.{" "}
              <Link
                noCustomization
                externalLink
                withUnderline
                href={EXTERNAL_LINKS.LINKEDIN}
              >
                LinkedIn
              </Link>{" "}
              or explore my repositories on{" "}
              <Link
                noCustomization
                externalLink
                withUnderline
                href={EXTERNAL_LINKS.GITHUB}
              >
                GitHub
              </Link>
              . I&apos;d love to connect and learn from you!
            </Typography>
            <Typography className="text-gray-700 dark:text-white">
              Finally, some quick bits about me.
            </Typography>
            <div className="flex flex-col gap-2 md:flex-row md:gap-6">
              <ul className="animate-fade-in-up flex list-inside list-disc flex-col gap-2 delay-100">
                <Typography
                  component="li"
                  className="text-gray-700 dark:text-white"
                >
                  Software Engineering student @ FPT University (since 2021)
                </Typography>
                <Typography
                  component="li"
                  className="text-gray-700 dark:text-white"
                >
                  Full time freelancer
                </Typography>
              </ul>
              <ul className="animate-fade-in-up flex list-inside list-disc flex-col gap-2 delay-200">
                <Typography
                  component="li"
                  className="text-gray-700 dark:text-white"
                >
                  Front-end focused
                </Typography>
                <Typography
                  component="li"
                  className="text-gray-700 dark:text-white"
                >
                  Open to job opportunities and new collaborations
                </Typography>
              </ul>
            </div>
            <Typography className="text-gray-700 dark:text-white">
              One last thing, I&apos;m available for freelance work, so feel
              free to reach out and say hello! 😉
            </Typography>
          </div>
        </RevealOnScroll>
      </div>
    </Container>
  );
};

export default AboutMeSection;
