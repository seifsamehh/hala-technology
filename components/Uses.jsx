import Image from "next/image";
import { Kufam } from "next/font/google";
const kufam = Kufam({ subsets: ["latin"], display: "swap" });
import { Parallax } from "react-scroll-parallax";
import "../styles/uses.scss";

const Uses = () => {
  return (
    <>
      <section
        className="uses min-h-screen min-[290px]:px-6 md:px-12 py-12 overflow-hidden"
        id="uses"
      >
        <div className="flex items-center justify-start gap-4 mb-8 title">
          <Parallax speed={5}>
            <Image
              src="/useBtn.webp"
              alt="use btn"
              aria-label="use btn"
              width="50"
              height="40"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
          </Parallax>
          <Parallax speed={4}>
            <h2
              className={`min-[290px]:text-5xl md:text-6xl font-bold text-[#11784b] dark:text-[#fdd204] ${kufam.className}`}
            >
              شلون تستخدم
            </h2>
          </Parallax>
        </div>
        <div className="uses-content flex min-[290px]:justify-start md:justify-between items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-12 md:gap-0">
          <div className="flex gap-12 right">
            <Image
              src="/useBorder.webp"
              alt="use border"
              aria-label="use border"
              width="30"
              height="30"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
            <div className="flex flex-col departments gap-14">
              <Parallax opacity={[0.5, 2]}>
                <div className="box bg-[#fdd204] dark:bg-[#11784b] flex justify-start items-center min-[290px]:flex-wrap md:flex-nowrap p-2 rounded-lg">
                  <Image
                    src="/arrow.webp"
                    alt="arrow"
                    aria-label="arrow"
                    width="50"
                    height="50"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h3 className="min-[290px]:text-3xl md:text-5xl dark:text-white p-4">
                    المبيعات والتسويق
                  </h3>
                </div>
              </Parallax>
              <Parallax opacity={[0.5, 2]}>
                <div className="box bg-[#fdd204] dark:bg-[#11784b] flex justify-start items-center min-[290px]:flex-wrap md:flex-nowrap p-2 rounded-lg">
                  <Image
                    src="/cap.webp"
                    alt="cap"
                    aria-label="cap"
                    width="50"
                    height="50"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h3 className="min-[290px]:text-3xl md:text-5xl dark:text-white p-4">
                    التعليم والتدريب
                  </h3>
                </div>
              </Parallax>
              <Parallax opacity={[0.5, 2]}>
                <div className="box bg-[#fdd204] dark:bg-[#11784b] flex justify-start items-center min-[290px]:flex-wrap md:flex-nowrap p-2 rounded-lg">
                  <Image
                    src="/job.webp"
                    alt="job"
                    aria-label="job"
                    width="50"
                    height="50"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h3 className="min-[290px]:text-3xl md:text-5xl dark:text-white p-4">
                    الخدمات المهنية
                  </h3>
                </div>
              </Parallax>
              <Parallax opacity={[0.5, 2]}>
                <div className="box bg-[#fdd204] dark:bg-[#11784b] flex justify-start items-center min-[290px]:flex-wrap md:flex-nowrap p-2 rounded-lg">
                  <Image
                    src="/event.webp"
                    alt="event"
                    aria-label="event"
                    width="50"
                    height="50"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h3 className="min-[290px]:text-3xl md:text-5xl dark:text-white p-4">
                    الحدث والمؤتمر
                  </h3>
                </div>
              </Parallax>
              <Parallax opacity={[0.5, 2]}>
                <div className="box bg-[#fdd204] dark:bg-[#11784b] flex justify-start items-center min-[290px]:flex-wrap md:flex-nowrap p-2 rounded-lg">
                  <Image
                    src="/trade.webp"
                    alt="trade"
                    aria-label="trade"
                    width="50"
                    height="50"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h3 className="min-[290px]:text-3xl md:text-5xl dark:text-white p-4">
                    الأعمال التجارية
                  </h3>
                </div>
              </Parallax>
              <Parallax opacity={[0.5, 2]}>
                <div className="box bg-[#fdd204] dark:bg-[#11784b] flex justify-start items-center min-[290px]:flex-wrap md:flex-nowrap p-2 rounded-lg">
                  <Image
                    src="/star.svg"
                    alt="more"
                    aria-label="more"
                    width="50"
                    height="50"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h3 className="min-[290px]:text-3xl md:text-5xl dark:text-white p-4">
                    و المزيد
                  </h3>
                </div>
              </Parallax>
            </div>
          </div>
          <div className="left">
            <Parallax speed={8}>
              <Image
                src="/logo.webp"
                alt="logo"
                aria-label="logo"
                width="300"
                height="300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
              />
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
};

export default Uses;
