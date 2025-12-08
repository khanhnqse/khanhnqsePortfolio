"use client";

import { useState } from "react";
import { Copy, Mail, Phone, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { copyTextToClipboard, cn } from "@/lib/utils";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-6 text-center mb-12">
        <Tag label="Get in touch" />
        <Typography variant="h2" className="max-w-2xl font-bold">
          Let&apos;s build something amazing together
        </Typography>
        <Typography variant="body1" className="max-w-xl text-gray-600 dark:text-gray-300">
          Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
        </Typography>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/50 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Mail className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email me at</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">{email}</p>
            </div>
            <button
              onClick={() => handleCopyClick(email, "email")}
              className="mt-2 flex items-center gap-2 px-4 dark:text-black py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              {isCopied && copiedValueType === "email" ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/50 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <Phone className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Call me at</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">{phone}</p>
            </div>
            <button
              onClick={() => handleCopyClick(phone, "phone")}
              className="mt-2 flex items-center dark:text-black gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              {isCopied && copiedValueType === "phone" ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Phone</span>
                </>
              )}
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
