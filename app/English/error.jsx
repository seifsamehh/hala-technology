"use client"; // Error components must be Client Components
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#12784c] text-[#f5f5fa] flex justify-center items-center flex-col gap-4">
      <h2 className={`text-5xl ${merriweather.className}`}>
        Something Went Wrong
      </h2>
      <button
        className="bg-[#fdd204] text-[#1f1f29] p-4 rounded-md"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try Again
      </button>
    </div>
  );
}
