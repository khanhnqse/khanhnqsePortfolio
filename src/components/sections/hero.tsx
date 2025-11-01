"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import KhanhAVT from "/public/images/khanh.jpg";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import AnimatedBeam from "../animata/background/animated-beam";

const HeroSection = () => {
  return (
    <AnimatedBeam className="py-16 md:py-20 lg:py-24">
      <Container id="hero">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Image */}
          <motion.div
            className="flex items-center justify-center md:order-last md:flex-grow md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <Image
                src={KhanhAVT}
                alt="Headshot of Khanh"
                className="absolute z-10 h-[280px] w-[240px] rounded-xl border-8 border-gray shadow-lg transition-transform duration-300 hover:scale-105 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute h-[280px] w-[280px] rounded-xl border-8 border-transparent bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-500/30 dark:to-purple-500/30 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            {" "}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {" "}
              <Typography variant="h1">
                Hi, I&apos;m{" "}
                <span className="animated-gradient-text font-bold">
                  Quang Khanh
                </span>{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </Typography>
              <Typography className="text-gray-700 dark:text-gray-300">
                I am a{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Frontend Developer
                </span>{" "}
                passionate about creating modern, high-performance web
                applications with a strong focus on{" "}
                <span className="font-medium text-purple-600 dark:text-purple-400">
                  UI/UX
                </span>
                . I constantly seek innovative ways to enhance user experience
                by integrating cutting-edge technologies and thoughtful design
                principles.
              </Typography>
            </motion.div>{" "}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex gap-2">
                <MapPin className="stroke-gray-600" />
                <Typography>Ho Chi Minh City, Vietnam</Typography>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <Typography>Available for new projects</Typography>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <SocialIcons />
            </motion.div>
          </div>
        </div>
      </Container>
    </AnimatedBeam>
  );
};

export default HeroSection;
