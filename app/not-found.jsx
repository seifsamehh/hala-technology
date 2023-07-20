import Link from "next/link";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({ subsets: ["latin"], display: "swap", weight: "800" });

const NotFound = () => {
  return (
    <section
      className={`bg-[#11784b] relative z-10 flex items-center justify-center min-h-screen overflow-hidden ${tajawal.className}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                لا يمكن العثور على هذه الصفحة
              </h4>
              <p className="mb-8 text-lg text-white">
                ربما تم حذف الصفحة التي تبحث عنها
              </p>
              <Link
                href="/"
                aria-label="Home"
                className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-black"
              >
                اذهب الى الصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        <div className="flex w-1/3 h-full">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
      </div>
    </section>
  );
};

export default NotFound;
