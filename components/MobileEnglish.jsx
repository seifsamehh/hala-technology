"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function MobileNav({ open, setOpen }) {
  const handleClickScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#11784b]/80 transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex flex-col items-center justify-center gap-8 mt-[7rem]">
        <p
          className="text-4xl text-white select-none"
          onClick={() => handleClickScroll("about-us")}
        >
          About Us
        </p>
        <p
          className="text-4xl text-white select-none"
          onClick={() => handleClickScroll("work")}
        >
          Previous Work
        </p>
        <p
          className="text-4xl text-white select-none"
          onClick={() => handleClickScroll("partners")}
        >
          Partners
        </p>
        <p
          className="text-4xl text-white select-none"
          onClick={() => handleClickScroll("offers")}
        >
          Offers
        </p>
        <p
          className="text-4xl text-white select-none"
          onClick={() => handleClickScroll("uses")}
        >
          Uses
        </p>
        <p
          className="text-4xl text-white select-none"
          onClick={() => handleClickScroll("payment")}
        >
          Payment Methods
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-4 text-4xl text-white select-none"
        >
          <Image
            src="/egypt.webp"
            alt="Egypt"
            aria-label="Egypt"
            width="40"
            height="30"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-center">
        <div
          className="relative z-50 flex flex-col items-center justify-between w-6 h-6 cursor-pointer group"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
