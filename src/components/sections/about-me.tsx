"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, Pocket } from "lucide-react";

import KhanhFullPose from "/public/images/khanhFull1.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-3xl border border-gray-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/5",
      className
    )}
  >
    {children}
  </div>
);

const AboutMeSection = () => {
  return (
    <Container className="py-20" id="about">
      <div className="flex flex-col items-center gap-4 mb-16">
        <Tag label="About me" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Get to know me better
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* 1. Profile Image - Tall Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-1 md:row-span-2 lg:row-span-2"
        >
          <Card className="h-full p-0 group">
            <Image
              src={KhanhFullPose}
              alt="Khanh Full Pose"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-bold">Nguyen Quang Khanh</p>
              <p className="text-sm text-gray-200">Frontend Developer</p>
            </div>
          </Card>
        </motion.div>

        {/* 2. Main Bio - Wide Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2"
        >
          <Card className="h-full flex flex-col justify-center gap-4">
            <Typography variant="h3" className="font-bold">
              Curious about me?
            </Typography>
            <Typography className="text-gray-600 dark:text-white-200">
              Since starting FPT university in 2021, I’ve actively worked on
              various personal and academic projects, constantly pushing myself
              to learn more — from mastering Tailwind CSS and TypeScript to
              exploring full stack tools like Next.js.
            </Typography>
            <Typography className="text-gray-600 dark:text-white-200">
              I love crafting clean, responsive, and user-focused interfaces.
              For me, good design is not just about how things look, but also
              how they work.
            </Typography>
          </Card>
        </motion.div>

        {/* 3. Quick Bits - Vertical List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-1 lg:col-span-1"
        >
          <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl"><Pocket /></span> Quick Bits
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-white-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-blue-500" />
                  SE Student @ FPT University
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-purple-500" />
                  Full time freelancer
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-pink-500" />
                  Front-end focused
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* 4. Connect - Small Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-1 lg:col-span-1"
        >
          <Card className="h-full flex flex-col justify-center items-center gap-4 hover:border-blue-500/50 transition-colors">
            <h4 className="font-bold">Let's Connect</h4>
            <div className="flex gap-4">
              <Link href={EXTERNAL_LINKS.GITHUB} noCustomization externalLink>
                <div className="p-3 rounded-full bg-gray-100 dark:bg-white-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
              </Link>
              <Link href={EXTERNAL_LINKS.LINKEDIN} noCustomization externalLink>
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </Link>
            </div>
          </Card>
        </motion.div>

        {/* 5. Status - Wide Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2"
        >
          <Card className="h-full flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-500/5 border-emerald-100 dark:border-emerald-500/10">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Current Status</span>
              <p className="font-medium text-gray-700 dark:text-gray-200">Open to new opportunities & collaborations</p>
            </div>
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </div>
          </Card>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
