import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});

const NotFound = () => {
  return (
    <section
      className={`bg-[#11784b] relative z-10 flex items-center justify-center min-h-screen overflow-hidden ${merriweather.className}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 class="mb-3 text-[22px] font-semibold leading-tight text-white">
                Page not found
              </h4>
              <p class="mb-8 text-lg text-white">
                The page you are looking for may have been deleted
              </p>
              <Link
                href="/"
                aria-label="Home"
                className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-black"
              >
                Go To Home Page
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
