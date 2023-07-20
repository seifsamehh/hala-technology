"use client";
import { Merriweather, Rubik } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import dynamic from "next/dynamic";
const HeroEnglish = dynamic(() => import("@/components/HeroEnglish"));
const Border = dynamic(() => import("@/components/Border"));
const AboutEnglish = dynamic(() => import("@/components/AboutEnglish"));
const WorkEnglish = dynamic(() => import("@/components/WorkEnglish"));
const PartnersEnglish = dynamic(() => import("@/components/PartnersEnglish"));
const OfferEnglish = dynamic(() => import("@/components/OfferEnglish"));
const UsesEnglish = dynamic(() => import("@/components/UsesEnglish"));
const PaymentEnglish = dynamic(() => import("@/components/PaymentEnglish"));
const CallEnglish = dynamic(() => import("@/components/CallEnglish"));
const FooterEnglish = dynamic(() => import("@/components/FooterEnglish"));

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});
const rubik = Rubik({ subsets: ["latin"], display: "swap", weight: "400" });
import "../../styles/main.scss";

const HomeEnglish = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main
      className={`min-h-screen english-version ${rubik.className} bg-[#f5f5fa] dark:bg-[#1f1f29] text-[#1f1f29] dark:text-[#f5f5fa]`}
      style={{ direction: "ltr" }}
    >
      {isLoading ? (
        <div className="loading-page flex flex-col items-center justify-center min-h-screen gap-8 loader bg-[#11784b] overflow-hidden">
          <Image
            src="/main-character.webp"
            alt="saudi character"
            aria-label="saudi character"
            width="200"
            height="200"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            className="relative z-10 w-100 h-100 scale-x-[-1]"
            priority={true}
          />
          <h1
            className={`text-center min-[290px]:text-4xl md:text-5xl text-[#f5f5fa] px-6 relative z-10 ${merriweather.className} mt-6`}
          >
            <span>Here</span> <span>will be</span> <span>your</span>{" "}
            <span>big</span> <span>and</span> <span>prosperous</span>{" "}
            <span>company</span> <span>among</span> <span>the</span>{" "}
            <span>big</span> <span>and</span> <span>flourishing</span>{" "}
            <span>companies</span>
          </h1>
          <span className="text-white loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          <ParallaxProvider>
            <HeroEnglish />
            <Border />
            <AboutEnglish />
            <WorkEnglish />
            <PartnersEnglish />
            <OfferEnglish />
            <UsesEnglish />
            <PaymentEnglish />
            <CallEnglish />
            <FooterEnglish />
          </ParallaxProvider>
          {/* flags */}
          <div className="fixed z-10 flex items-center justify-center gap-4 left-4 bottom-4">
            <Image
              src="/saudi.webp"
              alt="Saudi Arabia"
              aria-label="Saudi Arabia"
              width="40"
              height="30"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
            />
            <Image
              src="/egypt.webp"
              alt="Egypt"
              aria-label="Egypt"
              width="40"
              height="30"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
            />
          </div>
        </>
      )}
    </main>
  );
};

export default HomeEnglish;
