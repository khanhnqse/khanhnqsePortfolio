"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/navigation/drawer";
import { NAV_LINKS } from "@/lib/data";
import { mergeClasses } from "@/lib/utils";
import useWindowSize from "@/hooks/use-window-size";
import useScroll from "@/hooks/use-scroll";
import Link from "@/components/navigation/link";
import ThemeSwitcher from "@/components/general/theme-switcher";
import IconButton from "@/components/general/icon-button";
import DownloadCV from "@/components/general/download-cv";
import Typography from "@/components/general/typography";

const Logo = () => (
  <Typography variant="h3" className="font-bold text-xl tracking-tighter">
    khanhnqse
    <span className="text-primary">.</span>
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={mergeClasses(
        "fixed top-0 z-30 w-full transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className={mergeClasses(
        "mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8 transition-all duration-300",
        scrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg rounded-2xl max-w-[95%] md:max-w-5xl py-3" : "bg-transparent"
      )}>
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-sm font-medium hover:text-primary transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-border"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DownloadCV />
          </div>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-800">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4 dark:border-gray-800">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.header>
  );
};

export default Header;
