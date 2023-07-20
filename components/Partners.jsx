import Image from "next/image";
import { Kufam } from "next/font/google";
const kufam = Kufam({ subsets: ["latin"], display: "swap" });
import { Parallax } from "react-scroll-parallax";
import "../styles/partners.scss";

const Partners = () => {
  return (
    <>
      <section
        className="partners min-h-[50vh] min-[290px]:px-6 md:px-12 py-12 overflow-hidden"
        id="partners"
      >
        <div className="flex items-center justify-start gap-4 title">
          <Parallax speed={5}>
            <Image
              src="/partnerBtn.webp"
              alt="partner btn"
              aria-label="partner btn"
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
              الشركاء الرئيسيين
            </h2>
          </Parallax>
        </div>
        <div className="partners-content min-h-[50vh] flex justify-center items-center gap-8">
          <Parallax speed={-5}>
            <a
              href="https://www.facebook.com/diragencies"
              target="_blank"
              rel="noreferrer"
              aria-label="social media account"
            >
              <Image
                src="/dir.webp"
                alt="dir"
                aria-label="dir"
                className="rounded-[50%] border-4 border-solid border-[#fdd204]"
                width="200"
                height="200"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
              />
            </a>
          </Parallax>
          <Parallax speed={-6}>
            <a
              href="https://www.facebook.com/pathfindereeg"
              target="_blank"
              rel="noreferrer"
              aria-label="social media account"
            >
              <Image
                src="/pathfinder.webp"
                alt="pathfinder"
                aria-label="dir"
                className="rounded-[50%]  border-4 border-solid border-[#fdd204]"
                width="200"
                height="200"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
              />
            </a>
          </Parallax>
        </div>
      </section>
    </>
  );
};

export default Partners;
