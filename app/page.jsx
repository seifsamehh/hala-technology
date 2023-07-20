"use client";
import { Kufam, Tajawal } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"));
const Border = dynamic(() => import("@/components/Border"));
const About = dynamic(() => import("@/components/About"));
const Work = dynamic(() => import("@/components/Work"));
const Partners = dynamic(() => import("@/components/Partners"));
const Offer = dynamic(() => import("@/components/Offer"));
const Uses = dynamic(() => import("@/components/Uses"));
const Payment = dynamic(() => import("@/components/Payment"));
const Call = dynamic(() => import("@/components/Call"));
const Footer = dynamic(() => import("@/components/Footer"));

const tajawal = Tajawal({ subsets: ["latin"], display: "swap", weight: "400" });
const kufam = Kufam({ subsets: ["latin"], display: "swap" });
import "../styles/main.scss";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main
      className={`min-h-screen arabic-version ${tajawal.className} bg-[#f5f5fa] dark:bg-[#1f1f29] text-[#1f1f29] dark:text-[#f5f5fa]`}
      style={{ direction: "rtl" }}
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
            className="relative z-10 w-100 h-100"
            priority={true}
          />
          <h1
            className={`text-center min-[290px]:text-4xl md:text-5xl text-[#f5f5fa] px-6 relative z-10 ${kufam.className} mt-6`}
          >
            <span>هنا</span> <span>شركتك</span> <span>راح</span>{" "}
            <span>تكون</span> <span>من</span> <span>الشركات</span>{" "}
            <span>الكبيرة</span> <span>والمزدهرة</span>
          </h1>
          <span className="text-white loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          <ParallaxProvider>
            <Hero />
            <Border />
            <About />
            <Work />
            <Partners />
            <Offer />
            <Uses />
            <Payment />
            <Call />
            <Footer />
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

export default Home;
