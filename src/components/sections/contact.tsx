"use client";

import { useState } from "react";
import { Copy, Mail, Phone, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { copyTextToClipboard, cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";

let email = "khanhqn03@gmail.com";
let phone = "033.436.3339";

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(null);

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-20 pointer-events-none" />
      <Meteors number={20} />
      
      <div className="relative z-10 flex flex-col items-center gap-6 text-center mb-12">
        <Tag label="Get in touch" />
        <Typography variant="h2" className="max-w-2xl font-bold">
          Let&apos;s build something amazing together
        </Typography>
        <Typography variant="body1" className="max-w-xl text-gray-600 dark:text-gray-300">
          Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
        </Typography>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/50 p-8 shadow-lg backdrop-blur-md transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none"
        >
          {/* Subtle gradient blob on hover */}
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-[50px] transition-all duration-500 group-hover:bg-blue-500/20" />

          <div className="flex flex-col items-center gap-4 relative z-10">
            <motion.div 
               whileHover={{ rotate: 15, scale: 1.1 }}
               className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            >
              <Mail className="w-8 h-8" />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email me at</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white mt-1 break-all">{email}</p>
            </div>
            <button
              onClick={() => handleCopyClick(email, "email")}
              className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium dark:text-white"
            >
              <AnimatePresence mode="wait">
                {isCopied && copiedValueType === "email" ? (
                  <motion.div
                    key="copied"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4 dark:text-black" />
                    <span className="dark:text-black">Copy Email</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/50 p-8 shadow-lg backdrop-blur-md transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none"
        >
           {/* Subtle gradient blob on hover */}
           <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-[50px] transition-all duration-500 group-hover:bg-emerald-500/20" />

          <div className="flex flex-col items-center gap-4 relative z-10">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="p-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
            >
              <Phone className="w-8 h-8" />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Call me at</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">{phone}</p>
            </div>
            <button
              onClick={() => handleCopyClick(phone, "phone")}
              className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium dark:text-white"
            >
              <AnimatePresence mode="wait">
                {isCopied && copiedValueType === "phone" ? (
                  <motion.div
                    key="copied"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4 dark:text-black" />
                    <span className="dark:text-black">Copy Phone</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-16">
        <Typography className="text-gray-600 dark:text-gray-400">
          You may also find me on these platforms
        </Typography>
        <SocialIcons />
      </div>
    </Container>
  );
};

export default ContactSection;
