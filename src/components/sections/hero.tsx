"use client";

import Image from "next/image";
import { ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import KhanhAVT from "/public/images/khanh.jpg";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Spotlight } from "@/components/animata/background/spotlight";
import { PROJECTS } from "@/lib/data";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background antialiased">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 text-blue-500 dark:text-white"
        fill="currentColor"
      />
      <div className="bg-noise"></div>
      
      <Container id="hero" className="relative z-10 pt-20 md:pt-32 pb-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Content */}
          <div className="flex max-w-3xl flex-col gap-8 md:order-first md:items-start 2xl:gap-10">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-gray-50/50 px-3 py-1 text-sm text-gray-600 backdrop-blur-md dark:border-gray-800 dark:bg-gray-500/50 dark:text-black">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for new projects
              </div>

              <Typography variant="h1" className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="animated-gradient-text">
                  Quang Khanh
                </span>{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </Typography>
              
              <Typography className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                I am a{" "}
                <span className="font-semibold text-foreground">
                  Frontend Developer
                </span>{" "}
                passionate about creating modern, high-performance web
                applications with a strong focus on{" "}
                <span className="font-semibold text-foreground">
                  UI/UX
                </span>
                . I craft immersive digital experiences that blend aesthetics with functionality.
              </Typography>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <Typography>Ho Chi Minh City, Vietnam</Typography>
              </div>

              <SocialIcons />
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative flex items-center justify-center md:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[320px] w-[300px] md:h-[420px] md:w-[380px]">
              {/* Abstract Background Shapes */}
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl dark:from-blue-500/10 dark:to-purple-500/10"></div>
              
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-black/5">
                <Image
                  src={KhanhAVT}
                  alt="Headshot of Khanh"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl animate-slide-up">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {PROJECTS.slice(0, 3).map((project, i) => (
                      <div key={i} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-gray-200 dark:border-gray-800 dark:bg-gray-700">
                        <Image
                          src={project.previewImage}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-medium">
                    <p className="text-foreground">20+ Projects</p>
                    <p className="text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
