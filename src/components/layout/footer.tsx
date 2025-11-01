import { Copyright } from "lucide-react";

import Typography from "@/components/general/typography";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 md:px-10">
        <div className="flex items-center justify-center gap-2">
          <Typography className="flex items-center font-medium text-gray-700 dark:text-gray-300" variant="body2">
            <Copyright className="mr-2 inline-block h-4 w-4" />
            2024 NGUYEN QUANG KHANH
          </Typography>
        </div>
        <Typography variant="body3" className="text-center text-gray-500 dark:text-gray-400">
          Built with Next.js, TypeScript & Tailwind CSS
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
