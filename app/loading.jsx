import Image from "next/image";
import { Kufam } from "next/font/google";

const kufam = Kufam({ subsets: ["latin"], display: "swap" });
const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 loading-page bg-[#11784b] overflow-hidden">
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
        className={`text-center min-[290px]:text-4xl md:text-7xl text-[#f5f5fa] px-6 ${kufam.className}`}
      >
        <span>هنا</span> <span>شركتك</span> <span>راح</span> <span>تكون</span>{" "}
        <span>من</span> <span>الشركات</span> <span>الكبيرة</span>{" "}
        <span>والمزدهرة</span>
      </h1>
      <span className="text-white loading loading-dots loading-lg"></span>
    </div>
  );
};

export default loading;
