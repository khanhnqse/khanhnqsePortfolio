"use client";

import { useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";
// import Link from 'next/link';
import { motion } from "framer-motion";

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";

let email = "khanhqn03@gmail.com";
let phone = "033.436.3339";

type CopyValue = "email" | "phone";

// Animated Copied! tooltip component
const CopiedTooltip = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: -6 }}
    exit={{ opacity: 0, y: 6 }}
    transition={{ duration: 0.2 }}
    className="absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 rounded border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs text-white shadow"
  >
    Copied!
  </motion.div>
);

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact" className="bg-gray-50 py-20 md:py-24 lg:py-28 dark:bg-gray-900/50">
      <motion.div
        className="mb-8 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Tag label="Get in touch" />

        <Typography
          variant="subtitle"
          className="max-w-xl text-center dark:text-white"
        >
          What’s next? Feel free to reach out if you are looking for a
          developer, have a query, or simply want to connect.
        </Typography>
      </motion.div>

      <motion.div
        className="from-primary-50 to-primary-100 border-primary-100 mx-auto flex w-full max-w-2xl flex-col gap-8 rounded-2xl border bg-gradient-to-br via-white px-6 py-10 shadow-xl dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-800 md:px-12 md:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {[
            { icon: Mail, value: email, type: "email", label: "Email" },
            { icon: Phone, value: phone, type: "phone", label: "Phone" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.type}
                className="border-primary-100 dark:border-primary-900 from-primary-100/60 to-primary-200/60 dark:to-primary-900/30 group relative flex w-full min-w-0 flex-col items-center gap-2 overflow-hidden rounded-xl border bg-gradient-to-br via-white/80 px-4 py-6 shadow-sm transition-shadow duration-200 hover:shadow-lg dark:from-neutral-900 dark:via-neutral-900/80"
                initial={{ opacity: 0, y: 20, scale: 0.99 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.04, borderColor: "#ffffff" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08 + 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.1 }}
                tabIndex={0}
              >
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, #3b82f6 0%, transparent 70%)",
                  }}
                />
                <div className="z-10 mb-2 flex items-center gap-2">
                  <Icon className="text-primary-500 h-7 w-7 drop-shadow-[0_1px_4px_rgba(59,130,246,0.15)]" />
                  <span className="text-primary-600 dark:text-primary-300 text-sm font-semibold">
                    {item.label}
                  </span>
                </div>
                <Typography
                  variant="h2"
                  className="text-primary-800 dark:text-primary-100 z-10 mb-2 w-full truncate break-all text-center text-lg font-semibold"
                  style={{ wordBreak: "break-all" }}
                >
                  {item.value}
                </Typography>
                <span className="relative z-10">
                  <IconButton
                    size={width && width < 768 ? "md" : "lg"}
                    onClick={() =>
                      handleCopyClick(
                        item.value.replace(" ", ""),
                        item.type as CopyValue
                      )
                    }
                    showTooltip={isCopied && copiedValueType === item.type}
                    className="bg-primary-100 hover:bg-primary-200 border-primary-200 text-primary-700 ml-1 border shadow-sm"
                  >
                    <Copy />
                  </IconButton>
                  {isCopied && copiedValueType === item.type && (
                    <CopiedTooltip />
                  )}
                </span>
              </motion.div>
            );
          })}
        </div>
        <div className="border-primary-100 dark:border-primary-900 flex flex-col items-center gap-2 border-t pt-2">
          <Typography className="text-primary-600 dark:text-primary-300 text-center">
            You may also find me on these platforms
          </Typography>
          <SocialIcons />
        </div>
      </motion.div>
    </Container>
  );
};

export default ContactSection;
