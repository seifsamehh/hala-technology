import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});
import { Parallax } from "react-scroll-parallax";

const AboutEnglish = () => {
  return (
    <div
      className="about-us min-h-[50vh] min-[290px]:px-6 md:px-12 overflow-hidden"
      id="about-us"
    >
      <div className="flex items-center justify-between min-[290px]:flex-wrap md:flex-nowrap content">
        <div className="right">
          <div className="flex items-center justify-start gap-4 pt-8 title">
            <Parallax speed={5}>
              <Image
                src="/aboutBtn.webp"
                alt="about btn"
                aria-label="about btn"
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
                About Us
              </h2>
            </Parallax>
          </div>
          <Parallax opacity={[0.5, 1]}>
            <p className="max-w-4xl mt-8 font-bold leading-8 dark:text-white">
              &quot;Hala Technology&quot; is an initiative that aims to provide
              technology services in the Kingdom of Saudi Arabia through an
              alliance of the best companies and experiences in the field of
              technology from the Arab Republic of Egypt at unbeatable prices
              and with the highest quality in the global market. The initiative
              helps to strengthen the trade relations between Egypt and Saudi
              Arabia.
            </p>
          </Parallax>
        </div>
        <div className="left">
          <Parallax speed={6}>
            <Image
              src="/aboutCharacter.webp"
              alt="about character"
              aria-label="about character"
              width="200"
              height="200"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
              className="scale-x-[-1]"
            />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default AboutEnglish;
