import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});
import { Parallax } from "react-scroll-parallax";
import "../styles/work.scss";

const WorkEnglish = () => {
  return (
    <section
      className="work min-h-screen min-[290px]:px-6 md:px-12 py-12 overflow-hidden"
      id="work"
    >
      <div className="flex items-center justify-start gap-4 mb-8 title">
        <Parallax speed={5}>
          <Image
            src="/workBtn.webp"
            alt="work btn"
            aria-label="work btn"
            width="50"
            height="40"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
          />
        </Parallax>
        <Parallax speed={4}>
          <h2
            className={`min-[290px]:text-5xl md:text-6xl font-bold text-[#11784b] dark:text-[#fdd204] ${merriweather.className}`}
          >
            Previous Work
          </h2>
        </Parallax>
      </div>
      <Parallax speed={-5}>
        <div className="flex flex-wrap items-center justify-start gap-4 work-content">
          <div className="box flex justify-start items-start gap-4 flex-col p-4 rounded-lg bg-[#fdd204]">
            <Image
              src="/project1.webp"
              alt="project"
              aria-label="project"
              className="rounded-md"
              width="300"
              height="300"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
            <h3 className="text-3xl font-bold">Golden Hornet</h3>
            <a
              href="https://golden-hornet-software.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#11784b] text-white py-2 px-4 font-bold rounded-md"
            >
              Visit Website
            </a>
          </div>
          <div className="box flex justify-start items-start gap-4 flex-col p-4 rounded-lg bg-[#fdd204]">
            <Image
              src="/project2.webp"
              alt="project"
              aria-label="project"
              className="rounded-md"
              width="300"
              height="300"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
            <h3 className="text-3xl font-bold">Final Touch</h3>
            <a
              href="https://final-touch-design.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#11784b] text-white py-2 px-4 font-bold rounded-md"
            >
              Visit Website
            </a>
          </div>
          <div className="box flex justify-start items-start gap-4 flex-col p-4 rounded-lg bg-[#fdd204]">
            <Image
              src="/project3.webp"
              alt="project"
              aria-label="project"
              className="rounded-md"
              width="300"
              height="300"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
            <h3 className="text-3xl font-bold">IEEE Community</h3>
            <a
              href="https://ieee-community.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#11784b] text-white py-2 px-4 font-bold rounded-md"
            >
              Visit Website
            </a>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default WorkEnglish;
