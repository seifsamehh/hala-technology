"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import Mobile from "./Mobile";
import "../styles/header.scss";

const Header = () => {
  // theme
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const headerRef = useRef(null);
  const sectionRefs = useMemo(
    () => [
      { sectionId: "heroo", label: "الرئيسية" },
      { sectionId: "about-us", label: "مين أحنا" },
      { sectionId: "work", label: "شغلاتنا اللي قبل كدا" },
      { sectionId: "partners", label: "الشركاء الرئيسيين" },
      { sectionId: "offers", label: "شنقدم لك" },
      { sectionId: "uses", label: "شلون تستخدم" },
      { sectionId: "payment", label: "وسائل الدفع" },
    ],
    []
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const observer = useMemo(() => {
    return new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
  }, []);

  useEffect(() => {
    sectionRefs.forEach(({ sectionId }) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.forEach(({ sectionId }) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [observer, sectionRefs]);

  const handleChangeCheckbox = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClickScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`flex items-center justify-between p-5 ${
        isScrolled ? "min-[290px]:bg-[#11784b]/80" : ""
      }`}
      id="header"
      ref={headerRef}
    >
      <div className="right">
        <Image
          src="/logo.webp"
          alt="logo"
          aria-label="logo"
          className="cursor-pointer"
          width="100"
          height="100"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
          onClick={() => handleClickScroll("heroo")}
        />
      </div>
      <div
        className={`middle border-4 border-solid border-[#f5f5fa] rounded-full p-4 min-[290px]:hidden md:block ${
          isScrolled ? "bg-[#f5f5fa] text-[#1f1f29]" : ""
        }`}
      >
        <nav className="flex items-center justify-center gap-5">
          {sectionRefs.map(({ sectionId, label }) => (
            <p
              key={sectionId}
              className={`text-xl cursor-pointer select-none text-center ${
                activeSection === sectionId
                  ? isScrolled
                    ? "text-white bg-[#fdd204] py-1 px-4 rounded-full"
                    : "text-white bg-[#fdd204] py-1 px-4 rounded-full"
                  : isScrolled
                  ? "text-[#1f1f29]"
                  : "text-[#f5f5fa]"
              }`}
              onClick={() => handleClickScroll(sectionId)}
            >
              {label}
            </p>
          ))}
        </nav>
      </div>
      <div className="mobile-middle min-[290px]:block md:hidden">
        <Mobile />
      </div>
      <div className="flex items-center left">
        <div className="flex items-center gap-4">
          <label className="swap swap-rotate" htmlFor="theme-switch">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              id="theme-switch"
              className="hidden"
              checked={theme === "dark"}
              onChange={handleChangeCheckbox}
            />

            {/* sun icon */}
            <svg
              className="w-10 h-10 fill-[#fdd204] swap-on"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="w-10 h-10 fill-[#fdd204] swap-off"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <span className="text-white min-[290px]:hidden md:block">|</span>
          <Link
            href="/English"
            className="text-2xl font-bold text-white min-[290px]:hidden md:flex justify-center items-center gap-2"
          >
            <Image
              src="/america.webp"
              alt="america"
              aria-label="america"
              width="40"
              height="30"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="w-100 h-100"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
