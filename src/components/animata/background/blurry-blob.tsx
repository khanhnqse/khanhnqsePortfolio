"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor?: string;
  secondBlobColor?: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor = "bg-blue-400",
  secondBlobColor = "bg-purple-400",
}: BlobProps) {
  return (
    <div className="min-h-52 min-w-52 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "opacity-45 absolute -right-24 -top-28 h-72 w-72 animate-pop-blob rounded-sm mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            "opacity-45 absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}
