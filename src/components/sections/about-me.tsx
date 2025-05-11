"use client";

import Image from "next/image";

import KhanhFullPose from "/public/images/khanhFull.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";
import BlurryBlob from "../animata/background/blurry-blob";
import RevealOnScroll from "../animata/scroll/reveal";

const AboutMeSection = () => {
  return (
    <Container className="relative overflow-hidden bg-gray-50" id="about">
      <BlurryBlob
        firstBlobColor="bg-blue-200"
        secondBlobColor="bg-purple-200"
      />

      <div className="relative z-10 self-center">
        <Tag label="About me" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <RevealOnScroll direction="right" threshold={0.2}>
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <Image
                src={KhanhFullPose}
                alt="Fullpose of Sagar"
                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Content */}
        <RevealOnScroll direction="up" threshold={0.2} delay={0.2}>
          <div className="flex max-w-xl flex-col gap-6">
            <Typography variant="h3">
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
            <Typography>Finally, some quick bits about me.</Typography>
            <div className="flex flex-col gap-2 md:flex-row md:gap-6">
              <ul className="flex list-inside list-disc flex-col gap-2">
                <Typography component="li">
                  Software Engineering student @ FPT University (since 2021)
                </Typography>
                <Typography component="li">Full time freelancer</Typography>
              </ul>
              <ul className="flex list-inside list-disc flex-col gap-2">
                <Typography component="li">Front-end focused</Typography>
                <Typography component="li">
                  Open to job opportunities and new collaborations
                </Typography>
              </ul>
            </div>{" "}
            <Typography>
              One last thing, I&apos;m available for freelance work, so feel
              free to reach out and say hello! I promise I don&apos;t bite 😉
            </Typography>
          </div>
        </RevealOnScroll>
      </div>
    </Container>
  );
};

export default AboutMeSection;
