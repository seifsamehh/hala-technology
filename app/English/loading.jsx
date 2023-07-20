import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});

const loading = () => {
  return (
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
  );
};

export default loading;
